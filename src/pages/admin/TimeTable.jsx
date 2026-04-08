import React, { useState, useMemo } from 'react';
import {
    Calendar, Clock, MapPin, User, BookOpen,
    Plus, Search, X, Trash2, Edit, Download, CheckCircle
} from 'lucide-react';

// --- HELPER COMPONENTS (Defined outside to avoid re-renders) ---
const InfoPill = ({ icon, label, value }) => (
    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
        <span className="text-slate-400">{icon}</span>
        <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">{label}</span>
            <span className="text-[11px] font-semibold text-slate-700 mt-1">{value}</span>
        </div>
    </div>
);

const TimetableHub = () => {
    // 1. DATA STATE
    const [activeDay, setActiveDay] = useState('Monday');
    const [isAddOpen, setIsAddOpen] = useState(false);

    const [schedule, setSchedule] = useState([
        {
            id: "SLT-101", day: "Monday", start: "09:00 AM", end: "10:30 AM",
            course: "Full Stack Web", instructor: "Dr. Sohail Khan", room: "Lab 01",
            batch: "Batch-04", type: "Theory"
        },
        {
            id: "SLT-102", day: "Monday", start: "11:00 AM", end: "12:30 PM",
            course: "UI/UX Design Masterclass", instructor: "Prof. Amna", room: "Studio A",
            batch: "Batch-02", type: "Practical"
        },
        {
            id: "SLT-103", day: "Tuesday", start: "10:00 AM", end: "11:30 AM",
            course: "Python Data Science", instructor: "Zaid Ahmed", room: "Lab 04",
            batch: "Batch-01", type: "Theory"
        }
    ]);

    // 2. FILTER LOGIC
    const dailyClasses = useMemo(() => {
        return schedule.filter(s => s.day === activeDay);
    }, [activeDay, schedule]);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const deleteSlot = (id) => {
        if (window.confirm("Delete this class slot?")) {
            setSchedule(schedule.filter(s => s.id !== id));
        }
    };

    return (
        <div className="space-y-6 pb-12 animate-in fade-in duration-500">

            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Timetable</h1>
                    <p className="text-[12px] font-medium text-slate-400 mt-1 uppercase tracking-widest leading-none">Schedule Management Node</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-xl border border-slate-100 transition-all"><Download size={18} /></button>
                    <button onClick={() => setIsAddOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-acadex-navy text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-acadex-navy/20 hover:bg-acadex-blue transition-all">
                        <Plus size={18} /> Create Slot
                    </button>
                </div>
            </div>

            {/* --- DAY SELECTOR --- */}
            <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
                {days.map((day) => (
                    <button
                        key={day} onClick={() => setActiveDay(day)}
                        className={`flex-1 min-w-[100px] py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeDay === day ? 'bg-acadex-navy text-white shadow-lg' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* --- CLASS LIST --- */}
            <div className="grid grid-cols-1 gap-4">
                {dailyClasses.length > 0 ? (
                    dailyClasses.map((item) => (
                        <div key={item.id} className="bg-white rounded-[28px] border border-slate-100 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:border-blue-200 transition-all group">

                            {/* Time Block */}
                            <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 flex flex-col items-center justify-center min-w-[140px]">
                                <span className="text-[15px] font-bold text-slate-900">{item.start}</span>
                                <span className="text-[10px] font-bold text-slate-300 uppercase my-1">to</span>
                                <span className="text-[15px] font-bold text-slate-900">{item.end}</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                                    <div>
                                        <h3 className="text-[17px] font-bold text-slate-900 tracking-tight leading-none">{item.course}</h3>
                                        <p className="text-[11px] font-bold text-blue-600 uppercase tracking-[2px] mt-2 flex items-center gap-2">
                                            <CheckCircle size={12} /> {item.batch} • {item.type}
                                        </p>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest">{item.id}</span>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <InfoPill icon={<User size={14} />} label="Instructor" value={item.instructor} />
                                    <InfoPill icon={<MapPin size={14} />} label="Location" value={item.room} />
                                    <InfoPill icon={<BookOpen size={14} />} label="Resources" value="Digital Lab" />
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-row md:flex-col gap-2">
                                <button className="p-3 bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white rounded-xl transition-all"><Edit size={16} /></button>
                                <button onClick={() => deleteSlot(item.id)} className="p-3 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="h-64 bg-slate-50 rounded-[32px] border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                        <Calendar size={40} strokeWidth={1.5} className="opacity-20 mb-3" />
                        <p className="text-[13px] font-bold uppercase tracking-[3px]">No Classes Scheduled</p>
                    </div>
                )}
            </div>

            {/* --- ADD MODAL --- */}
            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl rounded-[32px] p-10 shadow-2xl space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create Academic Slot</h2>
                            <button onClick={() => setIsAddOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Course Name</label>
                                <input className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder="e.g. Web Development" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Instructor</label>
                                <input className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder="Search Teacher..." />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Start Time</label>
                                <input type="time" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">End Time</label>
                                <input type="time" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Location / Room</label>
                                <input className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder="e.g. Lab 02" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Batch Code</label>
                                <input className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-[13px] font-semibold" placeholder="e.g. B-04" />
                            </div>
                        </div>
                        <button className="w-full py-4 bg-acadex-navy text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl">Schedule Academic Slot</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimetableHub;