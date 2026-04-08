import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TeacherSidebar from '../components/instructor/Sidebar';
import TeacherTopBar from '../components/instructor/Topbar';
import { ShieldCheck, Cpu, Database, Award } from 'lucide-react';

const TeacherLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden relative">

            {/* INSTRUCTOR SIDEBAR */}
            <TeacherSidebar
                isCollapsed={isCollapsed}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">

                {/* INSTRUCTOR TOPBAR */}
                <TeacherTopBar toggleSidebar={() => {
                    if (window.innerWidth < 1024) setIsMobileOpen(true);
                    else setIsCollapsed(!isCollapsed);
                }} />

                {/* MAIN ACADEMIC CONTENT */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 no-scrollbar flex flex-col">

                    <div className="flex-1 mb-10">
                        {/* NO ENTRANCE ANIMATION FOR FAST PERFORMANCE */}
                        <Outlet />
                    </div>

                    {/* ACADEMIC SECURITY FOOTER */}
                    <footer className="py-6 border-t border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/40 backdrop-blur-sm rounded-t-[32px] px-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/10">
                                <Award size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[2px] leading-none">
                                    Academic Integrity Protocol
                                </span>
                                <span className="text-[10px] font-semibold text-slate-400 mt-1.5 uppercase tracking-tight">
                                    Oxford Academy • Instructor Instance
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                                <Database size={12} className="text-blue-600" />
                                <span className="text-[9px] font-bold text-blue-700 uppercase tracking-widest">LMS Connected</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                                <Cpu size={12} className="text-slate-500" />
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Node v1.0.25</span>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default TeacherLayout;