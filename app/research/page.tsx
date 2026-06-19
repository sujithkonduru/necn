'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Microscope, BookOpen, Lightbulb, FlaskConical, Award, FileText, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const researchCenters = [
  {
    icon: Microscope,
    title: 'Center for AI & Data Science',
    desc: 'Cutting-edge research in machine learning, deep learning, natural language processing, and computer vision.',
    labs: 8,
    projects: 45,
  },
  {
    icon: FlaskConical,
    title: 'Advanced Materials Lab',
    desc: 'Research on nanomaterials, composites, and sustainable materials for engineering applications.',
    labs: 5,
    projects: 32,
  },
  {
    icon: Lightbulb,
    title: 'IoT & Smart Systems',
    desc: 'Developing smart city solutions, industrial automation, and connected device ecosystems.',
    labs: 6,
    projects: 38,
  },
  {
    icon: Award,
    title: 'Renewable Energy Center',
    desc: 'Innovations in solar, wind, and hybrid energy systems for a sustainable future.',
    labs: 4,
    projects: 28,
  },
];

const publications = [
  { title: 'Deep Learning Approaches for Medical Image Analysis', journal: 'IEEE Transactions', year: '2024' },
  { title: 'Novel Nanocomposites for Structural Applications', journal: 'Materials Today', year: '2024' },
  { title: 'Edge Computing in IoT Networks: A Survey', journal: 'Elsevier Computer Networks', year: '2023' },
  { title: 'Hybrid Solar-Wind Energy Optimization', journal: 'Renewable Energy Journal', year: '2023' },
  { title: 'Blockchain for Supply Chain Security', journal: 'IEEE Access', year: '2024' },
  { title: 'Autonomous Vehicle Navigation Using AI', journal: 'Springer AI Review', year: '2023' },
];

const patents = [
  { title: 'Smart Irrigation System Using IoT', inventors: 'Dr. R. Kumar et al.', year: '2024' },
  { title: 'AI-Based Fault Detection in Power Systems', inventors: 'Dr. S. Reddy et al.', year: '2023' },
  { title: 'Biodegradable Packaging Material', inventors: 'Dr. P. Sharma et al.', year: '2023' },
  { title: 'Wearable Health Monitoring Device', inventors: 'Dr. M. Nair et al.', year: '2024' },
];

export default function ResearchPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-nec-primary to-nec-secondary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Research & Innovation
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Pioneering research that addresses real-world challenges and drives technological advancement
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Centers */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Facilities</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Research <span className="text-nec-primary">Centers</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {researchCenters.map((center, index) => (
              <StaggerItem key={index}>
                <div className="bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
                  <div className="w-14 h-14 bg-gradient-to-br from-nec-primary to-nec-secondary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <center.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-nec-dark dark:text-white mb-3">
                    {center.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{center.desc}</p>
                  <div className="flex gap-6 text-sm">
                    <span className="flex items-center gap-2 text-nec-primary">
                      <FlaskConical className="w-4 h-4" />
                      {center.labs} Labs
                    </span>
                    <span className="flex items-center gap-2 text-nec-secondary">
                      <FileText className="w-4 h-4" />
                      {center.projects} Projects
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Publications</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Recent <span className="text-nec-primary">Publications</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-4">
            {publications.map((pub, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-12 h-12 bg-nec-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-nec-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-outfit font-semibold text-nec-dark dark:text-white mb-1">{pub.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{pub.journal}</p>
                  </div>
                  <span className="text-sm text-nec-primary font-medium shrink-0">{pub.year}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Patents */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Innovation</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Patents & <span className="text-nec-primary">IP</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {patents.map((patent, index) => (
              <StaggerItem key={index}>
                <div className="bg-nec-background dark:bg-nec-dark/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-nec-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-nec-accent" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold text-nec-dark dark:text-white mb-1">{patent.title}</h4>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {patent.inventors}
                        </span>
                        <span>{patent.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-nec-primary to-nec-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-4">
              Collaborate With Us
            </h2>
            <p className="text-white/80 mb-8">
              Partner with NECN on research projects, funded programs, and innovation initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-nec-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
