import React, { useState } from 'react';
import { CheckCircle2, XCircle, Clock, Save, Calendar } from 'lucide-react';

const AttendanceHub = () => {
    const [attendance, setAttendance] = useState([
        { id: "101", roll: "ACD-01", name: "Zeeshan Ali", status: "---", time: "Not Marked" },
        { id: "102", roll: "ACD-02", name: "Sara Khan", status: "---", time: "Not Marked" },
        { id: "103", roll: "ACD-03", name: "Ahmed Raza", status: "---", time: "Not Marked" },
    ]);

    const markStatus = (id, status) => {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setAttendance(attendance.map(a => a.id === id ? { ...a, status, time: timestamp } : a));
    };

    return (
        <div className="space-y-6 pb-12">
            <div className="flex justify-between items-center bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Live Attendance Tracker</h1>
                    <p className="text-[12px] font-medium text-slate-500 mt-1 uppercase flex items-center gap-2 tracking-widest">
                        <Calendar size={14} /> Academic Session: {new Date().toDateString()}
                    </p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl text-[12px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all">
                    <Save size={18} /> Finalize Session
                </button>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-5">Roll & Name</th>
                            <th className="px-6 py-5">Marking Time</th>
                            <th className="px-6 py-5 text-center">Set Status</th>
                            <th className="px-8 py-5 text-right">Current Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {attendance.map((s) => (
                            <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-8 py-6">
                                    <p className="text-[14px] font-semibold text-slate-800">{s.name}</p>
                                    <p className="text-[11px] font-bold text-slate-300 uppercase tracking-widest leading-none mt-1">{s.roll}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[11px] bg-slate-100 px-3 py-1 rounded-lg w-fit uppercase">
                                        <Clock size={12} /> {s.time}
                                    </div>
                                </td>
                                <td className="px-6 py-6">
                                    <div className="flex items-center justify-center gap-2">
                                        <Btn active={s.status === 'Present'} color="emerald" icon={<CheckCircle2 size={16} />} onClick={() => markStatus(s.id, 'Present')} />
                                        <Btn active={s.status === 'Absent'} color="red" icon={<XCircle size={16} />} onClick={() => markStatus(s.id, 'Absent')} />
                                        <Btn active={s.status === 'Late'} color="orange" icon={<Clock size={16} />} onClick={() => markStatus(s.id, 'Late')} />
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${s.status === 'Present' ? 'bg-emerald-50 text-emerald-600' : s.status === 'Absent' ? 'bg-red-50 text-red-600' : s.status === 'Late' ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-300'}`}>
                                        {s.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Btn = ({ active, color, icon, onClick }) => {
    const styles = {
        emerald: active ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600',
        red: active ? 'bg-red-500 text-white shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-500',
        orange: active ? 'bg-orange-500 text-white shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-orange-50 hover:text-orange-500'
    };
    return (
        <button onClick={onClick} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${styles[color]}`}>
            {icon}
        </button>
    );
};

export default AttendanceHub;