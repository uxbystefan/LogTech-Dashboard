import React from 'react';
import { Send, Smile } from 'lucide-react';

const ChatWidget: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-dark-border bg-dark-card p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-medium text-white">Chat</h3>
        <div className="h-2 w-2 rounded-full bg-neon shadow-[0_0_5px_#00FF00]"></div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
         {/* Message 1 */}
         <div className="flex gap-3">
             <img src="https://picsum.photos/32/32" className="h-8 w-8 rounded-full border border-dark-border" alt="Ivan"/>
             <div>
                 <p className="text-[10px] text-neutral-500 mb-1">Ivan</p>
                 <div className="rounded-2xl rounded-tl-none bg-neutral-800 px-3 py-2 text-xs text-white">
                     Hi!
                 </div>
             </div>
         </div>

         {/* Message 2 (Me) */}
         <div className="flex flex-row-reverse gap-3">
             <img src="https://picsum.photos/33/33" className="h-8 w-8 rounded-full border border-dark-border" alt="Me"/>
             <div className="flex flex-col items-end">
                 <p className="text-[10px] text-neutral-500 mb-1">Alex</p>
                 <div className="rounded-2xl rounded-tr-none bg-red-500 px-3 py-2 text-xs text-white shadow-md">
                     Hi! What is your question?
                 </div>
             </div>
         </div>
      </div>

      <div className="mt-4 relative">
          <input 
            type="text" 
            placeholder="Message" 
            className="w-full rounded-full border border-dark-border bg-neutral-900 px-4 py-2 pr-10 text-xs text-white focus:border-neon focus:outline-none"
          />
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2 text-neutral-400">
             <Smile size={14} className="hover:text-neon cursor-pointer" />
             <Send size={14} className="hover:text-neon cursor-pointer" />
          </div>
      </div>
    </div>
  );
};

export default ChatWidget;