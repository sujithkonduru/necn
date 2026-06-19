'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import CountUp from '@/components/count-up';
import Image from 'next/image';
import { 
  TrendingUp, 
  DollarSign, 
  Building2, 
  Users, 
  Award, 
  BarChart3, 
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Star,
  Trophy,
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Globe,
  Mail,
  Phone,
  Linkedin,
  Twitter
} from 'lucide-react';
import Link from 'next/link';

// Company logos with reliable URLs
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
    sub: '2024 Batch',
    gradient: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    iconColor: 'text-emerald-500'
  },
  { 
    icon: DollarSign, 
    value: 42, 
    suffix: ' LPA', 
    label: 'Highest Package', 
    sub: 'Amazon',
    gradient: 'from-nec-primary to-nec-secondary',
    bgColor: 'bg-nec-primary/10',
    iconColor: 'text-nec-primary'
  },
  { 
    icon: Building2, 
    value: 200, 
    suffix: '+', 
    label: 'Companies', 
    sub: 'Visited Campus',
    gradient: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-500'
  },
  { 
    icon: Users, 
    value: 1200, 
    suffix: '+', 
    label: 'Students Placed', 
    sub: 'Since 2020',
    gradient: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    iconColor: 'text-purple-500'
  },
  { 
    icon: Award, 
    value: 8, 
    suffix: ' LPA', 
    label: 'Average Package', 
    sub: '2024 Batch',
    gradient: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-amber-500'
  },
  { 
    icon: BarChart3, 
    value: 350, 
    suffix: '+', 
    label: 'Offers', 
    sub: 'This Year',
    gradient: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    iconColor: 'text-rose-500'
  },
];

const successStories = [
  { 
    name: 'Ravi K.', 
    package: '42 LPA', 
    company: 'Amazon', 
    role: 'SDE II',
    branch: 'CSE', 
    year: '2024',
    image: 'https://ui-avatars.com/api/?name=Ravi+K&background=FF9900&color=fff&size=64'
  },
  { 
    name: 'Priya S.', 
    package: '35 LPA', 
    company: 'Google', 
    role: 'Software Engineer',
    branch: 'CSE', 
    year: '2024',
    image: 'https://ui-avatars.com/api/?name=Priya+S&background=4285F4&color=fff&size=64'
  },
  { 
    name: 'Arun R.', 
    package: '28 LPA', 
    company: 'Microsoft', 
    role: 'SDE',
    branch: 'IT', 
    year: '2023',
    image: 'https://ui-avatars.com/api/?name=Arun+R&background=00A4EF&color=fff&size=64'
  },
  { 
    name: 'Meera N.', 
    package: '24 LPA', 
    company: 'Adobe', 
    role: 'Product Designer',
    branch: 'DSAI', 
    year: '2024',
    image: 'https://ui-avatars.com/api/?name=Meera+N&background=FF0000&color=fff&size=64'
  },
  { 
    name: 'Kiran B.', 
    package: '22 LPA', 
    company: 'Samsung', 
    role: 'Embedded Engineer',
    branch: 'ECE', 
    year: '2023',
    image: 'https://ui-avatars.com/api/?name=Kiran+B&background=1428A0&color=fff&size=64'
  },
  { 
    name: 'Sneha P.', 
    package: '20 LPA', 
    company: 'Oracle', 
    role: 'Software Developer',
    branch: 'CSE', 
    year: '2024',
    image: 'https://ui-avatars.com/api/?name=Sneha+P&background=C74634&color=fff&size=64'
  },
];

const hiringTrends = [
  { year: '2020', placed: 850, companies: 120, growth: 8 },
  { year: '2021', placed: 920, companies: 140, growth: 12 },
  { year: '2022', placed: 1150, companies: 165, growth: 18 },
  { year: '2023', placed: 1450, companies: 185, growth: 25 },
  { year: '2024', placed: 1800, companies: 200, growth: 32 },
];

