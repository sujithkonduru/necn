'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import CountUp from '@/components/count-up';
import { Users, GraduationCap, Building2, Briefcase, FileText, Lightbulb, Globe, Trophy } from 'lucide-react';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Students', color: 'bg-blue-500' },
  { icon: GraduationCap, value: 250, suffix: '+', label: 'Faculty', color: 'bg-nec-secondary' },
  { icon: Building2, value: 12, suffix: '', label: 'Departments', color: 'bg-nec-highlight' },
  { icon: Briefcase, value: 95, suffix: '%', label: 'Placements', color: 'bg-green-500' },
  { icon: Globe, value: 200, suffix: '+', label: 'Recruiters', color: 'bg-nec-accent' },
  { icon: FileText, value: 500, suffix: '+', label: 'Research Papers', color: 'bg-orange-500' },
  { icon: Lightbulb, value: 45, suffix: '', label: 'Patents', color: 'bg-purple-500' },
  { icon: Trophy, value: 12000, suffix: '+', label: 'Alumni', color: 'bg-red-500' },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-nec-background dark:bg-nec-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mb-4">
            Numbers That <span className="text-nec-primary">Speak</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Over two decades of excellence in engineering education, research, and innovation
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="group bg-white dark:bg-nec-dark/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
