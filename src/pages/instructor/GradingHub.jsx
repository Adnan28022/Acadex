import React, { useState, useMemo } from 'react';
import {
    Award, Search, Filter, CheckCircle2,
    XCircle, Clock, FileText, Download,
    Save, Eye, MoreHorizontal, MessageSquare,
    ChevronRight, AlertCircle, TrendingUp
} from 'lucide-react';

const TeacherGrading = () => {
    // 1. DATA STATE: Submissions for a specific Assignment
    const [submissions, setSubmissions] = useState([
        {
            id: "SUB-001", studentId: "ACD-101", name: "Zeeshan Ali",
            submittedAt: "2024-11-05 10:15 AM", status: "Pending",
            isLate: false, file: "react-lab-1.zip", marks: "", feedback: ""
        },
        {
            id: "SUB-002", studentId: "ACD-102", name: "Sara Khan",
            submittedAt: "2024-11-06 02:30 PM", status: "Graded",
            isLate: true, file: "ui-figma-file.pdf", marks: "85", feedback: "Excellent prototyping skills."
        },
        {
            id: "SUB-003", studentId: "ACD-103", name: "Ahmed Raza",
            submittedAt: "2024-11-05 11:55 PM", status: "Pending",
            isLate: false, file: "logic-test.js", marks: "", feedback: ""
        }
    ]);

    const [selectedAssignment, setSelectedAssignment] = useState("React Components Lab");
    const [searchTerm, setSearchTerm] = useState("");

    // 2. ACTIONS
    const handleGradeUpdate = (id, field, value) => {
        setSubmissions(prev => prev.map(s =>
            s.id === id ? { ...s, [field]: value } : s
        ));
    };

    const finalizeGrade = (id) => {
        setSubmissions(prev => prev.map(s =>
            s.id === id ? { ...s, status: "Graded" } : s
        ));
        alert("Grade and Feedback published to student portal.");
    };

    // 3. STATS
    const stats = useMemo(() => {
        const graded = submissions.filter(s => s.status === 'Graded').length;
        return { graded, pending: submissions.length - graded, total: submissions.length };
    }, [submissions]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER: GRADING CONTEXT --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner">
                        <Award size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Grading Center</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest flex items-center gap-2">
                            <FileText size={14} className="text-emerald-500" /> Reviewing: {selectedAssignment}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <SummaryItem label="Grading Progress" value={`${stats.graded} / ${stats.total}`} color="text-emerald-600" />
                    <div className="w-px h-10 bg-slate-100"></div>
                    <SummaryItem label="Pending Review" value={stats.pending} color="text-orange-600" />
                    <button className="flex items-center gap-2 px-6 py-3 bg-acadex-navy text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all">
                        <Download size={16} /> Export Gradebook
                    </button>
                </div>
            </div>

            {/* --- SELECTION & FILTER BAR --- */}
            <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-80">
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[12px] font-bold text-slate-700 outline-none focus:border-emerald-500/20">
                        <option>React Components Lab</option>
                        <option>Express API Integration</option>
                        <option>UI Fundamentals Quiz</option>
                    </select>
                </div>
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Find student by name or ID..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-emerald-500/20"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* --- SUBMISSIONS LIST --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Student Learner</th>
                                <th className="px-6 py-5">Submission Detail</th>
                                <th className="px-6 py-5">Attachment</th>
                                <th className="px-6 py-5 w-[120px]">Score (0-100)</th>
                                <th className="px-6 py-5">Evaluator Feedback</th>
                                <th className="px-8 py-5 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {submissions.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((s) => (
                                <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <p className="text-[14px] font-semibold text-slate-900 leading-none">{s.name}</p>
                                        <p className="text-[10px] font-bold text-blue-600 mt-2 uppercase tracking-widest leading-none">{s.studentId}</p>
                                    </td>
                                    <td className="px-6 py-6">
                                        <p className="text-[12px] font-medium text-slate-500 leading-none">{s.submittedAt}</p>
                                        {s.isLate ? (
                                            <div className="flex items-center gap-1.5 mt-2 text-red-500 font-bold text-[9px] uppercase tracking-widest">
                                                <AlertCircle size={10} /> Late Submission
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 mt-2 text-emerald-500 font-bold text-[9px] uppercase tracking-widest">
                                                <CheckCircle2 size={10} /> On Time
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-6">
                                        <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-acadex-navy hover:text-white rounded-lg text-[11px] font-bold text-slate-600 transition-all uppercase">
                                            <Download size={14} /> {s.file.split('.')[1]}
                                        </button>
                                    </td>
                                    <td className="px-6 py-6">
                                        <input
                                            type="number" min="0" max="100"
                                            value={s.marks} placeholder="--"
                                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-bold text-slate-900 outline-none focus:border-emerald-500"
                                            onChange={(e) => handleGradeUpdate(s.id, 'marks', e.target.value)}
                                        />
                                    </td>
                                    <td className="px-6 py-6">
                                        <input
                                            type="text" value={s.feedback}
                                            placeholder="Write remarks..."
                                            className="w-full bg-transparent border-b border-slate-100 py-1 text-[12px] font-medium text-slate-600 outline-none focus:border-emerald-500"
                                            onChange={(e) => handleGradeUpdate(s.id, 'feedback', e.target.value)}
                                        />
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        {s.status === 'Graded' ? (
                                            <div className="flex items-center justify-end gap-2 text-emerald-600">
                                                <CheckCircle2 size={18} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Published</span>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => finalizeGrade(s.id)}
                                                className="p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/10"
                                            >
                                                <Save size={18} />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- GRADING POLICY REMINDER --- */}
            <div className="bg-amber-50 p-6 rounded-[28px] border border-amber-100 flex items-start gap-4">
                <AlertCircle size={20} className="text-amber-600 mt-0.5" />
                <div>
                    <p className="text-[13px] font-bold text-amber-900 leading-none">Institutional Grading Policy</p>
                    <p className="text-[12px] font-medium text-amber-700/80 mt-2 leading-relaxed italic">
                        Once grades are published, they will be instantly visible on the Student Dashboard. System marks submissions past the deadline as "Late" automatically (Module 4.6).
                    </p>
                </div>
            </div>
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

export default TeacherGrading;