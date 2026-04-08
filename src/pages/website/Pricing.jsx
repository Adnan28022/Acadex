import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, Zap, ShieldCheck,
    ArrowRight, Globe, Star, HelpCircle,
    ChevronDown, XCircle, Info, Sparkles
} from 'lucide-react';

const PricingPage = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 25, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const plans = [
        { name: "Starter", price: billingCycle === 'monthly' ? "49" : "39", desc: "Perfect for small coaching centers.", features: ["Up to 100 Students", "5 Instructor Accounts", "Attendance Hub", "Standard Reports", "Community Support"], button: "Start Free Trial", recommended: false },
        { name: "Professional", price: billingCycle === 'monthly' ? "99" : "79", desc: "Best for growing academies.", features: ["Up to 500 Students", "Unlimited Instructors", "Real-time Messenger", "Automated Fee Invoicing", "Passkey Security", "Priority Support"], button: "Get Pro Access", recommended: true },
        { name: "Enterprise", price: billingCycle === 'monthly' ? "249" : "199", desc: "Full power for large schools.", features: ["Unlimited Students", "Custom Subdomain", "Payroll Management", "Advanced Analytics", "White-label Branding", "24/7 Dedicated Manager"], button: "Contact Enterprise", recommended: false }
    ];

    return (
        <div className="bg-white font-sans text-slate-900 overflow-hidden">

            {/* --- HERO SECTION: HIGH-LEVEL ANIMATED --- */}
            <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 px-6 flex flex-col items-center justify-center">

                {/* 1. DYNAMIC BACKGROUND ANIMATION */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[130px]"
                    />
                </div>

                {/* 2. HERO CONTENT */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
                >
                    {/* Pulsing Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-blue-900/5 mb-4">
                        <Sparkles size={16} className="text-blue-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-500">Transparent Investment</span>
                    </motion.div>

                    {/* Animated Headline */}
                    <div className="space-y-4">
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1]">
                            Scale your Academy <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic">
                                without the limits.
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Pick a plan that fits your growth. Switch between monthly or yearly
                            nodes to optimize your institutional ROI.
                        </motion.p>
                    </div>

                    {/* --- HIGH-END BILLING TOGGLE --- */}
                    <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-4">
                        <div className="bg-slate-50 p-1.5 rounded-[20px] border border-slate-200 flex items-center shadow-inner relative">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`relative z-10 px-8 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                Monthly Billing
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`relative z-10 px-8 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                Yearly Billing
                            </button>
                            {/* Animated Background Slider */}
                            <motion.div
                                animate={{ x: billingCycle === 'monthly' ? 0 : '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(50%-6px)] bg-acadex-navy rounded-2xl shadow-xl shadow-acadex-navy/20"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={billingCycle}
                            className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest"
                        >
                            {billingCycle === 'yearly' ? '🔥 20% Discount Applied Automatically' : 'Standard Monthly Rates'}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* --- PRICING CARDS (Pichla code same, with slight style clean up) --- */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`relative p-8 rounded-[44px] border transition-all duration-500 flex flex-col justify-between group ${plan.recommended ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 hover:border-blue-200'
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[2px] shadow-lg">
                                    Recommended Node
                                </div>
                            )}

                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                                        <p className={`text-[13px] font-medium ${plan.recommended ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
                                    </div>
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 ${plan.recommended ? 'bg-white/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                        <Zap size={24} fill="currentColor" />
                                    </div>
                                </div>

                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${plan.recommended ? 'text-slate-500' : 'text-slate-300'}`}>/ Month</span>
                                </div>

                                <div className={`h-px w-full mb-8 ${plan.recommended ? 'bg-white/10' : 'bg-slate-50'}`}></div>

                                <ul className="space-y-5 mb-12">
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-4">
                                            <CheckCircle2 size={18} className={plan.recommended ? 'text-blue-400' : 'text-blue-600'} />
                                            <span className={`text-[14px] font-semibold tracking-wide ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full py-5 rounded-[24px] font-bold uppercase text-[11px] tracking-[2px] transition-all flex items-center justify-center gap-3 group active:scale-95 ${plan.recommended ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-900/40' : 'bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-100'
                                }`}>
                                {plan.button} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PricingPage;