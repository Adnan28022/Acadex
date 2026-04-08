import React from 'react';
import { Calendar, UserPlus, AlertTriangle, ArrowRight, Shield } from 'lucide-react';

const ExpiringSoon = () => {
    const expiring = [
        { id: "EXP-1", inst: "Global Science College", plan: "Enterprise", expiry: "28 May 2024", daysLeft: 3 },
        { id: "EXP-2", inst: "Z-Tech Academy", plan: "Basic", expiry: "30 May 2024", daysLeft: 5 },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 pb-10 animate-in fade-in duration-500">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-slate-900">Renewal Monitoring</h1>
                <p className="text-sm text-slate-500 mt-1">Institutes nearing their subscription end-date.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {expiring.map((item) => (
                    <div key={item.id} className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm relative overflow-hidden group">
                        <div className={`absolute top-0 left-0 w-1.5 h-full ${item.daysLeft <= 3 ? 'bg-red-500' : 'bg-orange-400'}`}></div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400 group-hover:text-slate-900 transition-colors"><Shield size={20} /></div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg ${item.daysLeft <= 3 ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'}`}>
                                {item.daysLeft} Days Left
                            </span>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">{item.inst}</h3>
                        <p className="text-[11px] font-bold text-slate-400 uppercase mb-6 tracking-tighter">{item.plan} Member</p>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <div className="text-[11px] font-medium text-slate-500">Expires: {item.expiry}</div>
                            <button className="p-2 bg-slate-900 text-white rounded-lg hover:scale-110 transition-all"><ArrowRight size={14} /></button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex items-center gap-4">
                <AlertTriangle className="text-blue-500" size={24} />
                <p className="text-xs font-medium text-blue-700">
                    System will automatically notify these institutes 24 hours before disconnection.
                </p>
            </div>
        </div>
    );
};
export default ExpiringSoon;