import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button'
}: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline'; className?: string; onClick?: () => void; type?: 'button' | 'submit'; }) => {
  const baseStyle =
    'inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-300 ease-out';
  const variants = {
    primary:
      'bg-go-orange text-white hover:bg-[#d94f24] hover:shadow-glow hover:-translate-y-0.5',
    secondary:
      'bg-go-black text-white hover:bg-gray-800 hover:-translate-y-0.5',
    outline: 'border-2 border-go-orange text-go-orange hover:bg-go-orangeLight'
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${`${`${`${`${baseStyle} ${variants[variant]} ${className}`} font-[500] pt-[12px] pb-[12px] pl-[32px] pr-[32px]`} font-[500]`} font-[500]`} font-[500]`}>

      {children}
    </button>);

};
export const Navbar = ({ onOpenPopup }: { onOpenPopup: () => void; }) => {
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRtl = i18n.language === 'ar';
  const toggleLanguage = () => {
    i18n.changeLanguage(isRtl ? 'en' : 'ar');
  };

  const navLinks = [
    {
      name: 'الخدمة',
      href: '#service'
    },
    {
      name: 'القصة',
      href: '#story'
    },
    {
      name: 'مين يستفيد؟',
      href: '#audience'
    },
    {
      name: 'النتائج',
      href: '#results'
    },
    {
      name: 'الباكدج',
      href: '#package'
    },
    {
      name: 'الأسئلة',
      href: '#faq'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>

      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-go-black">
            GO<span className="text-go-orange">ADS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-go-orange font-semibold transition-colors text-sm"
            >
              {link.name}
            </a>
          )}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-600 hover:text-go-black font-semibold text-sm transition-colors"
          >
            <Globe size={16} />
            <span>{isRtl ? 'EN' : 'العربية'}</span>
          </button>
          <Button onClick={onOpenPopup} className="text-sm px-5 py-2.5">
            احجز اجتماع مجاني
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-go-black"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRtl ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black tracking-tighter text-go-black">
                GO<span className="text-go-orange">ADS</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-gray-100 rounded-full text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-xl font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-go-black hover:text-go-orange border-b border-gray-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 text-gray-600 font-bold py-3 bg-gray-50 rounded-xl"
              >
                <Globe size={20} />
                <span>{isRtl ? 'Switch to English' : 'التحويل للعربية'}</span>
              </button>
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPopup();
                }}
                className="w-full py-4 text-lg"
              >
                احجز اجتماع مجاني
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );

};
export const PopupForm = ({
  isOpen,
  onClose



}: { isOpen: boolean; onClose: () => void; }) => {
  const [type, setType] = useState<'individual' | 'company'>('individual');
  return (
    <AnimatePresence>
      {isOpen &&
        <>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={onClose}
            className="fixed inset-0 bg-go-black/40 backdrop-blur-sm z-[60]" />

          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20
              }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto relative">

              <button
                onClick={onClose}
                className="absolute top-4 left-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors z-10">

                <X size={20} />
              </button>

              <div className="p-8 md:p-10">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-black text-go-black mb-2">
                    احجز اجتماعك المجاني مع GO ADS
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    املأ البيانات وفريقنا هيتواصل معاك لمراجعة وجودك الحالي
                    وتوضيح فرص نمو براندك الشخصي.
                  </p>
                </div>

                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      الاسم
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="اسمك بالكامل" />

                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      أنت فرد ولا شركة؟
                    </label>
                    <div className="flex p-1 bg-gray-100 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setType('individual')}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${type === 'individual' ? 'bg-white text-go-black shadow-sm' : 'text-gray-500 hover:text-go-black'}`}>

                        فرد
                      </button>
                      <button
                        type="button"
                        onClick={() => setType('company')}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${type === 'company' ? 'bg-white text-go-black shadow-sm' : 'text-gray-500 hover:text-go-black'}`}>

                        شركة
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        رقم الموبايل / واتساب
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white text-left"
                        dir="ltr"
                        placeholder="+20 100 000 0000" />

                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        رقم إضافي (اختياري)
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white text-left"
                        dir="ltr"
                        placeholder="+20 100 000 0000" />

                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      تفاصيل أكتر عن نشاطك أو هدفك
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none h-24"
                      placeholder="احكي لنا باختصار عن مجالك واللي حابب تحققه...">
                    </textarea>
                  </div>

                  <Button type="submit" className="w-full py-4 text-lg mt-2">
                    احجز الاجتماع المجاني
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      }
    </AnimatePresence>);

};