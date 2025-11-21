import React from 'react';
import { Package, MapPin, Calendar, DollarSign, MoreHorizontal, Star } from 'lucide-react';

const ShipmentDetails: React.FC = () => {
  return (
    <div className="h-full rounded-3xl border border-dark-border bg-dark-card p-6 shadow-lg">
      <div className="mb-6 flex items-start justify-between">
        <div>
            <h3 className="text-lg font-medium text-white">Shipment Details</h3>
            <div className="mt-2 flex items-center gap-3">
                <img src="https://picsum.photos/40/40" alt="Driver" className="h-10 w-10 rounded-full border border-dark-border" />
                <div>
                    <p className="text-sm font-semibold text-white">Michael Johnson</p>
                    <p className="text-[10px] text-neutral-500">ID: 1241AA4121BB</p>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-neutral-800 px-2 py-1">
                <span className="text-xs font-bold text-white">4.9</span>
                <Star size={10} className="fill-neon text-neon" />
            </div>
            <button className="text-neutral-500 hover:text-white">
                <MoreHorizontal size={20} />
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
         {/* Row 1 */}
         <div className="space-y-1">
             <div className="text-xs text-neutral-500">Cargo Type</div>
             <div className="font-medium text-white">Electronics & Parts</div>
             <div className="text-[10px] text-red-400">Handle with care</div>
         </div>

         <div className="space-y-1">
             <div className="text-xs text-neutral-500">Route Progress</div>
             <div className="relative pt-2">
                 <div className="flex justify-between text-[10px] font-medium text-white mb-1">
                    <span>Chicago</span>
                    <span>Detroit</span>
                 </div>
                 <div className="h-1.5 w-full rounded-full bg-neutral-800">
                     <div className="h-full w-2/3 rounded-full bg-neon shadow-neon-sm relative">
                        <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-black bg-white"></div>
                     </div>
                 </div>
             </div>
         </div>

         {/* Row 2 */}
         <div>
             <div className="text-xs text-neutral-500">Value</div>
             <div className="text-2xl font-light text-neon">$ 520,450</div>
         </div>

         <div className="grid grid-cols-2 gap-4">
             <div>
                <div className="text-xs text-neutral-500">Arrival Date</div>
                <div className="text-lg font-medium text-white">28.10.23</div>
             </div>
             <div>
                <div className="text-xs text-neutral-500">Status</div>
                <span className="inline-block rounded-md bg-neon/10 px-2 py-1 text-xs font-bold text-neon border border-neon/20">
                    In Transit
                </span>
             </div>
         </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;