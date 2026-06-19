'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Cpu, 
  Code, 
  Zap, 
  Factory, 
  FlaskConical, 
  Server, 
  Wifi, 
  Car,
  Users,
  GraduationCap,
  Award,
  Clock,
  Sparkles,
  ChevronRight,
  Building2
} from 'lucide-react';

const departments = [
  { 
    icon: Cpu, 
    name: 'Computer Science', 
    code: 'CSE', 
    students: 1200, 
    faculty: 45, 
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Pioneering the future of computing and software innovation',
    labs: '12',
    placements: '98%'
  },
  { 
    icon: Code, 
    name: 'Information Technology', 
    code: 'IT', 
    students: 600, 
    faculty: 28, 
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Building the digital infrastructure of tomorrow',
    labs: '8',
    placements: '96%'
  },
  { 
    icon: Zap, 
    name: 'Electronics & Communication', 
    code: 'ECE', 
    students: 800, 
    faculty: 38, 
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Innovating the world through electronics and communication',
    labs: '10',
    placements: '94%'
  },
  { 
    icon: Factory, 
    name: 'Mechanical Engineering', 
    code: 'ME', 
    students: 500, 
    faculty: 32, 
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950/30',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Engineering the machines that drive the world forward',
    labs: '14',
    placements: '92%'
  },
  { 
    icon: FlaskConical, 
    name: 'Civil Engineering', 
    code: 'CE', 
    students: 400, 
    faculty: 25, 
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    image: 'https://images.pexels.com/photos/2166932/pexels-photo-2166932.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Building sustainable infrastructure for future generations',
    labs: '9',
    placements: '90%'
  },
  { 
    icon: Server, 
    name: 'Data Science & AI', 
    code: 'DSAI', 
    students: 300, 
    faculty: 20, 
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Leveraging AI and data to solve complex problems',
    labs: '6',
    placements: '100%'
  },
  { 
    icon: Wifi, 
    name: 'Internet of Things', 
    code: 'IoT', 
    students: 200, 
    faculty: 15, 
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
    image: 'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Connecting the world through smart devices and sensors',
    labs: '5',
    placements: '95%'
  },
  { 
    icon: Car, 
    name: 'Automobile Engineering', 
    code: 'AUTO', 
    students: 150, 
    faculty: 12, 
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    image: 'https://images.pexels.com/photos/60164/pexels-photo-60164.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Designing the next generation of vehicles and mobility systems',
    labs: '7',
    placements: '88%'
  },
];

// Quick stats for the hero section
const quickStats = [
  { label: 'Departments', value: '8', icon: Building2 },
  { label: 'Students', value: '4,150+', icon: Users },
  { label: 'Faculty', value: '215+', icon: GraduationCap },
  { label: 'Placement Rate', value: '94%', icon: Award },
];

export default function DepartmentsSection() {
  return (
    <section className="section-padding bg-white dark:bg-nec-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-nec-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-nec-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-nec-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-nec-primary" />
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Academics</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-nec-dark dark:text-white mt-2">
            Our <span className="text-nec-primary">Departments</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Eight departments offering cutting-edge programs designed to meet industry demands 
            and shape the future of technology
          </p>
        </AnimatedSection>

        {/* Quick Stats */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-nec-background dark:bg-nec-dark/50 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-800">
                <stat.icon className="w-6 h-6 text-nec-primary mx-auto mb-2" />
                <p className="font-outfit font-bold text-2xl text-nec-dark dark:text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Departments Grid with Images */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <StaggerItem key={index}>
              <Link href={`/departments#${dept.code.toLowerCase()}`}>
                <div className="group relative bg-white dark:bg-nec-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 h-full">
                  {/* Department Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nec-dark/80 via-transparent to-transparent" />
                    
                    {/* Department Code Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${dept.color} text-white text-xs font-bold`}>
                        {dept.code}
                      </div>
                    </div>
                    
                    {/* Department Icon */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center shadow-lg`}>
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-1 group-hover:text-nec-primary transition-colors">
                      {dept.name}
                    </h3>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                      {dept.description}
                    </p>
                    
                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{dept.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        <span>{dept.faculty}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{dept.labs} Labs</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <Award className="w-3 h-3" />
                        <span>{dept.placements}</span>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-nec-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Department
                      </span>
                      <div className="w-8 h-8 rounded-full bg-nec-primary/10 flex items-center justify-center transform group-hover:translate-x-1 transition-all duration-300">
                        <ChevronRight className="w-4 h-4 text-nec-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-nec-primary/10 rounded-full">
            <span className="text-nec-primary font-medium">🎓 4,150+ Students</span>
            <span className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <span className="text-nec-primary font-medium">🏆 215+ Faculty</span>
            <span className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <span className="text-nec-primary font-medium">📚 8 Departments</span>
          </div>
          
          <div className="mt-6">
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 px-8 py-3 bg-nec-primary text-white rounded-xl font-semibold hover:bg-nec-primary/90 transition-all hover:shadow-lg hover:scale-105"
            >
              <span>Explore All Departments</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}