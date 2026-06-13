import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export const Differentiation = () => {
  const { t } = useTranslation();
  const normalAgency = [
    t('differentiation.normal_agency.item1'),
    t('differentiation.normal_agency.item2'),
    t('differentiation.normal_agency.item3'),
    t('differentiation.normal_agency.item4'),
    t('differentiation.normal_agency.item5')
  ];
  const goAds = [
    t('differentiation.go_ads.item1'),
    t('differentiation.go_ads.item2'),
    t('differentiation.go_ads.item3'),
    t('differentiation.go_ads.item4'),
    t('differentiation.go_ads.item5')
  ];
  return <section className="py-24 bg-go-gray overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-black mb-6">
            {t('differentiation.title1')} <br className="hidden md:block" />
            <span className="text-go-orange">{t('differentiation.title2')}</span>
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
            {t('differentiation.desc')}
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
            <Lightbulb className="text-go-orange" size={24} />
            <span className="font-black text-go-black text-lg">
              {t('differentiation.lightbulb')}
            </span>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 relative">
          {/* VS Badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center font-black text-gray-400 shadow-lg z-10 border border-gray-100">
            VS
          </div>

          {/* Normal Agency */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm opacity-80">
            <h3 className="text-2xl font-black text-gray-400 mb-8 text-center">
              {t('differentiation.normal_agency.title')}
            </h3>
            <ul className="space-y-6">
              {normalAgency.map((item, index) => <li key={index} className="flex items-center gap-4 text-gray-500 font-bold">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <X size={14} className="text-gray-400" />
                  </div>
                  <span>{item}</span>
                </li>)}
            </ul>
          </motion.div>

          {/* GO ADS */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="bg-white p-8 rounded-3xl border-2 border-go-orange shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-go-orange/5 rounded-bl-full -z-10" />
            <h3 className="text-2xl font-black text-go-orange mb-8 text-center flex items-center justify-center gap-2">
              GO ADS
              <span className="text-sm bg-go-orange text-white px-2 py-0.5 rounded-md">
                {t('differentiation.go_ads.badge')}
              </span>
            </h3>
            <ul className="space-y-6">
              {goAds.map((item, index) => <motion.li key={index} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4 + index * 0.1
            }} className="flex items-center gap-4 text-go-black font-black text-lg">
                  <div className="w-6 h-6 rounded-full bg-go-orangeLight flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-go-orange" />
                  </div>
                  <span>{item}</span>
                </motion.li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>;
};