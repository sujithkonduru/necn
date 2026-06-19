'use client';

import { useState } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Building2,
  Globe,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  User,
  Home,
  Briefcase,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ChevronRight
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      'Narayana Engineering College, Nellore',
      'Nellore - 524001, Andhra Pradesh, India'
    ],
    color: 'text-nec-primary',
    bgColor: 'bg-nec-primary/10'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: [
      '+91 12345 67890',
      '+91 98765 43210'
    ],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: [
      'info@necnalumni.com',
      'admissions@necnalumni.com'
    ],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 9:00 AM - 5:00 PM',
      'Saturday: 10:00 AM - 2:00 PM'
    ],
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30'
  }
];

const departments = [
  { name: 'Admissions', email: 'admissions@necnalumni.com', phone: '+91 12345 67890' },
  { name: 'Placements', email: 'placements@necnalumni.com', phone: '+91 12345 67891' },
  { name: 'Academics', email: 'academics@necnalumni.com', phone: '+91 12345 67892' },
  { name: 'Research', email: 'research@necnalumni.com', phone: '+91 12345 67893' },
  { name: 'Alumni Relations', email: 'alumni@necnalumni.com', phone: '+91 12345 67894' },
  { name: 'HR & Administration', email: 'hr@necnalumni.com', phone: '+91 12345 67895' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-[#1877F2]' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-[#000000]' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-[#0A66C2]' },
  { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-[#FF0000]' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-[#E4405F]' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus({
      type: 'success',
      message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
    });
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      department: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white dark:bg-nec-dark">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nec-primary via-nec-secondary to-purple-600">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-nec-dark/60 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="font-outfit font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">Us</span>
            </h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions? We're here to help. Reach out to us through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center mb-4`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-600 dark:text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-nec-primary" />
                <h2 className="font-outfit font-bold text-2xl text-nec-dark dark:text-white">
                  Send Us a Message
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fill in the form below and we'll get back to you as soon as possible.
              </p>

              {submitStatus.type === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/30 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{submitStatus.message}</p>
                </div>
              )}

              {submitStatus.type === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/30 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700 dark:text-red-300">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-nec-background dark:bg-nec-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-nec-primary focus:border-transparent transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-nec-background dark:bg-nec-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-nec-primary focus:border-transparent transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-nec-background dark:bg-nec-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-nec-primary focus:border-transparent transition-all text-sm"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Department
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-nec-background dark:bg-nec-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-nec-primary focus:border-transparent transition-all text-sm appearance-none"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept.name} value={dept.name}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-nec-background dark:bg-nec-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-nec-primary focus:border-transparent transition-all text-sm"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-nec-background dark:bg-nec-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-nec-primary focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-nec-primary to-nec-secondary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-nec-primary/30 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>

            {/* Right Column - Map & Department Contacts */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                {/* Map */}
                <div className="bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-full h-64 rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.3!2d79.949118!3d14.407513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d2c6b8b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sNarayana%20Engineering%20College%20Nellore!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="College Location"
                    />
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="bg-gradient-to-br from-nec-primary/5 to-nec-secondary/5 rounded-2xl p-6 border border-nec-primary/10">
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-nec-primary" />
                    Department Contacts
                  </h3>
                  <div className="space-y-3">
                    {departments.map((dept, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-nec-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:border-nec-primary transition-all">
                        <div>
                          <p className="font-medium text-sm text-nec-dark dark:text-white">{dept.name}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {dept.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {dept.phone}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                  <h3 className="font-outfit font-semibold text-lg text-nec-dark dark:text-white mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        className={`group w-12 h-12 rounded-xl bg-nec-background dark:bg-nec-dark/50 hover:bg-nec-primary transition-all flex items-center justify-center ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ / Quick Links Section */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Quick Help</span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white">
              Frequently Asked <span className="text-nec-primary">Questions</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'How can I apply for admission?',
                a: 'You can apply online through our admissions portal. Visit the Admissions page for detailed information.'
              },
              {
                q: 'What are the placement opportunities?',
                a: 'We have a dedicated placement cell with 200+ recruiters visiting campus annually. Our placement rate is 95%.'
              },
              {
                q: 'How can I contact the alumni office?',
                a: 'You can reach the alumni office at alumni@necnalumni.com or call +91 12345 67894.'
              },
              {
                q: 'What facilities are available on campus?',
                a: 'We offer state-of-the-art labs, library, sports complex, hostel facilities, and modern classrooms.'
              }
            ].map((faq, index) => (
              <StaggerItem key={index}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
                  <h4 className="font-outfit font-semibold text-nec-dark dark:text-white mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {faq.a}
                  </p>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Take the first step towards an exceptional career at NECN
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-nec-primary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:info@necnalumni.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}