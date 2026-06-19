'use client';

import { AnimatedSection } from '@/components/animated-section';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = [
  'Established in 2001 under Narayana Group',
  'NAAC Accredited with A Grade',
  'Autonomous Institution since 2018',
  'NBA Accredited Programs',
  'ISO 9001:2015 Certified',
  'AICTE Approved',
];

const timeline = [
  { year: '2001', event: 'College Established' },
  { year: '2005', event: 'First Batch Graduated' },
  { year: '2010', event: 'NBA Accreditation' },
  { year: '2015', event: 'NAAC A Grade' },
  { year: '2018', event: 'Autonomous Status' },
  { year: '2023', event: 'Research Center Inaugurated' },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white dark:bg-nec-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="NECN Campus Building"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-nec-primary text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                <p className="font-outfit font-bold text-3xl">24+</p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">About NECN</span>
              <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-6">
                Building Engineers for <span className="text-nec-primary">Tomorrow</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Narayana Engineering College, Nellore (NECN) is a premier autonomous institution committed to delivering quality technical education. Founded under the visionary leadership of the Narayana Group, we have grown into a center of excellence fostering innovation, research, and holistic development.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-nec-primary shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-nec-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Timeline */}
        <AnimatedSection className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white">
              Our Journey
            </h3>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nec-primary via-nec-secondary to-nec-accent hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {timeline.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative text-center group">
                    <div className="w-4 h-4 bg-nec-primary rounded-full mx-auto mb-3 hidden md:block ring-4 ring-white dark:ring-nec-dark" />
                    <div className="bg-nec-background dark:bg-nec-dark/50 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <p className="font-outfit font-bold text-nec-primary text-lg">{item.year}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
