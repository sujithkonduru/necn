'use client';

import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { AnimatedSection } from './animated-section';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Departments', href: '/departments' },
  { name: 'Placements', href: '/placements' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' },
];

const campusLinks = [
  { name: 'Clubs & Activities', href: '/clubs' },
  { name: 'Sports', href: '/sports' },
  { name: 'Library', href: '/about#library' },
  { name: 'Hostel', href: '/about#hostel' },
  { name: 'Transport', href: '/about#transport' },
  { name: 'Cafeteria', href: '/about#cafeteria' },
];

export default function Footer() {
  return (
    <footer className="bg-nec-dark text-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-nec-primary rounded-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="font-outfit font-bold text-xl block">NECN</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Narayana Engineering</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Narayana Engineering College, Nellore is committed to excellence in technical education, research, and innovation since 2001.
                </p>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 rounded-lg bg-white/5 hover:bg-nec-primary transition-colors text-gray-300 hover:text-white"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-outfit font-semibold text-lg mb-5">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-nec-accent transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-outfit font-semibold text-lg mb-5">Campus Life</h4>
                <ul className="space-y-3">
                  {campusLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-nec-accent transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-outfit font-semibold text-lg mb-5">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-gray-400">
                    <MapPin className="w-5 h-5 text-nec-accent shrink-0" />
                    <span>Muthukur Road, Nellore, Andhra Pradesh - 524003</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-400">
                    <Phone className="w-5 h-5 text-nec-accent shrink-0" />
                    <span>+91-861-1234567</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-400">
                    <Mail className="w-5 h-5 text-nec-accent shrink-0" />
                    <span>info@necnellore.ac.in</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Narayana Engineering College, Nellore. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-nec-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-nec-accent transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-nec-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
