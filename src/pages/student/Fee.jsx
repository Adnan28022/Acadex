import React, { useState, useMemo } from 'react';
import {
    Wallet, Receipt, Download, CreditCard,
    Banknote, Clock, CheckCircle2, AlertCircle,
    ArrowUpRight, Info, ShieldCheck, Search,
    Plus, History, Printer, X
} from 'lucide-react';

const StudentFees = () => {
    // 1. DATA STATE: Payment Vouchers & History
    const [payments, setPayments] = useState([
        {
            id: "VCH-2025-101", title: "Admission & Enrollment Fee", month: "Oct 2024",
            totalAmount: "15,000", paid: "15,000", balance: "0",
            date: "2024-10-05", method: "Bank Transfer", status: "Full"
        },
        {
            id: "VCH-2025-108", title: "Monthly Tuition Fee (React)", month: "Oct 2024",
            totalAmount: "10,000", paid: "4,000", balance: "6,000",
            date: "2024-10-15", method: "Cash", status: "Partial"
        },
        {
            id: "VCH-2025-115", title: "Examination & Lab Fee", month: "Nov 2024",
            totalAmount: "5,000", paid: "0", balance: "5,000",
            date: "---", method: "---", status: "Pending"
        }
    ]);

    const [viewVoucher, setViewVoucher] = useState(null);

    // 2. FINANCIAL CALCULATIONS
    const stats = useMemo(() => {
        const totalPaid = payments.reduce((acc, curr) => acc + parseInt(curr.paid.replace(/,/g, '')), 0);
        const totalBalance = payments.reduce((acc, curr) => acc + parseInt(curr.balance.replace(/,/g, '')), 0);
        return { totalPaid, totalBalance };
    }, [payments]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER: FINANCIAL SNAPSHOT --- */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Outstanding Balance Card */}
                <div className="flex-1 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[2px] mb-2">Total Outstanding Balance</p>
                        <h1 className={`text-5xl font-black tracking-tighter ${stats.totalBalance > 0 ? 'text-red-500' : 'text-emerald-600'}`}>
                            Rs. {stats.totalBalance.toLocaleString()}
                        </h1>
                        <div className="flex items-center gap-3 mt-5">
                            <button className="px-6 py-2.5 bg-acadex-navy text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/20 hover:bg-acadex-blue transition-all">
                                Pay Now
                            </button>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none flex items-center gap-2">
                                <Clock size={12} /> Next Due: 10th Nov
                            </span>
                        </div>
                    </div>
                    {/* Visual Graphic */}
                    <Wallet size={120} className="absolute -right-8 -bottom-8 text-slate-50 rotate-12" />
                </div>

                {/* Total Paid Summary */}
                <div className="w-full lg:w-[380px] bg-slate-900 p-8 rounded-[32px] text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start">
                            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[2px]">Total Amount Paid</p>
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <ShieldCheck size={20} className="text-emerald-400" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mt-3">Rs. {stats.totalPaid.toLocaleString()}</h2>
                    </div>
                    <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Account Status: Good</span>
                        <History size={16} className="text-white/20" />
                    </div>
                </div>
            </div>

            {/* --- PAYMENT HISTORY LIST --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Voucher & Payment History</h3>
                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mt-1 italic">Detailed financial log for Session 2024-25</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-3 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all">
                            <Printer size={18} />
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all">
                            <Download size={16} /> Export Statement
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-[2px]">
                            <tr>
                                <th className="px-8 py-5">Fee Description</th>
                                <th className="px-6 py-5">Academic Month</th>
                                <th className="px-6 py-5 text-right">Total Amount</th>
                                <th className="px-6 py-5 text-right">Paid Amount</th>
                                <th className="px-6 py-5 text-center">Status</th>
                                <th className="px-8 py-5 text-right">Invoice</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {payments.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="text-[14px] font-bold text-slate-900 leading-none">{p.title}</p>
                                        <p className="text-[10px] font-bold text-blue-600 mt-2 uppercase tracking-widest leading-none">{p.id}</p>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2 text-slate-500 font-semibold text-[13px]">
                                            <CalendarItem month={p.month} />
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <p className="text-[14px] font-bold text-slate-400 leading-none">Rs. {p.totalAmount}</p>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <p className="text-[14px] font-black text-slate-900 leading-none">Rs. {p.paid}</p>
                                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter mt-1">{p.method}</p>
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${p.status === 'Full' ? 'bg-emerald-50 text-emerald-600' :
                                                p.status === 'Partial' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                            }`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button onClick={() => setViewVoucher(p)} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                            <Receipt size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- PAYMENT POLICY INFO --- */}
            <div className="bg-amber-50/50 p-6 rounded-[32px] border border-amber-100 flex items-start gap-4">
                <AlertCircle size={20} className="text-amber-600 mt-0.5" />
                <div>
                    <p className="text-[13px] font-bold text-amber-900 leading-none uppercase tracking-wide">Financial Compliance (Module 4.4)</p>
                    <p className="text-[12px] font-medium text-amber-700/80 mt-2 leading-relaxed italic">
                        Please ensure all payments are cleared by the 10th of each month. Late submissions will incur a surcharge. Partial payments must be cleared within 15 days of the first installment.
                    </p>
                </div>
            </div>

            {/* --- MODAL: DETAILED VOUCHER VIEW --- */}
            {viewVoucher && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-10 text-white flex justify-between items-start">
                            <div className="space-y-2">
                                <Receipt size={32} className="text-acadex-accent" />
                                <h2 className="text-2xl font-bold tracking-tight">Official Fee Voucher</h2>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[4px]">REF: {viewVoucher.id}</p>
                            </div>
                            <button onClick={() => setViewVoucher(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={20} /></button>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="grid grid-cols-2 gap-y-6">
                                <Detail label="Payment Description" value={viewVoucher.title} />
                                <Detail label="Billing Month" value={viewVoucher.month} />
                                <Detail label="Transaction Date" value={viewVoucher.date} />
                                <Detail label="Payment Method" value={viewVoucher.method} />
                            </div>
                            <div className="bg-slate-50 p-8 rounded-[32px] space-y-4 border border-slate-100 shadow-inner">
                                <div className="flex justify-between text-[13px] font-bold text-slate-400 uppercase tracking-widest"><span>Voucher Total:</span> <span>Rs. {viewVoucher.totalAmount}</span></div>
                                <div className="flex justify-between text-[13px] font-bold text-emerald-600 uppercase tracking-widest"><span>Amount Paid:</span> <span>Rs. {viewVoucher.paid}</span></div>
                                <div className="h-px bg-slate-200 my-2"></div>
                                <div className="flex justify-between text-xl font-black text-slate-900 tracking-tighter uppercase"><span>Outstanding:</span> <span className="text-red-600">Rs. {viewVoucher.balance}</span></div>
                            </div>
                            <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-[2px] shadow-xl flex items-center justify-center gap-2">
                                <Download size={16} /> Download PDF Receipt
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// MINI COMPONENTS
const CalendarItem = ({ month }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">
        <Clock size={12} className="text-blue-500" />
        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tighter">{month}</span>
    </div>
);

const Detail = ({ label, value }) => (
    <div>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[2px] leading-none mb-2">{label}</p>
        <p className="text-[14px] font-semibold text-slate-800 tracking-tight leading-none">{value}</p>
    </div>
);

export default StudentFees;