/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import InteractiveSelector from './components/InteractiveSelector';
import ConciergeExperience from './components/ConciergeExperience';
import TestimonialSection from './components/TestimonialSection';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  // Main selected treatments state representing our convocated players
  const [selectedSquadIds, setSelectedSquadIds] = useState<string[]>(['botox', 'ultraformer']);
  
  const formRef = useRef<HTMLDivElement | null>(null);

  // Toggle procedure on/off the squad
  const handleToggleSquad = (id: string) => {
    setSelectedSquadIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Smooth scroll helper
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-[#fcf8f0] font-sans selection:bg-yellow-500 selection:text-black">
      {/* Premium Elegant Glassmorphic Header */}
      <Header 
        onBookClick={scrollToForm} 
        onServicesClick={scrollToServices} 
      />

      {/* Hero Section with Luxury Analogue Headline */}
      <Hero 
        onLearnMoreClick={scrollToServices} 
        onBookClick={scrollToForm} 
      />

      {/* Main 4-Column High Performance Soccer Analogy Section */}
      <ServiceSection 
        onSquadSelect={handleToggleSquad} 
        selectedSquadIds={selectedSquadIds} 
      />

      {/* Interactive Tactical Soccer/Beauty Squad Builder Simulation */}
      <InteractiveSelector 
        selectedIds={selectedSquadIds}
        onSelect={handleToggleSquad}
        onProceedToForm={scrollToForm}
      />

      {/* Private Concierge Secrecy & Luxury Features */}
      <ConciergeExperience />

      {/* Verified Luxury Social Testimonials */}
      <TestimonialSection />

      {/* High-End Converstion/Booking Medical Form */}
      <BookingSection 
        selectedIds={selectedSquadIds}
        onSelect={handleToggleSquad}
        formRef={formRef}
      />

      {/* Premium Accordion for Class A Concerns */}
      <FAQSection />

      {/* Footer containing Professional Medical CRM credentials */}
      <Footer onBackToTop={handleBackToTop} />
    </div>
  );
}
