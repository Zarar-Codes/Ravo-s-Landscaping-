/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandIntroduction } from './components/BrandIntroduction';
import { ServiceFinder } from './components/ServiceFinder';
import { LandscapingSection } from './components/LandscapingSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { SpecialistServices } from './components/SpecialistServices';
import { ProjectsGallery } from './components/ProjectsGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { WorkProcess } from './components/WorkProcess';
import { WhyRavosSection } from './components/WhyRavosSection';
import { Testimonials } from './components/Testimonials';
import { ServiceArea } from './components/ServiceArea';
import { ContactCTA } from './components/ContactCTA';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>('');

  const handleSelectServiceForQuote = (serviceName: string) => {
    setSelectedQuoteService(serviceName);
    const target = document.getElementById('quote-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F3F0E8] text-[#20251F]">
        {/* Skip to Main Content for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#263B2E] focus:text-[#F3F0E8] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content">
          {/* Section 01 — Cinematic Landscaping Hero */}
          <HeroSection />

          {/* Section 02 — Brand Introduction */}
          <BrandIntroduction />

          {/* Section 03 — Interactive Find The Right Service */}
          <ServiceFinder onSelectServiceForQuote={handleSelectServiceForQuote} />

          {/* Section 04 — Landscaping & Outdoor Transformations */}
          <LandscapingSection onSelectServiceForQuote={handleSelectServiceForQuote} />

          {/* Section 05 — Property Maintenance */}
          <MaintenanceSection onSelectServiceForQuote={handleSelectServiceForQuote} />

          {/* Section 06 — Specialist Services */}
          <SpecialistServices onSelectServiceForQuote={handleSelectServiceForQuote} />

          {/* Section 07 — Project Portfolio & Modal */}
          <ProjectsGallery onSelectServiceForQuote={handleSelectServiceForQuote} />

          {/* Section 08 — Before & After Transformations */}
          <BeforeAfterSlider onSelectServiceForQuote={handleSelectServiceForQuote} />

          {/* Section 09 — How Ravo's Works */}
          <WorkProcess />

          {/* Section 10 — Why Choose Ravo's */}
          <WhyRavosSection />

          {/* Section 11 — Verified Standards & Official Channels (No Fake Reviews) */}
          <Testimonials />

          {/* Section 12 — Service Area */}
          <ServiceArea />

          {/* Section 13 — Final CTA */}
          <ContactCTA />

          {/* Section 14 — Contact & Quote Form */}
          <QuoteForm preselectedService={selectedQuoteService} />
        </main>

        {/* Section 15 — Footer */}
        <Footer />
      </div>
    </MotionConfig>
  );
}
