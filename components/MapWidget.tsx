import React from 'react';

const MapWidget: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-[#080808]">
      {/* Background Grid Pattern for Tech Feel */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Map Content Layer */}
      <div className="absolute inset-0 p-4">
        <svg className="h-full w-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            {/* Abstract Roads (Gray) */}
            <path 
                d="M-50,300 C100,300 150,250 200,200 C250,150 300,100 400,100 C500,100 600,150 700,150 C750,150 850,120 900,120" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="20" 
                strokeLinecap="round"
            />
            <path 
                d="M300,450 C300,350 350,250 400,100" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="15" 
            />
            <path 
                d="M600,0 C600,100 650,150 700,150" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="15" 
            />

            {/* Active Route (Neon Green with Glow) */}
            <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <path 
                d="M-50,300 C100,300 150,250 200,200 C250,150 300,100 400,100 C500,100 600,150 700,150" 
                fill="none" 
                stroke="#00FF00" 
                strokeWidth="4" 
                strokeDasharray="10 5"
                filter="url(#neon-glow)"
                className="animate-dash"
            />

            {/* Checkpoints */}
            <circle cx="200" cy="200" r="6" fill="#050505" stroke="#00FF00" strokeWidth="2" />
            <text x="200" y="225" fill="#666" fontSize="10" textAnchor="middle" fontFamily="Inter">Chicago Hub</text>

            <circle cx="400" cy="100" r="6" fill="#050505" stroke="#00FF00" strokeWidth="2" />
            <text x="400" y="80" fill="#666" fontSize="10" textAnchor="middle" fontFamily="Inter">Toledo Station</text>
            
            {/* Current Truck Position (Animated Pulse) */}
            <g transform="translate(600, 150)">
                 <circle r="15" fill="rgba(0, 255, 0, 0.2)" className="animate-ping" />
                 <circle r="8" fill="#00FF00" stroke="white" strokeWidth="2" />
                 
                 {/* Tooltip simulating map UI */}
                 <foreignObject x="15" y="-50" width="160" height="80">
                    <div className="rounded-lg border border-dark-border bg-black/90 p-2 text-xs shadow-xl backdrop-blur-md">
                        <div className="flex justify-between font-bold text-white">
                            <span>Truck #492</span>
                            <span className="text-neon">On Time</span>
                        </div>
                        <div className="mt-1 text-[10px] text-neutral-400">
                            Speed: 55 mph<br/>
                            Next: Detroit Terminal
                        </div>
                    </div>
                 </foreignObject>
            </g>
        </svg>
      </div>

      {/* Map Overlay Controls */}
      <div className="absolute left-6 top-6 flex gap-2">
          <button className="rounded-full bg-neon px-4 py-1 text-xs font-bold text-black hover:bg-white transition-colors shadow-neon-sm">Tracking</button>
          <button className="rounded-full border border-dark-border bg-dark-card/50 px-4 py-1 text-xs text-white hover:bg-dark-card backdrop-blur-md">Traffic Jams</button>
          <button className="rounded-full border border-dark-border bg-dark-card/50 px-4 py-1 text-xs text-white hover:bg-dark-card backdrop-blur-md">POI</button>
      </div>
    </div>
  );
};

export default MapWidget;