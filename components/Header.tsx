import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-dark-card px-6 py-4">
      {/* Search Bar */}
      <div className="flex items-center rounded-lg bg-dark-bg px-3 py-2 w-96 border border-dark-border">
        <Search className="mr-2 text-neutral-500" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none w-full"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="text-neutral-400 hover:text-white cursor-pointer" size={20} />
          <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-neon text-[8px] font-bold text-black">
            3
          </span>
        </div>
        
        <div className="h-8 w-[1px] bg-dark-border mx-2"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://picsum.photos/40/40"
            alt="User"
            className="h-8 w-8 rounded-full border border-dark-border"
          />
          <div className="hidden md:block">
            <p className="text-xs font-medium text-white">Alex Chen</p>
            <p className="text-[10px] text-neutral-500">Logistics Manager</p>
          </div>
          <ChevronDown className="text-neutral-500" size={14} />
        </div>
      </div>
    </header>
  );
};

export default Header;