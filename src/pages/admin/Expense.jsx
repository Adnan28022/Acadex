import React, { useState, useMemo } from 'react';
import {
    Receipt, Search, Plus, Eye, Trash2, X,
    TrendingDown, Filter, Banknote, CreditCard,
    Calendar, FileText, ArrowDownRight, Tag,
    MoreHorizontal, Download
} from 'lucide-react';

const ExpenseLog = () => {
    // 1. DATA STATE (Detailed Expense Records)
    const [expenses, setExpenses] = useState([
        {
            id: "EXP-2025-001", title: "Monthly Office Rent", category: "Rent/Fixed",
            amount: "85,000", method: "Bank Transfer", ref: "TRX-99281",
            date: "2024-10-01", status: "Approved", note: "Main campus October rent."
        },
        {
            id: "EXP-2025-002", title: "Electricity Bill (Sept)", category: "Utilities",
            amount: "24,500", method: "Online Bill", ref: "VCH-8812",
            date: "2024-10-05", status: "Approved", note: "IESCO Commercial bill paid via app."
        },
        {
            id: "EXP-2025-003", title: "Social Media Marketing", category: "Marketing",
            amount: "15,000", method: "Credit Card", ref: "FB-AD-002",
            date: "2024-10-10", status: "Pending", note: "Facebook ads for new admission batch."
        },
        {
            id: "EXP-2025-004", title: "Office Stationery & Prints", category: "Miscellaneous",
            amount: "4,200", method: "Cash", ref: "PETTY-01",
            date: "2024-10-12", status: "Approved", note: "Paper reams and toner refill."
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [viewExpense, setViewExpense] = useState(null);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [form, setForm] = useState({ title: '', category: 'Utilities', amount: '', method: 'Cash', note: '' });

    // 2. CALCULATE TOTALS
    const totalExpense = useMemo(() =>
        expenses.reduce((acc, curr) => acc + parseInt(curr.amount.replace(/,/g, '')), 0),
        [expenses]);

    // 3. SEARCH LOGIC
    const filtered = useMemo(() =>
        expenses.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.category.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, expenses]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- EXPENSE SUMMARY HEADER --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center border border-red-100">
                        <TrendingDown size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Expense Tracking Hub</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest">Total Monthly Expenditure</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Month Spend</p>
                    <p className="text-3xl font-black text-red-500 tracking-tighter leading-none">Rs. {totalExpense.toLocaleString()}</p>
                </div>
            </div>

            {/* --- ACTION BAR --- */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search by description, category or voucher ID..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20 shadow-sm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[12px] font-bold text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
                        <Filter size={16} /> Filters
                    </button>
                    <button onClick={() => setIsAddOpen(true)} className="flex-1 md:flex-none px-8 py-4 bg-acadex-navy text-white rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all shadow-xl shadow-acadex-navy/10 flex items-center justify-center gap-2">
                        <Plus size={18} /> Record Expense
                    </button>
                </div>
            </div>

            {/* --- DATA DISPLAY --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-5">Description & Category</th>
                            <th className="px-6 py-5">Voucher / Ref</th>
                            <th className="px-6 py-5">Payment Method</th>
                            <th className="px-6 py-5 text-right">Amount (PKR)</th>
                            <th className="px-6 py-5 text-center">Status</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filtered.map((e) => (
                            <tr key={e.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-8 py-6">
                                    <p className="text-[14px] font-semibold text-slate-900 leading-none">{e.title}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Tag size={10} className="text-blue-500" />
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{e.category}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[12px] font-semibold text-slate-600 uppercase tracking-tighter">{e.ref}</p>
                                    <p className="text-[10px] font-bold text-slate-300 mt-1 uppercase tracking-widest leading-none">{e.date}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <div className="flex items-center gap-2 text-[12px] font-medium text-slate-500">
                                        {e.method === 'Cash' ? <Banknote size={14} /> : <CreditCard size={14} />}
                                        {e.method}
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-right">
                                    <p className="text-[15px] font-black text-red-500 tracking-tighter">Rs. {e.amount}</p>
                                </td>
                                <td className="px-6 py-6 text-center">
                                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${e.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                                        }`}>
                                        {e.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => setViewExpense(e)} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Eye size={16} /></button>
                                        <button onClick={() => setExpenses(expenses.filter(x => x.id !== e.id))} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- VIEW MODAL --- */}
            {viewExpense && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="bg-red-500 p-10 text-white flex justify-between items-start">
                            <div className="space-y-2">
                                <Receipt size={32} className="text-white/40" />
                                <h2 className="text-2xl font-bold tracking-tight">Expense Details</h2>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[4px] leading-none">Record: {viewExpense.id}</p>
                            </div>
                            <button onClick={() => setViewExpense(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={20} /></button>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="grid grid-cols-2 gap-y-6">
                                <InfoItem label="Description" value={viewExpense.title} />
                                <InfoItem label="Category" value={viewExpense.category} />
                                <InfoItem label="Amount Spent" value={`Rs. ${viewExpense.amount}`} />
                                <InfoItem label="Voucher / Ref" value={viewExpense.ref} />
                                <InfoItem label="Payment Mode" value={viewExpense.method} />
                                <InfoItem label="Status" value={viewExpense.status} />
                            </div>
                            <div className="bg-slate-50 p-6 rounded-3xl space-y-3 border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Internal Notes</p>
                                <p className="text-[13px] font-medium text-slate-600 italic leading-relaxed">
                                    "{viewExpense.note}"
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold uppercase text-[11px] tracking-[2px]">Print Voucher</button>
                                <button className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold uppercase text-[11px] tracking-[2px] shadow-lg shadow-red-500/20">Void Record</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- ADD EXPENSE MODAL --- */}
            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={(e) => { e.preventDefault(); setIsAddOpen(false); }} className="bg-white w-full max-w-2xl rounded-[40px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Record New Expense</h2>
                            <button type="button" onClick={() => setIsAddOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <FormInput label="Expense Title" placeholder="e.g. Electricity Bill" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>Utilities</option>
                                    <option>Rent / Fixed</option>
                                    <option>Marketing</option>
                                    <option>Salaries</option>
                                    <option>Miscellaneous</option>
                                </select>
                            </div>
                            <FormInput label="Amount (PKR)" placeholder="e.g. 5000" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Payment Method</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>Cash</option>
                                    <option>Bank Transfer</option>
                                    <option>Credit Card</option>
                                    <option>Check</option>
                                </select>
                            </div>
                            <FormInput label="Reference / Receipt #" placeholder="Optional" />
                            <FormInput label="Internal Note" placeholder="Add more details..." className="col-span-2" />
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl mt-4">Save & Post Expense</button>
                    </form>
                </div>
            )}
        </div>
    );
};

// --- MINI COMPONENTS ---
const InfoItem = ({ label, value }) => (
    <div>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[2px] leading-none mb-2">{label}</p>
        <p className="text-[14px] font-semibold text-slate-800 tracking-tight leading-none">{value}</p>
    </div>
);

const FormInput = ({ label, placeholder, className }) => (
    <div className={`space-y-1.5 ${className}`}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold placeholder:text-slate-300" placeholder={placeholder} />
    </div>
);

export default ExpenseLog;