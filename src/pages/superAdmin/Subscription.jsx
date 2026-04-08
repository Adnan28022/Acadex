import React, { useState } from 'react';
import {
    Plus, Check, Trash2, Zap, ShieldCheck,
    Crown, ArrowLeft, Users, HardDrive,
    CheckSquare, Square, Save, ChevronRight
} from 'lucide-react';

const MASTER_FEATURES = [
    "Attendance Tracking", "Assignment Grading", "Real-time Chat",
    "SMS Notifications", "Custom Subdomain", "White Labeling",
    "Detailed Analytics", "Priority Support", "Online Exams"
];

const SubscriptionManager = () => {
    const [view, setView] = useState('list'); // 'list' or 'editor'
    const [plans, setPlans] = useState([
        {
            id: 1, name: "Basic Startup", price: "49", cycle: "mo",
            students: "500", storage: "5GB",
            features: ["Attendance Tracking", "Email Support"],
            icon: <Zap size={18} className="text-slate-400" />,
            popular: false
        },
        {
            id: 2, name: "Standard Pro", price: "99", cycle: "mo",
            students: "2,000", storage: "20GB",
            features: ["Attendance Tracking", "Real-time Chat", "Assignment Grading"],
            icon: <ShieldCheck size={18} className="text-blue-500" />,
            popular: true
        },
        {
            id: 3, name: "Premium Enterprise", price: "199", cycle: "mo",
            students: "Unlimited", storage: "100GB",
            features: ["White Labeling", "Custom Subdomain", "Priority Support"],
            icon: <Crown size={18} className="text-amber-500" />,
            popular: false
        }
    ]);

    const handleAddPlan = (newPlan) => {
        setPlans([...plans, { ...newPlan, id: Date.now(), icon: <Zap size={18} /> }]);
        setView('list');
    };

    return (
        <div className="min-h-screen pb-12 font-sans text-slate-900">
            {view === 'list' ? (
                <div className="max-w-7xl mx-auto px-4 animate-in fade-in duration-500">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-slate-100 pb-8">
                        <div>
                            <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Subscription Plans</h1>
                            <p className="text-sm text-slate-500 mt-1">Define pricing tiers and feature limits for institutes.</p>
                        </div>
                        <button
                            onClick={() => setView('editor')}
                            className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm">
                            <Plus size={16} /> New Plan
                        </button>
                    </div>

                    {/* Plans Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plans.map((plan) => (
                            <PlanCard key={plan.id} plan={plan} onDelete={(id) => setPlans(plans.filter(p => p.id !== id))} />
                        ))}
                    </div>
                </div>
            ) : (
                <PlanEditor onBack={() => setView('list')} onSave={handleAddPlan} />
            )}
        </div>
    );
};

/* --- 1. MINIMAL PLAN CARD --- */
const PlanCard = ({ plan, onDelete }) => (
    <div className={`bg-white rounded-3xl border ${plan.popular ? 'border-blue-500 ring-4 ring-blue-50' : 'border-slate-100'} p-8 relative flex flex-col transition-all hover:shadow-lg group`}>
        {plan.popular && (
            <span className="absolute -top-3 left-8 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                Most Popular
            </span>
        )}

        <div className="flex justify-between items-center mb-6">
            <div className="p-2.5 bg-slate-50 rounded-xl">
                {plan.icon}
            </div>
            <button onClick={() => onDelete(plan.id)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                <Trash2 size={16} />
            </button>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-1">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mb-6">
            <span className="text-3xl font-bold text-slate-900">${plan.price}</span>
            <span className="text-slate-400 text-sm italic">/{plan.cycle}</span>
        </div>

        <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users size={14} className="text-slate-400" />
                <span>{plan.students} Students</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
                <HardDrive size={14} className="text-slate-400" />
                <span>{plan.storage} Storage</span>
            </div>
        </div>

        <div className="space-y-3 pt-6 border-t border-slate-50 flex-grow">
            {plan.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-500 font-normal">
                    <Check size={14} className="mt-0.5 text-emerald-500" />
                    {f}
                </div>
            ))}
        </div>

        <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-900 hover:text-white transition-all">
            View Details
        </button>
    </div>
);

/* --- 2. CLEAN PLAN EDITOR --- */
const PlanEditor = ({ onBack, onSave }) => {
    const [formData, setFormData] = useState({
        name: '', price: '', cycle: 'month', students: '', storage: '', features: []
    });

    const toggleFeature = (feature) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center gap-4 mb-10">
                <button onClick={onBack} className="p-2.5 hover:bg-slate-100 rounded-full transition-all text-slate-400">
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-xl font-semibold text-slate-900">Create New Plan</h1>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-sm space-y-10">
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                    <EditorField label="Plan Name" placeholder="e.g. Pro Tier" value={formData.name} onChange={v => setFormData({ ...formData, name: v })} />
                    <EditorField label="Monthly Price ($)" type="number" placeholder="0" value={formData.price} onChange={v => setFormData({ ...formData, price: v })} />
                    <EditorField label="Max Students" placeholder="5,000" value={formData.students} onChange={v => setFormData({ ...formData, students: v })} />
                    <EditorField label="Cloud Storage" placeholder="50GB" value={formData.storage} onChange={v => setFormData({ ...formData, storage: v })} />
                </div>

                {/* Checkbox Section */}
                <div className="space-y-4">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Select Plan Features</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {MASTER_FEATURES.map((feat, i) => (
                            <button
                                key={i}
                                onClick={() => toggleFeature(feat)}
                                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${formData.features.includes(feat)
                                        ? 'bg-blue-50 border-blue-200 text-blue-600'
                                        : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
                                    }`}>
                                {formData.features.includes(feat) ? <CheckSquare size={16} /> : <Square size={16} className="text-slate-300" />}
                                <span className="text-xs font-medium">{feat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4 border-t border-slate-50">
                    <button
                        onClick={() => onSave(formData)}
                        className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-sm font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                        <Save size={18} /> Save & Publish
                    </button>
                    <button
                        onClick={onBack}
                        className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl text-sm font-semibold hover:bg-slate-50 transition-all">
                        Discard Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

/* --- HELPERS --- */
const EditorField = ({ label, value, onChange, placeholder, type = "text" }) => (
    <div className="space-y-2">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-0.5">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none focus:bg-white focus:border-blue-400 transition-all placeholder:text-slate-300"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default SubscriptionManager;