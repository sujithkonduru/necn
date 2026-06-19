'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const news = [
  {
    title: 'NECN Ranks Among Top 100 Engineering Colleges in India',
    date: 'Jan 15, 2025',
    category: 'Achievement',
    excerpt: 'Narayana Engineering College has been ranked in the top 100 by a leading education survey.',
  },
  {
    title: 'New AI & Data Science Research Center Inaugurated',
    date: 'Jan 10, 2025',
    category: 'Research',
    excerpt: 'State-of-the-art facility equipped with GPU clusters and advanced computing infrastructure.',
  },
  {
    title: 'Record 95% Placement Rate for 2024 Batch',
    date: 'Dec 28, 2024',
    category: 'Placements',
    excerpt: 'Highest package of 42 LPA achieved with 200+ companies visiting the campus.',
  },
];

const events = [
  {
    title: 'TechFest 2025',
    date: 'Feb 20-22, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Main Campus',
  },
  {
    title: 'National Conference on Emerging Technologies',
    date: 'Mar 15-16, 2025',
    time: '10:00 AM - 5:00 PM',
    location: 'Seminar Hall',
  },
  {
    title: 'Annual Sports Meet',
    date: 'Apr 5-7, 2025',
    time: '8:00 AM - 5:00 PM',
    location: 'Sports Complex',
  },
];

export default function NewsEventsSection() {
  return (
    <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* News */}
          <div>
            <AnimatedSection className="mb-8">
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Updates</span>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mt-2">
                Latest <span className="text-nec-primary">News</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-5">
              {news.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-nec-primary/10 text-nec-primary text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2 group-hover:text-nec-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{item.excerpt}</p>
                    <Link href="#" className="inline-flex items-center gap-1 text-sm text-nec-primary font-medium hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Events */}
          <div>
            <AnimatedSection className="mb-8">
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Upcoming</span>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mt-2">
                Events & <span className="text-nec-primary">Activities</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-5">
              {events.map((event, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 flex gap-5">
                    <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-nec-primary to-nec-secondary rounded-xl flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-medium uppercase">{event.date.split(' ')[0]}</span>
                      <span className="text-lg font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div>
                      <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-1">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
