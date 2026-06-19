'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import CountUp from '@/components/count-up';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Building2, 
  Award,
  Briefcase,
  Users,
  MapPin,
  Star,
  ChevronRight,
  Sparkles,
  Globe,
  Clock,
  Trophy,
  Medal,
  GraduationCap,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

// Company logos with proper configuration
const companyLogos = {
  'Amazon': {
    url: 'https://th.bing.com/th/id/OIP.qWOzHLmRCs0WdNB0VUL6TAHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    bg: 'bg-[#FF9900]/10',
    color: '#FF9900'
  },
  'Microsoft': {
    url: 'https://th.bing.com/th/id/OIP.YPXDR-Giwda93WAPlOk8EAHaGi?w=199&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    bg: 'bg-[#00A4EF]/10',
    color: '#00A4EF'
  },
  'Google': {
    url: 'https://tse2.mm.bing.net/th/id/OIP.8wr4-ydwdO4EVJXJ3zrERgAAAA?r=0&w=400&h=400&rs=1&pid=ImgDetMain&o=7&rm=3',
    bg: 'bg-[#4285F4]/10',
    color: '#4285F4'
  },
  'TCS': {
    url: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/rJ0K9mfuBHTMe.jpg',
    bg: 'bg-[#004E7C]/10',
    color: '#004E7C'
  },
  'Infosys': {
    url: 'https://mma.prnewswire.com/media/633365/4364085/Infosys_Logo.jpg',
    bg: 'bg-[#003B6F]/10',
    color: '#003B6F'
  },
  'Wipro': {
    url: 'https://www.worldbookrecord.com/uploads/images/2022/07/image_750x_62de4d85094af.jpg',
    bg: 'bg-[#008FBF]/10',
    color: '#008FBF'
  },
  'Accenture': {
    url: 'https://clipground.com/images/logo-accenture-clipart-9.png',
    bg: 'bg-[#A100FF]/10',
    color: '#A100FF'
  },
  'Cognizant': {
    url: 'https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true',
    bg: 'bg-[#1A4CA1]/10',
    color: '#1A4CA1'
  },
  'Capgemini': {
    url: 'https://logos-world.net/wp-content/uploads/2022/06/Capgemini-Symbol.png',
    bg: 'bg-[#00A6E3]/10',
    color: '#00A6E3'
  },
  'Deloitte': {
    url: 'https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Symbol.png',
    bg: 'bg-[#003366]/10',
    color: '#003366'
  },
  // 'IBM': {
  //   url: 'https://logo.clearbit.com/ibm.com',
  //   bg: 'bg-[#006699]/10',
  //   color: '#006699'
  // },
  // 'HCL': {
  //   url: 'https://logo.clearbit.com/hcl.com',
  //   bg: 'bg-[#1A4CA1]/10',
  //   color: '#1A4CA1'
  // },
  // 'Mindtree': {
  //   url: 'https://logo.clearbit.com/mindtree.com',
  //   bg: 'bg-[#00A6E3]/10',
  //   color: '#00A6E3'
  // },
  // 'L&T': {
  //   url: 'https://logo.clearbit.com/larsentoubro.com',
  //   bg: 'bg-[#1A4CA1]/10',
  //   color: '#1A4CA1'
  // },
  // 'Samsung': {
  //   url: 'https://logo.clearbit.com/samsung.com',
  //   bg: 'bg-[#1428A0]/10',
  //   color: '#1428A0'
  // },
  // 'Intel': {
  //   url: 'https://logo.clearbit.com/intel.com',
  //   bg: 'bg-[#0071C5]/10',
  //   color: '#0071C5'
  // },
  // 'Qualcomm': {
  //   url: 'https://logo.clearbit.com/qualcomm.com',
  //   bg: 'bg-[#3253DC]/10',
  //   color: '#3253DC'
  // },
  // 'Oracle': {
  //   url: 'https://logo.clearbit.com/oracle.com',
  //   bg: 'bg-[#C74634]/10',
  //   color: '#C74634'
  // },
  // 'Adobe': {
  //   url: 'https://logo.clearbit.com/adobe.com',
  //   bg: 'bg-[#FF0000]/10',
  //   color: '#FF0000'
  // },
  // 'VMware': {
  //   url: 'https://logo.clearbit.com/vmware.com',
  //   bg: 'bg-[#607078]/10',
  //   color: '#607078'
  // },
};


const stats = [
  { 
    icon: TrendingUp, 
    value: 95, 
    suffix: '%', 
    label: 'Placement Rate', 
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800/30',
    description: 'Students placed in top companies',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40'
  },
  { 
    icon: DollarSign, 
    value: 42, 
    suffix: ' LPA', 
    label: 'Highest Package', 
    color: 'text-nec-primary',
    bgColor: 'bg-nec-primary/10',
    borderColor: 'border-nec-primary/20',
    description: 'Record-breaking salary offered',
    iconBg: 'bg-nec-primary/20'
  },
  { 
    icon: Building2, 
    value: 200, 
    suffix: '+', 
    label: 'Recruiters', 
    color: 'text-nec-secondary',
    bgColor: 'bg-nec-secondary/10',
    borderColor: 'border-nec-secondary/20',
    description: 'Active hiring partners',
    iconBg: 'bg-nec-secondary/20'
  },
  { 
    icon: Award, 
    value: 8, 
    suffix: ' LPA', 
    label: 'Average Package', 
    color: 'text-nec-accent',
    bgColor: 'bg-nec-accent/10',
    borderColor: 'border-nec-accent/20',
    description: 'Average salary package',
    iconBg: 'bg-nec-accent/20'
  },
];

const topRecruiters = [
  { name: 'Google', category: 'Tech Giant', tier: 'Tier 1' },
  { name: 'Microsoft', category: 'Tech Giant', tier: 'Tier 1' },
  { name: 'Amazon', category: 'Tech Giant', tier: 'Tier 1' },
  { name: 'TCS', category: 'IT Services', tier: 'Tier 2' },
  { name: 'Infosys', category: 'IT Services', tier: 'Tier 2' },
  { name: 'Wipro', category: 'IT Services', tier: 'Tier 2' },
  { name: 'Accenture', category: 'Consulting', tier: 'Tier 1' },
  { name: 'Deloitte', category: 'Consulting', tier: 'Tier 1' },
  { name: 'IBM', category: 'Tech', tier: 'Tier 1' },
  { name: 'Cognizant', category: 'IT Services', tier: 'Tier 2' },
  { name: 'Capgemini', category: 'Consulting', tier: 'Tier 2' },
  { name: 'HCL', category: 'IT Services', tier: 'Tier 2' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at Google',
    package: '32 LPA',
    quote: 'The placement training at NECN prepared me for every stage of the interview process. The mock interviews and technical sessions were invaluable.',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=6366f1&color=fff&size=64',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    role: 'SDE at Amazon',
    package: '28 LPA',
    quote: 'I landed my dream job at Amazon thanks to the dedicated placement cell. They provided personalized guidance and connected me with the right opportunities.',
    image: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=8b5cf6&color=fff&size=64',
    rating: 5
  },
  {
    name: 'Sneha Patel',
    role: 'Analyst at Deloitte',
    package: '18 LPA',
    quote: 'NECN not only helped me secure a great job but also shaped my overall personality and professional skills.',
    image: 'https://ui-avatars.com/api/?name=Sneha+Patel&background=10b981&color=fff&size=64',
    rating: 5
  }
];

// Quick achievements
const achievements = [
  { icon: Trophy, label: 'Best Placement Record', value: '5 Consecutive Years' },
  { icon: Medal, label: 'Top Recruiter Award', value: 'Google Excellence' },
  { icon: GraduationCap, label: 'Student Satisfaction', value: '98%' },
  { icon: Globe, label: 'Global Placements', value: '15+ Countries' },
];

export default function PlacementsSection() {
  return (
    <section className="section-padding bg-white dark:bg-nec-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-nec-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-nec-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-nec-primary/3 to-nec-secondary/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-nec-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-nec-primary" />
            <span className="text-nec-primary font-semibold text-xs uppercase tracking-wider">Career Excellence</span>
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-nec-dark dark:text-white mt-2 mb-4">
            Exceptional <span className="text-nec-primary">Placements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Our students are placed in the world's most innovative companies
          </p>
          
          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {achievements.map((item, index) => (
              <div key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-nec-background dark:bg-nec-dark/50 rounded-full border border-gray-100 dark:border-gray-800">
                <item.icon className="w-4 h-4 text-nec-primary" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                <span className="text-xs font-bold text-nec-primary">• {item.value}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats Grid with Better Alignment */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className={`
                group relative bg-white dark:bg-nec-dark rounded-2xl p-6 
                border ${stat.borderColor} hover:shadow-xl transition-all duration-300
                hover:-translate-y-2 overflow-hidden
              `}>
                <div className="absolute inset-0 bg-gradient-to-br from-nec-primary/0 via-nec-primary/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                    ${stat.iconBg}
                  `}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="font-outfit font-bold text-4xl text-nec-dark dark:text-white mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-nec-dark dark:text-white font-semibold text-sm">{stat.label}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{stat.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Recruiters & Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Recruiters Section */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-nec-primary to-nec-secondary rounded-3xl p-8 text-white h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-white/80" />
                  <h3 className="font-outfit font-bold text-2xl">
                    Top Recruiters
                  </h3>
                </div>
                
                {/* Recruiter Grid with Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {Object.entries(companyLogos).map(([name, logoData], index) => {
                    return (
                      <div
                        key={index}
                        className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center 
                                 hover:bg-white/20 transition-all duration-300 cursor-default
                                 hover:scale-105 border border-white/5"
                      >
                        <div className="w-14 h-14 mx-auto mb-2 relative">
                          {logoData ? (
                            <div className="w-full h-full rounded-lg bg-white/10 p-2 flex items-center justify-center">
                              <Image
                                src={logoData.url}
                                alt={name}
                                width={40}
                                height={40}
                                className="object-contain max-w-full max-h-full"
                                unoptimized
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    const fallback = document.createElement('span');
                                    fallback.className = 'text-white font-bold text-lg';
                                    fallback.textContent = name[0];
                                    parent.appendChild(fallback);
                                  }
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-full h-full rounded-lg bg-white/20 flex items-center justify-center">
                              <span className="text-white font-bold text-lg">name[0]</span>
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-white/90 block">
                          {name}
                        </span>
                        <span className="text-[10px] text-white/60 block">
  {topRecruiters.find(company => company.name === name)?.category || 'Technology'}
</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm text-white/70">
                    ✨ 200+ companies visit our campus annually
                  </span>
                  <Link
                    href="/placements"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-nec-primary rounded-xl font-semibold hover:bg-white/90 transition-colors group"
                  >
                    <span>View Full List</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection className="h-full">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/20 rounded-2xl p-5 flex flex-col items-center justify-center border border-emerald-200 dark:border-emerald-800/30">
                  <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
                  <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">500+</span>
                  <span className="text-xs text-emerald-600/80 dark:text-emerald-400/80 text-center">Students Placed</span>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20 rounded-2xl p-5 flex flex-col items-center justify-center border border-blue-200 dark:border-blue-800/30">
                  <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">100%</span>
                  <span className="text-xs text-blue-600/80 dark:text-blue-400/80 text-center">Internship Conversion</span>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/20 rounded-2xl p-4 flex items-center justify-center border border-amber-200 dark:border-amber-800/30">
                  <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-amber-700 dark:text-amber-300 font-medium text-center">
                    Students placed across 15+ countries
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Testimonials Section */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <h3 className="font-outfit font-bold text-2xl text-nec-dark dark:text-white">
              Student Success Stories
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full border-2 border-nec-primary/20 flex-shrink-0"
                    unoptimized
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-nec-dark dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-nec-primary">💰 {testimonial.package}</span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Banner */}
        <AnimatedSection>
          <div className="relative bg-gradient-to-r from-nec-primary via-nec-secondary to-nec-accent rounded-3xl p-10 text-white overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Trophy className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white/90">#1 Placement College in the Region</span>
              </div>
              
              <h3 className="font-outfit font-bold text-3xl sm:text-4xl mb-4">
                Ready to Launch Your Career?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                Join NECN and become part of our legacy of excellence in placements.
                Our dedicated placement cell is here to guide you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/placements"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-nec-primary rounded-xl font-semibold hover:bg-white/90 transition-all hover:shadow-lg hover:scale-105 group"
                >
                  <span>Explore Placements</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all hover:scale-105"
                >
                  <span>Contact Placement Cell</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}