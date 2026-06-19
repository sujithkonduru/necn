'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nec-primary via-nec-primary/95 to-nec-secondary" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-1/4 bg-nec-accent/5 blur-[120px] rounded-full" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [1, 5, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 1], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 left-10 w-48 h-48 bg-nec-accent/10 rounded-full blur-3xl hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6"
            >
              <Award className="w-4 h-4" />
              <span>NAAC Accredited | Autonomous Institution</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6"
            >
              Shaping Future
              <span className="block text-nec-accent">Engineers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Narayana Engineering College, Nellore offers world-class education, cutting-edge research, and exceptional placement opportunities in the heart of Andhra Pradesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-nec-primary rounded-xl font-semibold hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/20"
              >
                Admissions 2025
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              <img
                src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="NECN Campus"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nec-primary/60 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-1/4 bg-white dark:bg-nec-dark rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-nec-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-nec-primary" />
                </div>
                <div>
                  <p className="font-bold text-nec-dark dark:text-white">5,000+</p>
                  <p className="text-xs text-gray-500">Students</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-1/4 bg-white dark:bg-nec-dark rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-nec-dark dark:text-white">95%</p>
                  <p className="text-xs text-gray-500">Placements</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/4 -bottom-6 bg-white dark:bg-nec-dark rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-nec-accent/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-nec-accent" />
                </div>
                <div>
                  <p className="font-bold text-nec-dark dark:text-white">50+</p>
                  <p className="text-xs text-gray-500">Programs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nec-background to-transparent" />
    </section>
  );
}
