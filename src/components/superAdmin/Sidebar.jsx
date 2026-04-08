import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Building2, CreditCard,
    BarChart3, Users, LogOut, ChevronLeft,
    MessageSquare, FileText, ChevronDown, Clock, AlertCircle, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../../assets/logo.png';

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
    const location = useLocation();
    const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Overview", path: "/sa/dashboard" },
        { icon: <Building2 size={20} />, label: "Institutes", path: "/sa/institutes" },
        { icon: <MessageSquare size={20} />, label: "Messenger", path: "/sa/chat" },
        { icon: <CreditCard size={20} />, label: "Sub-Plans", path: "/sa/plans" },
        { icon: <BarChart3 size={20} />, label: "Revenue Logs", path: "/sa/revenue" },
        { icon: <Users size={20} />, label: "Global Users", path: "/sa/users" },
    ];

    const invoiceSubItems = [
        { label: "All Invoices", path: "/sa/invoices/all", icon: <FileText size={18} /> },
        { label: "Pending Payments", path: "/sa/invoices/pending", icon: <Clock size={18} /> },
        { label: "Expiring Soon", path: "/sa/invoices/expiring", icon: <AlertCircle size={18} /> },
    ];

    return (
        <>
            {/* MOBILE OVERLAY - Only visible when menu is open on mobile */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] lg:hidden"
                    />
                )}
            </AnimatePresence>

            <motion.aside
                // LOGIC: Mobile par x: -100% (hidden), Desktop par 0 (visible)
                initial={false}
                animate={
                    window.innerWidth < 1024
                        ? { x: isMobileOpen ? 0 : "-100%", width: "100%" }
                        : { x: 0, width: isCollapsed ? 80 : 280 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`fixed inset-y-0 left-0 lg:relative h-screen bg-acadex-navy flex flex-col shrink-0 border-r border-white/5 z-[110] shadow-2xl overflow-hidden`}
            >
                {/* CLOSE BUTTON - Sirf mobile menu ke liye layout ke upar */}
                {isMobileOpen && (
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="absolute right-6 top-8 p-2 bg-white/10 rounded-full text-white lg:hidden"
                    >
                        <X size={24} />
                    </button>
                )}

                {/* LOGO SECTION - Design Same */}
                <div className={`h-24 flex items-center transition-all duration-300 ${isCollapsed && !isMobileOpen ? 'justify-center px-0' : 'px-6 justify-start'}`}>
                    <div className="flex-shrink-0 w-12 flex justify-center items-center">
                        <img src={LogoImg} alt="Logo" className="h-9 w-auto object-contain brightness-0 invert" />
                    </div>
                    <AnimatePresence>
                        {(!isCollapsed || isMobileOpen) && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                                className="flex flex-col ml-2 whitespace-nowrap"
                            >
                                <span className="text-white font-bold text-sm tracking-tighter uppercase">Acadex</span>
                                <span className="text-[8px] font-bold text-acadex-accent tracking-[2px] uppercase opacity-70">Control</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto no-scrollbar">
                    {(!isCollapsed || isMobileOpen) && <p className="px-4 text-[9px] font-bold text-white/30 uppercase tracking-[3px] mb-4">Management</p>}

                    {/* Main Menu Items */}
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.label} to={item.path}
                                onClick={() => setIsMobileOpen(false)} // Mobile par click karte hi band
                                className={`flex items-center rounded-xl transition-all group relative h-12 ${isActive ? "bg-white/10 text-acadex-accent shadow-sm" : "text-white/50 hover:bg-white/5 hover:text-white"
                                    } ${isCollapsed && !isMobileOpen ? 'justify-center px-0' : 'px-4 gap-4'}`}
                            >
                                <span className={isActive ? "text-acadex-accent" : "text-white/20 group-hover:text-white/40"}>{item.icon}</span>
                                {(!isCollapsed || isMobileOpen) && <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>}
                            </Link>
                        );
                    })}

                    {/* INVOICE DROPDOWN ITEM */}
                    <div className="space-y-1">
                        <button
                            onClick={() => setIsInvoiceOpen(!isInvoiceOpen)}
                            className={`w-full flex items-center rounded-xl transition-all h-12 text-white/50 hover:bg-white/5 hover:text-white ${isCollapsed && !isMobileOpen ? 'justify-center px-0' : 'px-4 gap-4'}`}
                        >
                            <span className="text-white/20 group-hover:text-white/40"><FileText size={20} /></span>
                            {(!isCollapsed || isMobileOpen) && (
                                <div className="flex flex-1 items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Invoices</span>
                                    <ChevronDown size={14} className={`transition-transform ${isInvoiceOpen ? 'rotate-180' : ''}`} />
                                </div>
                            )}
                        </button>

                        <AnimatePresence>
                            {isInvoiceOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className={`overflow-hidden space-y-1 flex flex-col ${isCollapsed && !isMobileOpen ? 'items-center' : 'pl-10'}`}
                                >
                                    {invoiceSubItems.map((sub) => {
                                        const isSubActive = location.pathname === sub.path;
                                        return (
                                            <Link
                                                key={sub.label} to={sub.path}
                                                onClick={() => setIsMobileOpen(false)}
                                                className={`flex items-center transition-colors h-10 rounded-lg ${isCollapsed && !isMobileOpen ? 'w-10 justify-center' : 'gap-3 w-full'
                                                    } ${isSubActive ? 'text-acadex-accent bg-white/5' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                                            >
                                                <span className={isSubActive ? "text-acadex-accent" : ""}>{sub.icon}</span>
                                                {(!isCollapsed || isMobileOpen) && (
                                                    <span className="text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
                                                        {sub.label}
                                                    </span>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* User Bottom Section - Design Same */}
                <div className="p-4 border-t border-white/5">
                    <div className={`bg-white/5 p-3 rounded-xl flex items-center ${isCollapsed && !isMobileOpen ? 'justify-center px-0' : 'gap-3 px-3'}`}>
                        <div className="w-8 h-8 rounded-lg bg-acadex-accent flex items-center justify-center text-acadex-navy font-bold text-xs shrink-0 shadow-inner">SA</div>
                        {(!isCollapsed || isMobileOpen) && (
                            <div className="overflow-hidden whitespace-nowrap">
                                <p className="text-[10px] font-bold text-white truncate">Super Admin</p>
                                <p className="text-[8px] font-bold text-white/40 uppercase tracking-tighter">Owner</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;