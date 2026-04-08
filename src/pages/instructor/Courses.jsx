import React, { useState, useMemo } from 'react';
import {
    BookOpen, Users, Clock, Search, Eye,
    CheckCircle, FileText, FolderOpen,
    Calendar, MoreVertical, Layout, ArrowUpRight,
    Plus, Filter, Award
} from 'lucide-react';

const TeacherCourses = () => {
    // 1. DATA STATE (Detailed Instructor-Specific Courses)
    const [courses, setCourses] = useState([
        {
            id: "CRS-101", title: "Advanced React & Next.js", code: "FSW-401",
            batch: "Batch-04 (Evening)", students: "32", timing: "04:00 PM - 06:00 PM",
            days: "Mon, Wed, Fri", progress: 65, attendance: "94%",
            status: "Active", department: "IT & Software"
        },
        {
            id: "CRS-102", title: "UI Fundamentals & Figma", code: "UIX-202",
            batch: "Batch-02 (Morning)", students: "24", timing: "10:00 AM - 12:00 PM",
            days: "Tue, Thu", progress: 40, attendance: "88%",
            status: "Active", department: "Digital Arts"
        },
        {
            id: "CRS-103", title: "Backend Architecture with Node", code: "BE-301",
            batch: "Batch-05 (Weekend)", students: "18", timing: "02:00 PM - 05:00 PM",
            days: "Sat, Sun", progress: 15, attendance: "91%",
            status: "Starting Soon", department: "IT & Software"
        }
    ]);

    const [search, setSearch] = useState("");

    // 2. SEARCH LOGIC
    const filteredCourses = useMemo(() =>
        courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase())),
        [search, courses]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-acadex-navy text-white rounded-2xl flex items-center justify-center shadow-lg shadow-acadex-navy/20">
                        <BookOpen size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Assigned Courses</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Academic Portfolio Management</p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <SummaryItem label="Courses Teaching" value={courses.length} color="text-blue-600" />
                    <div className="w-px h-10 bg-slate-100"></div>
                    <SummaryItem label="Total Students" value="74" color="text-slate-900" />
                    <div className="w-px h-10 bg-slate-100"></div>
                    <SummaryItem label="Avg. Syllabus" value="40%" color="text-emerald-600" />
                </div>
            </div>

            {/* --- FILTER & SEARCH BAR --- */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search your courses by name or code..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20 shadow-sm"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[12px] font-bold text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                    <Filter size={16} /> Filters
                </button>
            </div>

            {/* --- COURSES GRID --- */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-all relative overflow-hidden">

                        {/* Course Status Badge */}
                        <div className="absolute top-8 right-8">
                            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${course.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                                {course.status}
                            </span>
                        </div>

                        <div className="space-y-6">
                            {/* Header Info */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">
                                    <Layout size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 leading-tight">{course.title}</h3>
                                    <p className="text-[11px] font-bold text-blue-600 mt-1 uppercase tracking-widest">{course.code} • {course.department}</p>
                                </div>
                            </div>

                            {/* Key Stats Row */}
                            <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-50">
                                <CourseMetric icon={<Users size={14} />} label="Enrolled" value={`${course.students} Students`} />
                                <CourseMetric icon={<Clock size={14} />} label="Timing" value={course.timing} />
                                <CourseMetric icon={<Calendar size={14} />} label="Days" value={course.days} />
                            </div>

                            {/* Progress Indicators */}
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Syllabus Completion</span>
                                        <span className="text-[12px] font-bold text-slate-800">{course.progress}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-acadex-navy rounded-full transition-all" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Award size={14} className="text-orange-500" />
                                        <span className="text-[11px] font-semibold text-slate-500 italic uppercase tracking-tighter">Avg Attendance: <span className="text-slate-900 font-bold not-italic">{course.attendance}</span></span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{course.batch}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions Shortcuts */}
                        <div className="mt-8 grid grid-cols-4 gap-2">
                            <ActionBtn icon={<CheckCircle size={16} />} label="Attendance" path="/instructor/attendance" color="text-blue-600" bgColor="bg-blue-50" />
                            <ActionBtn icon={<FileText size={16} />} label="Assignments" path="/instructor/assignments" color="text-indigo-600" bgColor="bg-indigo-50" />
                            <ActionBtn icon={<FolderOpen size={16} />} label="Material" path="/instructor/material" color="text-orange-600" bgColor="bg-orange-50" />
                            <ActionBtn icon={<Eye size={16} />} label="Full View" path={`/instructor/courses/${course.id}`} color="text-slate-600" bgColor="bg-slate-100" />
                        </div>
                    </div>
                ))}
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

const CourseMetric = ({ icon, label, value }) => (
    <div className="space-y-1.5">
        <div className="flex items-center gap-2">
            <span className="text-slate-300">{icon}</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
        </div>
        <p className="text-[12px] font-semibold text-slate-800 leading-tight">{value}</p>
    </div>
);

const ActionBtn = ({ icon, label, color, bgColor }) => (
    <button className={`flex flex-col items-center justify-center gap-2 p-3 rounded-2xl ${bgColor} ${color} hover:shadow-md transition-all active:scale-95`}>
        {icon}
        <span className="text-[8px] font-bold uppercase tracking-tighter">{label}</span>
    </button>
);

export default TeacherCourses;