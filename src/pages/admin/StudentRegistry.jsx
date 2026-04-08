import React, { useState, useMemo } from 'react';
import { Search, Plus, Eye, Trash2, X, UserPlus, FileText, Filter, Mail, Phone, MapPin } from 'lucide-react';

const StudentRegistry = () => {
    const [students, setStudents] = useState([
        {
            id: "ACD-25-101", name: "Zeeshan Ali", email: "zeeshan@example.com", guardian: "Ahmed Ali",
            gEmail: "ahmed.ali@mail.com", cnic: "37405-1234567-1", course: "Web Development",
            batch: "Batch-04", phone: "+92 300 1234567", fee: "Paid", address: "Sector F-10, Islamabad"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [viewData, setViewData] = useState(null);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', guardian: '', gEmail: '', cnic: '', course: 'Web Development', phone: '', address: '' });

    const filtered = useMemo(() => students.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm, students]);

    const handleAdd = (e) => {
        e.preventDefault();
        const newStu = { ...form, id: `ACD-25-${Math.floor(Math.random() * 900 + 100)}`, fee: 'Paid' };
        setStudents([...students, newStu]);
        setIsAddOpen(false);
        setForm({ name: '', email: '', guardian: '', gEmail: '', cnic: '', course: 'Web Development', phone: '', address: '' });
    };

    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Student Information System</h1>
                    <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest">{students.length} Registered Records</p>
                </div>
                <button onClick={() => setIsAddOpen(true)} className="flex items-center gap-2 px-5 py-3 bg-acadex-navy text-white rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all">
                    <UserPlus size={18} /> New Registration
                </button>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text" placeholder="Quick search by name or ID..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none text-[14px] font-medium focus:border-acadex-navy/20"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-5">Student & Guardian</th>
                            <th className="px-6 py-5">Email Information</th>
                            <th className="px-6 py-5">Course / ID</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filtered.map((s) => (
                            <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-8 py-6">
                                    <p className="text-[14px] font-semibold text-slate-900">{s.name}</p>
                                    <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase leading-none">S/O: {s.guardian}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[12px] font-medium text-slate-600 flex items-center gap-2"><Mail size={12} /> {s.email}</p>
                                    <p className="text-[11px] font-medium text-slate-400 mt-1 italic leading-none">Guardian: {s.gEmail}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="text-[13px] font-semibold text-slate-700">{s.course}</p>
                                    <p className="text-[10px] font-bold text-blue-600 mt-1 tracking-tighter">{s.id}</p>
                                </td>
                                <td className="px-8 py-6 text-right space-x-2">
                                    <button onClick={() => setViewData(s)} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Eye size={16} /></button>
                                    <button onClick={() => setStudents(students.filter(x => x.id !== s.id))} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* VIEW MODAL (High Detail) */}
            {viewData && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl">
                        <div className="bg-acadex-navy p-8 text-white flex justify-between items-center">
                            <h2 className="text-xl font-bold">Student Full Profile</h2>
                            <button onClick={() => setViewData(null)}><X size={24} /></button>
                        </div>
                        <div className="p-10 grid grid-cols-2 gap-8">
                            <Detail label="Full Name" value={viewData.name} />
                            <Detail label="CNIC / ID" value={viewData.cnic} />
                            <Detail label="Personal Email" value={viewData.email} />
                            <Detail label="Contact Number" value={viewData.phone} />
                            <Detail label="Guardian Name" value={viewData.guardian} />
                            <Detail label="Guardian Email" value={viewData.gEmail} />
                            <Detail label="Address" value={viewData.address} className="col-span-2" />
                        </div>
                    </div>
                </div>
            )}

            {/* ADD MODAL (High Detail) */}
            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={handleAdd} className="bg-white w-full max-w-2xl rounded-[32px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Register New Student</h2>
                            <button type="button" onClick={() => setIsAddOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <Input label="Student Name" placeholder="Full Name" onChange={v => setForm({ ...form, name: v })} />
                            <Input label="Student Email" placeholder="email@example.com" onChange={v => setForm({ ...form, email: v })} />
                            <Input label="Guardian Name" placeholder="Father's Name" onChange={v => setForm({ ...form, guardian: v })} />
                            <Input label="Guardian Email" placeholder="guardian@mail.com" onChange={v => setForm({ ...form, gEmail: v })} />
                            <Input label="CNIC / B-Form" placeholder="37405-xxxxxxx-x" onChange={v => setForm({ ...form, cnic: v })} />
                            <Input label="Phone Number" placeholder="+92 3xx xxxxxxx" onChange={v => setForm({ ...form, phone: v })} />
                            <Input label="Full Address" placeholder="Street, City, Country" className="col-span-2" onChange={v => setForm({ ...form, address: v })} />
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl">Complete Registration</button>
                    </form>
                </div>
            )}
        </div>
    );
};

const Detail = ({ label, value, className }) => (
    <div className={className}>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
        <p className="text-[14px] font-semibold text-slate-800 leading-tight">{value}</p>
    </div>
);

const Input = ({ label, placeholder, className, onChange }) => (
    <div className={`space-y-1.5 ${className}`}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input required onChange={e => onChange(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-acadex-navy/20 text-[13px] font-semibold" placeholder={placeholder} />
    </div>
);

export default StudentRegistry;