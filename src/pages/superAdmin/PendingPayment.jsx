import React from 'react';
import { Clock, Send, AlertCircle, Building2, DollarSign } from 'lucide-react';

const PendingPayments = () => {
    const pending = [
        { id: "INV-9903", inst: "Tech Academy", amount: 49.0, daysOverdue: 5, adminEmail: "admin@tech.com" },
        { id: "INV-9908", inst: "Bright Minds", amount: 99.0, daysOverdue: 12, adminEmail: "contact@bright.com" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 pb-10 animate-in fade-in duration-500">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-slate-900">Pending Receivables</h1>
                <p className="text-sm text-slate-500 mt-1">Track and collect outstanding subscription dues.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl text-orange-600 shadow-sm"><DollarSign size={24} /></div>
                    <div>
                        <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Total Outstanding</p>
                        <h3 className="text-2xl font-bold text-orange-700">$148.00</h3>
                    </div>
                </div>
                <div className="bg-slate-900 p-6 rounded-3xl flex items-center justify-between text-white">
                    <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Pending Invoices</p>
                        <h3 className="text-2xl font-bold">02 Units</h3>
                    </div>
                    <AlertCircle className="text-white/20" size={32} />
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <th className="px-6 py-4">Institute</th>
                            <th className="px-6 py-4">Amount Due</th>
                            <th className="px-6 py-4">Overdue By</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {pending.map((inv) => (
                            <tr key={inv.id} className="hover:bg-slate-50/30 transition-all text-sm">
                                <td className="px-6 py-5 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"><Building2 size={14} /></div>
                                    <div>
                                        <p className="font-semibold text-slate-900">{inv.inst}</p>
                                        <p className="text-[11px] text-slate-400">{inv.adminEmail}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-5 font-bold text-slate-900">${inv.amount}</td>
                                <td className="px-6 py-5"><span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">{inv.daysOverdue} Days</span></td>
                                <td className="px-6 py-5 text-right">
                                    <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 hover:bg-slate-800 ml-auto">
                                        <Send size={12} /> Send Reminder
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default PendingPayments;