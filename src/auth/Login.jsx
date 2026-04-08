import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    ArrowRight, Mail, Lock, Loader2,
    Building2, GraduationCap,
    UserCircle, ChevronLeft, Fingerprint
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLayout from '../layouts/authLayout';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState(null); // Initially no role selected
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Roles excluding Super Admin
    const roles = [
        { id: 'Admin', name: 'Admin', icon: <Building2 size={24} />, desc: 'Institute Management', color: 'indigo' },
        { id: 'Instructor', name: 'Instructor', icon: <GraduationCap size={24} />, desc: 'Academic Faculty Node', color: 'emerald' },
        { id: 'Student', name: 'Student', icon: <UserCircle size={24} />, desc: 'Learner Access Point', color: 'orange' }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        setTimeout(() => {
            // Simplified Login Logic for 3 roles
            if (role === 'Admin' && email === 'admin@acadex.com' && password === 'admin123') {
                navigate('/admin/dashboard');
            } else if (role === 'Instructor' && email === 'teacher@acadex.com' && password === 'teach123') {
                navigate('/instructor/dashboard');
            } else if (role === 'Student' && email === 'student@acadex.com' && password === 'stu123') {
                navigate('/student/dashboard');
            } else {
                setError(`Authorization failed for ${role} credentials.`);
                setLoading(false);
            }
        }, 1500);
    };

    return (
        <AuthLayout
            title={!role ? "Select Access Node" : `${role} Authentication`}
            subtitle={!role ? "Identify your authorization level to continue." : `Enter your credentials to access the ${role} panel.`}
        >
            <div className="w-full">

                <AnimatePresence mode="wait">
                    {!role ? (
                        /* --- STEP 1: ROLE SELECTION CARDS --- */
                        <motion.div
                            key="role-selection"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {roles.map((r) => (
                                <button
                                    key={r.id}
                                    onClick={() => setRole(r.name)}
                                    className="group p-6 bg-white border border-slate-100 rounded-[32px] text-left hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            {r.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-[14px] font-bold text-slate-900 leading-none">{r.name}</h4>
                                            <p className="text-[10px] font-medium text-slate-400 mt-2 uppercase tracking-widest">{r.desc}</p>
                                        </div>
                                    </div>
                                    <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-5 transition-opacity">
                                        {r.icon}
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    ) : (
                        /* --- STEP 2: LOGIN FORM --- */
                        <motion.div
                            key="login-form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            {/* Back Button */}
                            <button
                                onClick={() => { setRole(null); setError(''); }}
                                className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-acadex-navy uppercase tracking-widest mb-6 transition-all"
                            >
                                <ChevronLeft size={14} /> Change Access Node
                            </button>

                            <form onSubmit={handleLogin} className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest p-4 rounded-2xl text-center">
                                        {error}
                                    </div>
                                )}

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">{role} ID / Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-acadex-navy transition-colors" size={16} />
                                        <input
                                            required type="email" value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={`Enter ${role.toLowerCase()} email`}
                                            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-acadex-navy transition-all text-sm font-semibold shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex justify-between px-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Secret Key</label>
                                        <Link to="/forgot-password" size={14} className="text-[10px] font-bold text-acadex-blue hover:underline uppercase tracking-tighter cursor-pointer">Recover Key?</Link>
                                    </div>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-acadex-navy transition-colors" size={16} />
                                        <input
                                            required type="password" value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-acadex-navy transition-all text-sm font-semibold shadow-sm"
                                        />
                                    </div>
                                </div>

                                <button
                                    disabled={loading} type="submit"
                                    className="w-full bg-acadex-navy text-white py-5 rounded-[20px] font-bold text-[11px] uppercase tracking-[3px] hover:bg-acadex-blue transition-all flex items-center justify-center gap-3 shadow-2xl shadow-acadex-navy/20 group disabled:opacity-70"
                                >
                                    {loading ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : (
                                        <>Grant {role} Access <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>

                                <div className="flex items-center gap-4 pt-4">
                                    <div className="h-px bg-slate-100 flex-1"></div>
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Or login via</span>
                                    <div className="h-px bg-slate-100 flex-1"></div>
                                </div>

                                <button type="button" className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-100 transition-all border border-slate-100">
                                    <Fingerprint size={18} className="text-blue-600" /> Biometric Passkey
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[2px] mt-10">
                    Need a new node? <Link to="/register" className="text-acadex-navy hover:underline ml-1">Register Institute</Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;