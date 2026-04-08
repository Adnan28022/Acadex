import React from 'react';
import { BookOpen, Users, Clock, ClipboardCheck, TrendingUp, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const TeacherDashboard = () => {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Overview</h1>
                    <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-[2px]">Welcome back, Dr. Sohail • {new Date().toDateString()}</p>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">Teaching Hours</p>
                        <p className="text-xl font-black text-slate-900 tracking-tighter leading-none">124 hrs</p>
                    </div>
                    <div className="w-px h-8 bg-slate-100"></div>
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">Student Satisfaction</p>
                        <p className="text-xl font-black text-emerald-600 tracking-tighter leading-none">98.2%</p>
                    </div>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard title="Active Courses" value="04" detail="Across 2 Faculties" icon={<BookOpen />} color="blue" />
                <MetricCard title="Total Students" value="248" detail="12 new this month" icon={<Users />} color="emerald" />
                <MetricCard title="Pending Grading" value="18" detail="Assignments to review" icon={<ClipboardCheck />} color="red" />
                <MetricCard title="Avg. Attendance" value="92%" detail="Optimal performance" icon={<TrendingUp />} color="indigo" />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 1. Today's Teaching Schedule (Timeline) */}
                <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                            <Clock size={16} className="text-blue-500" /> Today's Sessions
                        </h3>
                        <button className="text-[11px] font-bold text-blue-600 uppercase">View Full Timetable</button>
                    </div>

                    <div className="space-y-4">
                        <TimelineSlot time="09:00 AM" course="Advanced React Hooks" batch="Batch-04" room="Lab 01" status="Completed" />
                        <TimelineSlot time="11:30 AM" course="Python for Data Science" batch="Batch-02" room="Lab 03" status="In Progress" active />
                        <TimelineSlot time="04:00 PM" course="Web Deployment" batch="Batch-04" room="Online" status="Upcoming" />
                    </div>
                </div>

                {/* 2. Grading Queue (Quick Actions) */}
                <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                    <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-6">Grading Queue</h3>
                    <div className="space-y-5">
                        <GradingItem task="Mid-Term Project" course="UI/UX Masterclass" count="12" time="2h left" />
                        <GradingItem task="React Component Lab" course="Full Stack Web" count="06" time="1d left" />
                        <GradingItem task="Algorithm Quiz" course="Python DS" count="24" time="Expired" urgent />
                    </div>
                    <button className="w-full mt-10 py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold uppercase text-[10px] tracking-widest border border-slate-100 hover:bg-acadex-navy hover:text-white transition-all">Open Gradebook</button>
                </div>
            </div>
        </div>
    );
};

/* Mini Helper Components */
const MetricCard = ({ title, value, detail, icon, color }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600 border-blue-100",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
        red: "bg-red-50 text-red-600 border-red-100",
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100"
    };
    return (
        <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm group">
            <div className={`w-12 h-12 rounded-2xl ${colors[color]} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">{title}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3>
            <p className="text-[11px] font-medium text-slate-400 mt-1">{detail}</p>
        </div>
    );
};

const TimelineSlot = ({ time, course, batch, room, status, active }) => (
    <div className={`p-5 rounded-3xl border transition-all ${active ? 'bg-blue-50 border-blue-200 shadow-md ring-4 ring-blue-50' : 'bg-slate-50 border-slate-100'}`}>
        <div className="flex justify-between items-start">
            <div className="flex gap-4">
                <div className={`px-4 py-2 rounded-2xl flex flex-col items-center justify-center font-bold ${active ? 'bg-blue-600 text-white' : 'bg-white text-slate-500'}`}>
                    <span className="text-[12px] leading-none">{time.split(' ')[0]}</span>
                    <span className="text-[9px] uppercase">{time.split(' ')[1]}</span>
                </div>
                <div>
                    <h4 className="text-[15px] font-bold text-slate-900">{course}</h4>
                    <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{batch} • {room}</p>
                </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : status === 'In Progress' ? 'bg-blue-100 text-blue-600 animate-pulse' : 'bg-slate-200 text-slate-500'}`}>{status}</span>
        </div>
    </div>
);

const GradingItem = ({ task, course, count, time, urgent }) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <div className="space-y-1">
            <p className="text-[13px] font-bold text-slate-800 leading-none group-hover:text-blue-600">{task}</p>
            <p className="text-[10px] font-medium text-slate-400">{course}</p>
        </div>
        <div className="text-right">
            <p className="text-[12px] font-black text-slate-900 leading-none">{count} subs</p>
            <p className={`text-[9px] font-bold uppercase mt-1 ${urgent ? 'text-red-500' : 'text-slate-300'}`}>{time}</p>
        </div>
    </div>
);

export default TeacherDashboard;