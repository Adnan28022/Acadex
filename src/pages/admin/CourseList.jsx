import React, { useState, useMemo } from 'react';
import { BookOpen, Search, Plus, Eye, Trash2, X, Clock, Users, DollarSign, Layers, Calendar, Edit3, CheckCircle2 } from 'lucide-react';

const CourseRegistry = () => {
    // 1. DATA STATE (Detailed Course Information)
    const [courses, setCourses] = useState([
        {
            id: "CRS-2025-01", title: "Full Stack Web Development", code: "FSW-101",
            instructor: "Dr. Sohail Khan", fee: "45,000", duration: "6 Months",
            level: "Intermediate", capacity: "30", enrolled: "24",
            schedule: "Mon, Wed, Fri (04:00 PM)", status: "Active", description: "MERN Stack including Next.js and Cloud deployment."
        },
        {
            id: "CRS-2025-02", title: "UI/UX Design Masterclass", code: "UXD-202",
            instructor: "Prof. Amna", fee: "35,000", duration: "3 Months",
            level: "Beginner", capacity: "25", enrolled: "12",
            schedule: "Tue, Thu (02:00 PM)", status: "Active", description: "Figma, Adobe XD, and User Research fundamentals."
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [viewCourse, setViewCourse] = useState(null);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [form, setForm] = useState({ title: '', code: '', instructor: '', fee: '', duration: '', level: 'Beginner', capacity: '', schedule: '' });

    // 2. SEARCH LOGIC
    const filtered = useMemo(() =>
        courses.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.code.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, courses]);

    // 3. ACTIONS
    const handleAddCourse = (e) => {
        e.preventDefault();
        const newCourse = { ...form, id: `CRS-2025-${Math.floor(Math.random() * 900 + 100)}`, enrolled: "0", status: "Active" };
        setCourses([...courses, newCourse]);
        setIsAddOpen(false);
    };

    const deleteCourse = (id) => {
        if (window.confirm("Are you sure to remove this course and all its data?")) {
            setCourses(courses.filter(c => c.id !== id));
        }
    };

    return (
        <div className="space-y-6 pb-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Course Catalog</h1>
                    <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Managing {courses.length} Active Specialized Programs</p>
                </div>
                <button onClick={() => setIsAddOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-acadex-navy text-white rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all shadow-xl shadow-acadex-navy/10">
                    <Plus size={18} /> Launch New Course
                </button>
            </div>

            {/* Powerful Filter Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text" placeholder="Search by course name or unique code (e.g. FSW-101)..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20 shadow-sm"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Course Table */}
            <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-5">Course Detail & Code</th>
                            <th className="px-6 py-5">Instructor / Faculty</th>
                            <th className="px-6 py-5">Duration & Level</th>
                            <th className="px-6 py-5">Fee Structure</th>
                            <th className="px-6 py-5 text-center">Enrollment</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filtered.map((c) => (
                            <tr key={c.id} className="hover:bg-slate-50 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold border border-blue-100 shadow-inner">
                                            <BookOpen size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-semibold text-slate-900 tracking-tight">{c.title}</p>
                                            <p className="text-[10px] font-bold text-blue-600 mt-1 uppercase tracking-widest">{c.code}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[13px] font-semibold text-slate-700">{c.instructor}</p>
                                    <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-tighter italic">Primary Faculty</p>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[12px] font-semibold text-slate-700">{c.duration}</p>
                                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{c.level}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[14px] font-bold text-slate-900 tracking-tighter">Rs. {c.fee}</p>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.status}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-center">
                                    <div className="flex flex-col items-center">
                                        <p className="text-[13px] font-bold text-slate-800">{c.enrolled} / {c.capacity}</p>
                                        <div className="w-16 h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                            <div className="h-full bg-acadex-navy" style={{ width: `${(c.enrolled / c.capacity) * 100}%` }}></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => setViewCourse(c)} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Eye size={16} /></button>
                                        <button onClick={() => deleteCourse(c.id)} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* VIEW MODAL: Detailed Course Profile */}
            {viewCourse && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-8 text-white flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">{viewCourse.title}</h2>
                                <p className="text-white/50 text-[12px] font-bold uppercase tracking-[3px] mt-1">{viewCourse.code} • {viewCourse.level}</p>
                            </div>
                            <button onClick={() => setViewCourse(null)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"><X size={20} /></button>
                        </div>
                        <div className="p-10">
                            <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-50">
                                <Detail label="Primary Instructor" value={viewCourse.instructor} icon={<Users size={14} />} />
                                <Detail label="Academic Fee" value={`Rs. ${viewCourse.fee}`} icon={<DollarSign size={14} />} />
                                <Detail label="Course Duration" value={viewCourse.duration} icon={<Clock size={14} />} />
                                <Detail label="Weekly Schedule" value={viewCourse.schedule} icon={<Calendar size={14} />} />
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Course Curriculum Overview</p>
                                <p className="text-[14px] font-medium text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">
                                    "{viewCourse.description}"
                                </p>
                            </div>
                            <div className="mt-10 flex gap-4">
                                <button className="flex-1 py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-widest shadow-lg">Modify Syllabus</button>
                                <button className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold uppercase text-[11px] tracking-widest">Attendance Log</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ADD MODAL: Full Onboarding Form */}
            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={handleAddCourse} className="bg-white w-full max-w-3xl rounded-[32px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Launch Specialized Program</h2>
                            <button type="button" onClick={() => setIsAddOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Input label="Course Full Name" placeholder="e.g. Graphic Design Masterclass" onChange={v => setForm({ ...form, title: v })} />
                            <Input label="Unique Course Code" placeholder="e.g. GDM-101" onChange={v => setForm({ ...form, code: v })} />
                            <Input label="Assigned Instructor" placeholder="Teacher Name" onChange={v => setForm({ ...form, instructor: v })} />
                            <Input label="Course Fee (Total)" placeholder="e.g. 25000" onChange={v => setForm({ ...form, fee: v })} />

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Learning Level</label>
                                <select onChange={e => setForm({ ...form, level: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>

                            <Input label="Course Duration" placeholder="e.g. 4 Months" onChange={v => setForm({ ...form, duration: v })} />
                            <Input label="Student Capacity" placeholder="Max Seats (e.g. 30)" onChange={v => setForm({ ...form, capacity: v })} />
                            <Input label="Class Schedule" placeholder="e.g. Mon, Thu (05:00 PM)" onChange={v => setForm({ ...form, schedule: v })} />
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/20 mt-4">Confirm & Launch Course</button>
                    </form>
                </div>
            )}
        </div>
    );
};

// MINI COMPONENTS
const Detail = ({ label, value, icon }) => (
    <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-50 rounded-lg text-slate-300 mt-1">{icon}</div>
        <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{label}</p>
            <p className="text-[14px] font-semibold text-slate-800 leading-tight">{value}</p>
        </div>
    </div>
);

const Input = ({ label, placeholder, onChange }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input required onChange={e => onChange(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-acadex-navy/20 text-[13px] font-semibold transition-all" placeholder={placeholder} />
    </div>
);

export default CourseRegistry;