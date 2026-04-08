import React, { useState } from 'react';
import { GraduationCap, Mail, Phone, Plus, Trash2, X, Briefcase, Award } from 'lucide-react';

const StaffRegistry = () => {
    const [staff, setStaff] = useState([
        { id: "STF-201", name: "Dr. Sohail Khan", email: "sohail@acadex.com", phone: "+92 300 0000000", role: "Senior Instructor", dept: "Science", exp: "8 Years", qual: "PhD Physics" }
    ]);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', dept: '', exp: '', qual: '' });

    const handleAddStaff = (e) => {
        e.preventDefault();
        setStaff([...staff, { ...form, id: `STF-202` }]);
        setIsAddOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Staff Management</h1>
                <button onClick={() => setIsAddOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-acadex-navy text-white rounded-xl text-[12px] font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/20 hover:bg-acadex-blue transition-all">
                    <Plus size={18} /> Onboard New Staff
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map((m) => (
                    <div key={m.id} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm relative group">
                        <button onClick={() => setStaff(staff.filter(x => x.id !== m.id))} className="absolute top-6 right-6 text-slate-300 hover:text-red-500"><Trash2 size={18} /></button>
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6"><GraduationCap size={32} /></div>
                        <h3 className="text-lg font-bold text-slate-900 leading-none">{m.name}</h3>
                        <p className="text-[11px] font-bold text-blue-600 mt-2 uppercase tracking-widest">{m.role} • {m.id}</p>

                        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                            <InfoBox label="Email" value={m.email} icon={<Mail size={12} />} />
                            <InfoBox label="Phone" value={m.phone} icon={<Phone size={12} />} />
                            <InfoBox label="Qualification" value={m.qual} icon={<Award size={12} />} />
                            <InfoBox label="Experience" value={m.exp} icon={<Briefcase size={12} />} />
                        </div>
                    </div>
                ))}
            </div>

            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <form onSubmit={handleAddStaff} className="bg-white w-full max-w-2xl rounded-[32px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Staff Onboarding Form</h2>
                            <button type="button" onClick={() => setIsAddOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <Input label="Full Name" placeholder="Teacher's Name" onChange={v => setForm({ ...form, name: v })} />
                            <Input label="Personal Email" placeholder="teacher@acadex.com" onChange={v => setForm({ ...form, email: v })} />
                            <Input label="Designation / Role" placeholder="e.g. Senior Instructor" onChange={v => setForm({ ...form, role: v })} />
                            <Input label="Department" placeholder="e.g. IT Department" onChange={v => setForm({ ...form, dept: v })} />
                            <Input label="Qualification" placeholder="e.g. MS Computer Science" onChange={v => setForm({ ...form, qual: v })} />
                            <Input label="Experience" placeholder="e.g. 5+ Years" onChange={v => setForm({ ...form, exp: v })} />
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest">Confirm Onboarding</button>
                    </form>
                </div>
            )}
        </div>
    );
};

const InfoBox = ({ label, value, icon }) => (
    <div className="space-y-1">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1 leading-none">{icon} {label}</p>
        <p className="text-[12px] font-semibold text-slate-800 leading-tight truncate">{value}</p>
    </div>
);

export default StaffRegistry;