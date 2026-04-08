import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Users, GraduationCap, BookOpen,
    CheckSquare, Wallet, Receipt, Calendar,
    MessageSquare, Megaphone, Settings,
    X, ChevronDown, ShieldCheck, PieChart,
    ClipboardList, Award, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../../assets/logo.png';

const AdminSidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState({}); // Multiple dropdowns handle karne ke liye

    const toggleMenu = (menu) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* 1. MOBILE OVERLAY */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* 2. SIDEBAR CONTAINER */}
            <motion.aside
                initial={false}
                animate={
                    window.innerWidth < 1024
                        ? { x: isMobileOpen ? 0 : "-100%", width: "100%" }
                        : { x: 0, width: isCollapsed ? 85 : 280 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 lg:relative h-screen bg-acadex-navy flex flex-col shrink-0 border-r border-white/5 z-[110] shadow-2xl overflow-hidden"
            >
                {/* CLOSE BUTTON (Mobile) */}
                {isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(false)} className="absolute right-6 top-8 p-2 bg-white/10 rounded-full text-white lg:hidden">
                        <X size={24} />
                    </button>
                )}

                {/* LOGO SECTION */}
                <div className={`h-24 flex items-center transition-all duration-300 ${isCollapsed && !isMobileOpen ? 'justify-center' : 'px-6'}`}>
                    <img src={LogoImg} alt="Logo" className="h-9 w-auto brightness-0 invert" />
                    {(!isCollapsed || isMobileOpen) && (
                        <div className="ml-3 flex flex-col">
                            <span className="text-white font-bold text-sm tracking-tighter uppercase">Acadex</span>
                            <span className="text-[8px] font-bold text-acadex-accent tracking-[2px] uppercase opacity-70">Admin Node</span>
                        </div>
                    )}
                </div>

                {/* NAVIGATION MENU */}
                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">

                    {/* 1. Dashboard (Single) */}
                    <SidebarLink icon={<LayoutDashboard size={20} />} label="Overview" path="/admin/dashboard" active={isActive("/admin/dashboard")} collapsed={isCollapsed && !isMobileOpen} onClick={() => setIsMobileOpen(false)} />

                    {/* 2. Analytics (Single) */}
                    <SidebarLink icon={<PieChart size={20} />} label="Analytics" path="/admin/analytics" active={isActive("/admin/analytics")} collapsed={isCollapsed && !isMobileOpen} onClick={() => setIsMobileOpen(false)} />

                    {/* 3. People Management (Dropdown) */}
                    <SidebarDropdown
                        icon={<Users size={20} />} label="User Registry"
                        isOpen={openMenus['people']} toggle={() => toggleMenu('people')}
                        collapsed={isCollapsed && !isMobileOpen}
                        activePaths={["/admin/students", "/admin/staff", "/admin/attendance"]}
                    >
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Students" path="/admin/students" active={isActive("/admin/students")} onClick={() => setIsMobileOpen(false)} isSub />
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Staff / Teachers" path="/admin/staff" active={isActive("/admin/staff")} onClick={() => setIsMobileOpen(false)} isSub />
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Attendance" path="/admin/attendance" active={isActive("/admin/attendance")} onClick={() => setIsMobileOpen(false)} isSub />
                    </SidebarDropdown>

                    {/* 4. Academic (Dropdown) */}
                    <SidebarDropdown
                        icon={<BookOpen size={20} />} label="Academics"
                        isOpen={openMenus['academic']} toggle={() => toggleMenu('academic')}
                        collapsed={isCollapsed && !isMobileOpen}
                        activePaths={["/admin/courses", "/admin/exams", "/admin/schedule"]}
                    >
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Course List" path="/admin/courses" active={isActive("/admin/courses")} isSub />
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Result & Exams" path="/admin/exams" active={isActive("/admin/exams")} isSub />
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Timetable" path="/admin/schedule" active={isActive("/admin/schedule")} isSub />
                    </SidebarDropdown>

                    {/* 5. Finance (Dropdown) */}
                    <SidebarDropdown
                        icon={<Wallet size={20} />} label="Finance Hub"
                        isOpen={openMenus['finance']} toggle={() => toggleMenu('finance')}
                        collapsed={isCollapsed && !isMobileOpen}
                        activePaths={["/admin/fees", "/admin/expenses", "/admin/payroll"]}
                    >
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Fee Records" path="/admin/fees" active={isActive("/admin/fees")} isSub />
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Expense Log" path="/admin/expenses" active={isActive("/admin/expenses")} isSub />
                        <SidebarLink icon={<div className="w-1.5 h-1.5 rounded-full bg-current" />} label="Staff Payroll" path="/admin/payroll" active={isActive("/admin/payroll")} isSub />
                    </SidebarDropdown>

                    {/* 6. Communication */}
                    <SidebarLink icon={<MessageSquare size={20} />} label="Messenger" path="/admin/messages" active={isActive("/admin/messages")} collapsed={isCollapsed && !isMobileOpen} onClick={() => setIsMobileOpen(false)} />
                    <SidebarLink icon={<Megaphone size={20} />} label="Notice Board" path="/admin/announcements" active={isActive("/admin/announcements")} collapsed={isCollapsed && !isMobileOpen} onClick={() => setIsMobileOpen(false)} />

                    {/* 7. Settings */}
                    <SidebarLink icon={<Settings size={20} />} label="Settings" path="/admin/settings" active={isActive("/admin/settings")} collapsed={isCollapsed && !isMobileOpen} onClick={() => setIsMobileOpen(false)} />

                </nav>

                {/* FOOTER SECTION (Cleaned Up) */}
                <div className="p-4 border-t border-white/5 bg-black/10">
                    <div className={`bg-white/5 p-3 rounded-2xl flex items-center ${isCollapsed && !isMobileOpen ? 'justify-center' : 'gap-3'}`}>
                        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg border border-white/10 uppercase">
                            OA
                        </div>
                        {(!isCollapsed || isMobileOpen) && (
                            <div className="overflow-hidden whitespace-nowrap">
                                <p className="text-[11px] font-bold text-white truncate">Oxford Academy</p>
                                <p className="text-[8px] font-semibold text-emerald-400 uppercase tracking-widest flex items-center gap-1 leading-none mt-1">
                                    <ShieldCheck size={10} /> Active Node
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.aside>
        </>
    );
};