export default function PlacementsPage() {
  return (
    <div className="pt-20 bg-white dark:bg-nec-dark">
      {/* Hero Section with Animation */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nec-primary via-nec-secondary to-purple-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">2024 Placement Season</span>
            </div>
            <h1 className="font-outfit font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">Placements</span>
            </h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Exceptional career outcomes powered by industry connections, dedicated training, 
              and a legacy of excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="#stats"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-nec-primary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <span>View Highlights</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/placements/recruiters"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Building2 className="w-4 h-4" />
                <span>Our Recruiters</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section id="stats" className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nec-primary/10 rounded-full mb-4">
              <Trophy className="w-4 h-4 text-nec-primary" />
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Placement <span className="text-nec-primary">Highlights</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Our students consistently achieve outstanding placements at top companies worldwide
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className={`
                  group relative overflow-hidden rounded-2xl p-6 sm:p-8 
                  border border-gray-100 dark:border-gray-800
                  hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                  ${stat.bgColor}
                `}>
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center
                        ${stat.bgColor}
                      `}>
                        <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                      <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{stat.sub}</span>
                    </div>
                    <div className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                    <p className="text-nec-dark dark:text-white font-medium mt-1">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recruiters Section with Logos */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-blue-500" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Partners</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Top <span className="text-nec-primary">Recruiters</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Leading companies that trust our talent
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Object.entries(companyLogos).map(([company, data]) => (
              <StaggerItem key={company}>
                <div className={`
                  group relative bg-white dark:bg-nec-dark rounded-xl p-4 text-center 
                  border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300
                  hover:-translate-y-1 hover:border-nec-primary/30
                `}>
                  <div className="relative w-16 h-16 mx-auto mb-3">
                    <Image
                      src={data.url}
                      alt={company}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain rounded-lg p-2 transition-all duration-300 group-hover:scale-110"
                      unoptimized
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400';
                          fallback.textContent = company.charAt(0);
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <span className="font-semibold text-nec-dark dark:text-white text-sm block">
                    {company}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-nec-primary font-semibold hover:gap-3 transition-all"
            >
              <span>View All Recruiters</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Stories with Avatars */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 rounded-full mb-4">
              <Star className="w-4 h-4 text-green-500" />
              <span className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wider">Achievers</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Success <span className="text-nec-primary">Stories</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Our students who made it to the top
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {successStories.map((story, index) => {
              const companyData = companyLogos[story.company as keyof typeof companyLogos];
              return (
                <StaggerItem key={index}>
                  <div className="group relative bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Company color accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${companyData?.bg || 'bg-nec-primary/10'}`} />
                    
                    <div className="flex items-start gap-4 mb-4">
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-gray-200 dark:border-gray-700"
                        unoptimized
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-outfit font-semibold text-nec-dark dark:text-white">
                          {story.name}
                        </p>
                        <p className="text-sm text-gray-500">{story.branch} &apos;{story.year}</p>
                        <p className="text-xs text-gray-400">{story.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-nec-primary text-lg">{story.package}</p>
                        <p className="text-xs text-gray-400">{story.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2">
                        {companyData && (
                          <div className={`w-6 h-6 rounded ${companyData.bg} flex items-center justify-center`}>
                            <Image
                              src={companyData.url}
                              alt={story.company}
                              width={16}
                              height={16}
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                        )}
                        <span className="text-sm text-gray-600 dark:text-gray-400">{story.company}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-nec-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Hiring Trends with Interactive Chart */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-950/30 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">Growth</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Hiring <span className="text-nec-primary">Trends</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Year-over-year growth in placements and recruiter partnerships
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
              <div className="flex items-end gap-2 sm:gap-4 h-72">
                {hiringTrends.map((trend, index) => {
                  const maxPlaced = 1200;
                  const heightPercent = (trend.placed / maxPlaced) * 100;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xs font-semibold text-nec-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          {trend.placed}
                        </span>
                        <div
                          className="w-full bg-gradient-to-t from-nec-primary via-nec-secondary to-purple-500 rounded-t-lg transition-all duration-1000 group-hover:opacity-80"
                          style={{ height: `${heightPercent}%`, minHeight: '4px' }}
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-semibold text-nec-dark dark:text-white">{trend.year}</span>
                        <span className="block text-xs text-green-500 font-medium mt-0.5">
                          +{trend.growth}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Total Placed</p>
                  <p className="font-bold text-2xl text-nec-primary">1,200+</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Companies</p>
                  <p className="font-bold text-2xl text-nec-secondary">200+</p>
                </div>
                <div className="text-center sm:col-span-1 col-span-2">
                  <p className="text-xs text-gray-500">Growth Rate</p>
                  <p className="font-bold text-2xl text-emerald-500">32%</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-nec-primary via-nec-secondary to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Build Your Career?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join our placement program and get the best opportunities in the industry
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-nec-primary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Placement Cell</span>
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Explore Programs</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}