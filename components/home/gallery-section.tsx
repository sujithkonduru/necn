'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { src: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Campus Building', category: 'Campus' },
  { src: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Library', category: 'Campus' },
  { src: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Academic Block', category: 'Campus' },
  { src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Lab Session', category: 'Academics' },
  { src: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Students Collaborating', category: 'Students' },
  { src: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sports Ground', category: 'Sports' },
  { src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cultural Event', category: 'Events' },
  { src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Graduation Day', category: 'Events' },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white dark:bg-nec-dark">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
            Campus <span className="text-nec-primary">Moments</span>
          </h2>
        </AnimatedSection>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div
                className="relative group rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setSelected(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ height: `${200 + (index % 3) * 60}px` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[90vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
