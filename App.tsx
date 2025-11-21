import React, { useState } from 'react';
import { LayoutDashboard, Truck, History, Settings, Bell, Menu, X, Search, ChevronDown, User } from 'lucide-react';
import Dashboard from './components/Dashboard';
import { ShipmentView, HistoryView, NotificationsView, SettingsView } from './components/Views';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = () => {
      switch(activeTab) {
          case 'dashboard': return <Dashboard />;
          case 'shipment': return <ShipmentView />;
          case 'history': return <HistoryView />;
          case 'notifications': return <NotificationsView />;
          case 'settings': return <SettingsView />;
          default: return <Dashboard />;
      }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-dark-bg text-white selection:bg-neon selection:text-black">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-dark-border bg-dark-card transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-center border-b border-dark-border">
          <h1 className="text-2xl font-bold tracking-tighter">
            LOG<span className="text-neon neon-text-shadow">TECH</span>
          </h1>
        </div>

        <nav className="mt-8 space-y-2 px-4">
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <NavItem 
            icon={<Truck size={20} />} 
            label="Shipment" 
            active={activeTab === 'shipment'}
            onClick={() => setActiveTab('shipment')}
          />
          <NavItem 
            icon={<History size={20} />} 
            label="History" 
            active={activeTab === 'history'}
            onClick={() => setActiveTab('history')}
          />
          <NavItem 
            icon={<Bell size={20} />} 
            label="Notifications" 
            badge={3}
            active={activeTab === 'notifications'}
            onClick={() => setActiveTab('notifications')}
          />
          <div className="pt-8">
            <p className="mb-4 px-4 text-xs font-semibold uppercase tracking-wider text-dark-text">System</p>
            <NavItem 
                icon={<Settings size={20} />} 
                label="Settings" 
                active={activeTab === 'settings'}
                onClick={() => setActiveTab('settings')}
            />
          </div>
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
            <div className="flex items-center gap-3 rounded-xl border border-dark-border bg-neutral-900/50 p-3 hover:border-neon/30 transition-colors cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-neon">
                    <User size={18} />
                </div>
                <div>
                    <p className="text-sm font-medium">Alex Chen</p>
                    <p className="text-xs text-neutral-500">Logistics Mgr</p>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-20 w-full items-center justify-between border-b border-dark-border bg-dark-bg/80 px-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar} 
              className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 lg:hidden"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="hidden md:block">
              <h2 className="text-xl font-medium text-white">Shipment Track</h2>
            </div>

            <div className="relative ml-4 hidden md:block">
               <button className="flex items-center gap-2 rounded-full border border-dark-border bg-dark-card px-4 py-2 text-sm text-neutral-300 hover:border-neon/50 transition-colors">
                 <span>TRUCK-492 (Load Swift NYC)</span>
                 <ChevronDown size={14} className="text-neon" />
               </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input 
                type="text" 
                placeholder="Search shipment ID..." 
                className="h-10 w-64 rounded-full border border-dark-border bg-dark-card pl-10 pr-4 text-sm text-white focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
              />
            </div>
            
            <button 
                className="relative text-neutral-400 hover:text-white transition-colors"
                onClick={() => setActiveTab('notifications')}
             >
                <Bell size={20} />
                <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-neon text-[8px] font-bold text-black">3</span>
             </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, badge, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
        active 
          ? 'bg-neon/10 text-neon shadow-[inset_3px_0_0_0_#00FF00]' 
          : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`${active ? 'text-neon drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]' : ''}`}>
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neon text-[10px] font-bold text-black">
          {badge}
        </span>
      )}
    </button>
  );
};

export default App;