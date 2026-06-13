import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from './Shared';
import { useTranslation } from 'react-i18next';

export const FAQ = ({
  onOpenPopup


}: {onOpenPopup: () => void;}) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = t('faq.questions', { returnObjects: true }) as Array<{ q: string, a: string }> || [];

  return <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Intro & Support Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="w-12 h-12 bg-go-orangeLight text-go-orange rounded-xl flex items-center justify-center mb-6">
                <HelpCircle size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                {t('faq.title')}
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                {t('faq.desc')}
              </p>

              {/* Support Card */}
              <div className="bg-go-warm p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-go-orange shadow-sm">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-go-black">
                      {t('faq.support.title')}
                    </h4>
                    <p className="text-sm text-gray-500 font-bold">
                      {t('faq.support.desc')}
                    </p>
                  </div>
                </div>
                <Button onClick={onOpenPopup} variant="outline" className="w-full">
                  {t('faq.support.cta')}
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return <motion.div key={index} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.05
              }} className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-go-orange bg-white shadow-md' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}`}>
                    <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-6 text-right">
                      <span className={`font-black text-lg pr-2 border-r-4 transition-colors duration-300 ${isOpen ? 'border-go-orange text-go-orange' : 'border-transparent text-go-black'}`}>
                        {faq.q}
                      </span>
                      <motion.div animate={{
                    rotate: isOpen ? 45 : 0
                  }} className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-go-orangeLight text-go-orange' : 'bg-white text-gray-400 shadow-sm'}`}>
                        <Plus size={18} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: 'auto',
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }} transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}>
                          <div className="px-6 pb-6 pt-2 text-gray-600 font-medium leading-relaxed pr-8">
                            {faq.a}
                          </div>
                        </motion.div>}
                    </AnimatePresence>
                  </motion.div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};