import React, { useState, useMemo } from 'react';
import {
    Trophy, FileText, Plus, Search, Eye, Trash2, X,
    ClipboardCheck, Award, TrendingUp, Calendar,
    BookOpen, CheckCircle2, AlertCircle, Download
} from 'lucide-react';

const ExamResultHub = () => {
    const [activeTab, setActiveTab] = useState('Results'); // Tabs: Exams / Results
    const [searchTerm, setSearchTerm] = useState("");
    const [isAddExamOpen, setIsAddExamOpen] = useState(false);
    const [viewResult, setViewResult] = useState(null);

    // 1. DATA STATE: Exam Schedules
    const [exams, setExams] = useState([
        { id: "EXM-001", title: "Mid-Term Examination", course: "Web Development", date: "2024-11-15", totalMarks: "100", passMarks: "40", status: "Upcoming" },
        { id: "EXM-002", title: "Final Certification", course: "UI/UX Design", date: "2024-12-20", totalMarks: "150", passMarks: "60", status: "Upcoming" }
    ]);

    // 2. DATA STATE: Results (Strong Information)
    const [results, setResults] = useState([
        {
            id: "RES-501", studentId: "ACD-101", name: "Zeeshan Ali", exam: "Mid-Term",
            course: "Web Development", marks: "88", total: "100",
            grade: "A+", status: "Passed", remarks: "Excellent logical skills."
        },
        {
            id: "RES-502", studentId: "ACD-102", name: "Sara Khan", exam: "Mid-Term",
            course: "Web Development", marks: "35", total: "100",
            grade: "F", status: "Failed", remarks: "Needs more practice in CSS."
        }
    ]);

    // 3. SEARCH LOGIC
    const filteredResults = useMemo(() =>
        results.filter(r => r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.studentId.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, results]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- HEADER & SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Examination & Results Hub</h1>
                    <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest">Academic Assessment Management Node</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                        {['Results', 'Exams'].map((tab) => (
                            <button
                                key={tab} onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-acadex-navy text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- ANALYTICS WIDGETS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard title="Avg. Score" value="74.2%" icon={<TrendingUp />} color="blue" />
                <MetricCard title="Pass Rate" value="88.5%" icon={<Award />} color="emerald" />
                <MetricCard title="Failed Students" value="12" icon={<AlertCircle />} color="red" />
                <MetricCard title="Upcoming Exams" value="03" icon={<Calendar />} color="indigo" />
            </div>

            {/* --- ACTION BAR --- */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder={`Search ${activeTab.toLowerCase()} by student name, ID or exam...`}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-acadex-navy/20 shadow-sm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                    <Download size={16} /> Export Sheets
                </button>
                {activeTab === 'Exams' && (
                    <button onClick={() => setIsAddExamOpen(true)} className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-acadex-navy text-white rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all shadow-xl shadow-acadex-navy/10">
                        <Plus size={18} /> Create Exam
                    </button>
                )}
            </div>

            {/* --- DATA DISPLAY --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    {activeTab === 'Results' ? (
                        /* RESULTS TABLE */
                        <>
                            <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                <tr>
                                    <th className="px-8 py-5">Student Information</th>
                                    <th className="px-6 py-5">Exam & Course</th>
                                    <th className="px-6 py-5 text-center">Score / Total</th>
                                    <th className="px-6 py-5 text-center">Grade</th>
                                    <th className="px-6 py-5">Status</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredResults.map((r) => (
                                    <tr key={r.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs tracking-tighter">ID</div>
                                                <div>
                                                    <p className="text-[13px] font-semibold text-slate-900">{r.name}</p>
                                                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none mt-1">{r.studentId}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <p className="text-[13px] font-semibold text-slate-700">{r.exam}</p>
                                            <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-tighter">{r.course}</p>
                                        </td>
                                        <td className="px-6 py-6 text-center">
                                            <p className="text-[14px] font-bold text-slate-900 leading-none">{r.marks} <span className="text-slate-300 font-medium text-xs">/ {r.total}</span></p>
                                            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">{((r.marks / r.total) * 100).toFixed(1)}%</p>
                                        </td>
                                        <td className="px-6 py-6 text-center">
                                            <div className="w-10 h-10 mx-auto bg-acadex-navy text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg shadow-acadex-navy/10">{r.grade}</div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${r.status === 'Passed' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                                {r.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => setViewResult(r)} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Eye size={16} /></button>
                                                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all"><FileText size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    ) : (
                        /* EXAMS SCHEDULE TABLE */
                        <>
                            <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                <tr>
                                    <th className="px-8 py-5">Examination Title</th>
                                    <th className="px-6 py-5">Related Course</th>
                                    <th className="px-6 py-5 text-center">Passing Marks</th>
                                    <th className="px-6 py-5">Exam Date</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {exams.map((e) => (
                                    <tr key={e.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-8 py-6">
                                            <p className="text-[14px] font-semibold text-slate-900">{e.title}</p>
                                            <p className="text-[10px] font-bold text-blue-600 mt-1 uppercase tracking-widest leading-none">{e.id}</p>
                                        </td>
                                        <td className="px-6 py-6">
                                            <p className="text-[13px] font-semibold text-slate-700">{e.course}</p>
                                            <p className="text-[11px] font-medium text-slate-400 mt-1">Full Certification</p>
                                        </td>
                                        <td className="px-6 py-6 text-center">
                                            <p className="text-[14px] font-bold text-slate-900">{e.passMarks} <span className="text-slate-300 text-[11px] font-medium">/ {e.totalMarks}</span></p>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-2 text-slate-600 font-semibold text-[13px]">
                                                <Calendar size={14} className="text-slate-400" /> {e.date}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button onClick={() => setExams(exams.filter(x => x.id !== e.id))} className="p-2.5 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    )}
                </table>
            </div>

            {/* --- DETAILED VIEW RESULT MODAL --- */}
            {viewResult && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-8 text-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">Academic Achievement</h2>
                                    <p className="text-white/50 text-[11px] font-bold uppercase tracking-[3px] mt-1">{viewResult.exam} • 2024</p>
                                </div>
                                <button onClick={() => setViewResult(null)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"><X size={20} /></button>
                            </div>
                            <div className="mt-8 flex items-center gap-5">
                                <div className="w-16 h-16 bg-acadex-accent text-acadex-navy rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-acadex-accent/20">
                                    {viewResult.grade}
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">{viewResult.name}</p>
                                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{viewResult.studentId}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="grid grid-cols-2 gap-8 border-b border-slate-50 pb-8">
                                <InfoItem label="Obtained Marks" value={`${viewResult.marks} / ${viewResult.total}`} />
                                <InfoItem label="Percentage" value={`${((viewResult.marks / viewResult.total) * 100).toFixed(1)}%`} />
                                <InfoItem label="Subject" value={viewResult.course} />
                                <InfoItem label="Result Status" value={viewResult.status} />
                            </div>
                            <div className="space-y-3">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Evaluator Remarks</p>
                                <p className="text-[13px] font-medium text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 italic leading-relaxed">
                                    "{viewResult.remarks}"
                                </p>
                            </div>
                            <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-[2px] shadow-xl">Download Official Marksheet</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// MINI COMPONENTS
const MetricCard = ({ title, value, icon, color }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600",
        emerald: "bg-emerald-50 text-emerald-600",
        red: "bg-red-50 text-red-600",
        indigo: "bg-indigo-50 text-indigo-600"
    };
    return (
        <div className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl ${colors[color]} flex items-center justify-center shrink-0`}>
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{title}</p>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{value}</h3>
            </div>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
        <p className="text-[15px] font-semibold text-slate-800">{value}</p>
    </div>
);

export default ExamResultHub;