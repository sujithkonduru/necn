import HeroSection from '@/components/home/hero-section';
import StatsSection from '@/components/home/stats-section';
import AboutSection from '@/components/home/about-section';
import DepartmentsSection from '@/components/home/departments-section';
import PlacementsSection from '@/components/home/placements-section';
import ResearchSection from '@/components/home/research-section';
import CampusLifeSection from '@/components/home/campus-life-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import GallerySection from '@/components/home/gallery-section';
import NewsEventsSection from '@/components/home/news-events-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DepartmentsSection />
      <PlacementsSection />
      <ResearchSection />
      <CampusLifeSection />
      <TestimonialsSection />
      <GallerySection />
      <NewsEventsSection />
    </>
  );
}
