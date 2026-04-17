import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingButtons from "@/components/FloatingButtons";
import PackagesSection from "@/components/PackagesSection";
import DestinationsSection from "@/components/DestinationsSection";
import StatsSection from "@/components/StatsSection";
import WhyTravelSection from "@/components/WhyTravelSection";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LazyMount from "@/components/LazyMount";

const ExperienceBrajSection = lazy(() => import("@/components/ExperienceBrajSection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const BrajMapSection = lazy(() => import("@/components/BrajMapSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vrindavan Tour Packages | Mathura Vrindavan Travel & Braj Yatra</title>
        <link rel="canonical" href="https://www.shreevrindavantourandpackages.com/" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />

        <LazyMount id="packages" minHeight="800px">
          <PackagesSection />
        </LazyMount>

        <LazyMount id="destinations" minHeight="600px">
          <DestinationsSection />
        </LazyMount>

        <LazyMount minHeight="400px">
          <StatsSection />
        </LazyMount>

        <LazyMount minHeight="300px">
          <CTABanner />
        </LazyMount>

        <LazyMount minHeight="600px">
          <AboutSection />
        </LazyMount>

        <LazyMount minHeight="600px">
          <WhyTravelSection />
        </LazyMount>

        <LazyMount id="services" minHeight="600px">
          <ServicesSection />
        </LazyMount>

        <LazyMount id="contact" minHeight="800px">
          <ContactSection />
        </LazyMount>

        <LazyMount minHeight="800px">
          <Suspense fallback={<div className="min-h-[500px] flex items-center justify-center">Loading...</div>}>
            <ExperienceBrajSection />
            <BrajMapSection />
            <ReviewsSection />
            <FAQSection />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight="400px">
          <Footer />
        </LazyMount>

        <FloatingButtons />
      </main>
    </>
  );
};

export default Index;