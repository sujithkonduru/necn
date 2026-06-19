'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Music, Code, Cpu, BookOpen, Camera, Globe, Heart, Users, Calendar, ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';

const clubs = [
  {
    icon: Code,
    name: 'Coding Club',
    category: 'Technical',
    members: 250,
    desc: 'Competitive programming, hackathons, and open source contributions.',
    activities: ['Weekly Coding Contests', 'Hackathon Series', 'Open Source Drive'],
  },
  {
    icon: Cpu,
    name: 'Robotics Club',
    category: 'Technical',
    members: 120,
    desc: 'Building autonomous robots, drones, and automation systems.',
    activities: ['Robot Wars', 'Drone Racing', 'Automation Projects'],
  },
  {
    icon: Globe,
    name: 'BIS Club',
    category: 'Technical',
    members: 80,
    desc: 'Bureau of Indian Standards awareness and standardization projects.',
    activities: ['Standards Workshops', 'Industry Visits', 'Certification Programs'],
  },
  {
    icon: Music,
    name: 'Music & Dance',
    category: 'Cultural',
    members: 180,
    desc: 'Expressing creativity through music, dance, and performing arts.',
    activities: ['Annual Cultural Fest', 'Inter-College Competitions', 'Workshops'],
  },
  {
    icon: Camera,
    name: 'Photography Club',
    category: 'Creative',
    members: 90,
    desc: 'Capturing moments and mastering visual storytelling.',
    activities: ['Photo Walks', 'Exhibitions', 'Editing Workshops'],
  },
  {
    icon: BookOpen,
    name: 'Literary Club',
    category: 'Creative',
    members: 100,
    desc: 'Debates, creative writing, and literary appreciation.',
    activities: ['Debate Championships', 'Creative Writing', 'Book Clubs'],
  },
  {
    icon: Heart,
    name: 'NSS & Social Service',
    category: 'Social',
    members: 300,
    desc: 'Community service, environmental initiatives, and social awareness.',
    activities: ['Blood Donation Camps', 'Village Adoption', 'Tree Plantation'],
  },
  {
    icon: Users,
    name: 'Entrepreneurship Cell',
    category: 'Professional',
    members: 150,
    desc: 'Fostering startup culture and innovation among students.',
    activities: ['Startup Pitch Events', 'Mentorship Programs', 'Funding Connects'],
  },
];

const events = [
  { name: 'TechFest 2025', date: 'Feb 20-22', type: 'Technical', desc: '3-day technical festival with competitions, workshops, and exhibitions.' },
  { name: 'Cultural Night', date: 'Mar 15', type: 'Cultural', desc: 'Annual cultural showcase featuring music, dance, and drama performances.' },
  { name: 'Sports Meet', date: 'Apr 5-7', type: 'Sports', desc: 'Inter-department sports competition across multiple disciplines.' },
  { name: 'Innovation Summit', date: 'May 10', type: 'Technical', desc: 'Platform for students to showcase innovative projects and ideas.' },
];

export default function ClubsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-nec-primary to-nec-secondary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Clubs & Activities
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover your passion, build skills, and make lifelong friends through our vibrant club ecosystem
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Clubs</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Student <span className="text-nec-primary">Clubs</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {clubs.map((club, index) => (
              <StaggerItem key={index}>
                <div className="group bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-12 h-12 bg-nec-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nec-primary group-hover:scale-110 transition-all">
                    <club.icon className="w-6 h-6 text-nec-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-nec-secondary bg-nec-secondary/10 px-2 py-1 rounded-full w-fit mb-2">
                    {club.category}
                  </span>
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2">{club.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1">{club.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>{club.members} Members</span>
                  </div>
                  <div className="space-y-1">
                    {club.activities.map((a, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <Trophy className="w-3 h-3 text-nec-accent" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Calendar</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Upcoming <span className="text-nec-primary">Events</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {events.map((event, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow flex gap-5">
                  <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-nec-primary to-nec-secondary rounded-xl flex flex-col items-center justify-center text-white">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-bold mt-0.5">{event.date}</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-nec-secondary bg-nec-secondary/10 px-2 py-0.5 rounded-full">
                      {event.type}
                    </span>
                    <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mt-2">{event.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{event.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
