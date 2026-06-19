'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { CheckCircle, BookOpen, Calendar, FileText, CreditCard, Phone, ArrowRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const programs = [
  { name: 'B.Tech Computer Science', duration: '4 Years', seats: 180, fee: '1,20,000/yr' },
  { name: 'B.Tech Electronics & Communication', duration: '4 Years', seats: 120, fee: '1,10,000/yr' },
  { name: 'B.Tech Mechanical', duration: '4 Years', seats: 60, fee: '1,00,000/yr' },
  { name: 'B.Tech Civil', duration: '4 Years', seats: 60, fee: '1,00,000/yr' },
  { name: 'B.Tech Data Science & AI', duration: '4 Years', seats: 60, fee: '1,30,000/yr' },
  { name: 'M.Tech Computer Science', duration: '2 Years', seats: 24, fee: '90,000/yr' },
];

const steps = [
  { icon: FileText, title: 'Online Application', desc: 'Fill the application form on our portal with basic details.' },
  { icon: BookOpen, title: 'Entrance Exam', desc: 'Appear for NECN entrance test or submit valid AP EAMCET score.' },
  { icon: Calendar, title: 'Counseling', desc: 'Attend counseling session for seat allotment and branch selection.' },
  { icon: CreditCard, title: 'Fee Payment', desc: 'Pay the admission fee to confirm your seat.' },
  { icon: GraduationCap, title: 'Enrollment', desc: 'Complete document verification and begin your journey.' },
];

const scholarships = [
  'Merit Scholarship for Top Rankers',
  'Sports Excellence Scholarship',
  'Economically Weaker Section Support',
  'Women in Engineering Grant',
  'Research Fellowship for PG Students',
];

export default function AdmissionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-nec-primary to-nec-secondary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Admissions 2025
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Begin your engineering journey at one of Andhra Pradesh&apos;s premier institutions
            </p>
            <Link
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-nec-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Programs</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Programs <span className="text-nec-primary">Offered</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((program, index) => (
              <StaggerItem key={index}>
                <div className="bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-4">
                    {program.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Duration</span>
                      <span className="text-nec-dark dark:text-white font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Seats</span>
                      <span className="text-nec-dark dark:text-white font-medium">{program.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Fee</span>
                      <span className="text-nec-primary font-medium">&#8377;{program.fee}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Admission <span className="text-nec-primary">Steps</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-nec-primary via-nec-secondary to-nec-accent" />
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-nec-primary to-nec-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white dark:bg-nec-dark rounded-full border-2 border-nec-primary items-center justify-center text-xs font-bold text-nec-primary">
                      {index + 1}
                    </div>
                    <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Scholarships & Eligibility */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Support</span>
              <h2 className="font-outfit font-bold text-3xl text-nec-dark dark:text-white mt-2 mb-6">
                Scholarships & <span className="text-nec-primary">Financial Aid</span>
              </h2>
              <ul className="space-y-4">
                {scholarships.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-primary shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Criteria</span>
              <h2 className="font-outfit font-bold text-3xl text-nec-dark dark:text-white mt-2 mb-6">
                Eligibility <span className="text-nec-primary">Criteria</span>
              </h2>
              <div className="space-y-4">
                <div className="bg-nec-background dark:bg-nec-dark/50 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-nec-dark dark:text-white mb-2">B.Tech Programs</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    10+2 with Physics, Chemistry & Mathematics. Minimum 50% aggregate. Valid AP EAMCET or NECN Entrance score.
                  </p>
                </div>
                <div className="bg-nec-background dark:bg-nec-dark/50 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-nec-dark dark:text-white mb-2">M.Tech Programs</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    B.Tech/B.E in relevant discipline with minimum 55% aggregate. Valid GATE or NECN PG Entrance score.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="section-padding bg-gradient-to-br from-nec-primary to-nec-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Join NECN?
            </h2>
            <p className="text-white/80 mb-8">
              Applications for the 2025 academic year are now open. Secure your future in engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-nec-primary rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Apply Online
              </button>
              <a
                href="tel:+918611234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Admissions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