/* --- SUB-COMPONENTS --- */

const SidebarLink = ({ icon, label, path, active, collapsed, onClick, isSub }) => (
    <Link
        to={path} onClick={onClick}
        className={`flex items-center rounded-xl transition-all duration-200 group relative ${isSub ? 'h-9 my-0.5' : 'h-11'} ${active ? "bg-white/10 text-acadex-accent" : "text-white/40 hover:bg-white/5 hover:text-white"
            } ${collapsed ? 'justify-center px-0' : 'px-4 gap-4'}`}
    >
        <span className={`${active ? 'text-acadex-accent' : 'group-hover:text-white'} transition-colors shrink-0`}>
            {icon}
        </span>
        {(!collapsed) && (
            <span className={`${isSub ? 'text-[11px]' : 'text-[12px]'} font-semibold tracking-wide whitespace-nowrap`}>
                {label}
            </span>
        )}
        {active && !collapsed && !isSub && (
            <motion.div layoutId="activeInd" className="absolute right-4 w-1.5 h-1.5 bg-acadex-accent rounded-full shadow-[0_0_8px_#EAB308]" />
        )}
    </Link>
);

const SidebarDropdown = ({ icon, label, children, isOpen, toggle, collapsed, activePaths }) => {
    const location = useLocation();
    const isChildActive = activePaths.some(path => location.pathname === path);

    return (
        <div className="space-y-1">
            <button
                onClick={toggle}
                className={`w-full flex items-center rounded-xl transition-all h-11 group ${isChildActive && !isOpen ? "bg-white/5 text-white" : "text-white/40 hover:bg-white/5 hover:text-white"
                    } ${collapsed ? 'justify-center px-0' : 'px-4 gap-4'}`}
            >
                <span className={`${isChildActive ? 'text-acadex-accent' : ''} shrink-0`}>{icon}</span>
                {!collapsed && (
                    <div className="flex flex-1 items-center justify-between overflow-hidden">
                        <span className="text-[12px] font-semibold tracking-wide whitespace-nowrap">{label}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                )}
            </button>
            <AnimatePresence>
                {isOpen && !collapsed && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="pl-10 space-y-1 overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminSidebar;