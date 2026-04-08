import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/superAdmin/Sidebar';
import TopBar from '../components/superAdmin/TopBar';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Cpu } from 'lucide-react';

const SuperAdminLayout = () => {
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
            <Sidebar
                isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}
                isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen}
            />
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <TopBar toggleSidebar={() => {
                    if (window.innerWidth < 1024) setIsMobileOpen(true);
                    else setIsCollapsed(!isCollapsed);
                }} />

                <main className="flex-1 overflow-y-auto p-4 md:p-8 no-scrollbar flex flex-col">
                    <div className="flex-1 mb-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {/* CHILD ROUTES RENDER HERE */}
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <footer className="py-6 border-t border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/40 backdrop-blur-sm rounded-t-[32px] px-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/10">
                                <ShieldCheck size={20} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[2px] leading-none">Enterprise Security Protocol</span>
                                <span className="text-[10px] font-semibold text-slate-400 mt-1.5 uppercase tracking-tight">Encrypted via AES-256</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                                <Lock size={12} className="text-emerald-600" />
                                <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-widest">Secure Node</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                                <Cpu size={12} className="text-slate-500" />
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">v1.0.25 Stable Build</span>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default SuperAdminLayout;