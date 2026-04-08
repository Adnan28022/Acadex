import React, { useState, useMemo } from 'react';
import {
    ClipboardList, Search, Plus, Eye, Trash2, X,
    Banknote, CreditCard, UserCheck, FileText,
    TrendingUp, Calculator, Download, CheckCircle2,
    AlertCircle, Printer
} from 'lucide-react';

const StaffPayroll = () => {
    // 1. DATA STATE (Detailed Payroll Information)
    const [payroll, setPayroll] = useState([
        {
            id: "PAY-2025-01", staffId: "STF-901", name: "Dr. Sohail Khan", role: "Senior Instructor",
            baseSalary: "85,000", allowances: "5,000", deductions: "2,000", netSalary: "88,000",
            month: "October 2024", status: "Disbursed", method: "Bank Transfer", date: "2024-10-05"
        },
        {
            id: "PAY-2025-02", staffId: "STF-902", name: "Prof. Amna", role: "HOD IT",
            baseSalary: "75,000", allowances: "0", deductions: "5,000", netSalary: "70,000",
            month: "October 2024", status: "Pending", method: "---", date: "---"
        },
        {
            id: "PAY-2025-03", staffId: "STF-905", name: "Zaid Ahmed", role: "Admin Staff",
            baseSalary: "45,000", allowances: "2,500", deductions: "0", netSalary: "47,500",
            month: "October 2024", status: "Processing", method: "Cash", date: "2024-10-10"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [viewSlip, setViewSlip] = useState(null);
    const [isProcessOpen, setIsProcessOpen] = useState(false);

    // 2. CALCULATE PAYROLL TOTALS
    const stats = useMemo(() => {
        const total = payroll.reduce((acc, curr) => acc + parseInt(curr.netSalary.replace(/,/g, '')), 0);
        const paid = payroll.filter(p => p.status === 'Disbursed').length;
        return { total, paid, remaining: payroll.length - paid };
    }, [payroll]);

    // 3. SEARCH LOGIC
    const filtered = useMemo(() =>
        payroll.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.staffId.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, payroll]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- PAYROLL ANALYTICS HEADER --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Staff Payroll & Disbursement</h1>
                    <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Monthly Remuneration & Tax Node</p>
                </div>
                <div className="flex items-center gap-8">
                    <SummaryItem label="Monthly Commitment" value={`Rs. ${stats.total.toLocaleString()}`} color="text-slate-900" />
                    <div className="w-px h-10 bg-slate-100"></div>
                    <SummaryItem label="Disbursed" value={stats.paid} color="text-emerald-600" />
                    <div className="w-px h-10 bg-slate-100"></div>
                    <SummaryItem label="Pending Payouts" value={stats.remaining} color="text-red-500" />
                </div>
            </div>

            {/* --- ACTION BAR --- */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Search staff by name, ID or role..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20 shadow-sm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="w-full md:w-auto px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <Download size={18} /> Export CSV
                </button>
                <button onClick={() => setIsProcessOpen(true)} className="w-full md:w-auto px-8 py-4 bg-acadex-navy text-white rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all shadow-xl shadow-acadex-navy/10 flex items-center justify-center gap-2">
                    <Calculator size={18} /> Process Payroll
                </button>
            </div>

            {/* --- PAYROLL DATA TABLE --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-5">Staff Information</th>
                            <th className="px-6 py-5">Base Salary</th>
                            <th className="px-6 py-5">Adjustments</th>
                            <th className="px-6 py-5 text-right">Net Payout</th>
                            <th className="px-6 py-5 text-center">Status</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filtered.map((p) => (
                            <tr key={p.id} className="hover:bg-slate-50 transition-colors group">
                                <td className="px-8 py-6">
                                    <p className="text-[14px] font-semibold text-slate-900 leading-none">{p.name}</p>
                                    <p className="text-[10px] font-bold text-blue-600 mt-2 uppercase tracking-widest leading-none">{p.role} • {p.staffId}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[13px] font-bold text-slate-700">Rs. {p.baseSalary}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[10px] font-bold text-emerald-600 uppercase leading-none">+ {p.allowances} (Bonus)</p>
                                        <p className="text-[10px] font-bold text-red-500 uppercase leading-none">- {p.deductions} (Deduction)</p>
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-right">
                                    <p className="text-[15px] font-black text-slate-900 tracking-tighter leading-none">Rs. {p.netSalary}</p>
                                    <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">{p.month}</p>
                                </td>
                                <td className="px-6 py-6 text-center">
                                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${p.status === 'Disbursed' ? 'bg-emerald-50 text-emerald-600' :
                                            p.status === 'Processing' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'
                                        }`}>
                                        {p.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => setViewSlip(p)} className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm" title="View Slip"><Eye size={16} /></button>
                                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all" title="Print Slip"><Printer size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- MODAL: DIGITAL PAY SLIP --- */}
            {viewSlip && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-10 text-white flex justify-between items-start">
                            <div className="space-y-2">
                                <FileText size={32} className="text-acadex-accent" />
                                <h2 className="text-2xl font-bold tracking-tight">Staff Salary Slip</h2>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[4px] leading-none">Voucher: {viewSlip.id}</p>
                            </div>
                            <button onClick={() => setViewSlip(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={20} /></button>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="grid grid-cols-2 gap-y-6">
                                <InvoiceDetail label="Staff Full Name" value={viewSlip.name} />
                                <InvoiceDetail label="Designation" value={viewSlip.role} />
                                <InvoiceDetail label="Payout Month" value={viewSlip.month} />
                                <InvoiceDetail label="Disbursement Date" value={viewSlip.date} />
                                <InvoiceDetail label="Payment Method" value={viewSlip.method} />
                                <InvoiceDetail label="Reference ID" value={viewSlip.staffId} />
                            </div>
                            <div className="bg-slate-50 p-8 rounded-[32px] space-y-4 border border-slate-100 shadow-inner">
                                <div className="flex justify-between text-[13px] font-bold text-slate-500 uppercase tracking-widest"><span>Base Salary:</span> <span>Rs. {viewSlip.baseSalary}</span></div>
                                <div className="flex justify-between text-[13px] font-bold text-emerald-600 uppercase tracking-widest"><span>Allowances (+):</span> <span>Rs. {viewSlip.allowances}</span></div>
                                <div className="flex justify-between text-[13px] font-bold text-red-500 uppercase tracking-widest"><span>Deductions (-):</span> <span>Rs. {viewSlip.deductions}</span></div>
                                <div className="h-px bg-slate-200 my-2"></div>
                                <div className="flex justify-between text-xl font-black text-slate-900 tracking-tighter uppercase"><span>Net Payable:</span> <span>Rs. {viewSlip.netSalary}</span></div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-[2px] shadow-xl flex items-center justify-center gap-2">
                                    <Download size={16} /> Save PaySlip
                                </button>
                                <button className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold uppercase text-[11px] tracking-[2px]"><Printer size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- MODAL: PROCESS PAYROLL FORM --- */}
            {isProcessOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={(e) => { e.preventDefault(); setIsProcessOpen(false); }} className="bg-white w-full max-w-2xl rounded-[40px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Process Monthly Payroll</h2>
                            <button type="button" onClick={() => setIsProcessOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <FormInput label="Search Staff Member" placeholder="Dr. Sohail Khan" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Payroll Month</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>October 2024</option>
                                    <option>November 2024</option>
                                    <option>December 2024</option>
                                </select>
                            </div>
                            <FormInput label="Base Salary (PKR)" placeholder="85,000" />
                            <FormInput label="Bonuses / Allowances" placeholder="0" />
                            <FormInput label="Deductions (Fines/Tax)" placeholder="0" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Payment Method</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                    <option>Bank Transfer</option>
                                    <option>Cash</option>
                                    <option>Check</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl mt-4 flex items-center justify-center gap-3">
                            <CheckCircle2 size={18} /> Generate Salary Voucher
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

// --- MINI COMPONENTS ---
const SummaryItem = ({ label, value, color }) => (
    <div className="text-right">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
        <p className={`text-xl font-black ${color} tracking-tight leading-none`}>{value}</p>
    </div>
);

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

export default StaffPayroll;