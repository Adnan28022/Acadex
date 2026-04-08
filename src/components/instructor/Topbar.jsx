import React, { useState } from 'react';
import {
    Search, Bell, Menu, User, LogOut, Settings,
    ChevronDown, Clock, LifeBuoy, Globe, Zap, Command,
    BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherTopBar = ({ toggleSidebar }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40">

            {/* 1. LEFT SECTION: Academic Node Info */}
            <div className="flex items-center gap-4 min-w-[220px]">
                <button
                    onClick={toggleSidebar}
                    className="p-2 text-slate-500 hover:bg-slate-50 hover:text-acadex-navy rounded-xl transition-all"
                >
                    <Menu size={20} />
                </button>

                <div className="hidden md:flex flex-col">
                    <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                        Oxford Academy
                    </h4>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5 uppercase tracking-[2px] flex items-center gap-1.5 leading-none">
                        <Zap size={10} className="text-blue-500" /> Instructor Node
                    </p>
                </div>
            </div>

            {/* 2. CENTER SECTION: Clean Search Bar */}
            <div className="hidden lg:flex relative w-[400px] group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-acadex-navy transition-colors">
                    <Search size={16} strokeWidth={2.5} />
                </div>
                <input
                    type="text"
                    placeholder="Search students, courses or notes..."
                    className="w-full pl-12 pr-12 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-acadex-navy/20 focus:bg-white focus:ring-4 focus:ring-acadex-navy/5 transition-all text-[12px] font-medium placeholder:text-slate-400"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded-lg shadow-sm pointer-events-none">
                    <Command size={10} className="text-slate-400" />
                    <span className="text-[9px] font-bold text-slate-400">K</span>
                </div>
            </div>

            {/* 3. RIGHT SECTION: Academic Status & Profile */}
            <div className="flex items-center gap-3 lg:gap-6 min-w-[220px] justify-end">

                {/* Upcoming Class Pill (Minimalist) */}
                <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-blue-50/60 border border-blue-100/50 rounded-2xl">
                    <Clock size={14} className="text-blue-500" />
                    <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter leading-none">Next Class</span>
                        <span className="text-[11px] font-semibold text-blue-700 mt-0.5">11:30 AM</span>
                    </div>
                </div>

                {/* Notifications */}
                <button className="relative p-2.5 text-slate-400 hover:bg-slate-50 hover:text-acadex-navy rounded-xl transition-all">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-orange-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-6 w-px bg-slate-200 mx-1"></div>

                {/* --- PROFILE SECTION --- */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                >
                    <div className="flex items-center gap-3 pl-2 py-1 cursor-pointer group">
                        <div className="w-10 h-10 rounded-2xl bg-acadex-navy flex items-center justify-center text-white font-semibold text-[13px] shadow-lg shadow-acadex-navy/10 border-2 border-white transition-transform group-hover:scale-105">
                            SK
                        </div>
                        <div className="hidden lg:flex flex-col">
                            <span className="text-[12px] font-semibold text-slate-900 tracking-tight leading-none">Dr. Sohail</span>
                            <span className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Faculty</span>
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
                                <div className="px-5 py-4 bg-slate-50/50 border-b border-slate-50 mb-1">
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Instructor ID</p>
                                    <p className="text-[12px] font-semibold text-acadex-navy truncate leading-none">STF-2025-001</p>
                                </div>

                                <DropdownItem icon={<User size={15} />} label="View Profile" />
                                <DropdownItem icon={<BookOpen size={15} />} label="My Courses" />
                                <DropdownItem icon={<Settings size={15} />} label="Settings" />
                                <DropdownItem icon={<LifeBuoy size={15} />} label="Support" />

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

export default TeacherTopBar;