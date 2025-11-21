import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TruckCapacity: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-dark-border bg-dark-card p-6 shadow-lg">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Current Truck Capacity</h3>
            <button className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white">
                Read more <ArrowUpRight size={12}/>
            </button>
        </div>

        <div className="relative mt-6 flex flex-1 items-center justify-center py-4">
            {/* Visual Truck Representation */}
            <div className="relative flex w-full max-w-md items-end">
                {/* Cab */}
                <div className="relative z-10 h-24 w-20 rounded-l-md border-2 border-neutral-700 bg-neutral-900">
                    <div className="absolute left-2 top-2 h-10 w-12 rounded-sm bg-neutral-800" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}></div>
                    <div className="absolute bottom-[-10px] left-2 h-10 w-10 rounded-full border-4 border-neutral-800 bg-neutral-900"></div>
                </div>
                
                {/* Connector */}
                <div className="relative z-0 -ml-1 h-4 w-6 bg-neutral-700"></div>

                {/* Trailer (Container) */}
                <div className="relative -ml-1 h-32 flex-1 rounded-r-md border-2 border-neutral-700 bg-neutral-900 overflow-hidden">
                    {/* Background Grid inside Trailer */}
                    <div className="absolute inset-0 opacity-20" 
                        style={{backgroundImage: 'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px'}}>
                    </div>
                    
                    {/* The Fill - Neon Green striped pattern */}
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center bg-neon/80 transition-all duration-1000" style={{ width: '86%' }}>
                        <div className="absolute inset-0" 
                             style={{backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 10px, transparent 10px, transparent 20px)'}}>
                        </div>
                        <span className="relative z-10 text-4xl font-black italic tracking-tighter text-black drop-shadow-md">
                            86%
                        </span>
                    </div>
                </div>

                {/* Trailer Wheels */}
                <div className="absolute bottom-[-10px] right-16 h-10 w-10 rounded-full border-4 border-neutral-800 bg-neutral-900 z-10"></div>
                <div className="absolute bottom-[-10px] right-4 h-10 w-10 rounded-full border-4 border-neutral-800 bg-neutral-900 z-10"></div>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-dark-border pt-4">
            <div>
                <p className="text-xs text-neutral-500 uppercase">Vehicle ID</p>
                <p className="font-mono text-sm text-white">AL-223965406</p>
            </div>
            <div>
                 <p className="text-xs text-neutral-500 uppercase">Max Load</p>
                 <p className="font-mono text-sm text-white">18,635 LBS</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-neon animate-pulse"></div>
                <span className="text-sm text-neon font-medium">On-Route</span>
            </div>
        </div>
    </div>
  );
};

export default TruckCapacity;