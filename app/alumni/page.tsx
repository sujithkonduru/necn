'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Building2, 
  MapPin, 
  Quote, 
  Users, 
  ArrowRight,
  Globe,
  Award,
  Briefcase,
  Calendar,
  Mail,
  Linkedin,
  Twitter,
  Star,
  Sparkles,
  ChevronRight,
  Trophy,
  Medal,
  Heart,
  MessageCircle
} from 'lucide-react';

const alumniStats = [
  { 
    value: '12,000+', 
    label: 'Alumni Network',
    icon: Users,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30'
  },
  { 
    value: '35+', 
    label: 'Countries',
    icon: Globe,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
  },
  { 
    value: '500+', 
    label: 'Fortune 500',
    icon: Building2,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30'
  },
  { 
    value: '150+', 
    label: 'Startups Founded',
    icon: Trophy,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30'
  },
];

const featuredAlumni = [
  {
    name: 'Dr. Ravi Kumar',
    batch: '2010',
    branch: 'CSE',
    role: 'Director of Engineering',
    company: 'Google',
    location: 'California, USA',
    quote: 'NECN gave me the foundation to dream big and the skills to achieve those dreams.',
    image: 'https://ui-avatars.com/api/?name=Ravi+Kumar&background=6366f1&color=fff&size=128',
    achievements: ['Google Excellence Award', '10+ Patents'],
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Priya Sharma',
    batch: '2012',
    branch: 'ECE',
    role: 'VP of Product',
    company: 'Microsoft',
    location: 'Seattle, USA',
    quote: 'The research culture at NECN prepared me for leadership roles in the tech industry.',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=8b5cf6&color=fff&size=128',
    achievements: ['Microsoft Gold Star', 'Women in Tech Award'],
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Arun Reddy',
    batch: '2014',
    branch: 'ME',
    role: 'Founder & CEO',
    company: 'TechStart Innovations',
    location: 'Bangalore, India',
    quote: 'From campus projects to building a startup, NECN was the launchpad for my journey.',
    image: 'https://ui-avatars.com/api/?name=Arun+Reddy&background=10b981&color=fff&size=128',
    achievements: ['Startup of the Year', '40 Under 40'],
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Meera Nair',
    batch: '2016',
    branch: 'IT',
    role: 'Senior Data Scientist',
    company: 'Amazon',
    location: 'Dublin, Ireland',
    quote: 'The data science program at NECN was ahead of its time and industry-relevant.',
    image: 'https://ui-avatars.com/api/?name=Meera+Nair&background=f59e0b&color=fff&size=128',
    achievements: ['Amazon Innovator Award', '3 Research Publications'],
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Vikram Singh',
    batch: '2015',
    branch: 'DSAI',
    role: 'AI Research Scientist',
    company: 'OpenAI',
    location: 'San Francisco, USA',
    quote: 'The AI/ML foundation at NECN opened doors to cutting-edge research in artificial intelligence.',
    image: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=6366f1&color=fff&size=128',
    achievements: ['NeurIPS Paper Award', 'AI Research Grant'],
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Ananya Patel',
    batch: '2018',
    branch: 'ECE',
    role: 'Hardware Engineer',
    company: 'Intel',
    location: 'Austin, USA',
    quote: 'The hands-on lab experience at NECN prepared me for the hardware engineering challenges at Intel.',
    image: 'https://ui-avatars.com/api/?name=Ananya+Patel&background=8b5cf6&color=fff&size=128',
    achievements: ['Intel Rising Star', 'VLSI Design Award'],
    linkedin: '#',
    twitter: '#'
  },
];

const chapters = [
  { 
    city: 'Bangalore', 
    members: 2500,
    image: 'https://www.bannerghatta.com/wp-content/uploads/bangalore-karnataka-india.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    coordinator: 'Dr. S. Rao',
    email: 'bangalore@necnalumni.com'
  },
  { 
    city: 'Hyderabad', 
    members: 1800,
    image: 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos669042260xl-1734400332096.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    coordinator: 'Prof. M. Reddy',
    email: 'hyderabad@necnalumni.com'
  },
  { 
    city: 'Chennai', 
    members: 1200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    coordinator: 'Dr. K. Kumar',
    email: 'chennai@necnalumni.com'
  },
  { 
    city: 'Mumbai', 
    members: 900,
    image: 'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nororqfuxgxvzwtexfjw.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    coordinator: 'Prof. V. Shah',
    email: 'mumbai@necnalumni.com'
  },
  { 
    city: 'Delhi NCR', 
    members: 700,
    image: 'https://cdn.getyourguide.com/img/location/533591c8ce856.jpeg/68.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    coordinator: 'Dr. A. Gupta',
    email: 'delhi@necnalumni.com'
  },
  { 
    city: 'USA', 
    members: 1500,
    image: 'https://studyabroadlife.org/wp-content/uploads/2023/01/Study-in-USA.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    coordinator: 'Dr. R. Patel',
    email: 'usa@necnalumni.com'
  },
];

