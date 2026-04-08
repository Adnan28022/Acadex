import React, { useState } from 'react';
import {
    Search, Bell, Menu, User,
    LogOut, Settings, ChevronDown,
    LifeBuoy, Zap, Globe, Command
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminTopBar = ({ toggleSidebar }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40">

            {/* 1. LEFT SECTION: Branding */}
            <div className="flex items-center gap-4 min-w-[200px]">
                <button
                    onClick={toggleSidebar}
                    className="p-2 text-slate-500 hover:bg-slate-50 hover:text-acadex-navy rounded-xl transition-all"
                >
                    <Menu size={20} />
                </button>

                <div className="hidden md:flex flex-col">
                    <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight flex items-center gap-2 uppercase tracking-wider">
                        Oxford Academy
                    </h4>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5 uppercase tracking-[2px] flex items-center gap-1.5 leading-none">
                        <Globe size={10} className="text-blue-500" /> Admin Node
                    </p>
                </div>
            </div>

            {/* 2. CENTER SECTION: Refined Search Bar */}
            <div className="hidden lg:flex relative w-[400px] group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-acadex-navy transition-colors">
                    <Search size={16} strokeWidth={2.5} />
                </div>
                <input
                    type="text"
                    placeholder="Quick search students, staff or fees..."
                    className="w-full pl-12 pr-12 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-acadex-navy/20 focus:bg-white focus:ring-4 focus:ring-acadex-navy/5 transition-all text-[12px] font-medium placeholder:text-slate-400"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded-lg shadow-sm pointer-events-none">
                    <Command size={10} className="text-slate-400" />
                    <span className="text-[9px] font-bold text-slate-400">S</span>
                </div>
            </div>

            {/* 3. RIGHT SECTION: Actions & Profile */}
            <div className="flex items-center gap-3 lg:gap-6 min-w-[200px] justify-end">

                {/* Revenue/Session Info (Subtle) */}
                <div className="hidden sm:flex flex-col text-right">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Live Session</span>
                    <span className="text-[11px] font-semibold text-slate-900 mt-0.5">2024 - 2025</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2.5 text-slate-400 hover:bg-slate-50 hover:text-acadex-navy rounded-xl transition-all">
                    <Bell size={20} strokeWidth={2} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
                </button>

                {/* Vertical Divider */}
                <div className="h-6 w-px bg-slate-200 mx-1"></div>

                {/* --- PROFILE SECTION --- */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                >
                    <div className="flex items-center gap-3 pl-2 py-1 cursor-pointer group">
                        <div className="w-10 h-10 rounded-2xl bg-acadex-navy flex items-center justify-center text-white font-semibold text-[13px] shadow-lg shadow-acadex-navy/10 border-2 border-white transition-transform group-hover:scale-105">
                            AD
                        </div>
                        <div className="hidden lg:flex flex-col">
                            <span className="text-[12px] font-semibold text-slate-900 tracking-tight leading-none">Zeeshan Ali</span>
                            <span className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-widest">Manager</span>
                        </div>
                        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                        {isProfileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                className="absolute right-0 mt-2 w-60 bg-white border border-slate-100 rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] py-2 z-50 overflow-hidden"
                            >
                                {/* Mini Header in Dropdown */}
                                <div className="px-5 py-4 bg-slate-50/50 border-b border-slate-50 mb-1">
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Connected as</p>
                                    <p className="text-[12px] font-semibold text-acadex-navy truncate leading-none">admin@oxford.com</p>
                                </div>

                                <DropdownItem icon={<User size={15} />} label="View Profile" />
                                <DropdownItem icon={<Settings size={15} />} label="Account Settings" />
                                <DropdownItem icon={<LifeBuoy size={15} />} label="Support Center" />

                                <div className="h-px bg-slate-100 my-2 mx-4"></div>

                                <button className="w-full flex items-center gap-3 px-5 py-3 text-[11px] font-semibold text-red-500 hover:bg-red-50 transition-all rounded-xl group">
                                    <LogOut size={15} className="group-hover:-translate-x-1 transition-transform" />
                                    Sign Out Account
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

/* --- MINI DROPDOWN ITEM --- */
const DropdownItem = ({ icon, label }) => (
    <button className="w-full flex items-center gap-3 px-5 py-2.5 text-[11px] font-medium text-slate-600 hover:bg-slate-50 hover:text-acadex-navy transition-all rounded-xl group">
        <span className="text-slate-400 group-hover:text-acadex-navy transition-colors">{icon}</span>
        {label}
    </button>
);

export default AdminTopBar;