import React from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, CheckCheck, Smile } from 'lucide-react';

const Chat = () => {
    return (
        /* h-screen minus Topbar height (80px) */
        <div className="flex w-full overflow-hidden animate-fade-in">

            {/* LEFT: ADMINS LIST (Edge-to-Edge) */}
            <div className="w-[350px] border-r border-slate-100 flex flex-col shrink-0 bg-white">
                <div className="p-5 border-b border-slate-50 bg-slate-50/30">
                    <h2 className="text-xs font-bold text-acadex-navy uppercase tracking-[2px] mb-4">Admins & Institutes</h2>
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-acadex-navy transition-colors" size={14} />
                        <input
                            type="text"
                            placeholder="Filter by name..."
                            className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-[11px] font-semibold outline-none focus:border-acadex-navy transition-all"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className={`flex items-center gap-4 px-5 py-4 cursor-pointer transition-all border-b border-slate-50 ${i === 1 ? 'bg-slate-100/50 border-r-2 border-r-acadex-navy' : 'hover:bg-slate-50'}`}>
                            <div className="relative flex-shrink-0">
                                <img src={`https://ui-avatars.com/api/?name=Admin+${i}&background=002147&color=fff&bold=true`} className="w-11 h-11 rounded-full" alt="avatar" />
                                {i % 2 === 0 && <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-0.5">
                                    <h4 className="text-[11px] font-bold text-acadex-navy uppercase truncate">Oxford Academy #{i}</h4>
                                    <span className="text-[8px] font-bold text-slate-300 uppercase">10:45 AM</span>
                                </div>
                                <p className="text-[10px] font-medium text-slate-400 truncate tracking-tight">How can I update my billing...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT: CHAT WINDOW (Edge-to-Edge) */}
            <div className="flex-1 flex flex-col bg-white">

                {/* Chat Header */}
                <div className="h-20 px-8 border-b border-slate-100 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <img src="https://ui-avatars.com/api/?name=Admin+1&background=002147&color=fff&bold=true" className="w-10 h-10 rounded-full" alt="active" />
                        <div>
                            <h4 className="text-[11px] font-bold text-acadex-navy uppercase tracking-widest">Oxford Academy #1 (Admin)</h4>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Available Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-slate-300">
                        <Phone size={18} className="cursor-pointer hover:text-acadex-navy transition-all" />
                        <Video size={18} className="cursor-pointer hover:text-acadex-navy transition-all" />
                        <div className="w-px h-6 bg-slate-100"></div>
                        <MoreVertical size={18} className="cursor-pointer hover:text-acadex-navy transition-all" />
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-10 space-y-6 no-scrollbar bg-[#fdfdfd]">
                    <Message type="received" text="Hi, we need to add 5 more instructors. Does our plan support this?" time="10:42 AM" />
                    <Message type="sent" text="Checking your current subscription limits. One moment please." time="10:45 AM" isRead />
                    <Message type="received" text="Thanks. Our institute code is OXF-442." time="10:46 AM" />
                    <Message type="sent" text="Yes, you have 2 slots remaining on the Enterprise plan. I've enabled the additional slots for you." time="10:48 AM" isRead />
                </div>

                {/* Message Input Box */}
                <div className="px-8 py-5 border-t border-slate-100 bg-white">
                    <div className="flex items-center gap-4 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200 focus-within:border-acadex-navy transition-all">
                        <button className="text-slate-400 hover:text-acadex-navy"><Smile size={20} /></button>
                        <button className="text-slate-400 hover:text-acadex-navy mr-2"><Paperclip size={20} /></button>
                        <input
                            type="text"
                            placeholder="Type a message to the administrator..."
                            className="flex-1 bg-transparent outline-none text-[13px] font-medium text-acadex-navy"
                        />
                        <button className="bg-acadex-navy text-white px-5 py-2.5 rounded-xl hover:bg-acadex-blue shadow-lg shadow-acadex-navy/10 transition-all text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            Send <Send size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Message = ({ type, text, time, isRead }) => (
    <div className={`flex ${type === 'sent' ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[70%] px-5 py-4 rounded-3xl ${type === 'sent'
                ? 'bg-acadex-navy text-white rounded-br-none'
                : 'bg-slate-100 text-acadex-navy rounded-bl-none'
            }`}>
            <p className="text-[12px] font-medium leading-relaxed">{text}</p>
            <div className={`flex items-center justify-end gap-1 mt-2 ${type === 'sent' ? 'text-white/40' : 'text-slate-400'}`}>
                <span className="text-[8px] font-bold uppercase tracking-widest">{time}</span>
                {type === 'sent' && <CheckCheck size={12} className={isRead ? "text-acadex-accent" : ""} />}
            </div>
        </div>
    </div>
);

export default Chat;