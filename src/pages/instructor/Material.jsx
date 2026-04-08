import React, { useState, useMemo } from 'react';
import {
    FolderOpen, Search, Plus, Trash2, X,
    FileText, Video, Link as LinkIcon, Download,
    MoreVertical, Filter, Eye, Cloud, CheckCircle2,
    Globe, HardDrive, Share2, Book
} from 'lucide-react';

const TeacherMaterial = () => {
    // 1. DATA STATE (Detailed Material Information)
    const [materials, setMaterials] = useState([
        {
            id: "MAT-501", title: "Introduction to Next.js 13 (App Router)", course: "Advanced React",
            type: "PDF", size: "4.2 MB", downloads: "28", date: "2024-10-15",
            description: "Complete guide on using the new app directory and server components."
        },
        {
            id: "MAT-502", title: "Figma Component Library (Starter Pack)", course: "UI/UX Masterclass",
            type: "Link", size: "---", downloads: "42", date: "2024-10-18",
            description: "Interactive figma link for the starter component library for Batch 02."
        },
        {
            id: "MAT-503", title: "API Authentication with JWT", course: "Advanced React",
            type: "Video", size: "125 MB", downloads: "15", date: "2024-10-20",
            description: "Recorded session explaining secure backend authentication flow."
        },
        {
            id: "MAT-504", title: "Python Data Science Cheat Sheet", course: "Python DS",
            type: "PDF", size: "1.5 MB", downloads: "56", date: "2024-10-22",
            description: "Quick reference guide for Pandas and NumPy libraries."
        }
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [filterCourse, setFilterCourse] = useState("All Courses");

    // 2. FILTER LOGIC
    const filteredMaterials = useMemo(() => {
        return materials.filter(m => {
            const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase());
            const matchesCourse = filterCourse === "All Courses" || m.course === filterCourse;
            return matchesSearch && matchesCourse;
        });
    }, [search, filterCourse, materials]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & CLOUD STORAGE SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center border border-orange-100 shadow-inner">
                        <FolderOpen size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Study Material Hub</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Resource Distribution Node</p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2 flex items-center justify-end gap-2"><HardDrive size={12} /> Storage Usage</p>
                        <p className="text-xl font-black text-slate-900 tracking-tighter leading-none">1.4 GB <span className="text-slate-300 text-xs">/ 5 GB</span></p>
                    </div>
                    <div className="w-px h-10 bg-slate-100"></div>
                    <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-acadex-navy text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all">
                        <Plus size={18} /> Upload Material
                    </button>
                </div>
            </div>

            {/* --- FILTER & SEARCH BAR --- */}
            <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search by document title or tag..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-orange-500/20 transition-all"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-auto">
                    <select
                        onChange={(e) => setFilterCourse(e.target.value)}
                        className="w-full md:w-56 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-[12px] font-bold text-slate-600 outline-none focus:border-orange-500/20 cursor-pointer"
                    >
                        <option>All Courses</option>
                        <option>Advanced React</option>
                        <option>UI/UX Masterclass</option>
                        <option>Python DS</option>
                    </select>
                </div>
            </div>

            {/* --- MATERIALS DATA TABLE --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Material Title & Format</th>
                                <th className="px-6 py-5">Course Assignment</th>
                                <th className="px-6 py-5 text-center">File Size</th>
                                <th className="px-6 py-5 text-center">Downloads</th>
                                <th className="px-6 py-5">Visibility</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredMaterials.map((m) => (
                                <tr key={m.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${m.type === 'PDF' ? 'bg-red-50 text-red-500 border-red-100' :
                                                    m.type === 'Video' ? 'bg-blue-50 text-blue-500 border-blue-100' :
                                                        'bg-indigo-50 text-indigo-500 border-indigo-100'
                                                }`}>
                                                {m.type === 'PDF' && <FileText size={18} />}
                                                {m.type === 'Video' && <Video size={18} />}
                                                {m.type === 'Link' && <LinkIcon size={18} />}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-semibold text-slate-900 leading-none">{m.title}</p>
                                                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">{m.type} DOCUMENT • {m.date}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2">
                                            <Book size={14} className="text-slate-300" />
                                            <span className="text-[12px] font-bold text-blue-600 uppercase tracking-tighter">{m.course}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-center text-[12px] font-bold text-slate-500">
                                        {m.size}
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full">
                                            <Download size={10} className="text-slate-400" />
                                            <span className="text-[11px] font-bold text-slate-700">{m.downloads}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2">
                                            <Globe size={14} className="text-emerald-500" />
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Public</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Eye size={16} /></button>
                                            <button onClick={() => setMaterials(materials.filter(x => x.id !== m.id))} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- MODAL: UPLOAD MATERIAL FORM --- */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={(e) => { e.preventDefault(); setIsAddModalOpen(false); }} className="bg-white w-full max-w-2xl rounded-[40px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Upload Study Resource</h2>
                            <button type="button" onClick={() => setIsAddModalOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormInput label="Resource Title" placeholder="e.g. Lec 05: Hooks Patterns" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assign to Course</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>Advanced React (Batch-04)</option>
                                    <option>UI/UX Masterclass (Batch-02)</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Resource Type</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>PDF Document</option>
                                    <option>Video Lecture</option>
                                    <option>External Link</option>
                                    <option>ZIP Archive</option>
                                </select>
                            </div>
                            <FormInput label="Display Date" type="date" />
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Brief Description</label>
                                <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium" placeholder="Describe what this resource covers..."></textarea>
                            </div>
                            <div className="md:col-span-2 border-2 border-dashed border-slate-100 rounded-3xl p-10 flex flex-col items-center justify-center text-slate-400 group hover:border-orange-400 transition-all cursor-pointer">
                                <Cloud size={40} className="mb-2 group-hover:text-orange-600 transition-colors" />
                                <span className="text-[11px] font-bold uppercase tracking-widest">Click or Drag & Drop File</span>
                                <span className="text-[9px] font-medium text-slate-300 mt-1 uppercase">Max file size: 50MB</span>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl mt-4 flex items-center justify-center gap-3">
                            <Share2 size={18} /> Publish to Student Dashboard
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

// --- MINI COMPONENTS ---
const FormInput = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input type={type} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder={placeholder} />
    </div>
);

export default TeacherMaterial;