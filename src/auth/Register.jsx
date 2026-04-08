import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, ArrowLeft, Building2, Zap,
    CreditCard, CheckCircle2, Globe, User,
    Mail, Phone, Lock, Crown, Award,
    ChevronLeft, ShieldCheck
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/authLayout';

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState('Professional');

    const nextStep = () => step < 4 && setStep(step + 1);
    const prevStep = () => step > 1 && setStep(step - 1);

    return (
        <AuthLayout
            title={step === 4 ? "Authorize Payment" : "Identity Setup"}
            subtitle={`Node Deployment: ${getStepTitle(step)}`}
        >
            <div className="flex flex-col h-full max-h-[520px] justify-between relative">

                {/* --- BACK TO LOGIN: PERSISTENT --- */}
                <button
                    onClick={() => navigate('/login')}
                    className="absolute -top-16 left-0 flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-acadex-navy uppercase tracking-widest transition-all group"
                >
                    <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Sign In
                </button>

                {/* --- PROGRESS INDICATOR --- */}
                <div className="flex items-center gap-2 mb-10">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? "w-10 bg-acadex-navy" : "w-4 bg-slate-100"}`} />
                        </div>
                    ))}
                    <span className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-[3px]">Step 0{step}</span>
                </div>

                {/* --- STEPS CONTENT --- */}
                <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: IDENTITY */}
                        {step === 1 && (
                            <motion.div key="st1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Input label="Full Name" placeholder="Zeeshan Ali" icon={<User size={16} />} />
                                <Input label="Email Address" type="email" placeholder="admin@acadex.com" icon={<Mail size={16} />} />
                                <Input label="Phone Number" placeholder="+92 300 1234567" icon={<Phone size={16} />} />
                                <Input label="Create Password" type="password" placeholder="••••••••" icon={<Lock size={16} />} />
                            </motion.div>
                        )}

                        {/* STEP 2: INSTITUTE */}
                        {step === 2 && (
                            <motion.div key="st2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <Input label="Institute Name" placeholder="Oxford Academy" />
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Institute Type</label>
                                        <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-acadex-navy font-semibold text-[13px]">
                                            <option>Coaching Center</option>
                                            <option>Professional Academy</option>
                                            <option>Secondary School</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subdomain</label>
                                    <div className="flex bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden focus-within:border-acadex-navy transition-all">
                                        <div className="flex items-center pl-5 text-slate-300"><Globe size={18} /></div>
                                        <input type="text" placeholder="oxford" className="flex-1 px-4 py-4 text-sm outline-none font-bold bg-transparent" />
                                        <span className="bg-slate-200/50 px-6 py-4 text-[10px] font-black text-slate-500 uppercase border-l border-slate-200 tracking-widest">.acadex.com</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: PREMIUM PLANS (NEW IMPROVED DESIGN) */}
                        {step === 3 && (
                            <motion.div key="st3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <PlanCard
                                    name="Starter" price="49" limit="100 Students"
                                    icon={<Zap size={18} />} current={selectedPlan} set={setSelectedPlan}
                                />
                                <PlanCard
                                    name="Professional" price="99" limit="500 Students"
                                    icon={<Award size={18} />} current={selectedPlan} set={setSelectedPlan} recommended
                                />
                                <PlanCard
                                    name="Enterprise" price="249" limit="Unlimited"
                                    icon={<Crown size={18} />} current={selectedPlan} set={setSelectedPlan}
                                />
                            </motion.div>
                        )}

                        {/* STEP 4: PAYMENT */}
                        {step === 4 && (
                            <motion.div key="st4" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <Input label="Card Number" placeholder="0000 0000 0000 0000" icon={<CreditCard size={16} />} />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="Expiry" placeholder="MM/YY" />
                                        <Input label="CVC" placeholder="***" />
                                    </div>
                                </div>
                                <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
                                    <ShieldCheck className="absolute -right-6 -top-6 w-32 h-32 text-white/5" />
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[3px] mb-4">Final Summary</p>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h4 className="text-xl font-bold">{selectedPlan} Node</h4>
                                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Monthly Subscription</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-3xl font-black">${selectedPlan === 'Starter' ? '49' : selectedPlan === 'Professional' ? '99' : '249'}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* --- NAVIGATION BUTTONS --- */}
                <div className="pt-8 flex items-center justify-between border-t border-slate-100">
                    <button
                        type="button" onClick={prevStep}
                        className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-acadex-navy"}`}
                    >
                        <ArrowLeft size={16} /> Previous Node
                    </button>

                    <button
                        type="button" onClick={nextStep}
                        className="px-10 py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[11px] tracking-[2px] shadow-xl shadow-acadex-navy/20 hover:bg-acadex-blue transition-all flex items-center justify-center gap-3"
                    >
                        {step === 4 ? "Authorize Payment" : "Next Phase"} <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
};

/* --- MINI COMPONENTS --- */

const Input = ({ label, placeholder, type = "text", icon }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">{icon}</div>}
            <input
                type={type} placeholder={placeholder}
                className={`w-full ${icon ? 'pl-11' : 'px-5'} py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-acadex-navy transition-all text-sm font-semibold shadow-sm`}
            />
        </div>
    </div>
);

const PlanCard = ({ name, price, limit, icon, current, set, recommended }) => (
    <button
        type="button" onClick={() => set(name)}
        className={`relative p-6 rounded-[32px] border text-left transition-all duration-300 flex flex-col justify-between h-[180px] group ${current === name
                ? "bg-acadex-navy text-white border-acadex-navy shadow-2xl scale-105"
                : "bg-white border-slate-100 hover:border-slate-300 hover:shadow-lg"
            }`}
    >
        {recommended && (
            <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${current === name ? 'bg-blue-500 text-white' : 'bg-acadex-navy text-white'}`}>
                Popular
            </div>
        )}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${current === name ? 'bg-white/10' : 'bg-slate-50 text-slate-400 group-hover:text-acadex-navy'}`}>
            {icon}
        </div>
        <div>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${current === name ? 'text-white/40' : 'text-slate-400'}`}>{name}</p>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black tracking-tighter">${price}</span>
                <span className={`text-[9px] font-bold uppercase ${current === name ? 'text-white/20' : 'text-slate-300'}`}>/ mo</span>
            </div>
            <p className={`text-[10px] font-bold mt-2 ${current === name ? 'text-emerald-400' : 'text-slate-500'}`}>{limit}</p>
        </div>
    </button>
);

const getStepTitle = (s) => {
    if (s === 1) return "Administrator Access";
    if (s === 2) return "Institute Identity";
    if (s === 3) return "Subscription Tier";
    return "Gateway Authorization";
};

export default Register;