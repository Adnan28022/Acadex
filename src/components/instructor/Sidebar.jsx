import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Users, BookOpen, CheckSquare,
    ClipboardList, FolderOpen, Megaphone, MessageSquare,
    Settings, X, ChevronDown, Award, Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../../assets/logo.png';

const TeacherSidebar = ({ isCollapsed, isMobileOpen, setIsMobileOpen }) => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (menu) => setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <AnimatePresence>
                {isMobileOpen && (
                    <div onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] lg:hidden" />
                )}
            </AnimatePresence>

            <aside className={`fixed inset-y-0 left-0 lg:relative h-screen bg-acadex-navy flex flex-col shrink-0 border-r border-white/5 z-[110] transition-all duration-300 ${isMobileOpen ? 'translate-x-0 w-full' : window.innerWidth < 1024 ? '-translate-x-full' : isCollapsed ? 'w-[85px]' : 'w-[280px]'}`}>

                {isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(false)} className="absolute right-6 top-8 p-2 bg-white/10 rounded-full text-white lg:hidden"><X size={24} /></button>
                )}

                {/* Logo Section */}
                <div className={`h-24 flex items-center transition-all duration-300 ${isCollapsed && !isMobileOpen ? 'justify-center' : 'px-6'}`}>
                    <img src={LogoImg} alt="Logo" className="h-9 w-auto brightness-0 invert" />
                    {(!isCollapsed || isMobileOpen) && (
                        <div className="ml-3 flex flex-col">
                            <span className="text-white font-bold text-sm tracking-tighter uppercase">Acadex</span>
                            <span className="text-[8px] font-bold text-acadex-accent tracking-[2px] uppercase opacity-70">Instructor Node</span>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">
                    <SidebarLink icon={<LayoutDashboard size={20} />} label="Overview" path="/instructor/dashboard" active={isActive("/instructor/dashboard")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarLink icon={<BookOpen size={20} />} label="My Courses" path="/instructor/courses" active={isActive("/instructor/courses")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarLink icon={<Users size={20} />} label="My Students" path="/instructor/students" active={isActive("/instructor/students")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarLink icon={<CheckSquare size={20} />} label="Mark Attendance" path="/instructor/attendance" active={isActive("/instructor/attendance")} collapsed={isCollapsed && !isMobileOpen} />

                    {/* Academic Dropdown */}
                    <SidebarDropdown
                        icon={<ClipboardList size={20} />} label="Assessments"
                        isOpen={openMenus['assess']} toggle={() => toggleMenu('assess')}
                        collapsed={isCollapsed && !isMobileOpen}
                        activePaths={["/instructor/assignments", "/instructor/grading"]}
                    >
                        <SidebarLink label="Assignments" path="/instructor/assignments" active={isActive("/instructor/assignments")} isSub />
                        <SidebarLink label="Grading Hub" path="/instructor/grading" active={isActive("/instructor/grading")} isSub />
                    </SidebarDropdown>

                    <SidebarLink icon={<FolderOpen size={20} />} label="Study Material" path="/instructor/material" active={isActive("/instructor/material")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarLink icon={<MessageSquare size={20} />} label="Student Chat" path="/instructor/chat" active={isActive("/instructor/chat")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarLink icon={<Megaphone size={20} />} label="Announcements" path="/instructor/notices" active={isActive("/instructor/notices")} collapsed={isCollapsed && !isMobileOpen} />
                </nav>

                {/* Teacher Profile Footer */}
                <div className="p-4 border-t border-white/5 bg-black/10">
                    <div className={`bg-white/5 p-3 rounded-2xl flex items-center ${isCollapsed && !isMobileOpen ? 'justify-center' : 'gap-3'}`}>
                        <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-xs shrink-0">SK</div>
                        {(!isCollapsed || isMobileOpen) && (
                            <div className="overflow-hidden whitespace-nowrap">
                                <p className="text-[11px] font-bold text-white truncate">Dr. Sohail Khan</p>
                                <p className="text-[8px] font-semibold text-white/40 uppercase tracking-widest mt-1 italic">Senior Faculty</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
};

/* Internal Helper Components */
const SidebarLink = ({ icon, label, path, active, collapsed, isSub }) => (
    <Link to={path} className={`flex items-center rounded-xl transition-all duration-200 group relative ${isSub ? 'h-9 my-0.5' : 'h-11'} ${active ? "bg-white/10 text-acadex-accent" : "text-white/40 hover:bg-white/5 hover:text-white"} ${collapsed ? 'justify-center px-0' : 'px-4 gap-4'}`}>
        <span className="shrink-0">{icon}</span>
        {!collapsed && <span className={`${isSub ? 'text-[11px]' : 'text-[12px]'} font-semibold tracking-wide`}>{label}</span>}
        {active && !collapsed && !isSub && <div className="absolute right-4 w-1.5 h-1.5 bg-acadex-accent rounded-full shadow-[0_0_8px_#EAB308]" />}
    </Link>
);

const SidebarDropdown = ({ icon, label, children, isOpen, toggle, collapsed, activePaths }) => {
    const isChildActive = activePaths.some(path => window.location.pathname === path);
    return (
        <div className="space-y-1">
            <button onClick={toggle} className={`w-full flex items-center rounded-xl transition-all h-11 group ${isChildActive && !isOpen ? "bg-white/5 text-white" : "text-white/40 hover:bg-white/5 hover:text-white"} ${collapsed ? 'justify-center px-0' : 'px-4 gap-4'}`}>
                <span className={`${isChildActive ? 'text-acadex-accent' : ''} shrink-0`}>{icon}</span>
                {!collapsed && (
                    <div className="flex flex-1 items-center justify-between">
                        <span className="text-[12px] font-semibold tracking-wide">{label}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                )}
            </button>
            <AnimatePresence>
                {isOpen && !collapsed && (
                    <div className="pl-10 space-y-1 overflow-hidden">{children}</div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TeacherSidebar;