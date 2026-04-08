import React, { useState, useMemo } from 'react';
import {
    Send, Search, Paperclip, Smile, MoreVertical,
    User, BookOpen, Clock, CheckCheck, Phone,
    Video, X, Info, MessageSquare, Award,
    CheckCircle2, AlertCircle
} from 'lucide-react';

const TeacherChat = () => {
    // 1. DATA STATE: Contacts (Students enrolled in Instructor's courses)
    const [students, setStudents] = useState([
        { id: "STU-101", name: "Zeeshan Ali", course: "Advanced React", status: "Online", lastMsg: "Sir, when will we start Next.js?", time: "10:30 AM", unread: 1, attendance: "94%", grade: "A+" },
        { id: "STU-102", name: "Sara Khan", course: "UI/UX Design", status: "Offline", lastMsg: "Assignment 2 submitted.", time: "09:15 AM", unread: 0, attendance: "88%", grade: "B" },
        { id: "STU-103", name: "Ahmed Raza", course: "Advanced React", status: "Online", lastMsg: "I'm having trouble with hooks.", time: "Yesterday", unread: 3, attendance: "72%", grade: "C+" },
        { id: "STU-104", name: "Zainab Malik", course: "Python DS", status: "Online", lastMsg: "Thank you for the notes!", time: "11:45 AM", unread: 0, attendance: "98%", grade: "A" },
    ]);

    const [activeChat, setActiveChat] = useState(students[0]);
    const [messages, setMessages] = useState([
        { id: 1, sender: "receiver", text: "Assalam o Alaikum Sir, I have a doubt in React Components.", time: "10:00 AM", status: "read" },
        { id: 2, sender: "sender", text: "Walaikum Assalam, sure Zeeshan. Which part is confusing?", time: "10:05 AM", status: "read" },
        { id: 3, sender: "receiver", text: "The clean-up function in useEffect hook.", time: "10:10 AM", status: "read" },
    ]);

    const [msgInput, setMsgInput] = useState("");
    const [search, setSearch] = useState("");

    // 2. SEARCH LOGIC
    const filteredStudents = useMemo(() =>
        students.filter(s => s.name.toLowerCase().includes(search.toLowerCase())),
        [search, students]);

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

            {/* --- LEFT: STUDENT LIST (350px) --- */}
            <div className="w-full lg:w-[360px] bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-slate-50/30">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[2px] mb-4">Learner Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text" placeholder="Search your students..."
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none text-[13px] font-semibold focus:border-acadex-navy/20 transition-all"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {filteredStudents.map((s) => (
                        <div
                            key={s.id} onClick={() => setActiveChat(s)}
                            className={`px-6 py-5 flex items-center gap-4 cursor-pointer transition-all border-b border-slate-50 relative ${activeChat.id === s.id ? 'bg-blue-50/50' : 'hover:bg-slate-50/30'}`}
                        >
                            {activeChat.id === s.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-acadex-navy"></div>}
                            <div className="relative shrink-0">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shadow-md transition-transform ${activeChat.id === s.id ? 'bg-acadex-navy text-white scale-105' : 'bg-slate-900 text-white opacity-70'}`}>
                                    {s.name.charAt(0)}
                                </div>
                                {s.status === 'Online' && (
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-white rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-[14px] font-bold text-slate-900 truncate">{s.name}</h4>
                                    <span className="text-[9px] font-bold text-slate-400 uppercase">{s.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[11px] font-medium text-slate-400 truncate tracking-tight">{s.lastMsg}</p>
                                    {s.unread > 0 && <span className="bg-acadex-navy text-white text-[9px] font-black px-2 py-0.5 rounded-full">{s.unread}</span>}
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
                        <div className="w-11 h-11 rounded-2xl bg-acadex-navy text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-acadex-navy/10">
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

                {/* Message Input */}
                <form onSubmit={handleSend} className="p-6 bg-white border-t border-slate-50 flex items-center gap-4">
                    <button type="button" className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><Paperclip size={20} /></button>
                    <div className="flex-1 relative">
                        <input
                            type="text" value={msgInput} onChange={(e) => setMsgInput(e.target.value)}
                            placeholder={`Reply to ${activeChat.name.split(' ')[0]}...`}
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

            {/* --- RIGHT: STUDENT ACADEMIC PROFILE (Strong Information) --- */}
            <div className="hidden xl:flex w-[320px] bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col p-8 overflow-y-auto no-scrollbar">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-[32px] bg-slate-900 text-white flex items-center justify-center text-3xl font-bold shadow-xl mb-6">
                        {activeChat.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{activeChat.name}</h3>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[3px] mt-2 leading-none">Learner Profile</p>
                </div>

                <div className="mt-10 space-y-8">
                    {/* Performance Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2 flex items-center gap-1.5"><Clock size={10} /> Attendance</p>
                            <p className={`text-lg font-black tracking-tight ${parseInt(activeChat.attendance) < 75 ? 'text-red-500' : 'text-slate-900'}`}>{activeChat.attendance}</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2 flex items-center gap-1.5"><Award size={10} /> Current Grade</p>
                            <p className="text-lg font-black text-blue-600 tracking-tight">{activeChat.grade}</p>
                        </div>
                    </div>

                    {/* Detailed Info */}
                    <div className="space-y-5 pt-6 border-t border-slate-50">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Academic Details</p>
                        <InfoBox icon={<BookOpen size={14} />} label="Enrolled In" value={activeChat.course} />
                        <InfoBox icon={<User size={14} />} label="Student ID" value={activeChat.id} />
                        <InfoBox icon={<CheckCircle2 size={14} />} label="Assignments" value="12 Completed" />
                    </div>

                    <div className="pt-6">
                        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest shadow-lg hover:bg-acadex-blue transition-all">
                            Open Full Gradebook
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
            <p className="text-[12px] font-semibold text-slate-700 leading-tight">{value}</p>
        </div>
    </div>
);

export default TeacherChat;