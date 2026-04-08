import React, { useState, useMemo } from 'react';
import {
    ClipboardList, Search, Download, Upload, Eye,
    Clock, Calendar, BookOpen, AlertCircle,
    CheckCircle2, X, FileText, Award, MessageSquare,
    ChevronRight, Filter, Send, Cloud
} from 'lucide-react';

const StudentAssignments = () => {
    // 1. DATA STATE: Detailed Assignments with different statuses
    const [assignments, setAssignments] = useState([
        {
            id: "ASN-401", title: "React Components & Props Lab", course: "Advanced React",
            deadline: "2024-11-10 11:59 PM", marks: "50", status: "Pending",
            instructor: "Dr. Sohail Khan", file: "react_lab_prompt.pdf",
            description: "Build a modular UI with at least 5 functional components using props drilling and state."
        },
        {
            id: "ASN-402", title: "Figma Prototyping Final", course: "UI/UX Masterclass",
            deadline: "2024-10-30 06:00 PM", marks: "100", status: "Graded",
            instructor: "Prof. Amna", score: "88", feedback: "Excellent prototyping skills. Work on spacing.",
            description: "Submit a high-fidelity prototype of a food delivery app with at least 10 screens."
        },
        {
            id: "ASN-403", title: "API Integration Project", course: "Advanced React",
            deadline: "2024-11-15 12:00 PM", marks: "75", status: "Submitted",
            instructor: "Dr. Sohail Khan", submittedOn: "2024-11-05",
            description: "Connect your React frontend with a public REST API and display data in cards."
        }
    ]);

    const [filterTab, setFilterTab] = useState("All Tasks");
    const [selectedAsn, setSelectedAsn] = useState(null); // For Submission Modal

    // 2. FILTER LOGIC
    const filtered = useMemo(() => {
        if (filterTab === "All Tasks") return assignments;
        return assignments.filter(a => a.status === filterTab);
    }, [filterTab, assignments]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & TASK SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-inner">
                        <ClipboardList size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Tasks</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Manage your submissions & grades</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <TabButton label="All Tasks" active={filterTab === "All Tasks"} onClick={() => setFilterTab("All Tasks")} />
                    <TabButton label="Pending" active={filterTab === "Pending"} onClick={() => setFilterTab("Pending")} />
                    <TabButton label="Graded" active={filterTab === "Graded"} onClick={() => setFilterTab("Graded")} />
                </div>
            </div>

            {/* --- ASSIGNMENT LIST --- */}
            <div className="grid grid-cols-1 gap-4">
                {filtered.map((asn) => (
                    <div key={asn.id} className="bg-white rounded-[32px] border border-slate-100 p-6 flex flex-col xl:flex-row items-center gap-8 group hover:border-blue-200 transition-all shadow-sm">

                        {/* Task Meta Info */}
                        <div className="w-full xl:w-[300px] shrink-0 border-b xl:border-b-0 xl:border-r border-slate-50 pb-4 xl:pb-0">
                            <div className="flex items-center gap-2 mb-2">
                                <BookOpen size={14} className="text-blue-500" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{asn.course}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{asn.title}</h3>
                            <p className="text-[11px] font-bold text-slate-300 uppercase mt-2 tracking-widest">{asn.id} • {asn.instructor}</p>
                        </div>

                        {/* Middle Content: Deadline & Status */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                            <div className="space-y-1">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none flex items-center gap-1.5"><Calendar size={10} /> Submission Deadline</p>
                                <p className="text-[13px] font-bold text-slate-700 leading-none">{asn.deadline}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none flex items-center gap-1.5"><Award size={10} /> Total Marks</p>
                                <p className="text-[13px] font-bold text-slate-700 leading-none">{asn.marks} Points</p>
                            </div>
                            <div className="hidden md:block space-y-1">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none flex items-center gap-1.5"><Clock size={10} /> Task Status</p>
                                <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${asn.status === 'Graded' ? 'bg-emerald-50 text-emerald-600' :
                                        asn.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                    {asn.status}
                                </span>
                            </div>
                        </div>

                        {/* Grading Preview (If Graded) */}
                        {asn.status === 'Graded' && (
                            <div className="w-full xl:w-[150px] flex flex-col items-center xl:items-end border-t xl:border-t-0 pt-4 xl:pt-0 border-slate-50">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Grade</p>
                                <div className="text-2xl font-black text-blue-600 leading-none">{asn.score}<span className="text-[12px] text-slate-300 font-bold"> / {asn.marks}</span></div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2 w-full xl:w-auto">
                            {asn.status === 'Pending' ? (
                                <button
                                    onClick={() => setSelectedAsn(asn)}
                                    className="flex-1 xl:flex-none px-6 py-3.5 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all flex items-center justify-center gap-2"
                                >
                                    <Upload size={16} /> Submit Now
                                </button>
                            ) : (
                                <button
                                    onClick={() => setSelectedAsn(asn)}
                                    className="flex-1 xl:flex-none px-6 py-3.5 bg-slate-50 text-slate-600 rounded-2xl font-bold uppercase text-[10px] tracking-widest border border-slate-100 hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                                >
                                    <Eye size={16} /> View Details
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- SUBMISSION & DETAILS MODAL --- */}
            {selectedAsn && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl">
                        {/* Modal Header */}
                        <div className="bg-acadex-navy p-10 text-white relative">
                            <button onClick={() => setSelectedAsn(null)} className="absolute top-8 right-8 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={24} /></button>
                            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest">{selectedAsn.course}</span>
                            <h2 className="text-3xl font-bold tracking-tight mt-6">{selectedAsn.title}</h2>
                            <p className="text-white/50 text-[13px] font-medium mt-4 leading-relaxed">{selectedAsn.description}</p>
                        </div>

                        {/* Modal Body */}
                        <div className="p-10 space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <InfoItem label="Deadline Date" value={selectedAsn.deadline} icon={<Calendar size={16} />} />
                                <InfoItem label="Total Potential" value={`${selectedAsn.marks} Points`} icon={<Award size={16} />} />
                            </div>

                            {/* Conditional Rendering for Graded Feedback */}
                            {selectedAsn.status === 'Graded' ? (
                                <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Instructor Feedback</p>
                                        <div className="text-lg font-black text-blue-700">{selectedAsn.score} / {selectedAsn.marks}</div>
                                    </div>
                                    <p className="text-[14px] font-medium text-slate-700 italic leading-relaxed">
                                        <MessageSquare size={16} className="inline mr-2 text-blue-300" />
                                        "{selectedAsn.feedback}"
                                    </p>
                                </div>
                            ) : selectedAsn.status === 'Pending' ? (
                                /* File Upload Section */
                                <div className="space-y-4">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Upload your solution</p>
                                    <div className="border-2 border-dashed border-slate-100 rounded-[32px] p-12 flex flex-col items-center justify-center text-slate-300 group hover:border-blue-300 transition-all cursor-pointer">
                                        <Cloud size={48} strokeWidth={1.5} className="mb-3 group-hover:text-blue-500 transition-colors" />
                                        <p className="text-[12px] font-bold uppercase tracking-widest group-hover:text-slate-600 transition-colors">Select Zip or PDF file</p>
                                        <p className="text-[10px] font-medium uppercase mt-1">Maximum limit: 20MB</p>
                                    </div>
                                    <button className="w-full py-5 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[12px] tracking-[2px] shadow-xl flex items-center justify-center gap-3 hover:bg-acadex-blue transition-all">
                                        <Send size={18} /> Push Submission
                                    </button>
                                </div>
                            ) : (
                                <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center gap-4">
                                    <CheckCircle2 size={24} className="text-emerald-500" />
                                    <div>
                                        <p className="text-[13px] font-bold text-emerald-800 leading-none">Submission Successful</p>
                                        <p className="text-[11px] font-medium text-emerald-600 mt-1.5 uppercase">Waiting for teacher evaluation</p>
                                    </div>
                                </div>
                            )}

                            <button className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold uppercase text-[10px] tracking-widest border border-slate-100 hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                                <Download size={16} /> Download Task Prompt (PDF)
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// MINI COMPONENTS
const TabButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${active ? 'bg-acadex-navy text-white shadow-lg' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
    >
        {label}
    </button>
);

const InfoItem = ({ label, value, icon }) => (
    <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-50 rounded-lg text-slate-300">{icon}</div>
        <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{label}</p>
            <p className="text-[14px] font-bold text-slate-800 leading-tight">{value}</p>
        </div>
    </div>
);

export default StudentAssignments;