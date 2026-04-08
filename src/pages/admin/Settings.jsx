import React, { useState } from 'react';
import {
    Settings, Globe, ShieldCheck, CreditCard,
    Bell, User, Camera, Lock, Save,
    Database, Mail, Phone, MapPin, CheckCircle2,
    AlertTriangle, Zap, LogOut
} from 'lucide-react';

const AdminSettings = () => {
    // 1. STATE: Active Tab Navigation
    const [activeTab, setActiveTab] = useState('General');

    // 2. MOCK DATA: Current Configuration
    const [config, setConfig] = useState({
        name: "Oxford International Academy",
        subdomain: "oxford.acadex.com",
        regNo: "REG-99281-2025",
        email: "admin@oxford.com",
        phone: "+92 300 1234567",
        address: "Sector F-10, Islamabad, Pakistan",
        session: "2024 - 2025",
        attendanceThreshold: "75%",
        currency: "PKR (Rs.)"
    });

    const handleSave = () => {
        alert("Configuration updated successfully in real-time.");
    };

    return (
        <div className="space-y-6 pb-12">

            {/* --- HEADER --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                        <Settings size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">System Settings</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Global instance management & security</p>
                    </div>
                </div>
                <button onClick={handleSave} className="flex items-center gap-2 px-8 py-4 bg-acadex-navy text-white rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:bg-acadex-blue transition-all shadow-xl shadow-acadex-navy/10 flex items-center justify-center gap-2">
                    <Save size={18} /> Save All Changes
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                {/* --- LEFT: NAVIGATION TABS --- */}
                <div className="bg-white p-3 rounded-[32px] border border-slate-100 shadow-sm space-y-1">
                    <TabBtn label="General" icon={<Globe size={18} />} active={activeTab === 'General'} onClick={() => setActiveTab('General')} />
                    <TabBtn label="Security" icon={<ShieldCheck size={18} />} active={activeTab === 'Security'} onClick={() => setActiveTab('Security')} />
                    <TabBtn label="Subscription" icon={<CreditCard size={18} />} active={activeTab === 'Subscription'} onClick={() => setActiveTab('Subscription')} />
                    <TabBtn label="Preferences" icon={<Bell size={18} />} active={activeTab === 'Preferences'} onClick={() => setActiveTab('Preferences')} />
                </div>

                {/* --- RIGHT: SETTINGS FORM PANEL --- */}
                <div className="lg:col-span-3 space-y-6">

                    {/* 1. GENERAL SETTINGS */}
                    {activeTab === 'General' && (
                        <div className="space-y-6">
                            {/* Branding Section */}
                            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                                <h3 className="text-[15px] font-semibold text-slate-900 mb-6">Institute Identity & Branding</h3>
                                <div className="flex flex-col md:flex-row items-center gap-8 mb-8 pb-8 border-b border-slate-50">
                                    <div className="relative group">
                                        <div className="w-28 h-28 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group-hover:border-acadex-navy transition-all overflow-hidden relative">
                                            <Camera size={24} className="mb-2" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Update Logo</span>
                                            {/* Mock Upload Overlay */}
                                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4 w-full">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormInput label="Institute Legal Name" value={config.name} />
                                            <FormInput label="Registration Number" value={config.regNo} />
                                        </div>
                                        <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                                            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest leading-none mb-2">Institutional Subdomain</p>
                                            <p className="text-[14px] font-semibold text-blue-600">{config.subdomain}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput label="Official Email" value={config.email} icon={<Mail size={14} />} />
                                    <FormInput label="Primary Contact" value={config.phone} icon={<Phone size={14} />} />
                                    <FormInput label="Physical Address" value={config.address} icon={<MapPin size={14} />} className="md:col-span-2" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 2. SECURITY SETTINGS */}
                    {activeTab === 'Security' && (
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
                            <div>
                                <h3 className="text-[15px] font-semibold text-slate-900 mb-2">Access Control & Credentials</h3>
                                <p className="text-[12px] font-medium text-slate-400 tracking-tight">Manage passwords and system security protocols.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput type="password" label="Current Password" placeholder="••••••••" icon={<Lock size={14} />} />
                                    <div className="hidden md:block"></div>
                                    <FormInput type="password" label="New Password" placeholder="••••••••" icon={<Lock size={14} />} />
                                    <FormInput type="password" label="Confirm New Password" placeholder="••••••••" icon={<Lock size={14} />} />
                                </div>
                                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-4">
                                    <AlertTriangle className="text-amber-500 mt-0.5" size={20} />
                                    <div>
                                        <p className="text-[13px] font-bold text-amber-900 leading-none">Security Tip</p>
                                        <p className="text-[12px] font-medium text-amber-700/80 mt-2 leading-relaxed italic">
                                            Changing your password will log out all other active sessions for this institute. Use at least 8 characters with numbers and symbols.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 3. SUBSCRIPTION STATUS */}
                    {activeTab === 'Subscription' && (
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-[15px] font-semibold text-slate-900 mb-1">Membership Plan</h3>
                                    <p className="text-[12px] font-medium text-slate-400">Manage your Acadex SaaS license.</p>
                                </div>
                                <span className="px-4 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-[2px]">Premium Pro</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <UsageCard label="Student Limit" value="1248 / 5000" percent={25} />
                                <UsageCard label="Storage Capacity" value="4.2 GB / 20 GB" percent={21} />
                                <UsageCard label="Staff Licenses" value="42 / Unlimited" percent={0} />
                            </div>

                            <div className="bg-slate-900 p-8 rounded-[32px] text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="relative z-10 space-y-1 text-center md:text-left">
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[3px]">Next Renewal Date</p>
                                    <h2 className="text-2xl font-bold tracking-tight">15th January 2025</h2>
                                    <p className="text-[11px] font-medium text-emerald-400 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2 mt-2">
                                        <CheckCircle2 size={12} /> Auto-renew is enabled
                                    </p>
                                </div>
                                <button className="relative z-10 px-8 py-3 bg-white text-slate-900 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-slate-50 transition-all">Manage Billing</button>
                                <Zap className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 rotate-12" />
                            </div>
                        </div>
                    )}

                    {/* 4. PREFERENCES (PRESETS) */}
                    {activeTab === 'Preferences' && (
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
                            <h3 className="text-[15px] font-semibold text-slate-900 mb-6">Academic & System Preferences</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Current Academic Session</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                        <option>2024 - 2025</option>
                                        <option>2025 - 2026</option>
                                    </select>
                                </div>
                                <FormInput label="Attendance Threshold (%)" value={config.attendanceThreshold} />
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Local Currency</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold">
                                        <option>PKR (Rs.)</option>
                                        <option>USD ($)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- MINI COMPONENTS ---

const TabBtn = ({ label, icon, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-semibold text-[13px] ${active ? 'bg-acadex-navy text-white shadow-lg shadow-acadex-navy/10' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
    >
        {icon} {label}
    </button>
);

const FormInput = ({ label, value, placeholder, type = "text", icon, className }) => (
    <div className={`space-y-1.5 ${className}`}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <div className="relative">
            {icon && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">{icon}</span>}
            <input
                type={type} defaultValue={value} placeholder={placeholder}
                className={`w-full ${icon ? 'pl-11' : 'px-4'} py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold focus:border-acadex-navy/20 transition-all`}
            />
        </div>
    </div>
);

const UsageCard = ({ label, value, percent }) => (
    <div className="p-5 bg-slate-50 rounded-[28px] border border-slate-100">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-3">{label}</p>
        <p className="text-sm font-bold text-slate-800 tracking-tight">{value}</p>
        {percent > 0 && (
            <div className="mt-4 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-acadex-navy" style={{ width: `${percent}%` }}></div>
            </div>
        )}
    </div>
);

export default AdminSettings;