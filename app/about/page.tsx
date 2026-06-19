'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle, 
  Award, 
  BookOpen, 
  Users, 
  Target, 
  Lightbulb,
  Building2,
  GraduationCap,
  Globe,
  Heart,
  Shield,
  Sparkles,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Trophy,
  Medal,
  Briefcase,
  Library,
  FlaskConical,
  Microscope,
  Cpu,
  Code,
  Zap,
  Factory,
  Server,
  Wifi,
  Car,
  GraduationCap as Cap,
  UserCheck,
  TrendingUp,
  DollarSign
} from 'lucide-react';

// College Stats
const collegeStats = [
  { 
    icon: Users, 
    value: 5000, 
    suffix: '+', 
    label: 'Students', 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30'
  },
  { 
    icon: GraduationCap, 
    value: 200, 
    suffix: '+', 
    label: 'Faculty Members', 
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
  },
  { 
    icon: Building2, 
    value: 8, 
    suffix: '', 
    label: 'Departments', 
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30'
  },
  { 
    icon: Award, 
    value: 25, 
    suffix: '+', 
    label: 'Years of Excellence', 
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30'
  },
];

// Accreditations
const accreditations = [
  { 
    name: 'NAAC', 
    grade: 'A+ Grade', 
    desc: 'National Assessment and Accreditation Council',
    icon: Award,
    color: 'from-emerald-500 to-emerald-600'
  },
  { 
    name: 'NBA', 
    grade: 'Accredited', 
    desc: 'National Board of Accreditation',
    icon: Shield,
    color: 'from-blue-500 to-blue-600'
  },
  { 
    name: 'AICTE', 
    grade: 'Approved', 
    desc: 'All India Council for Technical Education',
    icon: CheckCircle,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'ISO', 
    grade: '9001:2015', 
    desc: 'Quality Management System Certified',
    icon: Star,
    color: 'from-amber-500 to-amber-600'
  },
];

// Leadership Team
const leadership = [
  { 
    name: 'Dr. K. Narayana', 
    role: 'Founder & Chairman', 
    desc: 'Visionary educator and founder of the Narayana Group of Institutions with over 40 years of experience in education.',
    qualification: 'Ph.D., M.Tech',
    image: 'https://ui-avatars.com/api/?name=Dr.+K.+Narayana&background=6366f1&color=fff&size=128'
  },
  { 
    name: 'Dr. P. Rajasekhar', 
    role: 'Principal', 
    desc: 'Over 25 years of academic leadership in engineering education with a focus on innovation and quality.',
    qualification: 'Ph.D., M.E.',
    image: 'https://ui-avatars.com/api/?name=Dr.+P.+Rajasekhar&background=8b5cf6&color=fff&size=128'
  },
  { 
    name: 'Dr. S. Lakshmi', 
    role: 'Dean - Academics', 
    desc: 'Expert in curriculum design, academic excellence, and outcome-based education.',
    qualification: 'Ph.D., M.Tech',
    image: 'https://ui-avatars.com/api/?name=Dr.+S.+Lakshmi&background=10b981&color=fff&size=128'
  },
  { 
    name: 'Dr. M. Venkatesh', 
    role: 'Dean - Research', 
    desc: 'Leading research initiatives, industry collaborations, and innovation ecosystem development.',
    qualification: 'Ph.D., M.E.',
    image: 'https://ui-avatars.com/api/?name=Dr.+M.+Venkatesh&background=f59e0b&color=fff&size=128'
  },
];

// History Timeline
const historyTimeline = [
  { 
    year: '2001', 
    title: 'Foundation', 
    desc: 'Narayana Engineering College established in Nellore with a vision to provide quality engineering education.',
    icon: Building2
  },
  { 
    year: '2005', 
    title: 'First Graduation', 
    desc: 'First batch of engineers graduated with excellent results and 100% placement in top companies.',
    icon: GraduationCap
  },
  { 
    year: '2010', 
    title: 'NBA Accreditation', 
    desc: 'Programs accredited by the National Board of Accreditation, ensuring quality standards.',
    icon: Shield
  },
  { 
    year: '2015', 
    title: 'NAAC A Grade', 
    desc: 'Achieved A grade from NAAC, affirming excellence in education and infrastructure.',
    icon: Award
  },
  { 
    year: '2018', 
    title: 'Autonomous Status', 
    desc: 'Granted autonomous status for curriculum flexibility and academic innovation.',
    icon: Sparkles
  },
  { 
    year: '2023', 
    title: 'Research Center', 
    desc: 'Advanced research center inaugurated for innovation and industry collaboration.',
    icon: Microscope
  },
];

