import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';
import { Download } from 'lucide-react';

const data = [
  { name: '28.10', val: 30 },
  { name: '29.10', val: 45 },
  { name: '30.10', val: 25 },
  { name: '31.10', val: 60 },
  { name: '01.11', val: 80 },
  { name: '02.11', val: 40 },
  { name: '03.11', val: 55 },
];

const ShipmentTrends: React.FC = () => {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-dark-border bg-dark-card p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium text-white">Shipment Trends</h3>
            <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-500">5 shipments</span>
        </div>
        <button className="text-neutral-500 hover:text-white">
            <Download size={16} />
        </button>
      </div>

      <div className="h-full min-h-[150px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={6}>
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#555', fontSize: 10 }} 
                dy={10}
            />
            <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#00FF00' }}
            />
            <Bar dataKey="val" radius={[4, 4, 4, 4]}>
              {data.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={entry.val > 70 ? '#00FF00' : '#333333'} 
                    className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ShipmentTrends;