import React, { useState, useMemo } from 'react';
import {
    ClipboardList, Search, Plus, Eye, Trash2, X,
    Calendar, Clock, BookOpen, FileText,
    Users, CheckCircle2, AlertCircle, Send,
    Download, Filter, MoreHorizontal, Award
} from 'lucide-react';

const TeacherAssignments = () => {
    // 1. DATA STATE (Detailed Assignment Information)
    const [assignments, setAssignments] = useState([
        {
            id: "ASN-2025-01", title: "React Components & Props", course: "Advanced React",
            batch: "Batch-04", deadline: "2024-11-10 11:59 PM", totalMarks: "50",
            submissions: "24", totalStudents: "32", status: "Active",
            description: "Build a modular UI using functional components and pass data via props."
        },
        {
            id: "ASN-2025-02", title: "Figma Prototyping Lab", course: "UI/UX Masterclass",
            batch: "Batch-02", deadline: "2024-10-30 06:00 PM", totalMarks: "100",
            submissions: "24", totalStudents: "24", status: "Closed",
            description: "Create a high-fidelity prototype for a food delivery mobile application."
        },
        {
            id: "ASN-2025-03", title: "Express.js API Integration", course: "Advanced React",
            batch: "Batch-04", deadline: "2024-11-20 12:00 PM", totalMarks: "75",
            submissions: "08", totalStudents: "32", status: "Active",
            description: "Connect your frontend with a local Node/Express backend server."
        }
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // 2. SEARCH LOGIC
    const filtered = useMemo(() =>
        assignments.filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.course.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, assignments]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & ANALYTICS --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-inner">
                        <ClipboardList size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Assignment Manager</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Curriculum Assessment & Grading Hub</p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <SummaryItem label="Active Tasks" value={assignments.filter(a => a.status === 'Active').length} color="text-blue-600" />
                    <div className="w-px h-10 bg-slate-100"></div>
                    <SummaryItem label="Pending Reviews" value="18" color="text-orange-600" />
                    <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-acadex-navy text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all">
                        <Plus size={18} /> Create Assignment
                    </button>
                </div>
            </div>

            {/* --- FILTER BAR --- */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text" placeholder="Search by assignment title, batch or course..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-indigo-600/20 shadow-sm"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* --- ASSIGNMENT CARDS LIST --- */}
            <div className="grid grid-cols-1 gap-4">
                {filtered.map((asn) => (
                    <div key={asn.id} className="bg-white rounded-[32px] border border-slate-100 p-6 flex flex-col xl:flex-row items-center gap-8 group hover:border-indigo-200 transition-all shadow-sm">

                        {/* Course Detail Area */}
                        <div className="w-full xl:w-[280px] shrink-0 border-b xl:border-b-0 xl:border-r border-slate-50 pb-4 xl:pb-0">
                            <div className="flex items-center gap-3 mb-3">
                                <BookOpen size={16} className="text-indigo-500" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{asn.course}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{asn.title}</h3>
                            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mt-2">{asn.batch} • {asn.id}</p>
                        </div>

                        {/* Status & Deadline Area */}
                        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                            <DataPoint icon={<Users size={14} />} label="Submissions" value={`${asn.submissions} / ${asn.totalStudents}`} />
                            <DataPoint icon={<Calendar size={14} />} label="Due Date" value={asn.deadline.split(' ')[0]} />
                            <DataPoint icon={<Clock size={14} />} label="Closing Time" value={asn.deadline.split(' ')[1] + " " + asn.deadline.split(' ')[2]} />
                            <DataPoint icon={<Award size={14} />} label="Max Points" value={asn.totalMarks} />
                        </div>

                        {/* Status Badge & Actions */}
                        <div className="flex items-center gap-4 w-full xl:w-auto justify-between xl:justify-end border-t xl:border-t-0 pt-4 xl:pt-0 border-slate-50">
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${asn.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                {asn.status}
                            </span>
                            <div className="flex gap-2">
                                <button className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="View Submissions"><Eye size={18} /></button>
                                <button onClick={() => setAssignments(assignments.filter(x => x.id !== asn.id))} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"><Trash2 size={18} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODAL: CREATE ASSIGNMENT FORM --- */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={(e) => { e.preventDefault(); setIsAddModalOpen(false); }} className="bg-white w-full max-w-3xl rounded-[40px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create Assignment</h2>
                            <button type="button" onClick={() => setIsAddModalOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput label="Assignment Title" placeholder="e.g. Database Design Lab" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assign to Course</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>Advanced React (Batch-04)</option>
                                    <option>UI/UX Masterclass (Batch-02)</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <FormInput label="Due Date" type="date" />
                                <FormInput label="Closing Time" type="time" />
                            </div>
                            <FormInput label="Total Points / Marks" placeholder="e.g. 100" />

                            <div className="md:col-span-2 space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Detailed Instructions</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium" placeholder="Explain the assignment requirements here..."></textarea>
                            </div>
                            <div className="md:col-span-2 border-2 border-dashed border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-slate-400 group hover:border-indigo-400 transition-all cursor-pointer">
                                <FileText size={32} className="mb-2 group-hover:text-indigo-600 transition-colors" />
                                <span className="text-[11px] font-bold uppercase tracking-widest">Attach Material (PDF, ZIP, Image)</span>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl mt-4 flex items-center justify-center gap-3">
                            <Send size={18} /> Broadcast Assignment to Students
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

// --- MINI COMPONENTS ---
const SummaryItem = ({ label, value, color }) => (
    <div className="text-right">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
        <p className={`text-xl font-black ${color} tracking-tight leading-none`}>{value}</p>
    </div>
);

const DataPoint = ({ icon, label, value }) => (
    <div className="space-y-1.5">
        <div className="flex items-center gap-2">
            <span className="text-slate-300">{icon}</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{label}</span>
        </div>
        <p className="text-[13px] font-bold text-slate-700 leading-none">{value}</p>
    </div>
);

const FormInput = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input type={type} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder={placeholder} />
    </div>
);

export default TeacherAssignments;