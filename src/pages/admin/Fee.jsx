import React, { useState, useMemo } from 'react';
import {
    Wallet, Search, Plus, Eye, Trash2, X,
    CreditCard, Banknote, Receipt, Filter,
    CheckCircle2, AlertCircle, Clock, Download, ArrowUpRight
} from 'lucide-react';

const FeeRecords = () => {
    // 1. DATA STATE (Detailed Financial Information)
    const [fees, setFees] = useState([
        {
            id: "INV-2025-001", studentId: "ACD-101", name: "Zeeshan Ali", course: "Web Development",
            totalFee: "45,000", paid: "45,000", balance: "0", discount: "0",
            method: "Bank Transfer", date: "2024-10-12", status: "Paid"
        },
        {
            id: "INV-2025-002", studentId: "ACD-102", name: "Sara Khan", course: "UI/UX Design",
            totalFee: "35,000", paid: "15,000", balance: "20,000", discount: "5,000",
            method: "Cash", date: "2024-10-15", status: "Partial"
        },
        {
            id: "INV-2025-003", studentId: "ACD-103", name: "Ahmed Raza", course: "Python DS",
            totalFee: "40,000", paid: "0", balance: "40,000", discount: "0",
            method: "---", date: "2024-10-18", status: "Unpaid"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [viewInvoice, setViewInvoice] = useState(null);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [form, setForm] = useState({ name: '', course: '', totalFee: '', paid: '', discount: '0', method: 'Cash' });

    // 2. SEARCH & FILTER LOGIC
    const filteredFees = useMemo(() =>
        fees.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.studentId.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, fees]);

    // 3. CALCULATE TOTALS
    const stats = useMemo(() => {
        const total = fees.reduce((acc, curr) => acc + parseInt(curr.paid.replace(/,/g, '')), 0);
        const pending = fees.reduce((acc, curr) => acc + parseInt(curr.balance.replace(/,/g, '')), 0);
        return { total, pending };
    }, [fees]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- FINANCIAL SUMMARY --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Fee Management Hub</h1>
                    <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Institute Revenue & Invoice Tracking</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Collected</p>
                        <p className="text-2xl font-black text-emerald-600 tracking-tighter">Rs. {stats.total.toLocaleString()}</p>
                    </div>
                    <div className="w-px h-10 bg-slate-100"></div>
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Outstanding</p>
                        <p className="text-2xl font-black text-red-500 tracking-tighter">Rs. {stats.pending.toLocaleString()}</p>
                    </div>
                </div>
            </div>

            {/* --- ACTIONS & FILTERS --- */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search by student name, ID or invoice number..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20 shadow-sm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="w-full md:w-auto px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <Download size={18} /> Reports
                </button>
                <button onClick={() => setIsAddOpen(true)} className="w-full md:w-auto px-8 py-4 bg-acadex-navy text-white rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all shadow-xl shadow-acadex-navy/10 flex items-center justify-center gap-2">
                    <Plus size={18} /> Collect Fee
                </button>
            </div>

            {/* --- DATA TABLE --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-5">Invoice & Student</th>
                            <th className="px-6 py-5">Course</th>
                            <th className="px-6 py-5 text-right">Fee Detail</th>
                            <th className="px-6 py-5 text-center">Status</th>
                            <th className="px-6 py-5">Date & Method</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredFees.map((f) => (
                            <tr key={f.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-8 py-6">
                                    <p className="text-[14px] font-semibold text-slate-900 leading-none">{f.name}</p>
                                    <p className="text-[10px] font-bold text-blue-600 mt-2 uppercase tracking-widest leading-none">{f.id} • {f.studentId}</p>
                                </td>
                                <td className="px-6 py-6 text-[13px] font-medium text-slate-500 italic">
                                    {f.course}
                                </td>
                                <td className="px-6 py-6 text-right">
                                    <p className="text-[14px] font-bold text-slate-900 leading-none">Rs. {f.paid}</p>
                                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">Balance: {f.balance}</p>
                                </td>
                                <td className="px-6 py-6 text-center">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${f.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' :
                                            f.status === 'Partial' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                        }`}>
                                        {f.status}
                                    </span>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[12px] font-semibold text-slate-700 leading-none">{f.date}</p>
                                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">{f.method}</p>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => setViewInvoice(f)} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Eye size={16} /></button>
                                        <button onClick={() => setFees(fees.filter(x => x.id !== f.id))} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- MODAL: VIEW INVOICE --- */}
            {viewInvoice && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-10 text-white flex justify-between items-start">
                            <div className="space-y-2">
                                <Receipt size={32} className="text-acadex-accent" />
                                <h2 className="text-2xl font-bold tracking-tight">Fee Receipt</h2>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[4px] leading-none">Invoice: {viewInvoice.id}</p>
                            </div>
                            <button onClick={() => setViewInvoice(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={20} /></button>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="grid grid-cols-2 gap-y-6">
                                <InvoiceDetail label="Student Name" value={viewInvoice.name} />
                                <InvoiceDetail label="Student ID" value={viewInvoice.studentId} />
                                <InvoiceDetail label="Enrolled Course" value={viewInvoice.course} />
                                <InvoiceDetail label="Payment Date" value={viewInvoice.date} />
                            </div>
                            <div className="bg-slate-50 p-6 rounded-3xl space-y-3">
                                <div className="flex justify-between text-[13px] font-medium text-slate-500"><span>Original Course Fee:</span> <span>Rs. {viewInvoice.totalFee}</span></div>
                                <div className="flex justify-between text-[13px] font-medium text-slate-500"><span>Institute Discount:</span> <span className="text-red-500">(- {viewInvoice.discount})</span></div>
                                <div className="h-px bg-slate-200 my-2"></div>
                                <div className="flex justify-between text-lg font-bold text-slate-900"><span>Amount Paid:</span> <span>Rs. {viewInvoice.paid}</span></div>
                                <div className="flex justify-between text-[13px] font-bold text-amber-600 uppercase tracking-widest mt-2"><span>Remaining Balance:</span> <span>Rs. {viewInvoice.balance}</span></div>
                            </div>
                            <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-[2px] shadow-xl flex items-center justify-center gap-2">
                                <Download size={16} /> Download PDF Receipt
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* --- MODAL: COLLECT FEE FORM --- */}
            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={(e) => { e.preventDefault(); setIsAddOpen(false); }} className="bg-white w-full max-w-2xl rounded-[40px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Collect Fee Payment</h2>
                            <button type="button" onClick={() => setIsAddOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <FormInput label="Search Student Name / ID" placeholder="Ali Khan" />
                            <FormInput label="Fee Amount (Net)" placeholder="e.g. 45000" />
                            <FormInput label="Paying Amount" placeholder="e.g. 20000" />
                            <FormInput label="Discount (If any)" placeholder="e.g. 5000" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Payment Method</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>Cash</option>
                                    <option>Bank Transfer</option>
                                    <option>Check</option>
                                    <option>Online Wallet</option>
                                </select>
                            </div>
                            <FormInput label="Transaction ID / Ref" placeholder="Optional" />
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl mt-4">Confirm & Generate Receipt</button>
                    </form>
                </div>
            )}
        </div>
    );
};

// --- MINI COMPONENTS ---
const InvoiceDetail = ({ label, value }) => (
    <div>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[2px] leading-none mb-2">{label}</p>
        <p className="text-[14px] font-semibold text-slate-800 tracking-tight leading-none">{value}</p>
    </div>
);

const FormInput = ({ label, placeholder }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder={placeholder} />
    </div>
);

export default FeeRecords;