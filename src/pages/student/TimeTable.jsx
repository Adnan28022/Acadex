import React, { useState, useMemo } from 'react';
import {
    Calendar, Clock, MapPin, User, BookOpen,
    ChevronRight, Download, Info, CheckCircle2,
    AlertCircle, Globe, Video, Layout
} from 'lucide-react';

const StudentTimetable = () => {
    // 1. DATA STATE: Weekly Schedule for the Student
    const [schedule, setSchedule] = useState([
        {
            id: "S-101", day: "Monday", start: "09:00 AM", end: "10:30 AM",
            course: "Advanced React Hooks", instructor: "Dr. Sohail Khan",
            room: "Lab 01 (Main)", type: "Theory", status: "Completed"
        },
        {
            id: "S-102", day: "Monday", start: "11:00 AM", end: "12:30 PM",
            course: "UI Fundamentals", instructor: "Prof. Amna",
            room: "Studio B", type: "Practical", status: "Live Now"
        },
        {
            id: "S-103", day: "Tuesday", start: "02:00 PM", end: "04:00 PM",
            course: "Backend with Node.js", instructor: "Dr. Sohail Khan",
            room: "Online (LMS Link)", type: "Theory", status: "Upcoming"
        },
        {
            id: "S-104", day: "Wednesday", start: "10:00 AM", end: "11:30 AM",
            course: "Figma Masterclass", instructor: "Prof. Amna",
            room: "Lab 04", type: "Lab", status: "Upcoming"
        }
    ]);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [activeDay, setActiveDay] = useState(days[new Date().getDay() - 1] || "Monday");

    // 2. FILTER LOGIC
    const dailyClasses = useMemo(() =>
        schedule.filter(s => s.day === activeDay).sort((a, b) => a.start.localeCompare(b.start)),
        [activeDay, schedule]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER & NEXT CLASS PREVIEW --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center border border-blue-100 shadow-inner">
                        <Calendar size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Schedule</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none italic">Session 2024 - 2025 • Your Weekly Roadmap</p>
                    </div>
                </div>

                {/* Highlight: Next Class */}
                <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-3xl text-white relative z-10 min-w-[280px]">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400">
                        <Clock size={20} />
                    </div>
                    <div>
                        <p className="text-[9px] font-bold text-white/40 uppercase tracking-[2px] leading-none mb-1.5">Up Next Today</p>
                        <h4 className="text-[13px] font-bold tracking-tight">UI Fundamentals</h4>
                        <p className="text-[11px] text-blue-400 font-medium">11:00 AM (In 15 mins)</p>
                    </div>
                    <ChevronRight size={20} className="ml-auto text-white/20" />
                </div>
            </div>

            {/* --- DAY SELECTOR --- */}
            <div className="flex bg-white p-1.5 rounded-[24px] border border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
                {days.map((day) => (
                    <button
                        key={day} onClick={() => setActiveDay(day)}
                        className={`flex-1 min-w-[120px] py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeDay === day ? 'bg-acadex-navy text-white shadow-lg' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* --- TIMETABLE FEED --- */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 1. SIDEBAR: QUICK STATS */}
                <div className="space-y-6">
                    <div className="bg-white p-7 rounded-[32px] border border-slate-100 shadow-sm">
                        <h4 className="text-[13px] font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Layout size={16} className="text-blue-500" /> Day Summary
                        </h4>
                        <div className="space-y-4">
                            <SummaryRow label="Total Classes" value={dailyClasses.length} />
                            <SummaryRow label="Learning Hours" value="3.5 hrs" />
                            <SummaryRow label="Mode" value="Hybrid" />
                        </div>
                        <button className="w-full mt-8 py-3 bg-slate-50 text-slate-500 rounded-xl font-bold uppercase text-[10px] tracking-widest border border-slate-100 hover:bg-acadex-navy hover:text-white transition-all">
                            <Download size={14} className="inline mr-2" /> Download Week PDF
                        </button>
                    </div>

                    <div className="bg-emerald-50/50 p-7 rounded-[32px] border border-emerald-100">
                        <h4 className="text-[12px] font-bold text-emerald-700 mb-4 flex items-center gap-2 uppercase tracking-widest">
                            <AlertCircle size={16} /> Student Note
                        </h4>
                        <p className="text-[11px] font-medium text-emerald-600/80 leading-relaxed italic">
                            Classrooms open 10 mins before time. For online sessions, ensure your internet is stable.
                        </p>
                    </div>
                </div>

                {/* 2. MAIN: THE SLOTS LIST */}
                <div className="lg:col-span-3 space-y-4">
                    {dailyClasses.length > 0 ? (
                        dailyClasses.map((slot) => (
                            <div key={slot.id} className={`bg-white rounded-[40px] border p-7 flex flex-col md:flex-row items-center gap-8 group transition-all shadow-sm ${slot.status === 'Live Now' ? 'border-blue-500 ring-4 ring-blue-50' : 'border-slate-100'}`}>

                                {/* Time Pillar */}
                                <div className={`flex flex-col items-center justify-center px-8 py-5 rounded-[28px] border min-w-[150px] shrink-0 ${slot.status === 'Live Now' ? 'bg-blue-600 text-white border-blue-400 shadow-xl shadow-blue-200' : 'bg-slate-50 border-slate-100 text-slate-900'}`}>
                                    <span className="text-[16px] font-black">{slot.start}</span>
                                    <span className={`text-[10px] font-bold uppercase my-1 ${slot.status === 'Live Now' ? 'text-white/50' : 'text-slate-300'}`}>To</span>
                                    <span className="text-[16px] font-black">{slot.end}</span>
                                </div>

                                {/* Main Info */}
                                <div className="flex-1 space-y-5">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${slot.type === 'Practical' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                                                    {slot.type} Session
                                                </span>
                                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{slot.id}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">{slot.course}</h3>
                                        </div>
                                        <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${slot.status === 'Live Now' ? 'bg-blue-50 text-blue-600 animate-pulse' :
                                                slot.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                                            }`}>
                                            {slot.status === 'Live Now' && <Video size={12} />}
                                            {slot.status}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-5 border-t border-slate-50">
                                        <IconMeta icon={<User size={14} />} label="Instructor" value={slot.instructor} />
                                        <IconMeta icon={<MapPin size={14} />} label="Location" value={slot.room} />
                                        <IconMeta icon={<BookOpen size={14} />} label="Resources" value="View Notes" link />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-72 bg-slate-50 rounded-[40px] border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 text-center p-8">
                            <Calendar size={56} strokeWidth={1} className="opacity-20 mb-4" />
                            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest">No Academic Sessions</h3>
                            <p className="text-[12px] font-medium text-slate-400 mt-2">There are no classes scheduled for {activeDay}. Take some rest!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- MINI COMPONENTS ---
const SummaryRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
        <span className="text-[14px] font-black text-slate-900 tracking-tight">{value}</span>
    </div>
);

const IconMeta = ({ icon, label, value, link }) => (
    <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all shrink-0">
            {icon}
        </div>
        <div className="min-w-0">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1.5">{label}</p>
            <p className={`text-[12px] font-bold truncate leading-none ${link ? 'text-blue-600 underline cursor-pointer' : 'text-slate-700'}`}>{value}</p>
        </div>
    </div>
);

export default StudentTimetable;