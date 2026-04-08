import React from 'react';
import {
    Users, GraduationCap, Wallet, Receipt,
    ArrowUpRight, ArrowDownRight, Activity,
    Plus, Search, Calendar, TrendingUp,
    Clock, MoreHorizontal, AlertCircle, CheckCircle2
} from 'lucide-react';

const AdminOverview = () => {
    // Current Date for Header
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="space-y-8 pb-12 animate-in fade-in duration-700">

            {/* --- 1. WELCOME HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <Calendar size={14} className="text-slate-400" />
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{today}</span>
                    </div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">System Overview</h1>
                    <p className="text-[13px] font-medium text-slate-500">Managing Oxford International Academy operations.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                        <Receipt size={16} /> Generate Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-acadex-navy rounded-xl text-[12px] font-semibold text-white hover:bg-acadex-blue transition-all shadow-lg shadow-acadex-navy/10">
                        <Plus size={16} /> New Admission
                    </button>
                </div>
            </div>

            {/* --- 2. KEY PERFORMANCE INDICATORS (KPIs) --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Total Enrollment" value="1,248" change="+12%" icon={<Users />} color="blue" />
                <MetricCard title="Gross Revenue" value="$42,850" change="+8.4%" icon={<Wallet />} color="emerald" isTrendUp={true} />
                <MetricCard title="Operational Cost" value="$12,400" change="+2.1%" icon={<Receipt />} color="red" />
                <MetricCard title="Net Profit" value="$30,450" change="+15%" icon={<TrendingUp />} color="indigo" isTrendUp={true} />
            </div>

            {/* --- 3. MAIN ANALYTICS SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* FINANCIAL MONITOR (Income vs Expenses) */}
                <div className="lg:col-span-2 bg-white rounded-[28px] border border-slate-100 p-7 shadow-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-[14px] font-semibold text-slate-900 uppercase tracking-tight">Recent Financial Activity</h3>
                            <p className="text-[11px] font-medium text-slate-400 mt-0.5">Last 5 transactions across the institute</p>
                        </div>
                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors"><MoreHorizontal size={18} className="text-slate-400" /></button>
                    </div>

                    <div className="space-y-1">
                        <TransactionItem type="income" name="Admission Fee - Grade 11" category="Tuition" amount="+$1,200" status="Success" time="15m ago" />
                        <TransactionItem type="expense" name="Monthly Electricity Bill" category="Utility" amount="-$850" status="Paid" time="2h ago" />
                        <TransactionItem type="income" name="Course Material Sale" category="Stationary" amount="+$420" status="Success" time="5h ago" />
                        <TransactionItem type="expense" name="Staff Refreshments" category="HR/Admin" amount="-$65" status="Paid" time="1d ago" />
                        <TransactionItem type="expense" name="Broadband Subscription" category="Utility" amount="-$120" status="Paid" time="1d ago" />
                    </div>

                    <button className="w-full mt-6 py-3 text-[12px] font-semibold text-slate-500 hover:text-acadex-navy border border-dashed border-slate-200 rounded-xl transition-all">
                        View Detailed Cashbook
                    </button>
                </div>

                {/* ATTENDANCE HUB */}
                <div className="bg-white rounded-[28px] border border-slate-100 p-7 shadow-sm">
                    <h3 className="text-[14px] font-semibold text-slate-900 uppercase tracking-tight mb-8 flex items-center gap-2">
                        <Activity size={16} className="text-blue-500" /> Attendance Tracking
                    </h3>

                    <div className="space-y-8">
                        <ProgressIndicator label="Student Presence" current={1140} total={1248} color="bg-blue-500" />
                        <ProgressIndicator label="Staff Attendance" current={44} total={48} color="bg-indigo-500" />
                        <ProgressIndicator label="Support Staff" current={12} total={15} color="bg-emerald-500" />
                    </div>

                    <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <AlertCircle size={16} className="text-orange-500" />
                            <p className="text-[11px] font-medium text-slate-600 leading-relaxed">
                                <span className="font-bold text-slate-900">Note:</span> 12 Students are on short-leave today due to weather conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 4. BOTTOM GRID: ALERTS & SCHEDULES --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* UPCOMING CLASSES / EVENTS */}
                <div className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm">
                    <h4 className="text-[13px] font-semibold text-slate-900 mb-5">Current & Next Classes</h4>
                    <div className="space-y-4">
                        <ScheduleItem title="Advanced Mathematics" teacher="Dr. Sohail Khan" time="09:00 - 10:30" room="Hall A" />
                        <ScheduleItem title="Physics Lab (Practical)" teacher="Prof. Amna" time="11:00 - 12:30" room="Lab 02" />
                        <ScheduleItem title="Computer Science" teacher="Zaid Ahmed" time="11:00 - 12:30" room="Lab 04" isActive={true} />
                    </div>
                </div>

                {/* CRITICAL ALERTS */}
                <div className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm">
                    <h4 className="text-[13px] font-semibold text-slate-900 mb-5">Administrative Alerts</h4>
                    <div className="space-y-3">
                        <AlertItem label="24 Pending Fee Vouchers" type="danger" />
                        <AlertItem label="Staff Salaries Generation Due" type="warning" />
                        <AlertItem label="Weekly Backup Completed" type="success" />
                        <AlertItem label="5 Course Materials Pending" type="info" />
                    </div>
                </div>

                {/* QUICK INSTITUTE INFO */}
                <div className="bg-acadex-navy rounded-[28px] p-7 text-white shadow-xl shadow-acadex-navy/10 relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <CheckCircle2 size={24} className="text-acadex-accent" />
                            <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[10px] font-semibold tracking-widest uppercase">Health</span>
                        </div>
                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">Storage Efficiency</p>
                        <h2 className="text-3xl font-semibold mt-1 tracking-tight">84.2%</h2>
                    </div>
                    <div className="relative z-10 mt-6">
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[84%] bg-acadex-accent rounded-full transition-all"></div>
                        </div>
                    </div>
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                </div>

            </div>
        </div>
    );
};

/* --- MINI COMPONENTS (CLEAN & NON-BOLD FOCUS) --- */

const MetricCard = ({ title, value, change, icon, color, isTrendUp }) => {
    const palette = {
        blue: "bg-blue-50 text-blue-600 border-blue-100",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
        red: "bg-red-50 text-red-600 border-red-100",
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100"
    };
    return (
        <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm group hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-5">
                <div className={`w-11 h-11 rounded-xl ${palette[color]} flex items-center justify-center border shadow-sm transition-transform group-hover:scale-110`}>
                    {React.cloneElement(icon, { size: 20 })}
                </div>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${isTrendUp ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"}`}>
                    {change}
                </div>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[1.5px] mb-1">{title}</p>
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">{value}</h3>
        </div>
    );
};

const TransactionItem = ({ type, name, category, amount, time, status }) => (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50/80 rounded-2xl transition-all border border-transparent hover:border-slate-100">
        <div className="flex items-center gap-4">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {type === 'income' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            </div>
            <div>
                <p className="text-[13px] font-semibold text-slate-800 tracking-tight leading-none">{name}</p>
                <p className="text-[11px] font-medium text-slate-400 mt-1.5">{category} • {time}</p>
            </div>
        </div>
        <div className="text-right">
            <p className={`text-[13px] font-semibold ${type === 'income' ? 'text-emerald-600' : 'text-slate-900'}`}>{amount}</p>
            <p className="text-[9px] font-bold text-slate-300 uppercase mt-1 tracking-widest">{status}</p>
        </div>
    </div>
);

const ProgressIndicator = ({ label, current, total, color }) => {
    const percentage = (current / total) * 100;
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-end">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{label}</span>
                <span className="text-[12px] font-semibold text-slate-900">{current} <span className="text-slate-300 font-medium">/ {total}</span></span>
            </div>
            <div className="h-2 w-full bg-slate-50 rounded-full border border-slate-100 overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

const ScheduleItem = ({ title, teacher, time, room, isActive }) => (
    <div className={`p-4 rounded-2xl border transition-all ${isActive ? 'bg-blue-50 border-blue-100 shadow-sm' : 'bg-slate-50/50 border-slate-100'}`}>
        <div className="flex justify-between items-start mb-1">
            <p className="text-[13px] font-semibold text-slate-900">{title}</p>
            {isActive && <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>}
        </div>
        <p className="text-[11px] font-medium text-slate-500">{teacher}</p>
        <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                <Clock size={12} /> {time}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 uppercase">
                <Activity size={12} /> {room}
            </div>
        </div>
    </div>
);

const AlertItem = ({ label, type }) => {
    const styles = {
        danger: "bg-red-50 text-red-600 border-red-100",
        warning: "bg-amber-50 text-amber-600 border-amber-100",
        success: "bg-emerald-50 text-emerald-600 border-emerald-100",
        info: "bg-blue-50 text-blue-600 border-blue-100"
    };
    return (
        <div className={`px-4 py-3 rounded-xl border text-[11px] font-semibold flex items-center justify-between ${styles[type]}`}>
            {label} <ArrowUpRight size={14} className="opacity-50" />
        </div>
    );
};

export default AdminOverview;