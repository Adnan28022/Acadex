import React from 'react';
import {
    BookOpen, Clock, ClipboardList, Wallet, ArrowUpRight,
    CheckCircle2, AlertCircle, FileText, Layout,
    TrendingUp, Calendar
} from 'lucide-react';

const StudentDashboard = () => {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold">ZA</div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight leading-none">Hello, Zeeshan!</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-2 uppercase tracking-widest leading-none italic">Oxford Student Node • BS Software Engineering</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className={`px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl flex items-center gap-2`}>
                        <Wallet size={16} /> <span className="text-[11px] font-bold uppercase tracking-widest">Fees: All Paid</span>
                    </div>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard title="My Courses" value="04" detail="Active enrollments" icon={<BookOpen />} color="blue" />
                <MetricCard title="Attendance" value="92.4%" detail="Target: Above 75%" icon={<Clock />} color="emerald" />
                <MetricCard title="Deadlines" value="02" detail="Assignments pending" icon={<ClipboardList />} color="red" />
                <MetricCard title="CGPA / Avg" value="3.82" detail="Academic ranking: Top 5%" icon={<TrendingUp />} color="indigo" />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 1. Today's Timetable */}
                <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                    <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2"><Calendar size={16} className="text-blue-500" /> Today's Schedule</h3>
                    <div className="space-y-4">
                        <ScheduleSlot time="10:00 AM" course="Advanced React" teacher="Dr. Sohail Khan" room="Lab 01" status="Completed" />
                        <ScheduleSlot time="02:00 PM" course="UI Fundamentals" teacher="Prof. Amna" room="Studio B" status="Live Now" active />
                        <ScheduleSlot time="04:30 PM" course="Backend with Node" teacher="Dr. Sohail Khan" room="Hall A" status="Upcoming" />
                    </div>
                </div>

                {/* 2. Recent Materials & Notices */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                        <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-6">Latest Material</h3>
                        <div className="space-y-5">
                            <MaterialItem title="Lecture 08: API Integration" type="PDF" date="1h ago" />
                            <MaterialItem title="Project Starter Pack" type="ZIP" date="5h ago" />
                            <MaterialItem title="UI Component Library" type="FIG" date="Yesterday" />
                        </div>
                        <button className="w-full mt-8 py-3 bg-slate-50 text-slate-500 rounded-xl font-bold uppercase text-[9px] tracking-[2px] hover:bg-acadex-navy hover:text-white transition-all">Go to Material Hub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* Mini Helper Components */
const MetricCard = ({ title, value, detail, icon, color }) => {
    const colors = { blue: "bg-blue-50 text-blue-600", emerald: "bg-emerald-50 text-emerald-600", red: "bg-red-50 text-red-600", indigo: "bg-indigo-50 text-indigo-600" };
    return (
        <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm group">
            <div className={`w-12 h-12 rounded-2xl ${colors[color]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>{React.cloneElement(icon, { size: 24 })}</div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">{title}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3>
            <p className="text-[11px] font-medium text-slate-400 mt-1">{detail}</p>
        </div>
    );
};

const ScheduleSlot = ({ time, course, teacher, room, status, active }) => (
    <div className={`p-5 rounded-3xl border transition-all ${active ? 'bg-blue-50 border-blue-200' : 'bg-slate-50/50 border-slate-100'}`}>
        <div className="flex justify-between items-start">
            <div className="flex gap-4">
                <div className={`px-4 py-2 rounded-2xl flex flex-col items-center justify-center font-bold ${active ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}>
                    <span className="text-[12px]">{time.split(' ')[0]}</span>
                    <span className="text-[9px]">{time.split(' ')[1]}</span>
                </div>
                <div>
                    <h4 className="text-[15px] font-bold text-slate-900">{course}</h4>
                    <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{teacher} • {room}</p>
                </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${status === 'Live Now' ? 'bg-blue-100 text-blue-600 animate-pulse' : 'bg-slate-200 text-slate-500'}`}>{status}</span>
        </div>
    </div>
);

const MaterialItem = ({ title, type, date }) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600"><FileText size={16} /></div>
            <div>
                <p className="text-[12px] font-bold text-slate-800 leading-none group-hover:text-indigo-600">{title}</p>
                <p className="text-[9px] font-medium text-slate-400 mt-1 uppercase">{type} Document</p>
            </div>
        </div>
        <span className="text-[9px] font-bold text-slate-300 uppercase">{date}</span>
    </div>
);

export default StudentDashboard;