import React from "react";
import HeroSection from "../components/HeroSection";
import CompanyWelcome from "../components/CompanyWelcome";
import CompanyServices from "../components/ServiceSection";
import TeamSection from "../components/TeamSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ChatbotServiceSection from "../components/ChatbotServiceSection";
import ProjectInquiryBanner from "../components/ProjectInquiryBanner";
import TestimonialSection from "../components/TestimonialSection";
import PricingSection from "../components/PricingSection";
import CallToAction from "../components/CallToAction";

function Home(){
    return(
        <div>
            <HeroSection />
            <CompanyWelcome />
            <CompanyServices />
            <ChatbotServiceSection />
            <WhyChooseUsSection />
            <ProjectInquiryBanner />
            <PricingSection />
            <TeamSection />
            <TestimonialSection />
            <CallToAction />

        </div>
    )
}

export default Home;