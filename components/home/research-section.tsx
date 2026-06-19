'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Microscope, BookOpen, Lightbulb, FlaskConical, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const researchAreas = [
  {
    icon: Microscope,
    title: 'Advanced Computing',
    description: 'AI, Machine Learning, Deep Learning, and Quantum Computing research initiatives.',
    papers: 120,
  },
  {
    icon: FlaskConical,
    title: 'Materials Science',
    description: 'Nanomaterials, smart materials, and sustainable engineering solutions.',
    papers: 85,
  },
  {
    icon: Lightbulb,
    title: 'IoT & Automation',
    description: 'Smart systems, Industry 4.0, and autonomous robotics research.',
    papers: 95,
  },
  {
    icon: BookOpen,
    title: 'Renewable Energy',
    description: 'Solar, wind, and hybrid energy systems for sustainable future.',
    papers: 70,
  },
];

export default function ResearchSection() {
  return (
    <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">R&D</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Research & <span className="text-nec-primary">Innovation</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl">
              State-of-the-art research facilities driving innovation across multiple engineering domains
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-nec-primary font-semibold hover:gap-3 transition-all shrink-0"
          >
            Explore Research
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {researchAreas.map((area, index) => (
            <StaggerItem key={index}>
              <div
  className="group relative bg-white dark:bg-nec-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
>
  {/* Glow effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-nec-primary/20 blur-3xl rounded-full" />
    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
  </div>

  {/* Icon */}
  <div className="relative w-14 h-14 mb-5">
    <div className="absolute inset-0 bg-gradient-to-br from-nec-primary/20 to-purple-500/20 rounded-xl group-hover:scale-125 transition-transform duration-500" />
    <div className="relative w-full h-full flex items-center justify-center">
      <area.icon className="w-6 h-6 text-nec-primary group-hover:text-white transition-colors duration-300" />
    </div>
  </div>

  {/* Title */}
  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2 group-hover:text-nec-primary transition-colors">
    {area.title}
  </h3>

  {/* Description */}
  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
    {area.description}
  </p>

  {/* Bottom KPI Row */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-nec-primary font-semibold text-sm">
      <BookOpen className="w-4 h-4" />
      <span>{area.papers}+ Papers</span>
    </div>

    {/* Badge */}
    <div className="px-3 py-1 rounded-full bg-nec-primary/10 text-nec-primary text-xs font-medium">
      Active Research
    </div>
  </div>
</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
