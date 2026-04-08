import React, { useState } from 'react';
import { Search, Bell, Command, Menu, Sparkles, User, LogOut, Settings, ChevronDown, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Topbar = ({ toggleSidebar }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">

            {/* 1. LEFT SECTION: Burger + Breadcrumbs */}
            <div className="flex items-center gap-6">
                <button
                    onClick={toggleSidebar}
                    className="p-2 text-slate-400 hover:bg-slate-50 hover:text-acadex-navy rounded-xl transition-all"
                >
                    <Menu size={20} />
                </button>

                <div className="hidden sm:flex items-center gap-4 border-l border-slate-100 pl-6">
                    <div className="w-9 h-9 bg-acadex-navy/5 rounded-xl flex items-center justify-center text-acadex-navy">
                        <Sparkles size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold text-acadex-navy uppercase tracking-widest leading-none">System Dashboard</h4>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Platform Monitoring</p>
                    </div>
                </div>
            </div>

            {/* 2. CENTER SECTION: Command Search */}
            <div className="hidden lg:flex relative w-[420px] group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-acadex-navy transition-colors" size={16} />
                <input
                    type="text" placeholder="Search anything (Cmd + K)"
                    className="w-full pl-11 pr-16 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-acadex-navy/20 focus:bg-white transition-all text-[11px] font-semibold"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-1 rounded-md shadow-sm pointer-events-none">
                    <Command size={10} className="text-slate-400" />
                    <span className="text-[9px] font-black text-slate-400 uppercase">K</span>
                </div>
            </div>

            {/* 3. RIGHT SECTION: Notifications & Profile Dropdown */}
            <div className="flex items-center gap-6">
                <div className="hidden md:flex flex-col text-right">
                    <span className="text-[10px] font-bold text-acadex-navy uppercase tracking-tighter">System Health</span>
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter flex items-center justify-end gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></span>
                        Live Status
                    </span>
                </div>

                <button className="relative p-2.5 text-slate-400 hover:bg-slate-50 hover:text-acadex-navy rounded-xl transition-all group">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white group-hover:scale-125 transition-transform"></span>
                </button>

                <div className="h-8 w-px bg-slate-100 mx-1"></div>

                {/* --- PROFILE SECTION --- */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                >
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 rounded-xl bg-acadex-navy flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-acadex-navy/10 border-2 border-white group-hover:scale-105 transition-all">
                            SA
                        </div>
                        <ChevronDown size={12} className={`text-slate-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                        {isProfileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-2 z-50"
                            >
                                {/* Info Header */}
                                <div className="px-4 py-3 border-b border-slate-50 mb-1">
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[2px]">Logged in as</p>
                                    <p className="text-[11px] font-bold text-acadex-navy truncate">superadmin@acadex.com</p>
                                </div>

                                {/* Menu Items */}
                                <DropdownItem icon={<User size={14} />} label="My Profile" />
                                <DropdownItem icon={<Settings size={14} />} label="System Settings" />
                                <DropdownItem icon={<ShieldCheck size={14} />} label="Security" />

                                <div className="h-px bg-slate-50 my-1 mx-2"></div>

                                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[10px] font-bold text-red-500 uppercase tracking-widest hover:bg-red-50 transition-all rounded-lg group">
                                    <LogOut size={14} className="group-hover:-translate-x-1 transition-transform" /> Sign Out
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

/* --- DROPDOWN ITEM COMPONENT --- */
const DropdownItem = ({ icon, label }) => (
    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:bg-slate-50 hover:text-acadex-navy transition-all rounded-lg group">
        <span className="text-slate-300 group-hover:text-acadex-navy transition-colors">{icon}</span>
        {label}
    </button>
);

export default Topbar;