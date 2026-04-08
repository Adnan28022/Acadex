import React from 'react';
import { motion } from 'framer-motion';
import {
    Users, Wallet, CheckCircle2, MessageSquare,
    ShieldCheck, Smartphone, Zap, BarChart3,
    BookOpen, ClipboardCheck
} from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            title: "Smart Admissions",
            desc: "Fully automated student enrollment and digital record management.",
            icon: <Users className="text-blue-600" size={24} />,
            color: "bg-blue-50"
        },
        {
            title: "Fee Automation",
            desc: "Track full, partial, and pending payments with automatic reminders.",
            icon: <Wallet className="text-emerald-600" size={24} />,
            color: "bg-emerald-50"
        },
        {
            title: "Live Attendance",
            desc: "Real-time attendance tracking with automatic low-percentage alerts.",
            icon: <CheckCircle2 className="text-orange-600" size={24} />,
            color: "bg-orange-50"
        },
        {
            title: "Biometric Login",
            desc: "Passwordless security using Passkeys and device fingerprinting.",
            icon: <ShieldCheck className="text-indigo-600" size={24} />,
            color: "bg-indigo-50"
        },
        {
            title: "Real-time Messenger",
            desc: "Socket.IO powered instant chat between students and instructors.",
            icon: <MessageSquare className="text-purple-600" size={24} />,
            color: "bg-purple-50"
        },
        {
            title: "PWA Support",
            desc: "Install Acadex on any device and access it offline like a native app.",
            icon: <Smartphone className="text-pink-600" size={24} />,
            color: "bg-pink-50"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[11px] font-black text-blue-600 uppercase tracking-[4px]"
                    >
                        Powerful Infrastructure
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Everything you need to <span className="text-slate-400">scale your institute.</span>
                    </motion.h2 >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-slate-500 font-medium"
                    >
                        Acadex replaces manual paperwork with a precision-grade digital engine.
                        One platform for Admin, Instructors, and Students.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                            <p className="text-[14px] font-medium text-slate-500 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA for Features */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-10 rounded-[40px] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    <div className="relative z-10 space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-bold tracking-tight">Ready to transform your academy?</h3>
                        <p className="text-slate-400 text-sm font-medium">Join 150+ institutes already using Acadex Intelligent Node.</p>
                    </div>
                    <button className="relative z-10 px-8 py-4 bg-blue-600 rounded-2xl font-bold uppercase text-[11px] tracking-widest hover:bg-blue-500 transition-all flex items-center gap-2 group">
                        Get Started Now <Zap size={16} fill="currentColor" />
                    </button>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default FeaturesSection;