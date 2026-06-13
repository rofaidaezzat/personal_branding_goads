import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

const videos = [
  { id: '16TxvRY5SznVxN5Lw-XaoXEvl031Dh3mf' },
  { id: '18YwT4cAShV6Ol2dcpw3Rreh8EYR9Urb1' },
  { id: '1bruoDPwP_Q9VFifKOCHkC9EeiArMT9Ra' },
  { id: '1vzjtEA8ajiyq6dfD7jNvNvYoh-WsRQ8P' },
  { id: '1XvK58V8wL471v49U0prI94tTLfccHzPa' },
  { id: '1JJRX9rADXp3RogvbPWlpc2tjtIShAs0g' },
  { id: '1jBbc41RSOT5kTiqI1FM12H26MLvjo2Kn' },
  { id: '1QYhDJmx-J5UxlWURE5Figsrs4jfJ5jtZ' },
  { id: '1nKfS0T-Wt_KbbeKYhSJm2UVvSeUQCmZN' },
  { id: '1W-IbbNFrGbcHGssAYSOAK_kK82yw3Df9' },
];

function driveEmbed(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

function driveThumbnail(id: string, width = 800) {
  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      const dir = direction === 'left' ? -1 : 1;
      const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
      const multiplier = isRTL ? -1 : 1;
      scrollRef.current.scrollBy({
        left: scrollAmount * dir * multiplier,
        behavior: 'smooth'
      });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="results" className="py-24 bg-go-warm overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-go-orange font-black text-sm mb-3"
          >
            آراء العملاء
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-go-black leading-tight"
          >
            اسمع منهم بنفسك 🎥
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 mt-4 text-lg"
          >
            مش كلامنا — ده كلام عملاء حقيقيين شافوا نتايج حقيقية
          </motion.p>
        </div>

        {/* ── Featured Slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          {/* Main featured card */}
          <div
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-go-black cursor-pointer group"
            style={{ aspectRatio: '16/7' }}
            onClick={() => openLightbox(activeIndex)}
          >
            <img
              key={activeIndex}
              src={driveThumbnail(videos[activeIndex].id, 800)}
              alt={`Testimonial ${activeIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-go-black/70 via-transparent to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-go-orange text-white rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Play size={34} fill="currentColor" className="ml-1" />
              </div>
            </div>

            {/* Counter badge */}
            <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
              {activeIndex + 1} / {videos.length}
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-go-black hover:text-go-orange hover:shadow-xl transition-all z-10"
          >
            <ChevronRight size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-go-black hover:text-go-orange hover:shadow-xl transition-all z-10"
          >
            <ChevronLeft size={22} />
          </button>
        </motion.div>

        {/* ── Thumbnail Strip ── */}
        <div className="relative flex items-center group/strip mb-8">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 z-10 w-10 h-10 bg-white/90 hover:bg-white text-go-black rounded-full shadow-lg flex items-center justify-center opacity-0 pointer-events-none group-hover/strip:opacity-100 group-hover/strip:pointer-events-auto transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Thumbnails Container */}
          <div
            ref={scrollRef}
            className="w-full flex gap-3 overflow-x-auto scroll-smooth no-scrollbar py-2 px-1"
          >
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setActiveIndex(i)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 aspect-square w-24 md:w-28 shrink-0 ${
                  i === activeIndex
                    ? 'ring-2 ring-go-orange ring-offset-2 scale-105 shadow-glow'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={driveThumbnail(v.id, 300)}
                  alt={`Testimonial ${i + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 bg-white/80 backdrop-blur-sm text-go-orange rounded-full flex items-center justify-center">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 z-10 w-10 h-10 bg-white/90 hover:bg-white text-go-black rounded-full shadow-lg flex items-center justify-center opacity-0 pointer-events-none group-hover/strip:opacity-100 group-hover/strip:pointer-events-auto transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[80]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-go-black rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl pointer-events-auto relative">

                {/* Close */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Counter */}
                <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                  {lightboxIndex + 1} / {videos.length}
                </div>

                {/* Prev */}
                <button
                  onClick={prevLightbox}
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-11 h-11 bg-white/20 hover:bg-go-orange text-white rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Next */}
                <button
                  onClick={nextLightbox}
                  className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-11 h-11 bg-white/20 hover:bg-go-orange text-white rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Video iframe */}
                <div className="aspect-video w-full relative overflow-hidden">
                  <iframe
                    ref={iframeRef}
                    key={lightboxIndex}
                    src={driveEmbed(videos[lightboxIndex].id)}
                    className="absolute -top-[50px] left-0 w-full h-[calc(100%+50px)] border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`Testimonial ${lightboxIndex + 1}`}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};