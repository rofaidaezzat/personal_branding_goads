import { useState } from 'react';
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
import { Contactus } from './components/Contactus';
import { useTranslation } from 'react-i18next';

export function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return <div dir={dir} className={`min-h-screen bg-white text-go-black overflow-x-hidden ${i18n.language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
    <Navbar />

    <main>
      <Hero />
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
      <Contactus />
      {/* <FinalCTA /> */}
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