import React, { useState, useMemo } from 'react';
import {
    Search, Filter, BookOpen, Clock, Wallet,
    Star, Users, ArrowRight, CheckCircle2,
    X, GraduationCap, Layers, ShieldCheck,
    Zap, Info, Bookmark, Calendar
} from 'lucide-react';

const BrowseCourses = () => {
    // 1. DATA STATE: Global Course Catalog
    const [courses, setCourses] = useState([
        {
            id: "FSW-2025-01", title: "Full Stack MERN Mastery", code: "FSW-101",
            instructor: "Dr. Sohail Khan", category: "Software Development",
            duration: "6 Months", fee: "45,000", rating: "4.9",
            students: "128", totalSeats: "150", level: "Intermediate",
            description: "Master MongoDB, Express, React, and Node.js with real-world industry projects.",
            features: ["Cloud Deployment", "Portfolio Building", "Weekly Live Labs"],
            status: "Available"
        },
        {
            id: "UXD-2025-02", title: "UI/UX Advanced Prototyping", code: "UXD-202",
            instructor: "Prof. Amna", category: "Digital Arts",
            duration: "3 Months", fee: "35,000", rating: "4.8",
            students: "85", totalSeats: "100", level: "Beginner",
            description: "Learn user research, high-fidelity prototyping and Figma design systems.",
            features: ["Design Thinking", "Figma Mastery", "User Testing Labs"],
            status: "Pending" // Request already sent
        },
        {
            id: "PYD-2025-03", title: "Python for Data Science", code: "DS-301",
            instructor: "Zaid Ahmed", category: "Data Science",
            duration: "4 Months", fee: "40,000", rating: "4.7",
            students: "45", totalSeats: "60", level: "Advanced",
            description: "Data analysis, Machine Learning, and visualization using Pandas & Scikit-Learn.",
            features: ["Big Data Tools", "Algorithm Training", "Live Datasets"],
            status: "Available"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [viewDetail, setViewDetail] = useState(null);

    // 2. SEARCH & FILTER
    const filtered = useMemo(() =>
        courses.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.category.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, courses]);

    // 3. ACTION: ENROLLMENT REQUEST
    const handleEnrollRequest = (id) => {
        setCourses(courses.map(c => c.id === id ? { ...c, status: "Pending" } : c));
        alert("Enrollment request has been submitted to the Admin office.");
    };

    return (
        <div className="space-y-8 pb-12">

            {/* --- HEADER: CATALOG SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-3xl font-semibold text-slate-900 tracking-tight leading-none">Course Catalog</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-3 max-w-md">Browse through {courses.length} high-impact programs and start your learning journey at Oxford Academy.</p>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="text-right px-6 border-r border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Batch</p>
                        <p className="text-xl font-black text-slate-900 leading-none mt-1">2024 - 25</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Rank</p>
                        <p className="text-xl font-black text-blue-600 leading-none mt-1">Top 1%</p>
                    </div>
                </div>
                <Zap className="absolute -right-10 -bottom-10 w-48 h-48 text-blue-50/50" />
            </div>

            {/* --- SEARCH & FILTER BAR --- */}
            <div className="bg-white p-4 rounded-[28px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search for your next skill (e.g. React, Data Science)..."
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="px-6 py-4 bg-white border border-slate-200 rounded-2xl text-[12px] font-bold text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                    <Filter size={16} /> Advanced Filters
                </button>
            </div>

            {/* --- CATALOG GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((c) => (
                    <div key={c.id} className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-all relative">

                        {/* Urgent Seats Indicator */}
                        <div className="absolute top-8 right-8">
                            <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1.5">
                                <Users size={12} /> {parseInt(c.totalSeats) - parseInt(c.students)} Seats Left
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-bold uppercase tracking-widest">{c.category}</span>
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">Code: {c.code}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{c.title}</h3>
                                <div className="flex items-center gap-2 text-amber-500">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-[12px] font-bold">{c.rating}</span>
                                    <span className="text-[11px] font-medium text-slate-400">({c.students} Learners)</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-y-4 pt-6 border-t border-slate-50">
                                <Metric icon={<Clock size={14} />} label="Duration" value={c.duration} />
                                <Metric icon={<Layers size={14} />} label="Level" value={c.level} />
                                <Metric icon={<GraduationCap size={14} />} label="Assigned" value={c.instructor.split(' ')[1]} />
                                <Metric icon={<Wallet size={14} />} label="Fee (Total)" value={`Rs. ${c.fee}`} />
                            </div>
                        </div>

                        <div className="mt-10 flex gap-3">
                            <button
                                onClick={() => setViewDetail(c)}
                                className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-100"
                            >
                                <Info size={20} />
                            </button>

                            {c.status === 'Available' ? (
                                <button
                                    onClick={() => handleEnrollRequest(c.id)}
                                    className="flex-1 py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-widest shadow-xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all flex items-center justify-center gap-3"
                                >
                                    Enroll Program <ArrowRight size={16} />
                                </button>
                            ) : (
                                <button
                                    className="flex-1 py-4 bg-amber-50 text-amber-600 rounded-2xl font-bold uppercase text-[11px] tracking-widest border border-amber-100 cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    <Clock size={16} /> Enrollment Pending
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- DETAILED COURSE MODAL --- */}
            {viewDetail && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
                    <div className="bg-white w-full max-w-2xl rounded-[48px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-10 text-white relative overflow-hidden">
                            <button onClick={() => setViewDetail(null)} className="absolute top-8 right-8 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={24} /></button>
                            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest">{viewDetail.category} Program</span>
                            <h2 className="text-3xl font-bold tracking-tight mt-6">{viewDetail.title}</h2>
                            <p className="text-white/60 text-[13px] font-medium mt-4 leading-relaxed">{viewDetail.description}</p>
                            <BookOpen className="absolute -right-12 -bottom-12 w-48 h-48 text-white/5 rotate-12" />
                        </div>
                        <div className="p-12 space-y-10">
                            <div className="grid grid-cols-2 gap-10">
                                <InfoBlock label="Lead Instructor" value={viewDetail.instructor} icon={<User size={16} />} />
                                <InfoBlock label="Financial Value" value={`Rs. ${viewDetail.fee}`} icon={<Wallet size={16} />} />
                                <InfoBlock label="Seats Capacity" value={`${viewDetail.students} / ${viewDetail.totalSeats}`} icon={<Users size={16} />} />
                                <InfoBlock label="Course Duration" value={viewDetail.duration} icon={<Calendar size={16} />} />
                            </div>

                            <div className="space-y-4">
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">Curriculum Highlights</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {viewDetail.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 text-[13px] font-semibold text-slate-700">
                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> {f}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => { handleEnrollRequest(viewDetail.id); setViewDetail(null); }}
                                className="w-full py-5 bg-acadex-navy text-white rounded-[24px] font-bold uppercase text-[12px] tracking-[2px] shadow-xl flex items-center justify-center gap-3 hover:bg-acadex-blue transition-all"
                            >
                                Submit Enrollment Request <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// MINI COMPONENTS
const Metric = ({ icon, label, value }) => (
    <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300">{icon}</div>
        <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1">{label}</p>
            <p className="text-[12px] font-bold text-slate-700 leading-none">{value}</p>
        </div>
    </div>
);

const InfoBlock = ({ label, value, icon }) => (
    <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">{icon}</div>
        <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
            <p className="text-[15px] font-bold text-slate-900 leading-tight">{value}</p>
        </div>
    </div>
);

export default BrowseCourses;