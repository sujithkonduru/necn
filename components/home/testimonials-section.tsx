'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'CSE Graduate, Software Engineer at Amazon',
    text: 'NECN gave me the foundation and confidence to crack interviews at top tech companies. The faculty support and placement training were exceptional.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Priya Sharma',
    role: 'ECE Graduate, Product Manager at Google',
    text: 'The research opportunities and industry exposure at NECN shaped my career. I am grateful for the mentorship that helped me reach where I am today.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Arun Reddy',
    role: 'ME Graduate, Founder of TechStart',
    text: 'From classroom learning to entrepreneurship, NECN supported my journey. The incubation center and alumni network were invaluable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Meera Nair',
    role: 'IT Graduate, Data Scientist at Microsoft',
    text: 'The data science program at NECN is world-class. Practical projects and hackathons prepared me for real-world challenges in the industry.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Voices</span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
            What Our <span className="text-nec-primary">Community</span> Says
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-nec-dark rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 dark:border-gray-800">
              <Quote className="w-12 h-12 text-nec-primary/20 mb-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    {testimonials[current].text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-outfit font-semibold text-nec-dark dark:text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[current].role}
                      </p>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === current ? 'bg-nec-primary' : 'bg-gray-300 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
