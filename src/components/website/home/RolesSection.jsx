import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Building2, GraduationCap,
    UserCircle, ChevronRight, Layout,
    BarChart3, MessageSquare, Zap
} from 'lucide-react';

const RolesSection = () => {
    const roles = [
        {
            role: "Super Admin",
            title: "Software Owner",
            desc: "Full visibility and control over the entire platform and all subscribed institutes.",
            features: ["Subscription Management", "Institute Activation", "Global Stats"],
            icon: <ShieldCheck size={28} />,
            style: "bg-slate-900 text-white lg:col-span-2",
            iconColor: "text-blue-400"
        },
        {
            role: "Admin",
            title: "Institute Manager",
            desc: "The command center for your academy operations and staff management.",
            features: ["Fee Management", "Staff Onboarding", "Reports"],
            icon: <Building2 size={28} />,
            style: "bg-white border-slate-100 lg:col-span-1",
            iconColor: "text-blue-600"
        },
        {
            role: "Instructor",
            title: "Academic Expert",
            desc: "Manage the academic side—from marking attendance to grading assignments.",
            features: ["Real-time Attendance", "Assignment Hub", "Direct Chat"],
            icon: <GraduationCap size={28} />,
            style: "bg-white border-slate-100 lg:col-span-1",
            iconColor: "text-indigo-600"
        },
        {
            role: "Student",
            title: "Active Learner",
            desc: "A personalized portal to track studies, results, and stay updated.",
            features: ["Class Schedule", "Fee Status", "LMS Access"],
            icon: <UserCircle size={28} />,
            style: "bg-blue-600 text-white lg:col-span-2",
            iconColor: "text-white"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[11px] font-black text-blue-600 uppercase tracking-[4px]"
                        >
                            Tailored Experiences
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                        >
                            Built for every <span className="text-slate-400">stakeholder.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-xs text-sm font-medium text-slate-500 leading-relaxed"
                    >
                        Precision-engineered dashboards for four distinct roles, ensuring data isolation and specialized tools for all.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {roles.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`${item.style} p-8 rounded-[40px] border shadow-sm flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500`}
                        >
                            <div>
                                <div className={`w-14 h-14 rounded-2xl bg-slate-50/10 flex items-center justify-center mb-8 border border-white/10 ${item.iconColor} group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div className="space-y-3">
                                    <h4 className={`text-[10px] font-black uppercase tracking-[3px] opacity-60`}>{item.role}</h4>
                                    <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                                    <p className={`text-sm font-medium mt-3 leading-relaxed ${item.role === "Super Admin" || item.role === "Student" ? "text-white/60" : "text-slate-500"}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                {item.features.map((feat, idx) => (
                                    <span key={idx} className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 ${item.role === "Super Admin" || item.role === "Student" ? "bg-white/10 text-white" : "bg-slate-100 text-slate-600"}`}>
                                        <Zap size={10} fill="currentColor" /> {feat}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                            <MessageSquare size={18} />
                        </div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Real-time Socket Connection</p>
                    </div>
                    <div className="w-px h-6 bg-slate-200 hidden md:block"></div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                            <ShieldCheck size={18} />
                        </div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Data Isolation Shield</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default RolesSection;