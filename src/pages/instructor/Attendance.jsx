import React, { useState, useMemo } from 'react';
import {
    CheckCircle2, XCircle, Clock, Save,
    Calendar, Users, Search, Filter,
    ArrowUpRight, AlertCircle, ShieldCheck,
    ChevronRight, Info
} from 'lucide-react';

const TeacherAttendance = () => {
    // 1. DATA STATE (Students for the selected Batch)
    const [students, setStudents] = useState([
        { id: "101", roll: "ACD-01", name: "Zeeshan Ali", status: "Present", time: "04:05 PM", remarks: "" },
        { id: "102", roll: "ACD-02", name: "Sara Khan", status: "Absent", time: "---", remarks: "" },
        { id: "103", roll: "ACD-03", name: "Ahmed Raza", status: "Late", time: "04:22 PM", remarks: "Traffic issue" },
        { id: "104", roll: "ACD-04", name: "Zainab Malik", status: "---", time: "---", remarks: "" },
        { id: "105", roll: "ACD-05", name: "Hamza Abbasi", status: "Present", time: "04:02 PM", remarks: "" },
    ]);

    const [selectedBatch, setSelectedBatch] = useState("Batch-04 (Advanced React)");
    const [search, setSearch] = useState("");

    // 2. ACTIONS
    const markStatus = (id, newStatus) => {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setStudents(prev => prev.map(s =>
            s.id === id ? { ...s, status: newStatus, time: newStatus === 'Absent' ? '---' : timestamp } : s
        ));
    };

    const markAllPresent = () => {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setStudents(prev => prev.map(s => ({ ...s, status: 'Present', time: timestamp })));
    };

    // 3. STATS CALCULATION
    const stats = useMemo(() => {
        const present = students.filter(s => s.status === 'Present').length;
        const absent = students.filter(s => s.status === 'Absent').length;
        const late = students.filter(s => s.status === 'Late').length;
        return { present, absent, late, total: students.length };
    }, [students]);

    return (
        <div className="space-y-6 pb-12">

            {/* --- TOP HEADER: SESSION CONTEXT --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                        <CheckCircle2 size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Session Attendance</h1>
                        <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest flex items-center gap-2">
                            <Calendar size={14} className="text-indigo-500" /> {new Date().toDateString()} • {selectedBatch}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={markAllPresent} className="px-5 py-3 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">
                        Mark All Present
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-emerald-600/10 hover:bg-emerald-700 transition-all">
                        <Save size={18} /> Finalize Sheet
                    </button>
                </div>
            </div>

            {/* --- REAL-TIME STATS BAR --- */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <AttendanceStat label="Total Enrolled" value={stats.total} color="text-slate-900" bgColor="bg-white" />
                <AttendanceStat label="Present Today" value={stats.present} color="text-emerald-600" bgColor="bg-emerald-50/50" border="border-emerald-100" />
                <AttendanceStat label="Absent Students" value={stats.absent} color="text-red-600" bgColor="bg-red-50/50" border="border-red-100" />
                <AttendanceStat label="Late Arrivals" value={stats.late} color="text-orange-600" bgColor="bg-orange-50/50" border="border-orange-100" />
            </div>

            {/* --- SEARCH & SELECTION BAR --- */}
            <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text" placeholder="Quick find student by roll or name..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-[13px] font-medium focus:border-indigo-600/20"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-auto">
                    <select className="w-full md:w-64 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-[12px] font-bold text-slate-600 outline-none focus:border-indigo-600/20">
                        <option>Batch-04 (React)</option>
                        <option>Batch-02 (UI/UX)</option>
                    </select>
                </div>
            </div>

            {/* --- ATTENDANCE MARKING LIST --- */}
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Learner Info</th>
                                <th className="px-6 py-5 text-center">Status Toggles</th>
                                <th className="px-6 py-5">Remarks / Notes</th>
                                <th className="px-6 py-5">Entry Time</th>
                                <th className="px-8 py-5 text-right">Current Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {students.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map((s) => (
                                <tr key={s.id} className="hover:bg-slate-50/30 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <p className="text-[11px] font-black text-slate-300 w-12 tracking-widest leading-none">{s.roll}</p>
                                            <p className="text-[14px] font-semibold text-slate-900 leading-none">{s.name}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center justify-center gap-2">
                                            <AttendanceBtn active={s.status === 'Present'} type="Present" color="emerald" icon={<CheckCircle2 size={16} />} onClick={() => markStatus(s.id, 'Present')} />
                                            <AttendanceBtn active={s.status === 'Absent'} type="Absent" color="red" icon={<XCircle size={16} />} onClick={() => markStatus(s.id, 'Absent')} />
                                            <AttendanceBtn active={s.status === 'Late'} type="Late" color="orange" icon={<Clock size={16} />} onClick={() => markStatus(s.id, 'Late')} />
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <input
                                            type="text" placeholder="Add note..."
                                            className="bg-transparent border-none outline-none text-[12px] font-medium text-slate-500 placeholder:text-slate-300 w-full focus:text-slate-900"
                                            defaultValue={s.remarks}
                                        />
                                    </td>
                                    <td className="px-6 py-6 text-[12px] font-bold text-slate-400 uppercase">
                                        {s.time}
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${s.status === 'Present' ? 'bg-emerald-50 text-emerald-600' :
                                                s.status === 'Absent' ? 'bg-red-50 text-red-600' :
                                                    s.status === 'Late' ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-300'
                                            }`}>
                                            {s.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- FOOTER INFO --- */}
            <div className="bg-blue-50 p-6 rounded-[28px] border border-blue-100 flex items-start gap-4">
                <Info size={20} className="text-blue-500 mt-0.5" />
                <p className="text-[12px] font-medium text-blue-700 leading-relaxed italic">
                    <span className="font-bold">Pro Tip:</span> Marking a student as "Late" or "Present" automatically records their arrival time. This data will be visible to the Admin and Student in their respective dashboards.
                </p>
            </div>
        </div>
    );
};

// --- MINI COMPONENTS ---
const AttendanceStat = ({ label, value, color, bgColor, border }) => (
    <div className={`p-6 rounded-[28px] border border-slate-100 shadow-sm ${bgColor} ${border}`}>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
        <p className={`text-2xl font-black ${color} tracking-tight leading-none`}>{value}</p>
    </div>
);

const AttendanceBtn = ({ active, color, icon, onClick }) => {
    const styles = {
        emerald: active ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600',
        red: active ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500',
        orange: active ? 'bg-orange-500 text-white shadow-lg shadow-orange-200' : 'bg-slate-50 text-slate-400 hover:bg-orange-50 hover:text-orange-500'
    };
    return (
        <button onClick={onClick} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${styles[color]}`}>
            {icon}
        </button>
    );
};

export default TeacherAttendance;