import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
    ArrowRight, Mail, Lock, Loader2, 
    ChevronLeft, CheckCircle2, ShieldAlert,
    KeyRound
} from 'lucide-react';
import AuthLayout from '../layouts/authLayout';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSent, setIsSent] = useState(false); // Toggle between Form and Success Message

    const handleRecovery = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API Transmission
        setTimeout(() => {
            setLoading(false);
            setIsSent(true);
        }, 1500);
    };

    return (
        <AuthLayout 
            title={isSent ? "Transmission Successful" : "Password Recovery"} 
            subtitle={isSent ? "Authorization link has been dispatched." : "Re-establish access to your Acadex infrastructure node."}
        >
            <div className="space-y-6 px-2">
                
                {!isSent ? (
                    /* --- PHASE 1: REQUEST FORM --- */
                    <form onSubmit={handleRecovery} className="space-y-6">
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-4 mb-2">
                            <ShieldAlert className="text-blue-600 shrink-0 mt-0.5" size={18} />
                            <p className="text-[11px] font-medium text-blue-700 leading-relaxed italic">
                                Identification is required. Enter your registered email address to receive a secure cryptographic reset link.
                            </p>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                                Registered Email Address
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-acadex-navy transition-colors" size={16} />
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@acadex.com"
                                    className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-acadex-navy focus:ring-4 focus:ring-acadex-navy/5 transition-all text-sm font-semibold shadow-sm"
                                />
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-acadex-navy text-white py-5 rounded-[20px] font-bold text-[11px] uppercase tracking-[3px] hover:bg-acadex-blue transition-all flex items-center justify-center gap-3 shadow-2xl shadow-acadex-navy/10 mt-2 group disabled:opacity-70"
                        >
                            {loading ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : (
                                <>Send Reset Link <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>

                        <div className="text-center pt-4">
                            <Link to="/login" className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-acadex-navy uppercase tracking-widest transition-all">
                                <ChevronLeft size={14} /> Back to Sign In
                            </Link>
                        </div>
                    </form>
                ) : (
                    /* --- PHASE 2: SUCCESS STATE --- */
                    <div className="space-y-8 py-4 text-center">
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[32px] flex items-center justify-center border border-emerald-100 shadow-xl shadow-emerald-500/10">
                                <CheckCircle2 size={40} />
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Check your inbox</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                                We have sent a secure password reset link to <br />
                                <span className="text-acadex-navy font-bold">{email}</span>. 
                                It will expire in 60 minutes.
                            </p>
                        </div>

                        <div className="pt-4 space-y-4">
                            <button 
                                onClick={() => setIsSent(false)}
                                className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold text-[10px] uppercase tracking-widest border border-slate-200 hover:bg-slate-100 transition-all"
                            >
                                Resend Email
                            </button>
                            <Link 
                                to="/login" 
                                className="block w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest shadow-lg hover:bg-acadex-blue transition-all"
                            >
                                Return to Login
                            </Link>
                        </div>
                    </div>
                )}
                
            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;