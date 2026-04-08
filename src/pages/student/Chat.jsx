import React, { useState, useMemo } from 'react';
import {
    Send, Search, Paperclip, Smile, MoreVertical,
    User, BookOpen, Clock, CheckCheck, Phone,
    Video, X, Info, MessageSquare, GraduationCap,
    CheckCircle2, Globe, Sparkles, Image as ImageIcon
} from 'lucide-react';

const StudentChat = () => {
    // 1. DATA STATE: Course Instructors (Enrolled Courses only)
    const [tutors, setTutors] = useState([
        { id: 1, name: "Dr. Sohail Khan", course: "Advanced React", status: "Online", lastMsg: "Please review the hooks documentation.", time: "10:30 AM", unread: 0, officeHours: "02:00 PM - 05:00 PM", exp: "8+ Years" },
        { id: 2, name: "Prof. Amna", course: "UI/UX Masterclass", status: "Offline", lastMsg: "Your prototype looks great!", time: "Yesterday", unread: 2, officeHours: "10:00 AM - 01:00 PM", exp: "5+ Years" },
        { id: 3, name: "Zaid Ahmed", course: "Backend Architecture", status: "Online", lastMsg: "Did you setup the MongoDB URI?", time: "09:15 AM", unread: 0, officeHours: "04:00 PM - 07:00 PM", exp: "6+ Years" },
    ]);

    const [activeChat, setActiveChat] = useState(tutors[0]);
    const [messages, setMessages] = useState([
        { id: 1, sender: "receiver", text: "Hello Zeeshan, do you have any questions regarding yesterday's React session?", time: "10:00 AM", status: "read" },
        { id: 2, sender: "sender", text: "Assalam o Alaikum Sir, yes. I am confused about the cleanup function in useEffect.", time: "10:05 AM", status: "read" },
        { id: 3, sender: "receiver", text: "It runs before the component unmounts. I have shared a PDF in the material section for this.", time: "10:10 AM", status: "read" },
    ]);

    const [msgInput, setMsgInput] = useState("");
    const [search, setSearch] = useState("");

    // 2. SEARCH LOGIC
    const filteredTutors = useMemo(() =>
        tutors.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.course.toLowerCase().includes(search.toLowerCase())),
        [search, tutors]);

    // 3. ACTIONS
    const handleSend = (e) => {
        e.preventDefault();
        if (!msgInput.trim()) return;
        const newMsg = { id: Date.now(), sender: "sender", text: msgInput, time: "Now", status: "sent" };
        setMessages([...messages, newMsg]);
        setMsgInput("");
    };

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col lg:flex-row gap-6 overflow-hidden">

            {/* --- LEFT: TUTORS LIST (Enrolled Courses) --- */}
            <div className="w-full lg:w-[360px] bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-slate-50/30">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[2px] mb-4">My Instructors</h2>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text" placeholder="Search by tutor or course..."
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none text-[13px] font-semibold focus:border-acadex-navy/20"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {filteredTutors.map((t) => (
                        <div
                            key={t.id} onClick={() => setActiveChat(t)}
                            className={`px-6 py-5 flex items-center gap-4 cursor-pointer transition-all border-b border-slate-50 relative ${activeChat.id === t.id ? 'bg-blue-50/50' : 'hover:bg-slate-50/30'}`}
                        >
                            {activeChat.id === t.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-acadex-navy"></div>}
                            <div className="relative shrink-0">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shadow-md transition-transform ${activeChat.id === t.id ? 'bg-acadex-navy text-white' : 'bg-slate-100 text-slate-400'}`}>
                                    <GraduationCap size={20} />
                                </div>
                                {t.status === 'Online' && (
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-white rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-[14px] font-bold text-slate-900 truncate">{t.name}</h4>
                                    <span className="text-[9px] font-bold text-slate-400 uppercase">{t.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[11px] font-medium text-slate-400 truncate tracking-tight">{t.lastMsg}</p>
                                    {t.unread > 0 && <span className="bg-acadex-navy text-white text-[9px] font-black px-2 py-0.5 rounded-full">{t.unread}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MIDDLE: CHAT INTERFACE --- */}
            <div className="flex-1 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col overflow-hidden relative">
                {/* Chat Header */}
                <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                            {activeChat.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-[15px] font-bold text-slate-900 leading-none">{activeChat.name}</h3>
                            <div className="flex items-center gap-2 mt-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${activeChat.status === 'Online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeChat.course} • {activeChat.status}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"><Phone size={18} /></button>
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"><Video size={18} /></button>
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"><MoreVertical size={18} /></button>
                    </div>
                </div>

                {/* Messages Scroll Area */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/20 no-scrollbar">
                    {messages.map((m) => (
                        <div key={m.id} className={`flex ${m.sender === 'sender' ? 'justify-end' : 'justify-start'}`}>
                            <div className="max-w-[70%] space-y-2">
                                <div className={`px-5 py-3.5 rounded-3xl text-[13px] font-medium leading-relaxed shadow-sm ${m.sender === 'sender' ? 'bg-acadex-navy text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'}`}>
                                    {m.text}
                                </div>
                                <div className={`flex items-center gap-2 ${m.sender === 'sender' ? 'justify-end' : 'justify-start'}`}>
                                    <span className="text-[9px] font-bold text-slate-400 uppercase">{m.time}</span>
                                    {m.sender === 'sender' && <CheckCheck size={14} className={m.status === 'read' ? 'text-blue-500' : 'text-slate-300'} />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input Area */}
                <form onSubmit={handleSend} className="p-6 bg-white border-t border-slate-50 flex items-center gap-4">
                    <button type="button" className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><Paperclip size={20} /></button>
                    <button type="button" className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><ImageIcon size={20} /></button>
                    <div className="flex-1 relative">
                        <input
                            type="text" value={msgInput} onChange={(e) => setMsgInput(e.target.value)}
                            placeholder={`Message ${activeChat.name.split(' ')[0]}...`}
                            className="w-full pl-6 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-acadex-navy/20"
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-acadex-navy transition-colors">
                            <Smile size={20} />
                        </button>
                    </div>
                    <button type="submit" className="w-12 h-12 bg-acadex-navy text-white rounded-2xl flex items-center justify-center shadow-lg shadow-acadex-navy/20 hover:bg-acadex-blue transition-all shrink-0">
                        <Send size={20} className="mr-0.5" />
                    </button>
                </form>
            </div>

            {/* --- RIGHT: TUTOR ACADEMIC PROFILE (Strong Information) --- */}
            <div className="hidden xl:flex w-[320px] bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col p-8 overflow-y-auto no-scrollbar">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-[32px] bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-xl mb-6">
                        <GraduationCap size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{activeChat.name}</h3>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[3px] mt-2 leading-none">Senior Instructor</p>
                </div>

                <div className="mt-10 space-y-8">
                    {/* Status Info */}
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Instructor Context</p>
                        <InfoBox icon={<BookOpen size={14} />} label="Teaching You" value={activeChat.course} />
                        <InfoBox icon={<Clock size={14} />} label="Office Hours" value={activeChat.officeHours} />
                        <InfoBox icon={<Sparkles size={14} />} label="Expertise" value={activeChat.exp} />
                    </div>

                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                            <Info size={16} className="text-blue-500" />
                            <p className="text-[11px] font-bold text-slate-900 uppercase">Pro Tip</p>
                        </div>
                        <p className="text-[11px] font-medium text-slate-500 leading-relaxed italic">
                            Instructors usually reply within office hours. For urgent issues, please contact the Admin Office.
                        </p>
                    </div>

                    <div className="pt-6 border-t border-slate-50">
                        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest shadow-lg hover:bg-acadex-blue transition-all flex items-center justify-center gap-2">
                            View Teaching Logs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// MINI COMPONENTS
const InfoBox = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-50 rounded-lg text-slate-300 shrink-0">{icon}</div>
        <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{label}</p>
            <p className={`text-[12px] font-semibold text-slate-700 leading-tight`}>{value}</p>
        </div>
    </div>
);

export default StudentChat;