import React, { cloneElement } from 'react';
import { motion } from 'framer-motion';
import { Target, EyeOff, TrendingDown, MessageSquareX, Clock, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export const Problem = () => {
  const { t } = useTranslation();
  const painPoints = [{
    icon: <Target />,
    text: t('problem.pain_points.point1')
  }, {
    icon: <TrendingDown />,
    text: t('problem.pain_points.point2')
  }, {
    icon: <EyeOff />,
    text: t('problem.pain_points.point3')
  }, {
    icon: <MessageSquareX />,
    text: t('problem.pain_points.point4')
  }, {
    icon: <Clock />,
    text: t('problem.pain_points.point5')
  }, {
    icon: <ShieldAlert />,
    text: t('problem.pain_points.point6')
  }];
  return <section id="problem" className="py-24 bg-white">
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
            {t('problem.title_main')}{' '}
            <span className="text-go-orange">{t('problem.title_sub')}</span>
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
            {t('problem.desc')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -5
          }} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-go-orange/30 hover:shadow-lg transition-all group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 group-hover:text-go-orange group-hover:bg-go-orangeLight transition-colors mb-4 shadow-sm">
                  {cloneElement(point.icon as React.ReactElement, {
                size: 20
              })}
                </div>
                <p className="font-bold text-gray-800 leading-snug">
                  {point.text}
                </p>
              </motion.div>)}
          </div>

          {/* Visual: Messy to Clean */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden bg-go-warm border border-gray-100 shadow-inner flex items-center justify-center p-8">
            <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />

            <div className="relative z-10 w-full max-w-md">
              {/* Messy State (Background) */}
              <motion.div initial={{
              opacity: 1
            }} whileInView={{
              opacity: 0.2,
              scale: 0.95
            }} viewport={{
              once: true,
              margin: '-100px'
            }} transition={{
              duration: 1,
              delay: 0.5
            }} className="absolute inset-0 flex flex-wrap gap-3 blur-[2px]">
                {[...Array(6)].map((_, i) => <div key={i} className={`bg-white p-3 rounded-xl shadow-sm border border-gray-200 ${i % 2 === 0 ? 'w-2/3' : 'w-1/3'} h-24 rotate-${i % 2 === 0 ? '3' : '-3'}`} />)}
              </motion.div>

              {/* Clean Strategy State (Foreground) */}
              <motion.div initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: '-100px'
            }} transition={{
              duration: 0.8,
              delay: 0.8
            }} className="relative bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-bold text-gray-400 mr-auto">
                    Brand Strategy Board
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-go-orangeLight flex items-center justify-center text-go-orange">
                      <Target size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-1/3 bg-gray-200 rounded mb-2" />
                      <div className="h-2 w-full bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                      <TrendingDown size={20} className="rotate-180" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-1/2 bg-gray-200 rounded mb-2" />
                      <div className="h-2 w-4/5 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mt-6">
                    <span className="text-sm font-bold text-gray-400">
                      Content Pillars
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};