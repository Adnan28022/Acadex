import React, { useState, useMemo } from 'react';
import {
    Megaphone, Search, Plus, Eye, Trash2, X,
    Users, GraduationCap, Calendar, Clock,
    AlertCircle, CheckCircle2, Pin, Filter,
    FileText, Send, MoreHorizontal, Bell
} from 'lucide-react';

const NoticeBoard = () => {
    // 1. DATA STATE (Detailed Notice Information)
    const [notices, setNotices] = useState([
        {
            id: "NTC-881", title: "Monthly Fee Submission Deadline", category: "Fee",
            target: "Students", priority: "High", date: "2024-10-20",
            expiry: "2024-10-30", status: "Active",
            content: "All students are requested to submit their monthly fee before the 30th of October to avoid any late fine. Ignore if already paid."
        },
        {
            id: "NTC-882", title: "Staff Meeting: Academic Review", category: "Meeting",
            target: "Staff", priority: "Medium", date: "2024-10-22",
            expiry: "2024-10-22", status: "Active",
            content: "A mandatory meeting for all instructors and admin staff is scheduled at 03:00 PM in the main hall to discuss the upcoming mid-terms."
        },
        {
            id: "NTC-883", title: "Kashmir Day Holiday", category: "Holiday",
            target: "All", priority: "Low", date: "2024-10-25",
            expiry: "2024-10-27", status: "Scheduled",
            content: "The institute will remain closed on 27th October in observance of Kashmir Day. Classes will resume from Monday."
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [viewNotice, setViewNotice] = useState(null);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [form, setForm] = useState({ title: '', category: 'General', target: 'All', priority: 'Low', expiry: '', content: '' });

    // 2. SEARCH & FILTER LOGIC
    const filtered = useMemo(() =>
        notices.filter(n => n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.category.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, notices]);

    // 3. ACTIONS
    const handleAddNotice = (e) => {
        e.preventDefault();
        const newNotice = {
            ...form,
            id: `NTC-${Math.floor(Math.random() * 900 + 100)}`,
            date: new Date().toISOString().split('T')[0],
            status: "Active"
        };
        setNotices([newNotice, ...notices]);
        setIsAddOpen(false);
    };

    return (
        <div className="space-y-6 pb-12">

            {/* --- HEADER SECTION --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center border border-blue-100 shadow-inner">
                        <Megaphone size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Institutional Notice Board</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Broadcast important updates & news</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-right px-6 border-r border-slate-100 hidden sm:block">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Notices</p>
                        <p className="text-2xl font-black text-slate-900 leading-none mt-1">{notices.length}</p>
                    </div>
                    <button onClick={() => setIsAddOpen(true)} className="flex items-center gap-2 px-8 py-4 bg-acadex-navy text-white rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all shadow-xl shadow-acadex-navy/10 flex items-center justify-center gap-2">
                        <Plus size={18} /> Post New Notice
                    </button>
                </div>
            </div>

            {/* --- SEARCH & QUICK FILTER --- */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text" placeholder="Search notices by title, category or targeted audience..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20 shadow-sm"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* --- NOTICES DISPLAY (GRID) --- */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {filtered.map((n) => (
                    <div key={n.id} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm flex flex-col justify-between group relative hover:border-blue-200 transition-all">
                        {/* Pin Icon */}
                        <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-500 transition-colors">
                            <Pin size={20} className={n.priority === 'High' ? 'fill-blue-500 text-blue-500' : ''} />
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${n.priority === 'High' ? 'bg-red-50 text-red-600' :
                                        n.priority === 'Medium' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-500'
                                    }`}>
                                    {n.priority} Priority
                                </span>
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{n.category}</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">{n.title}</h3>
                            <p className="text-[13px] font-medium text-slate-500 line-clamp-2 leading-relaxed">
                                {n.content}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center">
                                        {n.target === 'Students' ? <Users size={14} /> : n.target === 'Staff' ? <GraduationCap size={14} /> : <Megaphone size={14} />}
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">For</p>
                                        <p className="text-[11px] font-bold text-slate-700 leading-none mt-1">{n.target}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center">
                                        <Calendar size={14} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Posted On</p>
                                        <p className="text-[11px] font-bold text-slate-700 leading-none mt-1">{n.date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setViewNotice(n)} className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Eye size={18} /></button>
                                <button onClick={() => setNotices(notices.filter(x => x.id !== n.id))} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"><Trash2 size={18} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- VIEW MODAL --- */}
            {viewNotice && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-10 text-white flex justify-between items-start relative overflow-hidden">
                            <div className="relative z-10 space-y-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-[2px]">{viewNotice.category} Notice</span>
                                <h2 className="text-3xl font-bold tracking-tight mt-3">{viewNotice.title}</h2>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[4px] leading-none mt-2">Voucher ID: {viewNotice.id}</p>
                            </div>
                            <button onClick={() => setViewNotice(null)} className="relative z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={20} /></button>
                            <Megaphone className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 rotate-12" />
                        </div>
                        <div className="p-10 space-y-10">
                            <div className="flex items-center gap-12 border-b border-slate-50 pb-8">
                                <InfoItem label="Target Audience" value={viewNotice.target} icon={<Users size={16} />} />
                                <InfoItem label="Date Published" value={viewNotice.date} icon={<Calendar size={16} />} />
                                <InfoItem label="Expiry Date" value={viewNotice.expiry} icon={<Clock size={16} />} />
                            </div>
                            <div className="space-y-4">
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">Official Announcement Content</p>
                                <div className="text-[15px] font-medium text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-[24px] border border-slate-100">
                                    {viewNotice.content}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-[2px] shadow-xl flex items-center justify-center gap-3">
                                    <Bell size={16} /> Re-Notify All
                                </button>
                                <button className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold uppercase text-[11px] tracking-[2px]"><Download size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- ADD NOTICE MODAL --- */}
            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={handleAddNotice} className="bg-white w-full max-w-2xl rounded-[40px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create New Announcement</h2>
                            <button type="button" onClick={() => setIsAddOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="space-y-5">
                            <FormInput label="Notice Title" placeholder="e.g. Mid-Term Examination Schedule" onChange={v => setForm({ ...form, title: v })} />
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                                    <select onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                        <option>General</option>
                                        <option>Exam</option>
                                        <option>Fee</option>
                                        <option>Holiday</option>
                                        <option>Event</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Audience</label>
                                    <select onChange={e => setForm({ ...form, target: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                        <option>All</option>
                                        <option>Students</option>
                                        <option>Staff</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Priority</label>
                                    <select onChange={e => setForm({ ...form, priority: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>
                            <FormInput type="date" label="Expiry Date" onChange={v => setForm({ ...form, expiry: v })} />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Detailed Content</label>
                                <textarea
                                    required onChange={(e) => setForm({ ...form, content: e.target.value })}
                                    rows={4} placeholder="Type the official announcement here..."
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20"
                                />
                            </div>
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-3">
                            <Send size={18} /> Post Announcement
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

// --- MINI COMPONENTS ---
const InfoItem = ({ label, value, icon }) => (
    <div className="flex items-start gap-3">
        <div className="text-slate-300 mt-1">{icon}</div>
        <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px] leading-none mb-2">{label}</p>
            <p className="text-[14px] font-bold text-slate-800 tracking-tight leading-none">{value}</p>
        </div>
    </div>
);

const FormInput = ({ label, placeholder, type = "text", onChange }) => (
    <div className="space-y-1.5 w-full">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input
            type={type} required onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold"
            placeholder={placeholder}
        />
    </div>
);

export default NoticeBoard;