import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, Users, Eye, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const getIcon = (name: string) => {
  switch (name) {
    case 'users': return <Users size={16} />;
    case 'trending_up': return <TrendingUp size={16} />;
    case 'eye': return <Eye size={16} />;
    default: return null;
  }
};

export const SuccessStories = () => {
  const { t } = useTranslation();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  
  const rawStories = t('success_stories.stories', { returnObjects: true }) as Array<any> || [];
  
  const stories = rawStories.map(story => ({
    ...story,
    metrics: (story.metrics || []).map((metric: any) => ({
      icon: getIcon(metric.iconName),
      text: metric.text
    }))
  }));
  return <section id="results" className="py-24 bg-go-warm">
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
          {t('success_stories.title1')}{' '}
          <span className="text-go-orange">{t('success_stories.title2')}</span>
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
          {t('success_stories.desc')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
          {/* Video Thumbnail Area */}
          <div
            className="relative h-56 overflow-hidden cursor-pointer"
            onClick={() => story.videoId && setActiveVideoId(story.videoId)}
          >
            <img src={story.image} alt={story.name} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-go-black/30 group-hover:bg-go-black/40 transition-colors" />

            {/* Play Button */}
            {story.videoId && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-go-orange group-hover:scale-110 transition-transform shadow-lg">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="p-6">
            <h3 className="text-xl font-black text-go-black mb-1">
              {story.name}
            </h3>
            <p className="text-xs text-gray-500 font-bold mb-4">
              {story.profession}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs font-bold text-gray-400 block mb-1">
                  {t('success_stories.before')}
                </span>
                <p className="text-sm text-gray-600 font-medium">
                  {story.before}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-go-orange block mb-1">
                  {t('success_stories.after')}
                </span>
                <p className="text-sm text-gray-800 font-bold">
                  {story.after}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="text-xs font-bold text-gray-400 block mb-2">
                {t('success_stories.results_label')}
              </span>
              {story.metrics.map((metric, i) => <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-50 p-2 rounded-lg">
                <div className="text-go-orange">{metric.icon}</div>
                <span>{metric.text}</span>
              </div>)}
            </div>
          </div>
        </motion.div>)}
      </div>
    </div>

    {/* Lightbox Modal */}
    <AnimatePresence>
      {activeVideoId && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-go-black rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl pointer-events-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Video Player */}
              <div className="aspect-video w-full relative overflow-hidden">
                <iframe
                  src={`https://drive.google.com/file/d/${activeVideoId}/preview?autoplay=1`}
                  className="absolute -top-[50px] left-0 w-full h-[calc(100%+50px)] border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Success Story Video"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </section>;
};