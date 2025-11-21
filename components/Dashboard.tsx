import React from 'react';
import MapWidget from './MapWidget';
import ShipmentDetails from './ShipmentDetails';
import RouteEfficiency from './RouteEfficiency';
import TruckCapacity from './TruckCapacity';
import ChatWidget from './ChatWidget';
import ShipmentTrends from './ShipmentTrends';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {/* Top Row: Map (Takes up majority) + KPI Overlay is handled inside MapWidget usually, 
          but for grid structure, we span the map across top columns or use a specific layout.
          Let's do a layout where Map is large on the left/center.
      */}
      
      {/* Main Map Area - Spans full width on mobile, 3 cols on large screens */}
      <div className="col-span-1 h-[500px] overflow-hidden rounded-3xl border border-dark-border bg-dark-card shadow-2xl lg:col-span-3 lg:h-[450px]">
        <MapWidget />
      </div>

      {/* Right Column Top - Quick Stats & Truck Status */}
      <div className="col-span-1 space-y-6 lg:col-span-1 lg:h-[450px]">
         {/* Distance Card */}
         <div className="rounded-3xl border border-dark-border bg-dark-card p-6 shadow-lg">
             <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">Distance to Arrival</div>
             <div className="flex items-baseline gap-2">
                 <span className="text-3xl font-bold text-white">75<span className="text-sm font-normal text-neutral-500">MI</span></span>
                 <span className="text-sm text-neon">/ 1h 50m</span>
             </div>
             <div className="mt-4 h-1 w-full rounded-full bg-neutral-800">
                 <div className="h-full w-[85%] rounded-full bg-neon shadow-[0_0_10px_#00FF00]"></div>
             </div>
         </div>

         {/* Optimization Card */}
         <div className="rounded-3xl border border-dark-border bg-dark-card p-6 shadow-lg">
            <div className="flex items-center justify-between">
                <div className="text-xs font-medium uppercase tracking-widest text-neutral-500">Route Opt.</div>
                <div className="rounded-full bg-neon/10 px-2 py-1 text-xs font-bold text-neon">+12%</div>
            </div>
            <div className="mt-2 text-4xl font-bold text-neon drop-shadow-[0_0_8px_rgba(0,255,0,0.4)]">
                85%
            </div>
            <p className="mt-1 text-xs text-neutral-400">Traffic low on I-95N</p>
         </div>

         {/* Alert Mini Card */}
         <div className="rounded-3xl border border-red-500/20 bg-red-900/10 p-5">
             <div className="flex items-center gap-3">
                 <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
                 <h4 className="font-semibold text-white">Geofencing Alert</h4>
             </div>
             <p className="mt-2 text-xs text-neutral-400">Truck crossed zone B-4 perimeter at 13:48.</p>
         </div>
      </div>

      {/* Middle Row */}
      
      {/* Shipment Details */}
      <div className="col-span-1 lg:col-span-2">
        <ShipmentDetails />
      </div>

      {/* Truck Capacity */}
      <div className="col-span-1 lg:col-span-2">
        <TruckCapacity />
      </div>

      {/* Bottom Row */}

      {/* Trends */}
      <div className="col-span-1 lg:col-span-2">
         <ShipmentTrends />
      </div>

      {/* Efficiency */}
      <div className="col-span-1">
          <RouteEfficiency />
      </div>

      {/* Chat Widget */}
      <div className="col-span-1">
          <ChatWidget />
      </div>

    </div>
  );
};

export default Dashboard;