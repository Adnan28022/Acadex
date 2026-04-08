import React, { useState } from 'react';
import { Search, Download, FileText, Eye, Building2, Filter } from 'lucide-react';

const AllInvoices = () => {
    const [search, setSearch] = useState("");
    const invoices = [
        { id: "INV-9901", inst: "Elite International", plan: "Enterprise", date: "12 May 2024", amount: 199.0, status: "Paid" },
        { id: "INV-9902", inst: "City Coaching", plan: "Standard", date: "10 May 2024", amount: 99.0, status: "Paid" },
        { id: "INV-9903", inst: "Tech Academy", plan: "Basic", date: "05 May 2024", amount: 49.0, status: "Pending" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 pb-10 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900">Billing Ledger</h1>
                    <p className="text-sm text-slate-500">Complete archive of all system-generated invoices.</p>
                </div>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-slate-800 transition-all shadow-sm">
                    <Download size={14} /> Export All
                </button>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" placeholder="Search invoices..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-400" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 flex items-center gap-2">
                    <Filter size={14} /> Filter By Date
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <th className="px-6 py-4">Invoice / Date</th>
                            <th className="px-6 py-4">Institute</th>
                            <th className="px-6 py-4">Plan</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {invoices.map((inv) => (
                            <tr key={inv.id} className="hover:bg-slate-50/30 transition-all text-sm">
                                <td className="px-6 py-4">
                                    <p className="font-semibold text-slate-900">{inv.id}</p>
                                    <p className="text-[11px] text-slate-400">{inv.date}</p>
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-600">{inv.inst}</td>
                                <td className="px-6 py-4"><span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded uppercase">{inv.plan}</span></td>
                                <td className="px-6 py-4 font-bold text-slate-900">${inv.amount.toFixed(2)}</td>
                                <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>{inv.status}</span></td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <button className="p-2 text-slate-400 hover:text-blue-500 transition-all"><Eye size={16} /></button>
                                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-all"><Download size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AllInvoices;