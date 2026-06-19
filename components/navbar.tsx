'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon, 
  GraduationCap,
  Search,
  Bell,
  User,
  Home,
  Info,
  BookOpen,
  Briefcase,
  Calendar,
  Users,
  Mail,
  Sparkles,
  Award,
  Building2,
  Library,
  FlaskConical,
  Compass,
  Phone,
  MapPin
} from 'lucide-react';
import { useTheme } from 'next-themes';

const navLinks = [
  { 
    name: 'Home', 
    href: '/', 
    icon: Home,
    description: 'Welcome to NECN'
  },
  {
    name: 'About',
    href: '/about',
    icon: Info,
    description: 'Learn about our institution',
    children: [
      { name: 'Overview', href: '/about', icon: Building2 },
      { name: 'History & Legacy', href: '/about#history', icon: Award },
      { name: 'Leadership', href: '/about#leadership', icon: Users },
      { name: 'Accreditation', href: '/about#accreditation', icon: Sparkles },
    ],
  },
  { 
    name: 'Admissions', 
    href: '/admissions',
    icon: BookOpen,
    description: 'Join NECN family',
    highlight: true
  },
  {
    name: 'Academics',
    href: '#',
    icon: Library,
    description: 'Explore our programs',
    children: [
      { name: 'Departments', href: '/departments', icon: Compass },
      { name: 'Programs', href: '/departments#programs', icon: BookOpen },
      { name: 'Research', href: '/research', icon: FlaskConical },
    ],
  },
  { 
    name: 'Placements', 
    href: '/placements',
    icon: Briefcase,
    description: 'Career opportunities'
  },
  {
    name: 'Campus Life',
    href: '#',
    icon: Calendar,
    description: 'Student experience',
    children: [
      { name: 'Clubs & Activities', href: '/clubs', icon: Users },
      { name: 'Sports', href: '/sports', icon: Award },
      { name: 'Events', href: '/clubs#events', icon: Calendar },
    ],
  },
  { 
    name: 'Alumni', 
    href: '/alumni',
    icon: Users,
    description: 'Our global network'
  },
  { 
    name: 'Contact', 
    href: '/contact',
    icon: Mail,
    description: 'Get in touch'
  },
];

// Quick actions for the navbar
const quickActions = [
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Bell, label: 'Notifications', href: '#' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 dark:bg-nec-dark/98 backdrop-blur-xl shadow-xl border-b border-gray-100 dark:border-gray-800 py-1'
            : 'bg-gradient-to-b from-nec-dark/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo - Left Section */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center gap-2.5 group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-2 rounded-xl transition-all ${
                    scrolled 
                      ? 'bg-gradient-to-br from-nec-primary to-nec-secondary shadow-md' 
                      : 'bg-white/20 backdrop-blur-sm border border-white/30'
                  }`}
                >
                  <GraduationCap className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-nec-dark animate-pulse" />
                </motion.div>
                
                <div className="hidden sm:block">
                  <span className={`font-outfit font-bold text-lg leading-tight block transition-colors ${
                    scrolled ? 'text-nec-dark dark:text-white' : 'text-white'
                  }`}>
                    NECN
                  </span>
                  <span className={`text-[9px] uppercase tracking-[0.25em] block transition-colors ${
                    scrolled ? 'text-nec-primary' : 'text-white/80'
                  }`}>
                    Narayana Engineering
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Center Section */}
            <nav className="hidden xl:flex items-center justify-center gap-0.5 flex-1 px-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`group px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 relative ${
                      link.highlight 
                        ? 'bg-gradient-to-r from-nec-primary to-nec-secondary text-white hover:shadow-lg hover:shadow-nec-primary/30'
                        : scrolled
                          ? 'text-gray-700 dark:text-gray-200 hover:text-nec-primary dark:hover:text-nec-accent hover:bg-nec-primary/5 dark:hover:bg-white/5'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.icon && <link.icon className="w-3.5 h-3.5" />}
                    <span>{link.name}</span>
                    {link.children && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    {link.highlight && (
                      <motion.div
                        className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-white dark:bg-nec-dark rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                      >
                        <div className="py-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-nec-primary hover:text-white transition-all duration-200 group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-nec-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0">
                                {child.icon && <child.icon className="w-3.5 h-3.5 text-nec-primary group-hover:text-white" />}
                              </div>
                              <span className="font-medium">{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {/* Quick Actions */}
              <div className="hidden md:flex items-center gap-0.5">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => action.label === 'Search' ? setSearchOpen(!searchOpen) : null}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      scrolled
                        ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <action.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    scrolled
                      ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.button>
              )}

              {/* Apply Now Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:block"
              >
                <Link
                  href="/admissions"
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    scrolled
                      ? 'bg-gradient-to-r from-nec-primary to-nec-secondary text-white hover:shadow-lg hover:shadow-nec-primary/30'
                      : 'bg-white text-nec-primary hover:bg-white/90'
                  }`}
                >
                  Apply Now
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  scrolled 
                    ? 'text-nec-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-white dark:bg-nec-dark border-t border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-0.5 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name} className="group">
                    <Link
                      href={link.href}
                      onClick={() => !link.children && setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        link.highlight
                          ? 'bg-gradient-to-r from-nec-primary to-nec-secondary text-white hover:shadow-lg'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-nec-primary/10 dark:hover:bg-white/5'
                      }`}
                    >
                      {link.icon && <link.icon className="w-5 h-5" />}
                      <span>{link.name}</span>
                      {link.highlight && <Sparkles className="w-4 h-4 ml-auto" />}
                    </Link>
                    {link.children && (
                      <div className="ml-9 mt-0.5 space-y-0.5 border-l-2 border-gray-100 dark:border-gray-800 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-nec-primary dark:hover:text-nec-accent transition-all"
                          >
                            {child.icon && <child.icon className="w-4 h-4" />}
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                  <Link
                    href="/admissions"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl bg-gradient-to-r from-nec-primary to-nec-secondary text-white text-center font-semibold hover:shadow-lg transition-shadow"
                  >
                    Apply Now
                  </Link>
                  <div className="flex justify-center gap-3">
                    {quickActions.map((action) => (
                      <button
                        key={action.label}
                        className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-nec-primary hover:text-white transition-colors"
                      >
                        <action.icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-nec-dark border-b border-gray-100 dark:border-gray-800 shadow-xl"
            >
              <div className="max-w-3xl mx-auto px-4 py-5">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for departments, programs, events..."
                    className="w-full pl-12 pr-28 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-nec-primary focus:border-transparent transition-all text-sm"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-nec-primary text-white rounded-lg hover:bg-nec-secondary transition-colors text-sm font-medium"
                  >
                    Search
                  </button>
                </form>
                <div className="mt-3 flex gap-3 flex-wrap items-center">
                  <span className="text-xs text-gray-400">Popular:</span>
                  <button className="text-xs text-nec-primary hover:underline">Computer Science</button>
                  <button className="text-xs text-nec-primary hover:underline">Admissions</button>
                  <button className="text-xs text-nec-primary hover:underline">Placements</button>
                  <button className="text-xs text-nec-primary hover:underline">Research</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}