import React from 'react';
import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import { Download } from 'lucide-react';

const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 55 },
  { name: 'C', value: 45 },
  { name: 'D', value: 80 },
  { name: 'E', value: 65 },
  { name: 'F', value: 90 },
  { name: 'G', value: 75 },
];

const RouteEfficiency: React.FC = () => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-dark-border bg-gradient-to-br from-[#ff4d4d] to-[#e60000] p-6 text-white shadow-lg transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]">
        {/* Note: In the prompt image this card is RED. I will follow the image for this specific card to add contrast, but keep the data elements sleek. */}
        
        <div className="mb-4 flex items-start justify-between">
            <h3 className="text-sm font-medium opacity-90">Route Efficiency</h3>
            <button className="rounded-full bg-white/20 p-1.5 backdrop-blur-sm transition-colors hover:bg-white/30">
                <Download size={14} />
            </button>
        </div>

        <div className="flex flex-1 items-end gap-4">
            <div>
                <div className="text-6xl font-bold leading-none tracking-tighter">
                    96
                    <span className="text-2xl font-normal opacity-70">%</span>
                </div>
                <p className="mt-2 text-[10px] opacity-80">Send optimal route to driver</p>
            </div>
            
            <div className="h-16 w-full flex-1">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.5}/>
                                <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={false} content={<></>} />
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#ffffff" 
                            strokeWidth={2} 
                            fill="url(#colorValue)" 
                        />
                    </AreaChart>
                 </ResponsiveContainer>
            </div>
        </div>
        
        {/* Decorative dots background */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10" 
             style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '8px 8px'}}>
        </div>
    </div>
  );
};

export default RouteEfficiency;