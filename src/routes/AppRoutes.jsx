import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Auth & Public Pages
import Login from '../auth/Login';
import Register from '../auth/Register';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NotFound from '../pages/NotFound';

// Layouts
import SuperAdminLayout from '../layouts/SuperAdminLayout';
import AdminLayout from '../layouts/AdminLayout';
import TeacherLayout from '../layouts/InstructorLayout';
import StudentLayout from '../layouts/StudentLayout';

// Website Pages
import Home from '../pages/website/Home'; // Naya Home Component
import SolutionsPage from '../pages/website/Solution';
import PricingPage from '../pages/website/Pricing';
import AboutPage from '../pages/website/About';
import FeaturesPage from '../pages/website/Features';

// Dashboard Pages (Admin, Instructor, Student, SA - same as before)
import SADashboard from '../pages/superAdmin/Dashboard';
import Chat from '../pages/superAdmin/Chat';
import InstituteManagement from '../pages/superAdmin/Institute';
import SubscriptionManager from '../pages/superAdmin/Subscription';
import RevenueLogs from '../pages/superAdmin/Revenue';
import GlobalUsers from '../pages/superAdmin/GlobalUsers';
import InvoiceManagement from '../pages/superAdmin/Invoice';
import PendingPayments from '../pages/superAdmin/PendingPayment';
import ExpiringSoon from '../pages/superAdmin/ExpiringSoon';

import AdminDashboardOverview from '../pages/admin/Dashboard';
import AdminAnalytics from '../pages/admin/Analytics';
import StudentRegistry from '../pages/admin/StudentRegistry';
import StaffRegistry from '../pages/admin/StaffRegistry';
import AttendanceHub from '../pages/admin/AttendanceHub';
import CourseRegistry from '../pages/admin/CourseList';
import ExamResultHub from '../pages/admin/ExamResultHub';
import TimetableHub from '../pages/admin/TimeTable';
import FeeRecords from '../pages/admin/Fee';
import ExpenseLog from '../pages/admin/Expense';
import StaffPayroll from '../pages/admin/StaffPayroll';
import Messenger from '../pages/admin/Massenger';
import NoticeBoard from '../pages/admin/NoticeBoard';
import AdminSettings from '../pages/admin/Settings';

import TeacherDashboard from '../pages/instructor/Dashboard';
import TeacherCourses from '../pages/instructor/Courses';
import TeacherStudents from '../pages/instructor/Students';
import TeacherAttendance from '../pages/instructor/Attendance';
import TeacherAssignments from '../pages/instructor/Assignments';
import TeacherGrading from '../pages/instructor/GradingHub';
import TeacherMaterial from '../pages/instructor/Material';
import TeacherChat from '../pages/instructor/Chat';
import TeacherNotices from '../pages/instructor/Notice';

import StudentDashboard from '../pages/student/Overview';
import BrowseCourses from '../pages/student/BrowseCourse';
import StudentTimetable from '../pages/student/TimeTable';
import StudentAttendance from '../pages/student/Attendance';
import StudentMaterial from '../pages/student/StudyMaterial';
import StudentAssignments from '../pages/student/Assignment';
import StudentResults from '../pages/student/Grade';
import StudentFees from '../pages/student/Fee';
import StudentChat from '../pages/student/Chat';
import ContactPage from '../pages/website/Contact';
import ForgotPassword from '../auth/ForgotPassword';

const AppRoutes = () => {
    return (
        <Routes>
            {/* 1. PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />

            <Route path='/features' element={
                <>
                    <Navbar />
                    <FeaturesPage />
                    <Footer />
                </>
            } />

            <Route path='/solutions' element={
                <>
                    <Navbar />
                    <SolutionsPage />
                    <Footer />
                </>
            } />

            <Route path='/pricing' element={
                <>
                    <Navbar />
                    <PricingPage />
                    <Footer />
                </>
            } />

            <Route path='/about' element={
                <>
                    <Navbar />
                    <AboutPage />
                    <Footer />
                </>
            } />

            <Route path='/contact' element={
                <>
                    <Navbar />
                    <ContactPage />
                    <Footer />
                </>
            } />

            {/* 2. AUTHENTICATION ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='forgot-password' element={<ForgotPassword />} />

            {/* 3. SUPER ADMIN ROUTES */}
            <Route path="/sa" element={<SuperAdminLayout />}>
                <Route path="dashboard" element={<SADashboard />} />
                <Route path="chat" element={<Chat />} />
                <Route path="institutes" element={<InstituteManagement />} />
                <Route path="plans" element={<SubscriptionManager />} />
                <Route path="revenue" element={<RevenueLogs />} />
                <Route path="users" element={<GlobalUsers />} />
                <Route path='invoices/all' element={<InvoiceManagement />} />
                <Route path='invoices/pending' element={<PendingPayments />} />
                <Route path='invoices/expiring' element={<ExpiringSoon />} />
            </Route>

            {/* 4. ADMIN ROUTES */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboardOverview />} />
                <Route path='analytics' element={<AdminAnalytics />} />
                <Route path="students" element={<StudentRegistry />} />
                <Route path="staff" element={<StaffRegistry />} />
                <Route path="attendance" element={<AttendanceHub />} />
                <Route path='courses' element={<CourseRegistry />} />
                <Route path='exams' element={<ExamResultHub />} />
                <Route path='schedule' element={<TimetableHub />} />
                <Route path='fees' element={<FeeRecords />} />
                <Route path='expenses' element={<ExpenseLog />} />
                <Route path='payroll' element={<StaffPayroll />} />
                <Route path='messages' element={<Messenger />} />
                <Route path='announcements' element={<NoticeBoard />} />
                <Route path='settings' element={<AdminSettings />} />
            </Route>

            {/* 5. INSTRUCTOR ROUTES */}
            <Route path="/instructor" element={<TeacherLayout />}>
                <Route path="dashboard" element={<TeacherDashboard />} />
                <Route path='courses' element={<TeacherCourses />} />
                <Route path='students' element={<TeacherStudents />} />
                <Route path='attendance' element={<TeacherAttendance />} />
                <Route path='assignments' element={<TeacherAssignments />} />
                <Route path='grading' element={<TeacherGrading />} />
                <Route path='material' element={<TeacherMaterial />} />
                <Route path='chat' element={<TeacherChat />} />
                <Route path='notices' element={<TeacherNotices />} />
            </Route>

            {/* 6. STUDENT ROUTES */}
            <Route path="/student" element={<StudentLayout />}>
                <Route path="dashboard" element={<StudentDashboard />} />
                <Route path='browse' element={<BrowseCourses />} />
                <Route path='schedule' element={<StudentTimetable />} />
                <Route path='attendance' element={<StudentAttendance />} />
                <Route path='material' element={<StudentMaterial />} />
                <Route path='assignments' element={<StudentAssignments />} />
                <Route path='results' element={<StudentResults />} />
                <Route path='fees' element={<StudentFees />} />
                <Route path='chat' element={<StudentChat />} />
            </Route>

            {/* 7. 404 NOT FOUND */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;