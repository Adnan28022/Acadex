import React, { useState, useMemo } from 'react';
import {
    Search, Filter, UserCheck, UserX,
    Mail, Shield, GraduationCap, School,
    MoreHorizontal, ArrowUpRight, CheckCircle2,
    Clock, Trash2, UserMinus
} from 'lucide-react';

const GlobalUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeRole, setActiveRole] = useState('All');

    // Mock Data for Global Users
    const [users, setUsers] = useState([
        { id: "USR001", name: "Zaid Khan", email: "zaid@elite.com", role: "Admin", institute: "Elite International", status: "Active", joined: "12 Jan 2024" },
        { id: "USR002", name: "Sarah Ahmed", email: "sarah@city.com", role: "Instructor", institute: "City Coaching Center", status: "Active", joined: "15 Feb 2024" },
        { id: "USR003", name: "Omar Farooq", email: "omar@tech.com", role: "Student", institute: "Tech Academy", status: "Pending", joined: "20 May 2024" },
        { id: "USR004", name: "Maria Jameel", email: "maria@gsc.com", role: "Instructor", institute: "Global Science", status: "Suspended", joined: "10 Nov 2023" },
        { id: "USR005", name: "Hamza Ali", email: "hamza@elite.com", role: "Student", institute: "Elite International", status: "Active", joined: "01 Apr 2024" },
    ]);

    // Filter Logic
    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesRole = activeRole === 'All' || user.role === activeRole;
            return matchesSearch && matchesRole;
        });
    }, [searchTerm, activeRole, users]);

    const toggleUserStatus = (id) => {
        setUsers(users.map(user => {
            if (user.id === id) {
                return { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' };
            }
            return user;
        }));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 pb-12 animate-in fade-in duration-700">

            {/* 1. HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-slate-100 pb-8">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Global User Directory</h1>
                    <p className="text-sm text-slate-500 mt-1">Monitor and manage every user account across all institutes.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{users.length} Total Users</span>
                    </div>
                </div>
            </div>

            {/* 2. STATS MINI GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <UserStat label="Total Admins" value="148" icon={<Shield size={16} />} color="text-blue-600" />
                <UserStat label="Instructors" value="842" icon={<UserCheck size={16} />} color="text-indigo-600" />
                <UserStat label="Students" value="12,490" icon={<GraduationCap size={16} />} color="text-slate-600" />
                <UserStat label="Active Now" value="3.2k" icon={<Clock size={16} />} color="text-emerald-600" />
            </div>

            {/* 3. SEARCH & FILTERS */}
            <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, email or ID..."
                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border-none rounded-xl text-sm font-medium outline-none focus:bg-white transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex p-1 bg-slate-50 rounded-xl gap-1 overflow-x-auto">
                    {['All', 'Admin', 'Instructor', 'Student'].map((role) => (
                        <button
                            key={role}
                            onClick={() => setActiveRole(role)}
                            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeRole === role ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                                }`}>
                            {role}s
                        </button>
                    ))}
                </div>
            </div>

            {/* 4. USERS TABLE */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">User Profile</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Role</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Institute</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Joined Date</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-sm">
                            {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50/30 transition-all group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-xs border border-slate-200">
                                                {user.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900">{user.name}</p>
                                                <p className="text-[11px] text-slate-400 lowercase">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <RoleBadge role={user.role} />
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2 text-slate-600 font-medium">
                                            <School size={14} className="text-slate-400" />
                                            {user.institute}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-slate-500 font-medium">{user.joined}</td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' :
                                                    user.status === 'Pending' ? 'bg-orange-400' : 'bg-red-400'
                                                }`}></span>
                                            <span className={`text-[11px] font-bold uppercase tracking-wider ${user.status === 'Active' ? 'text-emerald-600' :
                                                    user.status === 'Pending' ? 'text-orange-600' : 'text-red-500'
                                                }`}>{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => toggleUserStatus(user.id)}
                                                title={user.status === 'Active' ? 'Suspend User' : 'Activate User'}
                                                className={`p-2 rounded-lg transition-all ${user.status === 'Active'
                                                        ? 'text-slate-400 hover:text-red-500 hover:bg-red-50'
                                                        : 'text-slate-400 hover:text-emerald-600 hover:bg-emerald-50'
                                                    }`}>
                                                {user.status === 'Active' ? <UserMinus size={16} /> : <CheckCircle2 size={16} />}
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-20 text-center text-slate-400 italic">No users matching your search criteria.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* --- MINI COMPONENTS --- */

const UserStat = ({ label, value, icon, color }) => (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3 hover:border-slate-200 transition-all">
        <div className={`p-2 rounded-lg bg-slate-50 ${color}`}>{icon}</div>
        <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
            <p className="text-lg font-bold text-slate-900 leading-none">{value}</p>
        </div>
    </div>
);

const RoleBadge = ({ role }) => {
    const roles = {
        Admin: "bg-blue-50 text-blue-600 border-blue-100",
        Instructor: "bg-indigo-50 text-indigo-600 border-indigo-100",
        Student: "bg-slate-50 text-slate-600 border-slate-200"
    };
    return (
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border ${roles[role]}`}>
            {role}
        </span>
    );
};

export default GlobalUsers;