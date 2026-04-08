import React from 'react';
import {
    Building2, Users, CreditCard, TrendingUp,
    ArrowUpRight, Clock, Globe, ShieldCheck,
    Activity, AlertTriangle, ChevronRight, Zap
} from 'lucide-react';

const SuperAdminOverview = () => {
    return (
        <div className="animate-fade-in space-y-6 pb-6">
            {/* 1. TOP HEADER SECTION */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Live</span>
                    </div>
                    <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Global Command Center</h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Monitoring <span className="text-blue-600 font-semibold">148 Institutes</span> globally.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl font-semibold text-[11px] hover:bg-slate-50 transition-all shadow-sm">
                        Audit Logs
                    </button>
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-xl font-semibold text-[11px] shadow-sm hover:bg-slate-800 transition-all">
                        Global Report
                    </button>
                </div>
            </div>

            {/* 2. CORE PERFORMANCE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard label="Total Institutes" value="1,248" change="+12.5%" icon={<Building2 />} color="text-blue-600" bgColor="bg-blue-50" />
                <MetricCard label="Annual Revenue" value="$1.2M" change="+24.2%" icon={<TrendingUp />} color="text-emerald-600" bgColor="bg-emerald-50" />
                <MetricCard label="Global Students" value="48,920" change="+8.1%" icon={<Users />} color="text-orange-600" bgColor="bg-orange-50" />
                <MetricCard label="Active Subs" value="842" change="+3.4%" icon={<CreditCard />} color="text-indigo-600" bgColor="bg-indigo-50" />
            </div>

            {/* 3. MIDDLE DETAILED ANALYTICS AREA */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* SUBSCRIPTION DISTRIBUTION */}
                <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
                    <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-6">Plan Distribution</h3>
                    <div className="space-y-5">
                        <PlanProgress label="Premium Enterprise" value={65} color="bg-slate-900" count="547" />
                        <PlanProgress label="Standard Pro" value={25} color="bg-blue-500" count="210" />
                        <PlanProgress label="Basic Startup" value={10} color="bg-slate-200" count="85" />
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg. LTV</p>
                            <p className="text-xl font-semibold text-slate-900">$2,450</p>
                        </div>
                        <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* RECENT ONBOARDING */}
                <div className="lg:col-span-2 bg-white rounded-[24px] border border-slate-100 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Onboarding Institutes</h3>
                        <div className="flex items-center gap-2 px-2.5 py-1 bg-blue-50 rounded-lg">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">4 New Today</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {[
                            { name: 'Elite International School', domain: 'elite.acadex.com', plan: 'Enterprise', price: '$850.00', time: '2h ago' },
                            { name: 'City Coaching Center', domain: 'city.acadex.com', plan: 'Standard', price: '$450.00', time: '5h ago' },
                            { name: 'Tech Innovations Academy', domain: 'tech.acadex.com', plan: 'Enterprise', price: '$850.00', time: '12h ago' },
                        ].map((inst, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-slate-50/50 hover:bg-slate-50 rounded-xl transition-all group border border-transparent hover:border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 font-semibold text-slate-700 text-xs">
                                        {inst.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-800 tracking-tight">{inst.name}</p>
                                        <p className="text-[10px] font-medium text-slate-400">{inst.domain}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-8 text-right">
                                    <div>
                                        <p className="text-[10px] font-medium text-slate-400 uppercase">Plan</p>
                                        <p className="text-[10px] font-semibold text-blue-600 uppercase">{inst.plan}</p>
                                    </div>
                                    <div className="w-20">
                                        <p className="text-xs font-semibold text-slate-800">{inst.price}</p>
                                        <p className="text-[10px] font-medium text-emerald-500">{inst.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. BOTTOM MONITORING AREA */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* SYSTEM HEALTH */}
                <div className="lg:col-span-1 bg-slate-900 rounded-[24px] p-6 shadow-sm text-white relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <ShieldCheck size={20} className="text-emerald-400" />
                            <span className="px-2 py-0.5 bg-white/10 rounded text-[9px] font-semibold uppercase">Secure</span>
                        </div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Global Uptime</p>
                        <h2 className="text-3xl font-semibold mt-1 tracking-tight">99.98%</h2>
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-center text-[10px] font-semibold mb-2">
                            <span className="uppercase text-slate-400">Server Load</span>
                            <span className="text-emerald-400">Healthy</span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[40%] bg-emerald-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* ACTIVITY LOGS */}
                <div className="lg:col-span-2 bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
                    <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-6">System Activity</h3>
                    <div className="space-y-5">
                        <ActivityLog icon={<Zap size={14} />} title="System Backup Completed" time="14 mins ago" user="Auto-System" color="text-amber-500" />
                        <ActivityLog icon={<Globe size={14} />} title="New Node Deploy: US-East-1" time="2 hours ago" user="Engineer #02" color="text-blue-500" />
                        <ActivityLog icon={<ShieldCheck size={14} />} title="Security Protocol Update" time="5 hours ago" user="Auto-Guard" color="text-emerald-500" />
                        <ActivityLog icon={<Users size={14} />} title="Bulk Student Migration" time="1 day ago" user="Admin #882" color="text-purple-500" />
                    </div>
                </div>

                {/* REGIONAL REACH */}
                <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
                    <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-6">Regional Reach</h3>
                    <div className="space-y-3">
                        <RegionBadge label="Asia Pacific" count="742" />
                        <RegionBadge label="Middle East" count="218" />
                        <RegionBadge label="North America" count="120" />
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- SUB-COMPONENTS (With Consistent Padding) --- */

const MetricCard = ({ label, value, change, icon, color, bgColor }) => (
    <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm group transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
            <div className={`w-10 h-10 ${bgColor} ${color} rounded-xl flex items-center justify-center`}>
                {React.cloneElement(icon, { size: 20, strokeWidth: 2 })}
            </div>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold ${change.startsWith('+') ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                {change}
            </div>
        </div>
        <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
            <h3 className="text-xl font-semibold text-slate-900 tracking-tight">{value}</h3>
        </div>
    </div>
);

const PlanProgress = ({ label, value, color, count }) => (
    <div className="space-y-2.5">
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-semibold text-slate-500 uppercase">{label}</span>
            <span className="text-[11px] font-semibold text-slate-800">{count}</span>
        </div>
        <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100/50">
            <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }}></div>
        </div>
    </div>
);

const ActivityLog = ({ icon, title, time, user, color }) => (
    <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-lg bg-slate-50 ${color} flex items-center justify-center shrink-0`}>
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-xs font-semibold text-slate-800 tracking-tight leading-none">{title}</p>
            <p className="text-[9px] font-medium text-slate-400 mt-1 uppercase tracking-wider">{user} • {time}</p>
        </div>
    </div>
);

const RegionBadge = ({ label, count }) => (
    <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded-xl border border-slate-100/50">
        <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">{label}</span>
        <span className="text-xs font-bold text-slate-900">{count} <span className="text-[9px] text-slate-400 font-medium">Inst.</span></span>
    </div>
);

export default SuperAdminOverview;