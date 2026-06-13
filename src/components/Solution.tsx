import React, { cloneElement, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Camera, Video, Layout, LineChart, BookOpen, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export const Solution = () => {
  const { t } = useTranslation();
  const features = [{
    icon: <Search />,
    text: t('solution.features.swot'),
    angle: 0
  }, {
    icon: <Shield />,
    text: t('solution.features.competitors'),
    angle: 45
  }, {
    icon: <Target />,
    text: t('solution.features.strategy'),
    angle: 90
  }, {
    icon: <Camera />,
    text: t('solution.features.shooting'),
    angle: 135
  }, {
    icon: <Video />,
    text: t('solution.features.reels'),
    angle: 180
  }, {
    icon: <Layout />,
    text: t('solution.features.designs'),
    angle: 225
  }, {
    icon: <LineChart />,
    text: t('solution.features.content'),
    angle: 270
  }, {
    icon: <BookOpen />,
    text: t('solution.features.philosophy'),
    angle: 315
  }];
  return <section className="py-24 bg-go-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(241,89,42,0.1)_0,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-black mb-6">
            {t('solution.title1')}{' '}
            <span className="text-go-orange">{t('solution.title2')}</span>{' '}
            {t('solution.title3')}
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
        }} className="text-lg text-gray-400 font-medium leading-relaxed">
            {t('solution.desc')}
          </motion.p>
        </div>

        {/* System Diagram - Desktop */}
        <div className="hidden lg:flex relative h-[600px] items-center justify-center">
          {/* Center Card */}
          <motion.div initial={{
          scale: 0
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} className="relative z-20 w-64 h-64 bg-go-orange rounded-full flex items-center justify-center text-center p-8 shadow-[0_0_50px_rgba(241,89,42,0.4)] border-4 border-white/10">
            <div>
              <h3 className="text-2xl font-black text-white leading-tight">
                GO ADS
                <br />
                Personal Branding
                <br />
                System
              </h3>
            </div>
          </motion.div>

          {/* Surrounding Cards */}
          {features.map((feature, index) => {
          const radius = 280;
          const radian = feature.angle * Math.PI / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;
          return <Fragment key={index}>
                {/* Connecting Line */}
                <motion.div initial={{
              opacity: 0
            }} whileInView={{
              opacity: 0.3
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + index * 0.1
            }} className="absolute top-1/2 left-1/2 h-px bg-go-orange origin-left z-0" style={{
              width: radius - 60,
              transform: `translateY(-50%) rotate(${feature.angle}deg)`
            }} />

                {/* Feature Card */}
                <motion.div initial={{
              opacity: 0,
              x: 0,
              y: 0
            }} whileInView={{
              opacity: 1,
              x,
              y
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + index * 0.1,
              type: 'spring',
              stiffness: 50
            }} className="absolute top-1/2 left-1/2 -ml-24 -mt-8 w-48 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:border-go-orange/50 transition-colors z-10 cursor-default group">
                  <div className="text-go-orange group-hover:scale-110 transition-transform">
                    {cloneElement(feature.icon as React.ReactElement, {
                  size: 20
                })}
                  </div>
                  <span className="font-bold text-sm text-white/90">
                    {feature.text}
                  </span>
                </motion.div>
              </Fragment>;
        })}
        </div>

        {/* System Diagram - Mobile/Tablet */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-go-orange/20 rounded-xl flex items-center justify-center text-go-orange shrink-0">
                {cloneElement(feature.icon as React.ReactElement, {
              size: 24
            })}
              </div>
              <span className="font-bold text-white">{feature.text}</span>
            </motion.div>)}
        </div>
      </div>
    </section>;
};