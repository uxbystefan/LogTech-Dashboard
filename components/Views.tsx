import React from 'react';
import { Truck, MapPin, Clock, AlertTriangle, CheckCircle, Bell, Shield, Eye, Globe, Smartphone, Moon } from 'lucide-react';

const ViewContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
    <div className="rounded-3xl border border-dark-border bg-dark-card p-6 shadow-lg min-h-[600px]">
      {children}
    </div>
  </div>
);

export const ShipmentView: React.FC = () => {
  const shipments = [
    { id: 'TRK-492', driver: 'Michael J.', origin: 'Chicago', dest: 'Detroit', status: 'In Transit', eta: '2h 30m', progress: 65 },
    { id: 'TRK-881', driver: 'Sarah C.', origin: 'Seattle', dest: 'Los Angeles', status: 'Loading', eta: '1d 4h', progress: 10 },
    { id: 'TRK-102', driver: 'David B.', origin: 'Miami', dest: 'Jacksonville', status: 'In Transit', eta: '5h 15m', progress: 45 },
    { id: 'TRK-554', driver: 'Alex T.', origin: 'Denver', dest: 'Salt Lake City', status: 'Delayed', eta: '8h 00m', progress: 30 },
  ];

  return (
    <ViewContainer title="Active Shipments">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-neutral-400">
          <thead className="text-xs uppercase text-neutral-500 border-b border-dark-border">
            <tr>
              <th className="pb-4 font-medium tracking-wider">Shipment ID</th>
              <th className="pb-4 font-medium tracking-wider">Driver</th>
              <th className="pb-4 font-medium tracking-wider">Route</th>
              <th className="pb-4 font-medium tracking-wider">Status</th>
              <th className="pb-4 font-medium tracking-wider text-right">ETA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-border">
            {shipments.map((s) => (
              <tr key={s.id} className="group hover:bg-white/5 transition-colors">
                <td className="py-4 text-white font-mono">{s.id}</td>
                <td className="py-4 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white border border-neutral-700">
                        {s.driver.charAt(0)}
                    </div>
                    {s.driver}
                </td>
                <td className="py-4">
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-white">{s.origin}</span>
                        <span className="text-neutral-600">→</span>
                        <span className="text-white">{s.dest}</span>
                    </div>
                </td>
                <td className="py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold border ${
                        s.status === 'In Transit' ? 'bg-neon/10 text-neon border-neon/20' :
                        s.status === 'Loading' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                        'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                        {s.status === 'In Transit' && <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-neon animate-pulse"></span>}
                        {s.status}
                    </span>
                </td>
                <td className="py-4 text-right font-mono text-white">{s.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ViewContainer>
  );
};

export const HistoryView: React.FC = () => {
  const history = [
    { id: 'LOG-9921', date: 'Oct 24, 2023', route: 'San Francisco - Los Angeles', items: 450, total: '$12,400', status: 'Delivered' },
    { id: 'LOG-9920', date: 'Oct 22, 2023', route: 'New York - Boston', items: 120, total: '$4,200', status: 'Delivered' },
    { id: 'LOG-9919', date: 'Oct 20, 2023', route: 'Dallas - Houston', items: 3200, total: '$45,900', status: 'Canceled' },
  ];

  return (
    <ViewContainer title="Shipment History">
         <div className="space-y-4">
            {history.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-dark-border bg-neutral-900/30 p-4 hover:border-neon/30 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                            <CheckCircle size={18} className={item.status === 'Delivered' ? 'text-neon' : 'text-red-500'} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">{item.route}</p>
                            <p className="text-xs text-neutral-500">{item.date} • {item.id}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-mono text-white">{item.total}</p>
                        <p className="text-xs text-neutral-500">{item.items} items</p>
                    </div>
                </div>
            ))}
         </div>
    </ViewContainer>
  );
};

export const NotificationsView: React.FC = () => {
  return (
    <ViewContainer title="System Notifications">
        <div className="space-y-2">
            <div className="flex gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <AlertTriangle className="text-red-500 mt-1" size={20} />
                <div>
                    <h4 className="text-sm font-bold text-white">Geofence Breach Detected</h4>
                    <p className="text-xs text-neutral-400 mt-1">Truck #492 exited the designated safety zone in Sector 4.</p>
                    <p className="text-[10px] text-neutral-500 mt-2">Today, 14:30 PM</p>
                </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-neutral-900/50 border border-dark-border">
                <Truck className="text-neon mt-1" size={20} />
                <div>
                    <h4 className="text-sm font-bold text-white">Shipment Arrived</h4>
                    <p className="text-xs text-neutral-400 mt-1">Order #LOG-9921 has been successfully delivered to Atlanta Warehouse.</p>
                    <p className="text-[10px] text-neutral-500 mt-2">Yesterday, 09:15 AM</p>
                </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-neutral-900/50 border border-dark-border">
                <Bell className="text-blue-400 mt-1" size={20} />
                <div>
                    <h4 className="text-sm font-bold text-white">System Maintenance</h4>
                    <p className="text-xs text-neutral-400 mt-1">Scheduled maintenance for tracking satellites on Nov 1st.</p>
                    <p className="text-[10px] text-neutral-500 mt-2">Oct 25, 10:00 AM</p>
                </div>
            </div>
        </div>
    </ViewContainer>
  );
};

export const SettingsView: React.FC = () => {
    const Toggle = ({ label, active }: { label: string, active?: boolean }) => (
        <div className="flex items-center justify-between py-3 border-b border-dark-border last:border-0">
            <span className="text-sm text-neutral-300">{label}</span>
            <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${active ? 'bg-neon' : 'bg-neutral-700'}`}>
                <div className={`absolute top-1 left-1 h-3 w-3 rounded-full bg-white shadow-md transition-transform ${active ? 'translate-x-5' : ''}`}></div>
            </div>
        </div>
    );

  return (
    <ViewContainer title="Settings">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Appearance & System</h3>
                <div className="space-y-1">
                     <Toggle label="Dark Mode" active={true} />
                     <Toggle label="High Contrast Maps" active={false} />
                     <Toggle label="Reduced Motion" active={false} />
                     <Toggle label="Developer Mode" active={true} />
                </div>
            </div>
            <div>
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Notifications</h3>
                <div className="space-y-1">
                     <Toggle label="Push Notifications" active={true} />
                     <Toggle label="Email Alerts" active={true} />
                     <Toggle label="SMS Updates" active={false} />
                </div>
            </div>
        </div>
        <div className="mt-8 pt-6 border-t border-dark-border">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Account</h3>
            <div className="flex items-center gap-4 mb-4">
                 <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center text-neon">
                     <span className="font-bold text-lg">AC</span>
                 </div>
                 <div>
                     <p className="text-white font-medium">Alex Chen</p>
                     <p className="text-xs text-neutral-500">alex.chen@logtech.inc</p>
                 </div>
                 <button className="ml-auto text-xs bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-lg border border-dark-border transition-colors">
                     Edit Profile
                 </button>
            </div>
        </div>
    </ViewContainer>
  );
};