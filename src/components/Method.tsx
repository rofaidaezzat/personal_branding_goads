import React, { useState, cloneElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Camera, Video, LineChart, UserCheck } from 'lucide-react';
import cameraStepImg from '../assets/go ads 7 (1).png';
import { useTranslation } from 'react-i18next';
export const Method = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [{
    icon: <UserCheck />,
    title: t('method.steps.step1_title'),
    desc: t('method.steps.step1_desc'),
    image: 'https://lh3.googleusercontent.com/d/1i0YOsPiCVvJTpX5dEZutPL9qq41lM-SW'
  }, {
    icon: <Search />,
    title: t('method.steps.step2_title'),
    desc: t('method.steps.step2_desc'),
    image: 'https://lh3.googleusercontent.com/d/10EJd0mX60GZEoNKTUaBIprK41CVGSQLW'
  }, {
    icon: <Target />,
    title: t('method.steps.step3_title'),
    desc: t('method.steps.step3_desc'),
    image: 'https://lh3.googleusercontent.com/d/1BuQ7luEfPxNBd3EDN07mN1keyrdSx0PL'
  }, {
    icon: <Camera />,
    title: t('method.steps.step4_title'),
    desc: t('method.steps.step4_desc'),
    image: cameraStepImg
  }, {
    icon: <Video />,
    title: t('method.steps.step5_title'),
    desc: t('method.steps.step5_desc'),
    image: 'https://lh3.googleusercontent.com/d/16hX0AE6Mq8fpRUxggdOyjnyTDs_oq1Xt'
  }, {
    icon: <LineChart />,
    title: t('method.steps.step6_title'),
    desc: t('method.steps.step6_desc'),
    image: 'https://lh3.googleusercontent.com/d/1lffLPokOkPdVQ0PZTj_8QL1LCxVbSa5M'
  }];
  return <section id="story" className="py-24 bg-go-warm">
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
          {t('method.title')}
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
        }} className="text-lg text-gray-600 font-medium leading-relaxed">
          {t('method.desc')}
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Steps List */}
        <div className="space-y-4 relative">
          {/* Vertical Line */}
          <div className="absolute right-8 top-8 bottom-8 w-px bg-gray-200 z-0" />

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} onMouseEnter={() => setActiveStep(index)} onClick={() => setActiveStep(index)} className={`relative z-10 flex items-start gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300
                    ${isActive ? 'bg-white shadow-lg border border-gray-100' : 'hover:bg-white/50'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
                    ${isActive ? 'bg-go-orange text-white shadow-glow' : 'bg-gray-100 text-gray-400'}`}>
                {cloneElement(step.icon as React.ReactElement, {
                  size: 20
                })}
              </div>
              <div>
                <h4 className={`text-xl font-black mb-2 transition-colors duration-300 ${isActive ? 'text-go-orange' : 'text-go-black'}`}>
                  {index + 1}. {step.title}
                </h4>
                <p className={`font-medium transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>;
          })}
        </div>

        {/* Visual Panel */}
        <div className="sticky top-32 h-[600px] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.img key={activeStep} initial={{
              opacity: 0,
              scale: 1.05
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: 0.5
            }} src={steps[activeStep].image} alt={steps[activeStep].title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-go-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 left-8 text-white">
            <motion.div key={`text-${activeStep}`} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }}>
              <p className="text-sm font-bold text-go-orange mb-2">
                {t('method.label_step')} {activeStep + 1}
              </p>
              <h3 className="text-2xl font-black">
                {steps[activeStep].title}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};