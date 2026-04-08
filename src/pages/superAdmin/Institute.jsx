import React, { useState, useMemo } from 'react';
import {
    Search, Plus, Building2, CheckCircle2,
    Globe, Mail, Trash2, ShieldOff,
    ArrowLeft, LayoutGrid, Check, Info, User
} from 'lucide-react';

/* --- 1. SUB-COMPONENT: INSTITUTE LIST VIEW --- */
const InstituteList = ({ institutes, onOnboardClick, onToggleStatus, onDelete, searchTerm, setSearchTerm, activeTab, setActiveTab }) => {

    // Filtering Logic
    const filteredData = useMemo(() => {
        return institutes.filter(inst => {
            const matchesSearch = inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                inst.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTab = activeTab === 'All' || inst.status === activeTab;
            return matchesSearch && matchesTab;
        });
    }, [searchTerm, institutes, activeTab]);

    return (
        <div className="animate-fade-in space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-acadex-navy tracking-tighter">Institute Directory</h1>
                    <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-widest">Manage {institutes.length} Global Entities</p>
                </div>
                <button
                    onClick={onOnboardClick}
                    className="flex items-center justify-center gap-2 bg-acadex-navy text-white px-8 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[2px] shadow-xl shadow-acadex-navy/20 hover:bg-acadex-blue transition-all">
                    <Plus size={18} /> Onboard New Institute
                </button>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total" value={institutes.length} color="text-blue-600" />
                <StatCard label="Active" value={institutes.filter(i => i.status === 'Active').length} color="text-emerald-600" />
                <StatCard label="Suspended" value={institutes.filter(i => i.status === 'Suspended').length} color="text-red-600" />
                <StatCard label="Pending" value={institutes.filter(i => i.status === 'Pending').length} color="text-orange-600" />
            </div>

            {/* Search & Tabs */}
            <div className="bg-white p-2 rounded-[26px] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search institutes..."
                        className="w-full pl-14 pr-6 py-4 bg-slate-50/50 border-none rounded-[20px] text-sm font-medium outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex p-1 bg-slate-100/50 rounded-[20px] gap-1">
                    {['All', 'Active', 'Pending', 'Suspended'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-[16px] text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white text-acadex-navy shadow-sm' : 'text-slate-400'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table Area */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">Institute</th>
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">Plan</th>
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">Status</th>
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredData.map((inst) => (
                                <tr key={inst.id} className="hover:bg-slate-50/50 transition-all">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-acadex-navy text-white flex items-center justify-center font-bold text-sm uppercase">
                                                {inst.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-acadex-navy mb-0.5">{inst.name}</p>
                                                <p className="text-[10px] text-slate-400 flex items-center gap-1 font-medium italic"><Globe size={10} /> {inst.domain}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded capitalize">{inst.plan}</span>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-1.5">
                                            <span className={`w-1.5 h-1.5 rounded-full ${inst.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${inst.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{inst.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button onClick={() => onToggleStatus(inst.id)} className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-acadex-blue hover:bg-blue-50 transition-all"><ShieldOff size={16} /></button>
                                            <button onClick={() => onDelete(inst.id)} className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* --- 2. SUB-COMPONENT: ONBOARDING FORM VIEW --- */
const OnboardingForm = ({ onBack, onSubmit }) => {
    const [data, setData] = useState({ name: '', domain: '', admin: '', email: '', plan: 'Basic Startup' });

    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-10">
                <button onClick={onBack} className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-acadex-navy transition-all shadow-sm">
                    <ArrowLeft size={20} />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-acadex-navy tracking-tighter">New Institute Setup</h1>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[3px] mt-1">SaaS Instance Configuration</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Side */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Institute Name" icon={<Building2 size={16} />} placeholder="Oxford Academy" value={data.name} onChange={v => setData({ ...data, name: v })} />
                            <InputField label="Admin Full Name" icon={<User size={16} />} placeholder="John Doe" value={data.admin} onChange={v => setData({ ...data, admin: v })} />
                            <InputField label="Official Email" icon={<Mail size={16} />} placeholder="admin@oxford.com" type="email" value={data.email} onChange={v => setData({ ...data, email: v })} />
                            <InputField label="Custom Domain" icon={<Globe size={16} />} placeholder="oxford" value={data.domain} onChange={v => setData({ ...data, domain: v })} />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subscription Tier</label>
                            <select
                                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-acadex-blue/20 cursor-pointer appearance-none"
                                value={data.plan}
                                onChange={(e) => setData({ ...data, plan: e.target.value })}
                            >
                                <option>Basic Startup</option>
                                <option>Standard Pro</option>
                                <option>Premium Enterprise</option>
                            </select>
                        </div>
                        <button
                            onClick={() => onSubmit(data)}
                            className="w-full py-5 bg-acadex-navy text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-acadex-navy/20 hover:bg-acadex-blue transition-all">
                            Complete Onboarding & Activate
                        </button>
                    </div>
                </div>

                {/* Info Side */}
                <div className="space-y-6">
                    <div className="bg-acadex-navy p-8 rounded-[40px] text-white space-y-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <Info size={32} className="text-acadex-accent mb-4" />
                            <h3 className="text-xl font-bold tracking-tight mb-2">Setup Guide</h3>
                            <p className="text-xs text-white/60 leading-relaxed font-medium">
                                Once activated, the admin will receive an auto-generated password via email to access their dedicated panel.
                            </p>
                        </div>
                        <ul className="space-y-4 relative z-10 pt-4">
                            {['Database Isolation', 'Dedicated Subdomain', 'Default Admin Creation'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                    <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-emerald-400"><Check size={12} /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- 3. MAIN CONTROLLER COMPONENT --- */
const InstituteManagement = () => {
    const [view, setView] = useState('list'); // 'list' or 'form'
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All');
    const [institutes, setInstitutes] = useState([
        { id: 1, name: "Elite International School", domain: "elite.acadex.com", admin: "Zaid Khan", email: "zaid@elite.com", plan: "Premium Enterprise", status: "Active" },
        { id: 2, name: "City Coaching Center", domain: "city.acadex.com", admin: "Sarah Ahmed", email: "sarah@city.com", plan: "Standard Pro", status: "Active" },
    ]);

    const handleAdd = (newData) => {
        const entry = {
            ...newData,
            id: Date.now(),
            status: 'Active',
            domain: `${newData.domain.toLowerCase()}.acadex.com`
        };
        setInstitutes([entry, ...institutes]);
        setView('list');
    };

    const deleteInst = (id) => setInstitutes(institutes.filter(i => i.id !== id));

    const toggleStatus = (id) => {
        setInstitutes(institutes.map(i => i.id === id ? { ...i, status: i.status === 'Active' ? 'Suspended' : 'Active' } : i));
    };

    return (
        <div className="min-h-screen">
            {view === 'list' ? (
                <InstituteList
                    institutes={institutes}
                    onOnboardClick={() => setView('form')}
                    onDelete={deleteInst}
                    onToggleStatus={toggleStatus}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            ) : (
                <OnboardingForm
                    onBack={() => setView('list')}
                    onSubmit={handleAdd}
                />
            )}
        </div>
    );
};

/* --- SHARED UTILS --- */
const StatCard = ({ label, value, color }) => (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className={`text-2xl font-bold ${color} tracking-tighter`}>{value}</p>
    </div>
);

const InputField = ({ label, icon, placeholder, value, onChange, type = "text" }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>
            <input
                required
                type={type}
                placeholder={placeholder}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-acadex-blue/20 transition-all placeholder:text-slate-300 placeholder:font-medium"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    </div>
);

export default InstituteManagement;