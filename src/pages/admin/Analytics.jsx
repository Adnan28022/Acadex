import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import {
    TrendingUp, Users, Wallet, Download, Calendar,
    ChevronDown, Activity, GraduationCap, Zap
} from 'lucide-react';

// --- MOCK DATA FOR CHARTS ---
const financialData = [
    { name: 'Jan', revenue: 4000, expense: 2400 },
    { name: 'Feb', revenue: 3000, expense: 1398 },
    { name: 'Mar', revenue: 2000, expense: 9800 },
    { name: 'Apr', revenue: 2780, expense: 3908 },
    { name: 'May', revenue: 1890, expense: 4800 },
    { name: 'Jun', revenue: 2390, expense: 3800 },
];

const enrollmentData = [
    { name: 'Science', value: 400 },
    { name: 'Commerce', value: 300 },
    { name: 'Arts', value: 300 },
    { name: 'IT', value: 200 },
];

const attendanceTrend = [
    { day: 'Mon', rate: 85 },
    { day: 'Tue', rate: 88 },
    { day: 'Wed', rate: 92 },
    { day: 'Thu', rate: 90 },
    { day: 'Fri', rate: 82 },
];

const COLORS = ['#3b82f6', '#6366f1', '#94a3b8', '#cbd5e1'];

const AdminAnalytics = () => {
    const [timeframe, setTimeframe] = useState('Last 6 Months');

    return (
        <div className="space-y-8 pb-12 animate-in fade-in duration-700">

            {/* 1. HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Intelligence Dashboard</h1>
                    <p className="text-[13px] font-medium text-slate-500 mt-1">Detailed performance metrics for Oxford Academy.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[12px] font-semibold text-slate-600 hover:border-acadex-navy/20 transition-all shadow-sm">
                        <Calendar size={15} /> {timeframe} <ChevronDown size={14} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-acadex-navy rounded-xl text-[12px] font-semibold text-white hover:bg-acadex-blue transition-all shadow-lg shadow-acadex-navy/10">
                        <Download size={15} /> Export PDF
                    </button>
                </div>
            </div>

            {/* 2. KPI GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnalyticCard title="Enrollment Growth" value="+24.8%" desc="Total 1,248 students" icon={<TrendingUp />} color="blue" />
                <AnalyticCard title="Collection Rate" value="92.4%" desc="8% remaining" icon={<Wallet />} color="emerald" />
                <AnalyticCard title="Staff Efficiency" value="88%" desc="Based on attendance" icon={<GraduationCap />} color="indigo" />
                <AnalyticCard title="Engagement" value="High" desc="Active in Messenger" icon={<Zap />} color="orange" />
            </div>

            {/* 3. CHARTS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 3.1 FINANCIAL BAR CHART */}
                <div className="lg:col-span-2 bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-[15px] font-semibold text-slate-900">Revenue vs Expenses</h3>
                            <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-widest">Monthly Financial Comparison</p>
                        </div>
                    </div>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={financialData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={25} />
                                <Bar dataKey="expense" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={25} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 3.2 ENROLLMENT PIE CHART */}
                <div className="bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm">
                    <h3 className="text-[15px] font-semibold text-slate-900 mb-1">Student Split</h3>
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-6">By Faculty</p>

                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={enrollmentData} innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value">
                                    {enrollmentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-6 space-y-3">
                        {enrollmentData.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                                    <span className="text-[11px] font-semibold text-slate-600">{item.name}</span>
                                </div>
                                <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. ATTENDANCE TREND (AREA CHART) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-[15px] font-semibold text-slate-900">Attendance Velocity</h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">
                            Avg 88.2%
                        </div>
                    </div>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={attendanceTrend}>
                                <defs>
                                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="rate" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-acadex-navy rounded-[28px] p-8 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10">
                        <Activity size={24} className="text-acadex-accent mb-4" />
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Active Sessions</h4>
                        <h2 className="text-4xl font-bold mt-2">142</h2>
                        <p className="text-[10px] font-medium text-white/50 mt-4 leading-relaxed uppercase tracking-tighter">Current students engaged in online materials right now.</p>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

/* --- SMALL COMPONENTS --- */
const AnalyticCard = ({ title, value, desc, icon, color }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600 border-blue-100",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
        orange: "bg-orange-50 text-orange-600 border-orange-100"
    };
    return (
        <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <div className={`w-12 h-12 rounded-2xl ${colors[color]} border flex items-center justify-center mb-5 transition-transform hover:rotate-6`}>
                {React.cloneElement(icon, { size: 22 })}
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">{title}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
            <p className="text-[11px] font-medium text-slate-400 mt-1">{desc}</p>
        </div>
    );
};

export default AdminAnalytics;