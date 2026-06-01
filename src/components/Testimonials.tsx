import React from 'react';
import { motion } from 'framer-motion';
import { Play, Quote, Star } from 'lucide-react';
export const Testimonials = () => {
  const videos = [{
    name: 'د. مصطفى كمال',
    profession: 'استشاري جراحة',
    quote: 'الناس بدأت تعرفني أكتر وتثق فيا قبل ما تيجي العيادة.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true
  }, {
    name: 'م. رامي سعيد',
    profession: 'مؤسس شركة برمجيات',
    quote: 'الإيرادات زادت بشكل ملحوظ بعد ما البراند بقى واضح.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false
  }, {
    name: 'أ. ندى طارق',
    profession: 'Life Coach',
    quote: 'المحتوى بقى احترافي والبراند بقى له اتجاه واضح جداً.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false
  }, {
    name: 'أ. خالد حسن',
    profession: 'مستشار مالي',
    quote: 'بقيت أوضح في السوق والعملاء بتيجي وهي واثقة.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false
  }];
  return <section className="py-24 bg-go-warm">
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
            اسمع من عملائنا
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Video */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer h-[400px] lg:h-auto">
            <img src={videos[0].image} alt={videos[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-go-black/80 via-go-black/20 to-transparent transition-colors group-hover:bg-go-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-go-orange text-white rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play size={32} fill="currentColor" className="ml-2" />
              </div>
            </div>

            <div className="absolute bottom-8 right-8 left-8">
              <Quote className="text-go-orange mb-4 opacity-50" size={40} />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                "{videos[0].quote}"
              </h3>
              <div className="flex items-center gap-3">
                <span className="font-bold text-white">{videos[0].name}</span>
                <span className="w-1 h-1 bg-go-orange rounded-full" />
                <span className="text-sm font-bold text-gray-300">
                  {videos[0].profession}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Smaller Videos Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {videos.slice(1).map((video, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-48 lg:h-auto lg:flex-1">
                <img src={video.image} alt={video.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-go-black/80 to-transparent transition-colors group-hover:bg-go-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm text-go-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-sm font-bold text-white mb-1 line-clamp-1">
                    "{video.quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-300">
                      {video.name}
                    </span>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};