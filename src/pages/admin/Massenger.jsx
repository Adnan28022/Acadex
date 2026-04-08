import React, { useState, useMemo } from 'react';
import {
    Send, Search, User, BookOpen,
    Wallet, CheckCircle, Clock, X,
    MoreHorizontal, Phone, MessageSquare,
    ChevronRight, Paperclip, Smile
} from 'lucide-react';

const AdminMessenger = () => {
    // 1. DATA STATE: Students List (Institute Specific)
    const [students, setStudents] = useState([
        { id: "STU-101", name: "Zeeshan Ali", course: "Web Development", status: "Online", lastMsg: "Sir, fee voucher received.", time: "10:30 AM", unread: 1, fee: "Paid", attendance: "92%" },
        { id: "STU-102", name: "Sara Khan", course: "UI/UX Design", status: "Offline", lastMsg: "When is the next exam?", time: "09:15 AM", unread: 0, fee: "Partial", attendance: "85%" },
        { id: "STU-103", name: "Ahmed Raza", course: "Python DS", status: "Online", lastMsg: "I need leave for tomorrow.", time: "Yesterday", unread: 3, fee: "Unpaid", attendance: "78%" },
        { id: "STU-104", name: "Zainab Malik", course: "Graphic Design", status: "Online", lastMsg: "Project submitted.", time: "11:45 AM", unread: 0, fee: "Paid", attendance: "95%" },
    ]);

    const [activeStudent, setActiveStudent] = useState(students[0]);
    const [messages, setMessages] = useState([
        { id: 1, type: "receiver", text: "Assalam o Alaikum Sir, I have a question about my enrollment.", time: "10:00 AM" },
        { id: 2, type: "sender", text: "Walaikum Assalam, yes Zeeshan, how can I help you?", time: "10:05 AM" },
        { id: 3, type: "receiver", text: "Sir, my fee status is still showing pending on the portal.", time: "10:10 AM" },
    ]);
    const [input, setInput] = useState("");

    // 2. SEARCH LOGIC
    const [search, setSearch] = useState("");
    const filteredStudents = useMemo(() =>
        students.filter(s => s.name.toLowerCase().includes(search.toLowerCase())),
        [search, students]);

    // 3. ACTIONS
    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { id: Date.now(), type: "sender", text: input, time: "Now" }]);
        setInput("");
    };

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col lg:flex-row gap-6 overflow-hidden">

            {/* --- LEFT: STUDENT LIST (350px) --- */}
            <div className="w-full lg:w-[360px] bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[2px] mb-4">Student Contacts</h2>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text" placeholder="Search by name or ID..."
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none text-[13px] font-semibold focus:border-acadex-navy/20"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {filteredStudents.map((s) => (
                        <div
                            key={s.id} onClick={() => setActiveStudent(s)}
                            className={`px-6 py-5 flex items-center gap-4 cursor-pointer transition-all border-b border-slate-50 relative ${activeStudent.id === s.id ? 'bg-blue-50/50' : 'hover:bg-slate-50/30'}`}
                        >
                            {activeStudent.id === s.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-acadex-navy"></div>}
                            <div className="relative shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md uppercase">{s.name.charAt(0)}</div>
                                {s.status === 'Online' && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-white rounded-full"></div>}
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
                {/* Header */}
                <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-acadex-navy text-white flex items-center justify-center font-bold text-sm">{activeStudent.name.charAt(0)}</div>
                        <div>
                            <h3 className="text-[15px] font-bold text-slate-900 leading-none">{activeStudent.name}</h3>
                            <p className="text-[10px] font-bold text-blue-600 mt-1.5 uppercase tracking-widest">{activeStudent.course} • {activeStudent.id}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"><Phone size={18} /></button>
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"><MoreHorizontal size={18} /></button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/20 no-scrollbar">
                    {messages.map((m) => (
                        <div key={m.id} className={`flex ${m.type === 'sender' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] px-5 py-3.5 rounded-3xl text-[13px] font-medium leading-relaxed shadow-sm ${m.type === 'sender' ? 'bg-acadex-navy text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'}`}>
                                {m.text}
                                <p className={`text-[9px] font-bold mt-2 uppercase ${m.type === 'sender' ? 'text-white/50' : 'text-slate-300'}`}>{m.time}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="p-6 bg-white border-t border-slate-50 flex items-center gap-4">
                    <button type="button" className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><Paperclip size={20} /></button>
                    <input
                        type="text" value={input} onChange={(e) => setInput(e.target.value)}
                        placeholder={`Reply to ${activeStudent.name.split(' ')[0]}...`}
                        className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-acadex-navy/20"
                    />
                    <button type="submit" className="w-12 h-12 bg-acadex-navy text-white rounded-2xl flex items-center justify-center shadow-lg shadow-acadex-navy/20 hover:bg-acadex-blue transition-all shrink-0">
                        <Send size={20} className="mr-0.5" />
                    </button>
                </form>
            </div>

            {/* --- RIGHT: STUDENT ACADEMIC BRIEF (Strong Information) --- */}
            <div className="hidden xl:flex w-[320px] bg-white rounded-[32px] border border-slate-100 shadow-sm flex-col p-8 overflow-y-auto no-scrollbar">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-[32px] bg-slate-900 text-white flex items-center justify-center text-3xl font-bold shadow-xl mb-6">{activeStudent.name.charAt(0)}</div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{activeStudent.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[3px] mt-2 italic">Student Profile</p>
                </div>

                <div className="mt-10 space-y-8">
                    {/* Status Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">Attendance</p>
                            <p className="text-lg font-black text-slate-900 tracking-tight">{activeStudent.attendance}</p>
                        </div>
                        <div className={`p-4 rounded-2xl border border-slate-100 ${activeStudent.fee === 'Paid' ? 'bg-emerald-50' : 'bg-red-50'}`}>
                            <p className="text-[9px] font-bold opacity-60 uppercase tracking-widest leading-none mb-2">Fee Status</p>
                            <p className={`text-lg font-black tracking-tight ${activeStudent.fee === 'Paid' ? 'text-emerald-600' : 'text-red-500'}`}>{activeStudent.fee}</p>
                        </div>
                    </div>

                    <div className="space-y-5 pt-6 border-t border-slate-50">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Enrollment Details</p>
                        <InfoItem icon={<BookOpen size={14} />} label="Assigned Course" value={activeStudent.course} />
                        <InfoItem icon={<Clock size={14} />} label="Batch Timing" value="04:00 PM - 07:00 PM" />
                        <InfoItem icon={<Wallet size={14} />} label="Total Paid" value="Rs. 45,000" />
                    </div>

                    <button className="w-full mt-4 py-4 bg-slate-50 text-slate-500 border border-slate-100 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                        View Full Academic Record
                    </button>
                </div>
            </div>
        </div>
    );
};

// MINI COMPONENTS
const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-50 rounded-lg text-slate-300 shrink-0">{icon}</div>
        <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{label}</p>
            <p className="text-[12px] font-semibold text-slate-700 leading-tight">{value}</p>
        </div>
    </div>
);

export default AdminMessenger;