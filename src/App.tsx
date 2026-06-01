import React, { useState } from 'react';
import { Navbar, PopupForm } from './components/Shared';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Problem } from './components/Problem';
import { WhatIsBranding } from './components/WhatIsBranding';
import { Revenue } from './components/Revenue';
import { Method } from './components/Method';
import { Audience } from './components/Audience';
import { Solution } from './components/Solution';
import { SuccessStories } from './components/SuccessStories';
import { Package } from './components/Package';
import { Differentiation } from './components/Differentiation';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
export function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return <div dir="rtl" className="min-h-screen bg-white text-go-black font-arabic overflow-x-hidden">
      <Navbar onOpenPopup={() => setIsPopupOpen(true)} />

      <main>
        <Hero onOpenPopup={() => setIsPopupOpen(true)} />
        <SocialProof />
        <Problem />
        <WhatIsBranding />
        <Revenue />
        <Method />
        <Audience />
        <Solution />
        <SuccessStories />
        <Package onOpenPopup={() => setIsPopupOpen(true)} />
        <Differentiation />
        <Process />
        <Testimonials />
        <FAQ onOpenPopup={() => setIsPopupOpen(true)} />
        <FinalCTA />
      </main>

      <footer className="bg-go-black text-white py-8 border-t border-white/10 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 font-bold text-sm">
            © {new Date().getFullYear()} GO ADS. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>;
}