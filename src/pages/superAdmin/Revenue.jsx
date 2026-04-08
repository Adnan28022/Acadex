import React, { useState } from 'react';
import {
    Download, Search, Filter, ArrowUpRight,
    CreditCard, Calendar, Building2,
    CheckCircle2, Clock, AlertCircle, FileText, ChevronRight
} from 'lucide-react';

const RevenueLogs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    // Mock Transaction Data
    const [transactions] = useState([
        { id: "TRX-9821", institute: "Elite International", plan: "Enterprise", amount: 199.00, date: "24 May 2024", status: "Paid", method: "Stripe" },
        { id: "TRX-9822", institute: "City Coaching Center", plan: "Standard", amount: 99.00, date: "22 May 2024", status: "Paid", method: "PayPal" },
        { id: "TRX-9823", institute: "Tech Innovations", plan: "Basic", amount: 49.00, date: "20 May 2024", status: "Pending", method: "Bank Transfer" },
        { id: "TRX-9824", institute: "Global Science College", plan: "Enterprise", amount: 199.00, date: "18 May 2024", status: "Failed", method: "Stripe" },
        { id: "TRX-9825", institute: "Bright Minds Academy", plan: "Standard", amount: 99.00, date: "15 May 2024", status: "Paid", method: "Stripe" },
    ]);

    return (
        <div className="max-w-7xl mx-auto px-4 pb-12 animate-in fade-in duration-700">

            {/* 1. HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-slate-100 pb-8">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Revenue Intelligence</h1>
                    <p className="text-sm text-slate-500 mt-1">Track global subscriptions and financial transactions.</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
                        <Download size={16} /> Export CSV
                    </button>
                    <button className="flex-1 md:flex-none bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-sm">
                        Financial Report
                    </button>
                </div>
            </div>

            {/* 2. REVENUE METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <RevenueMetric label="Total Revenue" value="$48,290" change="+12.5%" icon={<CreditCard size={18} />} color="text-blue-600" />
                <RevenueMetric label="This Month" value="$8,400" change="+4.2%" icon={<Calendar size={18} />} color="text-emerald-600" />
                <RevenueMetric label="Pending" value="$1,250" change="5 Invoices" icon={<Clock size={18} />} color="text-orange-500" isLoss />
                <RevenueMetric label="Refunds" value="$240" change="0.2%" icon={<AlertCircle size={18} />} color="text-red-500" isLoss />
            </div>

            {/* 3. FILTERS BAR */}
            <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Transaction ID or Institute..."
                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border-none rounded-xl text-sm font-medium outline-none focus:bg-white focus:ring-2 ring-slate-100 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    {['All', 'Paid', 'Pending', 'Failed'].map(status => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-5 py-3 rounded-xl text-xs font-semibold transition-all ${statusFilter === status
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-200'
                                }`}>
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* 4. TRANSACTIONS TABLE */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Transaction / Date</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Institute</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Plan</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Invoice</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {transactions.map((trx, i) => (
                                <tr key={i} className="hover:bg-slate-50/30 transition-all group">
                                    <td className="px-6 py-5">
                                        <p className="text-sm font-semibold text-slate-900">{trx.id}</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5">{trx.date}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                                                <Building2 size={14} />
                                            </div>
                                            <p className="text-sm font-medium text-slate-700">{trx.institute}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">
                                            {trx.plan}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-sm font-bold text-slate-900">${trx.amount.toFixed(2)}</p>
                                        <p className="text-[10px] text-slate-400 tracking-tighter">via {trx.method}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <StatusBadge status={trx.status} />
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all inline-flex items-center gap-2 text-xs font-medium">
                                            <FileText size={16} />
                                            <span className="hidden sm:inline">PDF</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Placeholder */}
                <div className="p-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/20">
                    <p className="text-xs text-slate-400 font-medium">Showing 5 of 1,240 transactions</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-400 cursor-not-allowed">Prev</button>
                        <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-white hover:shadow-sm">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- SUB-COMPONENTS --- */

const RevenueMetric = ({ label, value, change, icon, color, isLoss }) => (
    <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-2.5 rounded-xl bg-slate-50 ${color}`}>
                {icon}
            </div>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${isLoss ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'}`}>
                {!isLoss && <ArrowUpRight size={10} />}
                {change}
            </div>
        </div>
        <div>
            <p className="text-xs font-medium text-slate-400 mb-1">{label}</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h3>
        </div>
    </div>
);

const StatusBadge = ({ status }) => {
    const styles = {
        Paid: "bg-emerald-50 text-emerald-600",
        Pending: "bg-orange-50 text-orange-600",
        Failed: "bg-red-50 text-red-600"
    };
    const icons = {
        Paid: <CheckCircle2 size={12} />,
        Pending: <Clock size={12} />,
        Failed: <AlertCircle size={12} />
    };

    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[status]}`}>
            {icons[status]}
            {status}
        </span>
    );
};

export default RevenueLogs;