import React, { useState, useMemo } from 'react';
import {
    Award, Search, BookOpen, FileText, Download,
    TrendingUp, CheckCircle2, Star, User,
    MoreVertical, Eye, Printer, Layout,
    ChevronRight, Info, PieChart, ShieldCheck
} from 'lucide-react';

const StudentResults = () => {
    // 1. DATA STATE: Detailed Course-wise Results
    const [results, setResults] = useState([
        {
            id: "RES-101", course: "Advanced React & Next.js", instructor: "Dr. Sohail Khan",
            marks: "88", total: "100", grade: "A+", points: "4.0", status: "Passed",
            feedback: "Outstanding performance in state management and API integration projects.",
            session: "Fall 2024"
        },
        {
            id: "RES-102", course: "UI Fundamentals & Figma", instructor: "Prof. Amna",
            marks: "72", total: "100", grade: "B", points: "3.0", status: "Passed",
            feedback: "Good creative vision. Needs to work more on design system consistency.",
            session: "Fall 2024"
        },
        {
            id: "RES-103", course: "Backend Architecture", instructor: "Zaid Ahmed",
            marks: "45", total: "100", grade: "D", points: "1.0", status: "Passed",
            feedback: "Technically sound but struggled with complex database schema relationships.",
            session: "Fall 2024"
        }
    ]);

    // 2. CALCULATE ACADEMIC PERFORMANCE (CGPA Logic)
    const stats = useMemo(() => {
        const totalPoints = results.reduce((acc, curr) => acc + parseFloat(curr.points), 0);
        const cgpa = (totalPoints / results.length).toFixed(2);
        const totalMarks = results.reduce((acc, curr) => acc + parseInt(curr.marks), 0);
        const avgPercentage = (totalMarks / (results.length * 100) * 100).toFixed(1);
        return { cgpa, avgPercentage };
    }, [results]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER: TRANSCRIPT SUMMARY --- */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main GPA Card */}
                <div className="flex-1 bg-acadex-navy p-8 rounded-[40px] text-white relative overflow-hidden flex items-center justify-between shadow-xl shadow-acadex-navy/20">
                    <div className="relative z-10 space-y-5">
                        <div>
                            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[3px] mb-2 leading-none">Cumulative Grade Point Average</p>
                            <h1 className="text-6xl font-black tracking-tighter leading-none">{stats.cgpa} <span className="text-lg text-white/30 font-bold">/ 4.0</span></h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Standing: Excellent</span>
                            <span className="px-4 py-1.5 bg-emerald-500 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">Ranked #04</span>
                        </div>
                    </div>
                    {/* Achievement Icon */}
                    <div className="relative z-10 w-32 h-32 bg-white/10 rounded-[40px] border border-white/10 flex items-center justify-center backdrop-blur-md rotate-12">
                        <Award size={64} className="text-acadex-accent -rotate-12" />
                    </div>
                    {/* Background Graphic */}
                    <PieChart className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 opacity-20" />
                </div>

                {/* Performance Analytics Widgets */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-[350px]">
                    <StatPill label="Avg. Percentage" value={`${stats.avgPercentage}%`} icon={<TrendingUp size={16} />} color="text-blue-600" />
                    <StatPill label="Courses Passed" value={results.length} icon={<CheckCircle2 size={16} />} color="text-emerald-600" />
                    <StatPill label="Credits Earned" value="12.0" icon={<BookOpen size={16} />} color="text-indigo-600" />
                </div>
            </div>

            {/* --- DETAILED REPORT TABLE --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Academic Performance Breakdown</h3>
                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mt-1">Official Semester: Fall 2024</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
                        <Printer size={16} /> Print Full Transcript
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-[2px]">
                            <tr>
                                <th className="px-8 py-5">Course / Subject</th>
                                <th className="px-6 py-5">Assigned Teacher</th>
                                <th className="px-6 py-5 text-center">Score</th>
                                <th className="px-6 py-5 text-center">Grade</th>
                                <th className="px-6 py-5">Faculty Remarks</th>
                                <th className="px-8 py-5 text-right">Certificate</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {results.map((r) => (
                                <tr key={r.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="text-[14px] font-bold text-slate-900 leading-none">{r.course}</p>
                                        <p className="text-[10px] font-bold text-blue-600 mt-2 uppercase tracking-widest leading-none">{r.id}</p>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2 text-slate-600 font-medium text-[13px]">
                                            <User size={14} className="text-slate-300" /> {r.instructor}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <p className="text-[14px] font-black text-slate-800 leading-none">{r.marks} <span className="text-slate-300 text-[11px]">/ 100</span></p>
                                        <div className="w-12 h-1 bg-slate-100 rounded-full mx-auto mt-2 overflow-hidden">
                                            <div className="h-full bg-blue-500" style={{ width: `${r.marks}%` }}></div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <div className="w-10 h-10 mx-auto bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md uppercase">
                                            {r.grade}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 max-w-[300px]">
                                        <p className="text-[12px] font-medium text-slate-500 italic leading-relaxed line-clamp-2">
                                            "{r.feedback}"
                                        </p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                            <Download size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- SECURITY VALIDATION FOOTER --- */}
            <div className="bg-emerald-50/50 p-6 rounded-[32px] border border-emerald-100 flex items-start gap-4">
                <ShieldCheck size={20} className="text-emerald-500 mt-0.5" />
                <div>
                    <p className="text-[13px] font-bold text-emerald-900 leading-none uppercase tracking-wide">Verified Transcript Node</p>
                    <p className="text-[12px] font-medium text-emerald-700/80 mt-2 leading-relaxed">
                        This digital report is cryptographically signed by the Oxford Academy Controller of Examinations. For any discrepancies, please contact the registrar's office within 7 days. (Module 4.6).
                    </p>
                </div>
            </div>
        </div>
    );
};

// MINI COMPONENTS
const StatPill = ({ label, value, icon, color }) => (
    <div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{label}</p>
            <p className={`text-xl font-black tracking-tighter leading-none ${color}`}>{value}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 border border-slate-100">
            {icon}
        </div>
    </div>
);

export default StudentResults;