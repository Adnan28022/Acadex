import React, { useState, useMemo } from 'react';
import {
    FolderOpen, Search, Download, Eye, FileText,
    Video, Link as LinkIcon, Filter, Clock,
    User, BookOpen, Layers, HardDrive,
    ExternalLink, CheckCircle2, ChevronRight,
    Info, Globe, Bookmark
} from 'lucide-react';

const StudentMaterial = () => {
    // 1. DATA STATE: Resources shared with the student across their courses
    const [materials, setMaterials] = useState([
        {
            id: "MAT-2025-01", title: "Introduction to Next.js App Router", course: "Advanced React",
            type: "PDF", size: "4.5 MB", instructor: "Dr. Sohail Khan", date: "2024-10-25",
            description: "Detailed notes covering server vs client components and routing patterns."
        },
        {
            id: "MAT-2025-02", title: "Figma UI Kit: Dashboard Master", course: "UI/UX Masterclass",
            type: "Link", size: "---", instructor: "Prof. Amna", date: "2024-10-22",
            description: "Interactive figma link for the dashboard components used in today's lab."
        },
        {
            id: "MAT-2025-03", title: "API Authentication Workflow (Video)", course: "Advanced React",
            type: "Video", size: "125 MB", instructor: "Dr. Sohail Khan", date: "2024-10-20",
            description: "Recorded session from the weekend workshop on JWT and Middleware."
        },
        {
            id: "MAT-2025-04", title: "Database Schema Design Patterns", course: "Backend with Node",
            type: "ZIP", size: "12 MB", instructor: "Zaid Ahmed", date: "2024-10-18",
            description: "Sample SQL/NoSQL schemas and architectural diagrams."
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("All Courses");

    // 2. FILTER LOGIC
    const filteredMaterials = useMemo(() => {
        return materials.filter(m => {
            const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCourse = activeFilter === "All Courses" || m.course === activeFilter;
            return matchesSearch && matchesCourse;
        });
    }, [searchTerm, activeFilter, materials]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & RECENT SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                        <FolderOpen size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Study Material Hub</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none flex items-center gap-2">
                            Academic Resources & Notes
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">My Library</p>
                        <p className="text-xl font-black text-slate-900 tracking-tighter leading-none">{materials.length} Documents</p>
                    </div>
                    <div className="w-px h-10 bg-slate-100"></div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
                        <Bookmark size={16} /> Saved Items
                    </button>
                </div>
            </div>

            {/* --- SEARCH & QUICK FILTER BAR --- */}
            <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search by document title, instructor or topic..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-indigo-600/20"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-auto">
                    <select
                        onChange={(e) => setActiveFilter(e.target.value)}
                        className="w-full md:w-64 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-[12px] font-bold text-slate-600 outline-none focus:border-indigo-600/20"
                    >
                        <option>All Enrolled Courses</option>
                        <option>Advanced React</option>
                        <option>UI/UX Masterclass</option>
                        <option>Backend with Node</option>
                    </select>
                </div>
            </div>

            {/* --- MATERIAL LIST (GRID) --- */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {filteredMaterials.map((m) => (
                    <div key={m.id} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm flex flex-col justify-between group hover:border-indigo-200 transition-all relative overflow-hidden">

                        {/* File Format Badge */}
                        <div className="absolute top-8 right-8">
                            <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${m.type === 'PDF' ? 'bg-red-50 text-red-600 border border-red-100' :
                                    m.type === 'Video' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                                        m.type === 'Link' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                                            'bg-slate-50 text-slate-600 border border-slate-100'
                                }`}>
                                {m.type} Format
                            </span>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all shrink-0">
                                        {m.type === 'PDF' && <FileText size={24} />}
                                        {m.type === 'Video' && <Video size={24} />}
                                        {m.type === 'Link' && <LinkIcon size={24} />}
                                        {m.type === 'ZIP' && <HardDrive size={24} />}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <BookOpen size={12} className="text-blue-500" />
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.course}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{m.title}</h3>
                                    </div>
                                </div>
                                <p className="text-[13px] font-medium text-slate-500 leading-relaxed italic">
                                    "{m.description}"
                                </p>
                            </div>

                            {/* Metadata Row */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-50">
                                <MetaBox icon={<User size={14} />} label="Instructor" value={m.instructor.split(' ')[1]} />
                                <MetaBox icon={<Clock size={14} />} label="Shared On" value={m.date} />
                                <MetaBox icon={<HardDrive size={14} />} label="File Size" value={m.size} />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex gap-3">
                            <button className="flex-1 py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold uppercase text-[10px] tracking-widest border border-slate-100 hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                                <Eye size={16} /> Preview
                            </button>
                            <button className="flex-[2] py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all flex items-center justify-center gap-3">
                                {m.type === 'Link' ? (
                                    <><ExternalLink size={18} /> Open Resource</>
                                ) : (
                                    <><Download size={18} /> Download Now</>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- COMPLIANCE FOOTER --- */}
            <div className="bg-blue-50 p-6 rounded-[28px] border border-blue-100 flex items-start gap-4">
                <Info size={20} className="text-blue-500 mt-0.5" />
                <div>
                    <p className="text-[13px] font-bold text-blue-900 leading-none">Copyright & Resource Policy</p>
                    <p className="text-[12px] font-medium text-blue-700/80 mt-2 leading-relaxed">
                        Study materials are provided strictly for individual academic use. Redistribution of these resources outside the Oxford Academy portal is prohibited.
                    </p>
                </div>
            </div>
        </div>
    );
};

// MINI COMPONENTS
const MetaBox = ({ icon, label, value }) => (
    <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-slate-300">
            {icon}
            <span className="text-[9px] font-bold uppercase tracking-tighter leading-none">{label}</span>
        </div>
        <p className="text-[12px] font-bold text-slate-700 leading-none">{value}</p>
    </div>
);

export default StudentMaterial;