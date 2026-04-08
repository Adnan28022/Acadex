import React, { useState, useMemo } from 'react';
import {
    Users, Search, Filter, Eye, MessageSquare,
    MoreVertical, Mail, Phone, BookOpen,
    Award, CheckCircle2, XCircle, TrendingUp,
    ChevronRight, UserCircle, Download
} from 'lucide-react';

const TeacherStudents = () => {
    // 1. DATA STATE (Detailed Information of Students under this Instructor)
    const [students, setStudents] = useState([
        {
            id: "STU-101", name: "Zeeshan Ali", email: "zeeshan@acadex.com",
            course: "Advanced React", batch: "Batch-04", attendance: "94%",
            lastGrade: "A+", status: "Online", phone: "+92 300 1234567"
        },
        {
            id: "STU-102", name: "Sara Khan", email: "sara.k@acadex.com",
            course: "UI/UX Masterclass", batch: "Batch-02", attendance: "88%",
            lastGrade: "B", status: "Away", phone: "+92 301 9876543"
        },
        {
            id: "STU-103", name: "Ahmed Raza", email: "ahmed.r@acadex.com",
            course: "Advanced React", batch: "Batch-04", attendance: "72%",
            lastGrade: "C+", status: "Offline", phone: "+92 333 4455667"
        },
        {
            id: "STU-104", name: "Zainab Malik", email: "zainab.m@acadex.com",
            course: "Python DS", batch: "Batch-01", attendance: "98%",
            lastGrade: "A", status: "Online", phone: "+92 345 0001112"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterCourse, setFilterCourse] = useState("All Courses");

    // 2. FILTER LOGIC
    const filteredStudents = useMemo(() => {
        return students.filter(s => {
            const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCourse = filterCourse === "All Courses" || s.course === filterCourse;
            return matchesSearch && matchesCourse;
        });
    }, [searchTerm, filterCourse, students]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & INSIGHTS --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner">
                        <Users size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Student Community</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Monitoring {students.length} active learners across your courses</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <SummaryCard label="Avg. Attendance" value="88.5%" icon={<TrendingUp size={14} />} color="text-blue-600" />
                    <div className="w-px h-10 bg-slate-100"></div>
                    <SummaryCard label="On Track" value="32 Students" icon={<CheckCircle2 size={14} />} color="text-emerald-600" />
                </div>
            </div>

            {/* --- ADVANCED FILTER BAR --- */}
            <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search student by name or unique ID..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-acadex-navy/20 transition-all"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <select
                        onChange={(e) => setFilterCourse(e.target.value)}
                        className="flex-1 md:w-56 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-[12px] font-bold text-slate-600 outline-none focus:border-acadex-navy/20 cursor-pointer"
                    >
                        <option>All Courses</option>
                        <option>Advanced React</option>
                        <option>UI/UX Masterclass</option>
                        <option>Python DS</option>
                    </select>
                    <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:bg-slate-50 transition-all">
                        <Download size={18} />
                    </button>
                </div>
            </div>

            {/* --- STUDENTS DATA TABLE --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Learner Profile</th>
                                <th className="px-6 py-5">Course / Batch</th>
                                <th className="px-6 py-5 text-center">Attendance</th>
                                <th className="px-6 py-5 text-center">Avg. Grade</th>
                                <th className="px-6 py-5">Network Status</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredStudents.map((s) => (
                                <tr key={s.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-md uppercase">
                                                {s.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-semibold text-slate-900 leading-none">{s.name}</p>
                                                <p className="text-[11px] font-bold text-blue-600 mt-2 uppercase tracking-tighter leading-none">{s.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <p className="text-[13px] font-semibold text-slate-700 leading-none">{s.course}</p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">{s.batch}</p>
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <div className="inline-flex flex-col items-center">
                                            <p className={`text-[13px] font-bold ${parseInt(s.attendance) < 75 ? 'text-red-500' : 'text-slate-900'}`}>{s.attendance}</p>
                                            <div className="w-12 h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                                <div className={`h-full ${parseInt(s.attendance) < 75 ? 'bg-red-500' : 'bg-emerald-500'} rounded-full`} style={{ width: s.attendance }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <span className="w-9 h-9 mx-auto bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black text-xs border border-blue-100">
                                            {s.lastGrade}
                                        </span>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${s.status === 'Online' ? 'bg-emerald-500 animate-pulse' : s.status === 'Away' ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{s.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="Message Student">
                                                <MessageSquare size={16} />
                                            </button>
                                            <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm" title="Performance Report">
                                                <Eye size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// --- MINI COMPONENTS ---
const SummaryCard = ({ label, value, icon, color }) => (
    <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg bg-slate-50 ${color} flex items-center justify-center shrink-0 border border-slate-100`}>
            {icon}
        </div>
        <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[2px] leading-none mb-1.5">{label}</p>
            <p className={`text-[14px] font-black text-slate-900 leading-none`}>{value}</p>
        </div>
    </div>
);

export default TeacherStudents;