// Departments
const departments = [
  { name: 'Computer Science', code: 'CSE', icon: Cpu, color: 'from-blue-500 to-blue-600', students: 1200 },
  { name: 'Information Technology', code: 'IT', icon: Code, color: 'from-emerald-500 to-emerald-600', students: 600 },
  { name: 'Electronics & Communication', code: 'ECE', icon: Zap, color: 'from-amber-500 to-amber-600', students: 800 },
  { name: 'Mechanical Engineering', code: 'ME', icon: Factory, color: 'from-red-500 to-red-600', students: 500 },
  { name: 'Data Science & AI', code: 'DSAI', icon: Server, color: 'from-purple-500 to-purple-600', students: 300 },
  { name: 'Internet of Things', code: 'IoT', icon: Wifi, color: 'from-cyan-500 to-cyan-600', students: 200 },
];

// Quick Facts
const quickFacts = [
  { label: 'Campus Area', value: '50+ Acres', icon: MapPin },
  { label: 'Library Books', value: '50,000+', icon: Library },
  { label: 'Research Papers', value: '500+', icon: FlaskConical },
  { label: 'Industry Partners', value: '100+', icon: Briefcase },
];

// Core Values
const coreValues = [
  { 
    title: 'Excellence', 
    desc: 'Striving for the highest standards in education and research.',
    icon: Trophy,
    color: 'text-amber-500'
  },
  { 
    title: 'Innovation', 
    desc: 'Encouraging creative thinking and problem-solving skills.',
    icon: Lightbulb,
    color: 'text-yellow-500'
  },
  { 
    title: 'Integrity', 
    desc: 'Upholding ethical values and transparency in all endeavors.',
    icon: Shield,
    color: 'text-emerald-500'
  },
  { 
    title: 'Inclusivity', 
    desc: 'Fostering a diverse and welcoming learning environment.',
    icon: Users,
    color: 'text-blue-500'
  },
  { 
    title: 'Sustainability', 
    desc: 'Committed to environmental responsibility and sustainable practices.',
    icon: Globe,
    color: 'text-green-500'
  },
  { 
    title: 'Community', 
    desc: 'Building strong connections with society and industry.',
    icon: Heart,
    color: 'text-rose-500'
  },
];

