import React, { useState, useMemo } from 'react';
import {
    Megaphone, Search, Plus, Eye, Trash2, X,
    Bell, Calendar, Clock, BookOpen,
    AlertCircle, CheckCircle2, Pin, Filter,
    Send, MoreHorizontal, Users
} from 'lucide-react';

const TeacherNotices = () => {
    // 1. DATA STATE (Instructor Specific Announcements)
    const [notices, setNotices] = useState([
        {
            id: "NTC-401", title: "React Mid-Term Project Brief", course: "Advanced React",
            batch: "Batch-04", priority: "High", date: "2024-10-25",
            expiry: "2024-11-05", status: "Active",
            content: "The mid-term project requirements have been uploaded to the Study Material section. Please review the PDF and start working on your modular components."
        },
        {
            id: "NTC-402", title: "Class Rescheduled: Tuesday Session", course: "UI/UX Masterclass",
            batch: "Batch-02", priority: "Medium", date: "2024-10-28",
            expiry: "2024-10-29", status: "Active",
            content: "The session scheduled for Tuesday at 10:00 AM is moved to 02:00 PM due to a faculty meeting. Please adjust your schedules accordingly."
        },
        {
            id: "NTC-403", title: "Quiz 01 Results Published", course: "Advanced React",
            batch: "Batch-04", priority: "Low", date: "2024-10-20",
            expiry: "2024-10-25", status: "Expired",
            content: "Results for the first quiz on React Hooks are now visible on your dashboard under the grades section."
        }
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [viewNotice, setViewNotice] = useState(null);

    // 2. SEARCH LOGIC
    const filteredNotices = useMemo(() =>
        notices.filter(n => n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.course.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, notices]);

    // 3. ACTIONS
    const handleAddNotice = (e) => {
        e.preventDefault();
        alert("Announcement broadcasted to course students successfully!");
        setIsAddModalOpen(false);
    };

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & BROADCAST SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner">
                        <Megaphone size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Course Announcements</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Broadcast updates to your assigned batches</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right px-6 border-r border-slate-100">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">Live Notices</p>
                        <p className="text-xl font-black text-slate-900 leading-none">{notices.filter(n => n.status === 'Active').length}</p>
                    </div>
                    <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-acadex-navy text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all">
                        <Plus size={18} /> New Broadcast
                    </button>
                </div>
            </div>

            {/* --- SEARCH BAR --- */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text" placeholder="Search notices by title or course name..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20 shadow-sm"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* --- NOTICES LIST --- */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {filteredNotices.map((n) => (
                    <div key={n.id} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-all relative overflow-hidden">

                        {/* Priority Pin */}
                        <div className={`absolute top-0 right-0 w-16 h-16 flex items-center justify-center opacity-10 ${n.priority === 'High' ? 'text-red-600' : 'text-blue-600'}`}>
                            <Pin size={48} className="-rotate-12" />
                        </div>

                        <div className="space-y-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${n.priority === 'High' ? 'bg-red-50 text-red-600' :
                                        n.priority === 'Medium' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-500'
                                    }`}>
                                    {n.priority} Priority
                                </span>
                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${n.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                    {n.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{n.title}</h3>
                            <p className="text-[13px] font-medium text-slate-500 line-clamp-2 leading-relaxed">
                                {n.content}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex gap-6">
                                <InfoItem icon={<BookOpen size={14} />} label="Course" value={n.course} />
                                <InfoItem icon={<Users size={14} />} label="Batch" value={n.batch} />
                                <InfoItem icon={<Calendar size={14} />} label="Posted" value={n.date} />
                            </div>
                            <div className="flex gap-2 relative z-10">
                                <button onClick={() => setViewNotice(n)} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Eye size={16} /></button>
                                <button onClick={() => setNotices(notices.filter(x => x.id !== n.id))} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODAL: BROADCAST FORM --- */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={handleAddNotice} className="bg-white w-full max-w-2xl rounded-[40px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">New Course Broadcast</h2>
                            <button type="button" onClick={() => setIsAddModalOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="space-y-5">
                            <FormInput label="Announcement Title" placeholder="e.g. Exam Schedule Update" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Target Course</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                        <option>Advanced React (Batch-04)</option>
                                        <option>UI/UX Masterclass (Batch-02)</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Priority Level</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High (Urgent)</option>
                                    </select>
                                </div>
                            </div>
                            <FormInput type="date" label="Expiry Date (Notice will auto-hide after this)" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Broadcast Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[14px] font-medium" placeholder="Type your announcement details here..."></textarea>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl mt-4 flex items-center justify-center gap-3">
                            <Send size={18} /> Push Announcement
                        </button>
                    </form>
                </div>
            )}

            {/* --- MODAL: VIEW NOTICE --- */}
            {viewNotice && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-10 text-white flex justify-between items-start">
                            <div className="space-y-1">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest">{viewNotice.course}</span>
                                <h2 className="text-2xl font-bold tracking-tight mt-3">{viewNotice.title}</h2>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[4px]">Posted On: {viewNotice.date}</p>
                            </div>
                            <button onClick={() => setViewNotice(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={20} /></button>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="text-[15px] font-medium text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-[28px] border border-slate-100 italic">
                                "{viewNotice.content}"
                            </div>
                            <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                                <div className="flex gap-8">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Priority</p>
                                        <p className="text-[12px] font-bold text-slate-900">{viewNotice.priority}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Expires On</p>
                                        <p className="text-[12px] font-bold text-slate-900">{viewNotice.expiry}</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                    <Bell size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- MINI COMPONENTS ---
const InfoItem = ({ icon, label, value }) => (
    <div className="space-y-1">
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none flex items-center gap-1.5">{icon} {label}</p>
        <p className="text-[12px] font-bold text-slate-700 leading-none">{value}</p>
    </div>
);

const FormInput = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5 w-full">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input type={type} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder={placeholder} />
    </div>
);

export default TeacherNotices;