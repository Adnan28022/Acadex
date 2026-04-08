import React from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/website/home/HeroSection';
import FeaturesSection from '../../components/website/home/FeatureSection';
import RolesSection from '../../components/website/home/RolesSection';
import TestimonialsSlider from '../../components/website/home/TestimonialsSection';
import TechShowcase from '../../components/website/home/TechShow';
import IntelligenceHub from '../../components/website/home/IntelligenceHub';
import Footer from '../../components/layout/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <RolesSection />
            <TestimonialsSlider />
            <TechShowcase />
            <IntelligenceHub />
            <Footer />
        </>
    );
};

export default Home;