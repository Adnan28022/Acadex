import React, { useState, useMemo } from 'react';
import {
    CheckCircle2, XCircle, Clock, Calendar,
    TrendingUp, AlertTriangle, Search, Filter,
    BookOpen, Download, Info, ChevronRight,
    CircleSlash
} from 'lucide-react';

const StudentAttendance = () => {
    // 1. DATA STATE: Detailed Attendance History
    const [attendanceData, setAttendanceData] = useState([
        { id: 1, date: "2024-10-25", course: "Advanced React", status: "Present", time: "04:05 PM", teacher: "Dr. Sohail Khan" },
        { id: 2, date: "2024-10-23", course: "UI Fundamentals", status: "Absent", time: "---", teacher: "Prof. Amna" },
        { id: 3, date: "2024-10-22", course: "Advanced React", status: "Late", time: "04:25 PM", teacher: "Dr. Sohail Khan" },
        { id: 4, date: "2024-10-21", course: "Backend with Node", status: "Present", time: "09:02 AM", teacher: "Zaid Ahmed" },
        { id: 5, date: "2024-10-20", course: "Advanced React", status: "Present", time: "04:00 PM", teacher: "Dr. Sohail Khan" },
    ]);

    const [filterCourse, setFilterCourse] = useState("All Courses");

    // 2. CALCULATE OVERALL STATS
    const stats = useMemo(() => {
        const total = attendanceData.length;
        const present = attendanceData.filter(a => a.status === 'Present').length;
        const late = attendanceData.filter(a => a.status === 'Late').length;
        const absent = attendanceData.filter(a => a.status === 'Absent').length;
        const percentage = ((present + (late * 0.5)) / total * 100).toFixed(1); // Late counts as 0.5
        return { total, present, absent, late, percentage };
    }, [attendanceData]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & PERCENTAGE RADIUS --- */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Overall Percentage Card */}
                <div className="flex-1 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[2px] mb-2">Overall Attendance</p>
                        <h1 className={`text-5xl font-black tracking-tighter ${parseFloat(stats.percentage) < 75 ? 'text-red-500' : 'text-slate-900'}`}>
                            {stats.percentage}%
                        </h1>
                        <div className="flex items-center gap-2 mt-4">
                            {parseFloat(stats.percentage) < 75 ? (
                                <div className="flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-red-100">
                                    <AlertTriangle size={12} /> Below Threshold (75%)
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                                    <CheckCircle2 size={12} /> Good Standing
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Visual Progress Circle (SVG) */}
                    <div className="relative w-28 h-28 hidden sm:block">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className={`${parseFloat(stats.percentage) < 75 ? 'text-red-500' : 'text-blue-600'}`} strokeWidth="3" strokeDasharray={`${stats.percentage}, 100`} strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-400 text-xs">LOG</div>
                    </div>
                </div>

                {/* Status Breakdown Widgets */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 w-full lg:w-[450px]">
                    <StatBox label="Total Sessions" value={stats.total} icon={<Calendar size={14} />} color="text-blue-600" />
                    <StatBox label="Present Days" value={stats.present} icon={<CheckCircle2 size={14} />} color="text-emerald-600" />
                    <StatBox label="Late Arrivals" value={stats.late} icon={<Clock size={14} />} color="text-orange-600" />
                    <StatBox label="Absent" value={stats.absent} icon={<XCircle size={14} />} color="text-red-600" />
                </div>
            </div>

            {/* --- FILTER BAR --- */}
            <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 flex items-center gap-3">
                    <Filter size={18} className="text-slate-400 ml-2" />
                    <select
                        onChange={(e) => setFilterCourse(e.target.value)}
                        className="bg-transparent border-none outline-none text-[13px] font-bold text-slate-600 w-full md:w-64"
                    >
                        <option>All Enrolled Courses</option>
                        <option>Advanced React</option>
                        <option>UI Fundamentals</option>
                        <option>Backend with Node</option>
                    </select>
                </div>
                <button className="px-6 py-3 bg-slate-50 text-slate-500 rounded-xl text-[11px] font-bold uppercase tracking-widest border border-slate-100 hover:bg-acadex-navy hover:text-white transition-all flex items-center gap-2">
                    <Download size={16} /> Export Attendance Report
                </button>
            </div>

            {/* --- ATTENDANCE HISTORY LIST --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Date & Session</th>
                                <th className="px-6 py-5">Course Title</th>
                                <th className="px-6 py-5">Marking Time</th>
                                <th className="px-6 py-5">Instructor</th>
                                <th className="px-8 py-5 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {attendanceData.map((a) => (
                                <tr key={a.id} className="hover:bg-slate-50/30 transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="text-[14px] font-semibold text-slate-900 leading-none">{a.date}</p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Academic Day</p>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2">
                                            <BookOpen size={14} className="text-blue-500" />
                                            <span className="text-[13px] font-bold text-slate-700">{a.course}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 uppercase">
                                            <Clock size={12} /> {a.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <p className="text-[12px] font-medium text-slate-600">{a.teacher}</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${a.status === 'Present' ? 'bg-emerald-50 text-emerald-600' :
                                                a.status === 'Absent' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                                            }`}>
                                            {a.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- POLICY FOOTER --- */}
            <div className={`p-6 rounded-[28px] border flex items-start gap-4 ${parseFloat(stats.percentage) < 75 ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
                <Info size={20} className={parseFloat(stats.percentage) < 75 ? 'text-red-500' : 'text-blue-500'} />
                <div>
                    <p className={`text-[13px] font-bold leading-none ${parseFloat(stats.percentage) < 75 ? 'text-red-900' : 'text-blue-900'}`}>
                        Attendance Compliance Policy (Module 4.5)
                    </p>
                    <p className={`text-[12px] font-medium mt-2 leading-relaxed italic ${parseFloat(stats.percentage) < 75 ? 'text-red-700/80' : 'text-blue-700/80'}`}>
                        A minimum of 75% attendance is mandatory for examination eligibility. Your current percentage is calculated based on present days and late entries (Late = 0.5 session).
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- MINI COMPONENTS ---
const StatBox = ({ label, value, icon, color }) => (
    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{label}</p>
            <p className={`text-xl font-black ${color} tracking-tight leading-none`}>{value}</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 border border-slate-100">
            {icon}
        </div>
    </div>
);

export default StudentAttendance;