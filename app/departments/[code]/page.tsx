'use client';

import { useParams } from 'next/navigation';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section';
import { Cpu, Code, Zap, Factory, FlaskConical, Server, Wifi, Car, Users, BookOpen, Microscope, Trophy, GraduationCap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const deptData: Record<string, any> = {
  cse: {
    icon: Cpu,
    name: 'Computer Science & Engineering',
    code: 'CSE',
    color: 'from-blue-500 to-blue-600',
    heroImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'The Department of Computer Science & Engineering offers cutting-edge programs in software engineering, artificial intelligence, cybersecurity, and cloud computing. With 12 specialized labs and industry partnerships, we prepare students for global tech careers.',
    vision: 'To be a center of excellence in computer science education and research, producing globally competent engineers.',
    mission: [
      'Impart quality education in core and emerging areas of computing.',
      'Foster research and innovation in AI, ML, and cybersecurity.',
      'Build strong industry collaborations for experiential learning.',
    ],
    courses: ['B.Tech CSE', 'B.Tech CSE (AI & ML)', 'B.Tech CSE (Cyber Security)', 'M.Tech CSE', 'Ph.D.'],
    faculty: [
      { name: 'Dr. A. Kumar', role: 'HOD', exp: '20+ years' },
      { name: 'Dr. B. Reddy', role: 'Professor', exp: '18 years' },
      { name: 'Dr. C. Sharma', role: 'Associate Professor', exp: '12 years' },
      { name: 'Dr. D. Nair', role: 'Assistant Professor', exp: '8 years' },
    ],
    labs: ['AI & ML Lab', 'Cyber Security Lab', 'Cloud Computing Lab', 'Data Science Lab', 'IoT Lab', 'Blockchain Lab'],
    research: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Cyber Security', 'Edge Computing'],
    placements: { rate: '96%', highest: '42 LPA', average: '9 LPA', top: ['Amazon', 'Google', 'Microsoft', 'TCS'] },
    achievements: ['Smart India Hackathon Winners 2024', 'ACM-ICPC Regional Finalists', 'Google Summer of Code selections'],
    events: ['CodeFest - Annual Coding Competition', 'Hackathon Series', 'Tech Talks by Industry Experts'],
  },
  it: {
    icon: Code,
    name: 'Information Technology',
    code: 'IT',
    color: 'from-emerald-500 to-emerald-600',
    heroImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'The IT Department focuses on web technologies, enterprise systems, data analytics, and digital transformation. Our curriculum is designed to produce versatile technologists for the digital economy.',
    vision: 'To create IT professionals who lead digital innovation and transformation globally.',
    mission: [
      'Deliver comprehensive education in software and information systems.',
      'Promote research in data analytics and enterprise architecture.',
      'Enable students to build scalable, secure technology solutions.',
    ],
    courses: ['B.Tech IT', 'B.Tech IT (Data Analytics)', 'M.Tech IT', 'Ph.D.'],
    faculty: [
      { name: 'Dr. E. Rao', role: 'HOD', exp: '19 years' },
      { name: 'Dr. F. Gupta', role: 'Professor', exp: '15 years' },
      { name: 'Dr. G. Menon', role: 'Associate Professor', exp: '10 years' },
    ],
    labs: ['Web Technology Lab', 'Database Lab', 'Network Security Lab', 'Data Analytics Lab'],
    research: ['Big Data Analytics', 'Web Semantics', 'Information Security', 'Cloud Architecture'],
    placements: { rate: '94%', highest: '28 LPA', average: '8 LPA', top: ['Infosys', 'Wipro', 'Accenture', 'Deloitte'] },
    achievements: ['Best Project Award at State Tech Fest', 'Top performing department in placements'],
    events: ['Webathon', 'Data Science Summit', 'Industry Connect Series'],
  },
  ece: {
    icon: Zap,
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    color: 'from-amber-500 to-amber-600',
    heroImage: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'ECE at NECN offers comprehensive programs in VLSI design, embedded systems, telecommunications, and signal processing. Our labs are equipped with the latest design and testing tools.',
    vision: 'To be a leader in electronics and communication engineering education and research.',
    mission: [
      'Train engineers in core electronics and modern communication systems.',
      'Advance research in VLSI, embedded systems, and 5G technologies.',
      'Collaborate with semiconductor and telecom industries.',
    ],
    courses: ['B.Tech ECE', 'B.Tech ECE (VLSI)', 'M.Tech VLSI Design', 'M.Tech Communication Systems', 'Ph.D.'],
    faculty: [
      { name: 'Dr. H. Iyer', role: 'HOD', exp: '22 years' },
      { name: 'Dr. I. Patel', role: 'Professor', exp: '17 years' },
      { name: 'Dr. J. Singh', role: 'Associate Professor', exp: '11 years' },
    ],
    labs: ['VLSI Design Lab', 'Embedded Systems Lab', 'Communication Lab', 'Signal Processing Lab', 'IoT Lab'],
    research: ['VLSI Design', '5G Communications', 'Signal Processing', 'RF Engineering'],
    placements: { rate: '92%', highest: '22 LPA', average: '7.5 LPA', top: ['Samsung', 'Qualcomm', 'Intel', 'BHEL'] },
    achievements: ['IEEE Paper Awards', 'Best VLSI Project at National Level'],
    events: ['Electronix - Technical Symposium', 'Circuit Design Challenge', 'Workshops on Embedded Systems'],
  },
  me: {
    icon: Factory,
    name: 'Mechanical Engineering',
    code: 'ME',
    color: 'from-red-500 to-red-600',
    heroImage: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'The Mechanical Engineering Department provides strong foundations in thermodynamics, design, manufacturing, and robotics. Our workshops and labs support hands-on learning and innovation.',
    vision: 'To develop innovative mechanical engineers for industry and research excellence.',
    mission: [
      'Impart strong fundamentals in mechanical engineering principles.',
      'Promote research in sustainable manufacturing and robotics.',
      'Foster entrepreneurship and product development skills.',
    ],
    courses: ['B.Tech ME', 'B.Tech ME (Robotics)', 'M.Tech Thermal Engineering', 'M.Tech Design', 'Ph.D.'],
    faculty: [
      { name: 'Dr. K. Verma', role: 'HOD', exp: '21 years' },
      { name: 'Dr. L. Joshi', role: 'Professor', exp: '16 years' },
      { name: 'Dr. M. Khan', role: 'Associate Professor', exp: '12 years' },
    ],
    labs: ['Thermal Lab', 'CAD/CAM Lab', 'Robotics Lab', 'Materials Testing Lab', 'Fluid Mechanics Lab'],
    research: ['Robotics & Automation', 'Thermal Systems', 'Composite Materials', 'Additive Manufacturing'],
    placements: { rate: '88%', highest: '18 LPA', average: '6.5 LPA', top: ['L&T', 'Tata Motors', 'Mahindra', 'BOSCH'] },
    achievements: ['SAE Baja Participation', 'National Robotics Competition Finalists'],
    events: ['MechFest', 'CAD Modeling Competition', 'Automobile Workshop'],
  },
  ce: {
    icon: FlaskConical,
    name: 'Civil Engineering',
    code: 'CE',
    color: 'from-orange-500 to-orange-600',
    heroImage: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'Civil Engineering at NECN covers structural, geotechnical, environmental, and transportation engineering. Our programs emphasize sustainable infrastructure and smart city solutions.',
    vision: 'To build engineers who shape sustainable and resilient infrastructure for the future.',
    mission: [
      'Educate engineers in structural and environmental engineering.',
      'Advance research in sustainable construction and smart cities.',
      'Collaborate with government and industry on live projects.',
    ],
    courses: ['B.Tech CE', 'B.Tech CE (Smart Cities)', 'M.Tech Structural Engineering', 'Ph.D.'],
    faculty: [
      { name: 'Dr. N. Prasad', role: 'HOD', exp: '20 years' },
      { name: 'Dr. O. Das', role: 'Professor', exp: '14 years' },
      { name: 'Dr. P. Bose', role: 'Associate Professor', exp: '10 years' },
    ],
    labs: ['Structural Lab', 'Geotechnical Lab', 'Survey Lab', 'Environmental Lab', 'Concrete Lab'],
    research: ['Sustainable Construction', 'Smart City Infrastructure', 'Water Resources', 'Earthquake Engineering'],
    placements: { rate: '85%', highest: '15 LPA', average: '6 LPA', top: ['L&T', 'Shapoorji Pallonji', 'NBCC', 'GMR'] },
    achievements: ['Best Structural Design Award', 'Smart City Project Grant'],
    events: ['Civil Expo', 'Bridge Design Competition', 'Surveying Camp'],
  },
  dsai: {
    icon: Server,
    name: 'Data Science & AI',
    code: 'DSAI',
    color: 'from-purple-500 to-purple-600',
    heroImage: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'The newest and most exciting department, DSAI offers specialized programs in machine learning, deep learning, big data, and artificial intelligence applications.',
    vision: 'To be a hub for AI innovation and data-driven research in India.',
    mission: [
      'Train students in cutting-edge AI and data science technologies.',
      'Drive interdisciplinary research across domains.',
      'Partner with tech giants for research and internships.',
    ],
    courses: ['B.Tech DSAI', 'B.Tech DSAI (Deep Learning)', 'M.Tech AI', 'Ph.D.'],
    faculty: [
      { name: 'Dr. Q. Ali', role: 'HOD', exp: '15 years' },
      { name: 'Dr. R. Mehta', role: 'Professor', exp: '12 years' },
      { name: 'Dr. S. Jain', role: 'Associate Professor', exp: '8 years' },
    ],
    labs: ['AI Lab', 'Deep Learning Lab', 'Big Data Lab', 'NLP Lab', 'Computer Vision Lab'],
    research: ['Generative AI', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'Federated Learning'],
    placements: { rate: '97%', highest: '35 LPA', average: '10 LPA', top: ['Google', 'Microsoft', 'Amazon', 'Adobe'] },
    achievements: ['Kaggle Competition Winners', 'AI Research Grants', 'Patents in ML'],
    events: ['AI Summit', 'Data Hackathon', 'Deep Learning Workshop'],
  },
  iot: {
    icon: Wifi,
    name: 'Internet of Things',
    code: 'IoT',
    color: 'from-cyan-500 to-cyan-600',
    heroImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'IoT Department bridges hardware and software to create smart, connected systems. Our curriculum covers sensor networks, edge computing, and Industry 4.0 technologies.',
    vision: 'To lead in IoT innovation for smart living and industrial automation.',
    mission: [
      'Build expertise in connected systems and edge computing.',
      'Promote research in smart cities and industrial IoT.',
      'Enable startups in IoT product development.',
    ],
    courses: ['B.Tech IoT', 'B.Tech IoT (Smart Systems)', 'M.Tech IoT', 'Ph.D.'],
    faculty: [
      { name: 'Dr. T. Roy', role: 'HOD', exp: '14 years' },
      { name: 'Dr. U. Sen', role: 'Professor', exp: '11 years' },
      { name: 'Dr. V. Ghosh', role: 'Associate Professor', exp: '7 years' },
    ],
    labs: ['Sensor Network Lab', 'Embedded Lab', 'Smart Systems Lab', 'Edge Computing Lab'],
    research: ['Smart Cities', 'Industrial IoT', 'Wearable Devices', 'Edge AI'],
    placements: { rate: '93%', highest: '20 LPA', average: '7 LPA', top: ['Intel', 'Qualcomm', 'Siemens', 'Honeywell'] },
    achievements: ['Smart City Project Award', 'IoT Innovation Challenge Winners'],
    events: ['IoT Conclave', 'Smart Systems Workshop', 'Sensor Design Challenge'],
  },
  auto: {
    icon: Car,
    name: 'Automobile Engineering',
    code: 'AUTO',
    color: 'from-rose-500 to-rose-600',
    heroImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'Automobile Engineering at NECN covers vehicle design, electric vehicles, autonomous systems, and automotive manufacturing. Our labs include engine testing and vehicle dynamics facilities.',
    vision: 'To produce automobile engineers who drive the future of mobility.',
    mission: [
      'Educate in automotive design, EV technology, and manufacturing.',
      'Advance research in electric and autonomous vehicles.',
      'Partner with automotive OEMs and suppliers.',
    ],
    courses: ['B.Tech Automobile', 'B.Tech Automobile (EV)', 'M.Tech Automotive Engineering', 'Ph.D.'],
    faculty: [
      { name: 'Dr. W. Anand', role: 'HOD', exp: '18 years' },
      { name: 'Dr. X. Pillai', role: 'Professor', exp: '13 years' },
      { name: 'Dr. Y. Naidu', role: 'Associate Professor', exp: '9 years' },
    ],
    labs: ['Engine Testing Lab', 'Vehicle Dynamics Lab', 'EV Lab', 'CAD Lab', 'Manufacturing Lab'],
    research: ['Electric Vehicles', 'Autonomous Driving', 'Lightweight Materials', 'Vehicle Safety'],
    placements: { rate: '90%', highest: '16 LPA', average: '6.8 LPA', top: ['Tata Motors', 'Mahindra', 'Maruti', 'Hyundai'] },
    achievements: ['Formula Student Participation', 'EV Design Competition Winners'],
    events: ['AutoExpo', 'EV Workshop', 'Vehicle Dynamics Challenge'],
  },
};

export default function DepartmentDetailPage() {
  const params = useParams();
  const code = (params.code as string)?.toLowerCase() || '';
  const dept = deptData[code];

  if (!dept) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-nec-dark dark:text-white">Department not found</h1>
        <Link href="/departments" className="text-nec-primary mt-4 inline-block">Back to Departments</Link>
      </div>
    );
  }

  const Icon = dept.icon;

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={dept.heroImage} alt={dept.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-nec-primary/95 to-nec-secondary/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${dept.color}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-white/80 font-medium">{dept.code}</span>
            </div>
            <h1 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              {dept.name}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">{dept.overview}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview & Vision */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Vision</span>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mt-2 mb-4">
                Our Vision & Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{dept.vision}</p>
              <ul className="space-y-3">
                {dept.mission.map((m: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-nec-primary shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{m}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-nec-background dark:bg-nec-dark/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <h3 className="font-outfit font-semibold text-xl text-nec-dark dark:text-white mb-4">Courses Offered</h3>
                <ul className="space-y-3">
                  {dept.courses.map((course: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-nec-primary" />
                      <span className="text-gray-700 dark:text-gray-300">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Team</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Faculty Members
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dept.faculty.map((f: any, i: number) => (
              <StaggerItem key={i}>
                <div className="bg-white dark:bg-nec-dark rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-nec-primary to-nec-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-outfit font-semibold text-nec-dark dark:text-white">{f.name}</h4>
                  <p className="text-nec-primary text-sm font-medium">{f.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{f.exp} experience</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Labs & Research */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mt-2 mb-6">
                Laboratories
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dept.labs.map((lab: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 bg-nec-background dark:bg-nec-dark/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                    <Microscope className="w-5 h-5 text-nec-primary" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{lab}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">R&D</span>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mt-2 mb-6">
                Research Areas
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dept.research.map((area: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 bg-nec-background dark:bg-nec-dark/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                    <BookOpen className="w-5 h-5 text-nec-secondary" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="section-padding bg-nec-background dark:bg-nec-dark/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Careers</span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-nec-dark dark:text-white mt-2">
              Placement <span className="text-nec-primary">Highlights</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-nec-dark rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800">
                <p className="font-outfit font-bold text-3xl text-nec-primary">{dept.placements.rate}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Placement Rate</p>
              </div>
              <div className="bg-white dark:bg-nec-dark rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800">
                <p className="font-outfit font-bold text-3xl text-nec-primary">{dept.placements.highest}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Highest Package</p>
              </div>
              <div className="bg-white dark:bg-nec-dark rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800">
                <p className="font-outfit font-bold text-3xl text-nec-primary">{dept.placements.average}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Average Package</p>
              </div>
              <div className="bg-white dark:bg-nec-dark rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800">
                <p className="font-outfit font-bold text-3xl text-nec-primary">{dept.placements.top.length}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Top Recruiters</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {dept.placements.top.map((company: string, i: number) => (
                <span key={i} className="px-4 py-2 bg-white dark:bg-nec-dark rounded-lg border border-gray-100 dark:border-gray-800 text-sm font-medium text-nec-dark dark:text-white">
                  {company}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements & Events */}
      <section className="section-padding bg-white dark:bg-nec-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Awards</span>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mt-2 mb-6">
                Student Achievements
              </h2>
              <ul className="space-y-4">
                {dept.achievements.map((a: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <Trophy className="w-5 h-5 text-nec-accent shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{a}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <span className="text-nec-primary font-semibold text-sm uppercase tracking-wider">Activities</span>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-nec-dark dark:text-white mt-2 mb-6">
                Events & Activities
              </h2>
              <ul className="space-y-4">
                {dept.events.map((e: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <BookOpen className="w-5 h-5 text-nec-secondary shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{e}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
