import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Search, Calendar, CheckSquare,
    ClipboardList, Award, Wallet, FolderOpen,
    MessageSquare, Settings, X, ChevronDown, BookOpen,
    Dot, Circle, Hash, FileText
} from 'lucide-react';
import LogoImg from '../../assets/logo.png';

const StudentSidebar = ({ isCollapsed, isMobileOpen, setIsMobileOpen, setIsCollapsed }) => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState({});

    // Jab dropdown click ho aur sidebar collapsed ho, toh pehle sidebar expand karein
    const toggleMenu = (menu) => {
        if (isCollapsed) {
            setIsCollapsed(false); // Sidebar ko expand karein
            setOpenMenus({ [menu]: true }); // Specific menu kholein
        } else {
            setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
        }
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {isMobileOpen && (
                <div onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] lg:hidden" />
            )}

            <aside className={`fixed inset-y-0 left-0 lg:relative h-screen bg-acadex-navy flex flex-col shrink-0 border-r border-white/5 z-[110] transition-all duration-300 ${isMobileOpen ? 'translate-x-0 w-full' : window.innerWidth < 1024 ? '-translate-x-full' : isCollapsed ? 'w-[85px]' : 'w-[280px]'}`}>

                {isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(false)} className="absolute right-6 top-8 p-2 bg-white/10 rounded-full text-white lg:hidden"><X size={24} /></button>
                )}

                <div className={`h-24 flex items-center transition-all duration-300 ${isCollapsed && !isMobileOpen ? 'justify-center' : 'px-6'}`}>
                    <img src={LogoImg} alt="Logo" className="h-9 w-auto brightness-0 invert" />
                    {(!isCollapsed || isMobileOpen) && (
                        <div className="ml-3 flex flex-col">
                            <span className="text-white font-bold text-sm tracking-tighter uppercase">Acadex</span>
                            <span className="text-[8px] font-bold text-acadex-accent tracking-[2px] uppercase opacity-70">Student Node</span>
                        </div>
                    )}
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">
                    <SidebarLink icon={<LayoutDashboard size={20} />} label="My Dashboard" path="/student/dashboard" active={isActive("/student/dashboard")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarLink icon={<Search size={20} />} label="Browse Courses" path="/student/browse" active={isActive("/student/browse")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarDropdown
                        icon={<BookOpen size={20} />} label="Academics"
                        isOpen={openMenus['acad']} toggle={() => toggleMenu('acad')}
                        collapsed={isCollapsed && !isMobileOpen}
                        activePaths={["/student/schedule", "/student/attendance", "/student/material"]}
                    >
                        {/* Sub-items with Icons */}
                        <SidebarLink subIcon={<Calendar size={14} />} label="My Timetable" path="/student/schedule" active={isActive("/student/schedule")} isSub collapsed={isCollapsed && !isMobileOpen} />
                        <SidebarLink subIcon={<CheckSquare size={14} />} label="Attendance Log" path="/student/attendance" active={isActive("/student/attendance")} isSub collapsed={isCollapsed && !isMobileOpen} />
                        <SidebarLink subIcon={<FolderOpen size={14} />} label="Study Material" path="/student/material" active={isActive("/student/material")} isSub collapsed={isCollapsed && !isMobileOpen} />
                    </SidebarDropdown>

                    <SidebarDropdown
                        icon={<ClipboardList size={20} />} label="Assessments"
                        isOpen={openMenus['exam']} toggle={() => toggleMenu('exam')}
                        collapsed={isCollapsed && !isMobileOpen}
                        activePaths={["/student/assignments", "/student/results"]}
                    >
                        <SidebarLink subIcon={<FileText size={14} />} label="Assignments" path="/student/assignments" active={isActive("/student/assignments")} isSub collapsed={isCollapsed && !isMobileOpen} />
                        <SidebarLink subIcon={<Award size={14} />} label="Grade Report" path="/student/results" active={isActive("/student/results")} isSub collapsed={isCollapsed && !isMobileOpen} />
                    </SidebarDropdown>

                    <SidebarLink icon={<Wallet size={20} />} label="Fee Payments" path="/student/fees" active={isActive("/student/fees")} collapsed={isCollapsed && !isMobileOpen} />

                    <SidebarLink icon={<MessageSquare size={20} />} label="Tutor Chat" path="/student/chat" active={isActive("/student/chat")} collapsed={isCollapsed && !isMobileOpen} />
                </nav>

                <div className="p-4 border-t border-white/5 bg-black/10">
                    <div className={`bg-white/5 p-3 rounded-2xl flex items-center ${isCollapsed && !isMobileOpen ? 'justify-center' : 'gap-3'}`}>
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg">ZA</div>
                        {(!isCollapsed || isMobileOpen) && (
                            <div className="overflow-hidden whitespace-nowrap">
                                <p className="text-[11px] font-bold text-white truncate">Zeeshan Ali</p>
                                <p className="text-[8px] font-semibold text-white/40 uppercase tracking-widest mt-1">ID: ACD-25-101</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
};

/* Internal Helper Components */
const SidebarLink = ({ icon, subIcon, label, path, active, collapsed, isSub }) => (
    <Link to={path} className={`flex items-center rounded-xl transition-all duration-200 group relative ${isSub ? 'h-9 my-0.5' : 'h-11'} ${active ? "bg-white/10 text-acadex-accent" : "text-white/40 hover:bg-white/5 hover:text-white"} ${collapsed ? 'justify-center px-0' : isSub ? 'pl-10 pr-4 gap-3' : 'px-4 gap-4'}`}>

        {/* Sub Icon or Main Icon */}
        <span className="shrink-0">
            {isSub ? (subIcon || <Dot size={20} />) : icon}
        </span>

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
            {/* Logic fixed: Removed !collapsed constraint from here */}
            {isOpen && (
                <div className={`space-y-1 overflow-hidden transition-all ${collapsed ? 'w-full flex flex-col items-center pl-0 py-2' : 'pl-0'}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default StudentSidebar;