const alumniTestimonials = [
  {
    name: 'Suresh Babu',
    batch: '2008',
    role: 'CTO at FinTech Corp',
    quote: 'The alumni network at NECN is incredible. I found my first investor through an alumni connection.',
    image: 'https://ui-avatars.com/api/?name=Suresh+Babu&background=6366f1&color=fff&size=64'
  },
  {
    name: 'Lakshmi Reddy',
    batch: '2011',
    role: 'Senior Partner at McKinsey',
    quote: 'The problem-solving skills I developed at NECN have been invaluable in my consulting career.',
    image: 'https://ui-avatars.com/api/?name=Lakshmi+Reddy&background=8b5cf6&color=fff&size=64'
  },
  {
    name: 'Vijay Kumar',
    batch: '2013',
    role: 'Engineering Manager at Apple',
    quote: 'NECN\'s focus on practical skills gave me the confidence to tackle complex engineering challenges.',
    image: 'https://ui-avatars.com/api/?name=Vijay+Kumar&background=10b981&color=fff&size=64'
  },
];

export default function AlumniPage() {
  return (
    <div className="bg-white dark:bg-nec-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nec-primary via-nec-secondary to-purple-600">
          <div className="absolute inset-0 bg-[url('https://www.scient.ac.in/images/alumni/e81cd6430bee3a495c386d8bcba96eb7.jpg')] bg-cover bg-center opacity-1 h-100vh" />
          <div className="absolute inset-0 bg-gradient-to-b from-nec-dark/60 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Global Network</span>
            </div>
            <h1 className="font-outfit font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">Network</span>
            </h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
              A global community of 12,000+ engineers making an impact across industries and continents
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="#chapters"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-nec-primary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                <span>Find Chapter</span>
              </Link>
              <Link
                href="#connect"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Mail className="w-4 h-4" />
                <span>Connect Now</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-nec-background dark:bg-nec-dark/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {alumniStats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="font-outfit font-bold text-2xl text-nec-dark dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-full mb-4">
              <Award className="w-4 h-4 text-indigo-500" />
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Featured <span className="text-nec-primary">Alumni</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Inspiring stories of our graduates making a difference worldwide
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAlumni.map((alum, index) => (
              <StaggerItem key={index}>
                <div className="group bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={alum.image}
                      alt={alum.name}
                      width={56}
                      height={56}
                      className="rounded-full border-2 border-nec-primary/20"
                      unoptimized
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-outfit font-semibold text-nec-dark dark:text-white group-hover:text-nec-primary transition-colors">
                        {alum.name}
                      </h3>
                      <p className="text-sm text-nec-primary font-medium">{alum.role}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Building2 className="w-3 h-3" />
                        <span>{alum.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-nec-primary/10 text-nec-primary px-2 py-0.5 rounded-full">
                        {alum.branch}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>Class of {alum.batch}</span>
                      <MapPin className="w-3 h-3 ml-2" />
                      <span>{alum.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Quote className="w-4 h-4 text-nec-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">{alum.quote}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {alum.achievements.map((achievement, i) => (
                      <span key={i} className="text-xs bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full">
                        🏆 {achievement}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Connect:</span>
                      <Link href="#" className="text-gray-400 hover:text-nec-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-nec-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                      </Link>
                    </div>
                    <button className="text-xs text-nec-primary font-medium hover:underline">
                      View Profile →
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Alumni Chapters */}
      <section id="chapters" className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-full mb-4">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wider">Community</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Alumni <span className="text-nec-primary">Chapters</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Connect with alumni in your city and build your professional network
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white dark:bg-nec-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={chapter.image}
                      alt={chapter.city}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nec-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-outfit font-bold text-xl text-white">{chapter.city}</h3>
                      <p className="text-white/80 text-sm">{chapter.members} members</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="text-xs text-gray-500">Coordinator</p>
                        <p className="font-medium text-nec-dark dark:text-white">{chapter.coordinator}</p>
                      </div>
                      <Link 
                        href={`mailto:${chapter.email}`}
                        className="text-nec-primary hover:underline text-xs"
                      >
                        Contact →
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-950/30 rounded-full mb-4">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Alumni <span className="text-nec-primary">Voices</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {alumniTestimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                      unoptimized
                    />
                    <div>
                      <h4 className="font-semibold text-nec-dark dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-nec-primary">Batch of {testimonial.batch}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Quote className="w-4 h-4 text-nec-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
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
              Stay Connected with NECN
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join our alumni network and be part of a thriving community of engineers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#connect"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-nec-primary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Users className="w-4 h-4" />
                <span>Join Network</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Alumni Office</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}