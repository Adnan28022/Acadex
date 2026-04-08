import React, { useState } from 'react';
import {
    Search, Bell, Menu, User, LogOut, Settings,
    ChevronDown, Shield, Zap, Layout, Clock,
    CheckCircle2, FileText, Wallet, Award, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentTopBar = ({ toggleSidebar }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    // Mock Notifications Data
    const notifications = [
        { id: 1, title: "New Grade Published", desc: "Your result for React Lab 01 is out.", time: "2m ago", icon: <Award size={14} />, color: "text-blue-600", bgColor: "bg-blue-50" },
        { id: 2, title: "Fee Reminder", desc: "Monthly tuition fee for Nov is due.", time: "1h ago", icon: <Wallet size={14} />, color: "text-amber-600", bgColor: "bg-amber-50" },
        { id: 3, title: "Material Uploaded", desc: "Dr. Sohail added 'API_Ref.pdf'.", time: "5h ago", icon: <FileText size={14} />, color: "text-indigo-600", bgColor: "bg-indigo-50" },
    ];

    return (
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40">
            {/* 1. LEFT SECTION */}
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-all">
                    <Menu size={20} />
                </button>
                <div className="hidden md:flex flex-col border-l border-slate-100 pl-5">
                    <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight uppercase">Oxford Academy</h4>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5 uppercase tracking-[2px] flex items-center gap-1.5">
                        <Shield size={10} fill="currentColor" /> Authorized Student
                    </p>
                </div>
            </div>

            {/* 2. CENTER SECTION: Search */}
            <div className="hidden lg:flex relative w-[380px] group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-acadex-navy" size={17} />
                <input type="text" placeholder="Search courses, assignments..." className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-acadex-navy/20 focus:bg-white transition-all text-[12px] font-medium" />
            </div>

            {/* 3. RIGHT SECTION: Actions */}
            <div className="flex items-center gap-3 lg:gap-6">

                {/* Attendance Pill */}
                <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-2xl">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-tighter leading-none">Attendance</span>
                        <span className="text-[11px] font-semibold text-emerald-700 mt-0.5">92.4%</span>
                    </div>
                </div>

                {/* --- NOTIFICATION DROPDOWN --- */}
                <div className="relative">
                    <button
                        onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
                        className={`relative p-2.5 rounded-xl transition-all ${isNotifOpen ? 'bg-slate-100 text-acadex-navy' : 'text-slate-400 hover:bg-slate-50'}`}
                    >
                        <Bell size={20} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    <AnimatePresence>
                        {isNotifOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 mt-3 w-80 bg-white border border-slate-100 rounded-[28px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden z-50"
                            >
                                <div className="p-5 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                                    <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider">Updates</h3>
                                    <button className="text-[10px] font-bold text-blue-600 uppercase hover:underline">Clear All</button>
                                </div>
                                <div className="max-h-[320px] overflow-y-auto no-scrollbar">
                                    {notifications.map((n) => (
                                        <div key={n.id} className="p-4 flex gap-4 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0">
                                            <div className={`w-10 h-10 rounded-xl ${n.bgColor} ${n.color} flex items-center justify-center shrink-0`}>
                                                {n.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <p className="text-[12px] font-bold text-slate-800 leading-tight">{n.title}</p>
                                                    <span className="text-[9px] font-medium text-slate-400 whitespace-nowrap ml-2">{n.time}</span>
                                                </div>
                                                <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-1">{n.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] hover:text-acadex-navy transition-colors bg-slate-50/30 border-t border-slate-50">
                                    View All Activities
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="h-6 w-px bg-slate-200 mx-1"></div>

                {/* --- PROFILE DROPDOWN --- */}
                <div className="relative">
                    <div
                        onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-acadex-navy flex items-center justify-center text-white font-bold text-xs shadow-lg border-2 border-white transition-transform group-hover:scale-105">ZA</div>
                        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                        {isProfileOpen && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-60 bg-white border border-slate-100 rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] py-2 z-50 overflow-hidden">
                                <div className="px-5 py-4 bg-slate-50/50 border-b border-slate-50 mb-1">
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Reg. Number</p>
                                    <p className="text-[12px] font-semibold text-acadex-navy truncate uppercase">ACD-2025-101</p>
                                </div>
                                <DropdownItem icon={<User size={15} />} label="My Profile" />
                                <DropdownItem icon={<Layout size={15} />} label="Dashboard" />
                                <DropdownItem icon={<Settings size={15} />} label="Security" />
                                <div className="h-px bg-slate-100 my-2 mx-4"></div>
                                <button className="w-full flex items-center gap-3 px-5 py-3 text-[11px] font-semibold text-red-500 hover:bg-red-50 transition-all rounded-xl">
                                    <LogOut size={15} /> Sign Out Node
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

const DropdownItem = ({ icon, label }) => (
    <button className="w-full flex items-center gap-3 px-5 py-2.5 text-[11px] font-medium text-slate-600 hover:bg-slate-50 hover:text-acadex-navy transition-all rounded-xl group">
        <span className="text-slate-400 group-hover:text-acadex-navy transition-colors">{icon}</span> {label}
    </button>
);

export default StudentTopBar;