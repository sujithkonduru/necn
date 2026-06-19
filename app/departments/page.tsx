'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Cpu, Code, Zap, Factory, FlaskConical, Server, Wifi, Car, ArrowRight, Users, BookOpen, Microscope } from 'lucide-react';
import Link from 'next/link';

const departments = [
  {
    icon: Cpu,
    name: 'Computer Science & Engineering',
    code: 'CSE',
    students: 1200,
    faculty: 45,
    labs: 12,
    papers: 150,
    color: 'from-blue-500 to-blue-600',
    description: 'Pioneering programs in software engineering, AI, cybersecurity, and cloud computing.',
  },
  {
    icon: Code,
    name: 'Information Technology',
    code: 'IT',
    students: 600,
    faculty: 28,
    labs: 8,
    papers: 90,
    color: 'from-emerald-500 to-emerald-600',
    description: 'Focused on web technologies, data analytics, and enterprise systems.',
  },
  {
    icon: Zap,
    name: 'Electronics & Communication',
    code: 'ECE',
    students: 800,
    faculty: 38,
    labs: 10,
    papers: 110,
    color: 'from-amber-500 to-amber-600',
    description: 'Advanced programs in VLSI, embedded systems, and telecommunications.',
  },
  {
    icon: Factory,
    name: 'Mechanical Engineering',
    code: 'ME',
    students: 500,
    faculty: 32,
    labs: 9,
    papers: 75,
    color: 'from-red-500 to-red-600',
    description: 'Excellence in thermal, design, manufacturing, and robotics engineering.',
  },
  {
    icon: FlaskConical,
    name: 'Civil Engineering',
    code: 'CE',
    students: 400,
    faculty: 25,
    labs: 7,
    papers: 60,
    color: 'from-orange-500 to-orange-600',
    description: 'Structural, geotechnical, environmental, and transportation engineering.',
  },
  {
    icon: Server,
    name: 'Data Science & AI',
    code: 'DSAI',
    students: 300,
    faculty: 20,
    labs: 6,
    papers: 85,
    color: 'from-purple-500 to-purple-600',
    description: 'Cutting-edge curriculum in machine learning, deep learning, and big data.',
  },
  {
    icon: Wifi,
    name: 'Internet of Things',
    code: 'IoT',
    students: 200,
    faculty: 15,
    labs: 5,
    papers: 50,
    color: 'from-cyan-500 to-cyan-600',
    description: 'Smart systems, sensor networks, and Industry 4.0 technologies.',
  },
  {
    icon: Car,
    name: 'Automobile Engineering',
    code: 'AUTO',
    students: 150,
    faculty: 12,
    labs: 5,
    papers: 35,
    color: 'from-rose-500 to-rose-600',
    description: 'Automotive design, electric vehicles, and autonomous systems.',
  },
];

export default function DepartmentsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-nec-primary to-nec-secondary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Departments
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Eight departments offering world-class engineering programs with industry-aligned curriculum
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {departments.map((dept, index) => (
              <StaggerItem key={index}>
                <div id={dept.code.toLowerCase()} className="group bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <dept.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2 group-hover:text-nec-primary transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 flex-1">{dept.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <Users className="w-3.5 h-3.5" />
                      <span>{dept.students} Students</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{dept.faculty} Faculty</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <Microscope className="w-3.5 h-3.5" />
                      <span>{dept.labs} Labs</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>{dept.papers} Papers</span>
                    </div>
                  </div>
                  <Link
                    href={`/departments/${dept.code.toLowerCase()}`}
                    className="inline-flex items-center gap-1 text-sm text-nec-primary font-medium hover:gap-2 transition-all"
                  >
                    Explore Department <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
