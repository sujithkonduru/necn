'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Music, Trophy, Users, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const activities = [
  {
    icon: Music,
    title: 'Cultural Expression Hub',
    description:
      'Music, dance, drama, and literary societies that transform talent into stage-ready performances and creative leadership.',
    image:
      'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Trophy,
    title: 'Competitive Sports Arena',
    description:
      'Cricket, basketball, volleyball, athletics, and indoor games fostering discipline, teamwork, and championship mindset.',
    image:
      'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Users,
    title: 'Innovation & Tech Labs',
    description:
      'Coding, robotics, AI, and engineering clubs where students build real-world solutions and startup-ready projects.',
    image:
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Calendar,
    title: 'Flagship Campus Events',
    description:
      'National-level fests, hackathons, and cultural celebrations that bring together talent from across the country.',
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
export default function CampusLifeSection() {
  return (
    <section className="section-padding bg-white dark:bg-nec-dark">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Student Life</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Beyond <span className="text-nec-primary">Academics</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl">
              A vibrant campus life with clubs, sports, and events that shape well-rounded engineers
            </p>
          </div>
          <Link
            href="/clubs"
            className="inline-flex items-center gap-2 text-nec-primary font-semibold hover:gap-3 transition-all shrink-0"
          >
            Explore Campus Life
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((activity, index) => (
            <StaggerItem key={index}>
              <div className="group relative rounded-2xl overflow-hidden h-[320px] cursor-pointer">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <activity.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-white mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-white/80 text-sm">{activity.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
