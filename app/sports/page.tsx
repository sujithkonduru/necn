'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Trophy, Users, Calendar, ArrowRight, CircleDot, Dumbbell } from 'lucide-react';
import Link from 'next/link';

const sports = [
  {
    name: 'Cricket',
    icon: CircleDot,
    players: 80,
    achievements: 'University Champions 2024',
    facilities: 'Full-size Cricket Ground, Practice Nets',
  },
  {
    name: 'Basketball',
    icon: Dumbbell,
    players: 60,
    achievements: 'State Level Runners-up',
    facilities: 'Indoor & Outdoor Courts',
  },
  {
    name: 'Volleyball',
    icon: CircleDot,
    players: 50,
    achievements: 'Inter-College Winners 2023',
    facilities: 'Beach & Indoor Courts',
  },
  {
    name: 'Football',
    icon: CircleDot,
    players: 70,
    achievements: 'District Champions',
    facilities: 'Full-size Football Ground',
  },
  {
    name: 'Badminton',
    icon: CircleDot,
    players: 40,
    achievements: 'State Medalists',
    facilities: 'Indoor Badminton Courts',
  },
  {
    name: 'Table Tennis',
    icon: CircleDot,
    players: 35,
    achievements: 'National Participants',
    facilities: 'Indoor TT Hall',
  },
  {
    name: 'Athletics',
    icon: Dumbbell,
    players: 45,
    achievements: 'Multiple State Records',
    facilities: '400m Track, Field Areas',
  },
  {
    name: 'Kabaddi',
    icon: CircleDot,
    players: 30,
    achievements: 'Regional Champions',
    facilities: 'Indoor Kabaddi Mat',
  },
];

const facilities = [
  { name: 'Sports Complex', desc: 'Multi-purpose indoor arena for basketball, badminton, and table tennis.' },
  { name: 'Cricket Ground', desc: 'Full-size cricket ground with practice nets and pavilion.' },
  { name: 'Football Field', desc: 'FIFA-standard football ground with floodlights.' },
  { name: 'Athletics Track', desc: '400m synthetic track with jumping and throwing facilities.' },
  { name: 'Gymnasium', desc: 'Modern fitness center with cardio, strength, and functional training zones.' },
  { name: 'Swimming Pool', desc: 'Olympic-size swimming pool with trained lifeguards.' },
];

export default function SportsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-nec-primary to-nec-secondary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Sports & Athletics
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              World-class sports facilities and coaching to nurture champions on and off the field
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Disciplines</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Our <span className="text-nec-primary">Sports</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sports.map((sport, index) => (
              <StaggerItem key={index}>
                <div className="group bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-nec-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nec-primary group-hover:scale-110 transition-all">
                    <sport.icon className="w-6 h-6 text-nec-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2">{sport.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{sport.players} Players</span>
                    </div>
                    <div className="flex items-center gap-2 text-nec-accent">
                      <Trophy className="w-4 h-4" />
                      <span>{sport.achievements}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{sport.facilities}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2 mb-4">
              Sports <span className="text-nec-primary">Facilities</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((facility, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2">{facility.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{facility.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