// Campus Features
const campusFeatures = [
  {
    title: 'Smart Classrooms',
    desc: 'Technology-enabled learning spaces with modern teaching tools.',
    icon: Building2,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    title: 'Central Library',
    desc: 'Extensive collection of books, journals, and digital resources.',
    icon: Library,
    image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    title: 'Research Labs',
    desc: 'State-of-the-art laboratories for cutting-edge research.',
    icon: Microscope,
    image: 'https://images.pexels.com/photos/373542/pexels-photo-373542.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    title: 'Sports Complex',
    desc: 'World-class sports facilities for holistic student development.',
    icon: Trophy,
    image: 'https://images.pexels.com/photos/46799/pexels-photo-46799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white dark:bg-nec-dark">
      {/* Hero Section */}
     <section className="relative py-24 sm:py-32 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-nec-primary via-nec-secondary to-purple-600">
    {/* Background Image with Lower Opacity */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920')"
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-nec-dark/60 to-transparent" />
  </div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
        <Sparkles className="w-4 h-4 text-white" />
        <span className="text-white/90 text-sm font-medium">Established 2001</span>
      </div>
      <h1 className="font-outfit font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">NECN</span>
      </h1>
      <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
        Two decades of excellence in engineering education, research, and innovation, 
        shaping the future of technology and leadership.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          href="#history"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-nec-primary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          <Calendar className="w-4 h-4" />
          <span>Our Journey</span>
        </Link>
        <Link
          href="#leadership"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
        >
          <Users className="w-4 h-4" />
          <span>Meet Our Team</span>
        </Link>
      </div>
    </AnimatedSection>
  </div>
</section>

      {/* Quick Stats */}
      <section className="py-12 bg-nec-background dark:bg-nec-dark/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collegeStats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-nec-dark rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-2xl text-nec-dark dark:text-white">
                      {stat.value}{stat.suffix}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="NECN Campus"
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nec-dark/80 to-transparent p-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Nellore, Andhra Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Est. 2001</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-nec-primary/10 rounded-full mb-4">
                  <Building2 className="w-4 h-4 text-nec-primary" />
                  <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
                </div>
                <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mb-6">
                  A Legacy of <span className="text-nec-primary">Excellence</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Founded in 2001 under the Narayana Group, Narayana Engineering College, Nellore 
                  has grown into one of the most sought-after engineering institutions in Andhra Pradesh. 
                  Our commitment to academic rigor, research innovation, and student success has earned 
                  us NAAC A+ grade accreditation and autonomous status.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  With state-of-the-art infrastructure, experienced faculty, and strong industry connections, 
                  NECN prepares students to become leaders in technology and innovation, contributing to 
                  the global knowledge economy.
                </p>
                
                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-center gap-2 bg-nec-background dark:bg-nec-dark/50 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                      <fact.icon className="w-4 h-4 text-nec-primary" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{fact.label}</p>
                        <p className="text-sm font-semibold text-nec-dark dark:text-white">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-4">
              <Heart className="w-4 h-4 text-blue-500" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Core <span className="text-nec-primary">Values</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              The principles that guide our institution and shape our community
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                    <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-nec-primary/5 to-nec-secondary/5 rounded-3xl p-8 border border-nec-primary/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-nec-primary/10 rounded-xl">
                    <Target className="w-6 h-6 text-nec-primary" />
                  </div>
                  <h3 className="font-outfit font-bold text-2xl text-nec-dark dark:text-white">Our Vision</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-primary shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">To be a globally recognized center of excellence in engineering education and research.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-primary shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">To nurture innovative thinkers who solve real-world problems.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-primary shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">To foster ethical leadership and social responsibility among students.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-nec-secondary/5 to-nec-accent/5 rounded-3xl p-8 border border-nec-secondary/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-nec-secondary/10 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-nec-secondary" />
                  </div>
                  <h3 className="font-outfit font-bold text-2xl text-nec-dark dark:text-white">Our Mission</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">Deliver industry-relevant curriculum with hands-on learning.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">Promote interdisciplinary research and innovation.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">Build strong industry-academia partnerships.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">Ensure holistic development through co-curricular activities.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section id="accreditation" className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-950/30 rounded-full mb-4">
              <Award className="w-4 h-4 text-purple-500" />
              <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">Recognition</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Accreditation & <span className="text-nec-primary">Affiliations</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-outfit font-bold text-xl text-nec-dark dark:text-white">{item.name}</h3>
                  <p className="text-nec-primary font-semibold text-sm mb-2">{item.grade}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-950/30 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider">Journey</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Our <span className="text-nec-primary">Timeline</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nec-primary via-nec-secondary to-nec-accent sm:-translate-x-px" />
            {historyTimeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`relative flex items-start gap-6 mb-10 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="hidden sm:block w-1/2" />
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-nec-primary rounded-full border-4 border-white dark:border-nec-dark -translate-x-1/2 mt-1.5 z-10" />
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="bg-nec-background dark:bg-nec-dark/50 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-nec-primary/10 rounded-lg">
                          <item.icon className="w-4 h-4 text-nec-primary" />
                        </div>
                        <span className="text-nec-primary font-bold text-lg">{item.year}</span>
                      </div>
                      <h4 className="font-outfit font-semibold text-nec-dark dark:text-white">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-full mb-4">
              <Users className="w-4 h-4 text-indigo-500" />
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider">Team</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Our <span className="text-nec-primary">Leadership</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Visionary leaders driving excellence and innovation
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={96}
                      height={96}
                      className="rounded-full border-4 border-nec-primary/20"
                      unoptimized
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-2 border-white dark:border-nec-dark flex items-center justify-center">
                      <UserCheck className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white">{person.name}</h3>
                  <p className="text-nec-primary text-sm font-medium">{person.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{person.qualification}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">{person.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-cyan-500" />
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">Academics</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Our <span className="text-nec-primary">Departments</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <StaggerItem key={index}>
                <Link href={`/departments#${dept.code.toLowerCase()}`}>
                  <div className="group bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white group-hover:text-nec-primary transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{dept.code} • {dept.students} Students</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Campus Features */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-950/30 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-rose-500" />
              <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider">Campus</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Campus <span className="text-nec-primary">Facilities</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white dark:bg-nec-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nec-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <feature.icon className="w-5 h-5" />
                        <span className="font-semibold">{feature.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nec-primary via-nec-secondary to-purple-600">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-4">
              Join the NECN Community
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Be part of a legacy of excellence and innovation in engineering education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-nec-primary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}