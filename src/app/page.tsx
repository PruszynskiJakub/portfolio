'use client';

import {
  BookMarked,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Hash,
  Layers,
  LineChart,
  Linkedin,
  Mail,
  Presentation,
  Train,
  Users,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Lockus OZN',
    client: 'PKP Intercity',
    date: 'Sep 2025',
    description:
      'Enterprise automation for railway accessibility requests. AI transforms PDFs to structured data.',
    role: 'Led end-to-end delivery',
    badge: '110-190h/mo saved',
    icon: Train,
    color: 'from-green-400 to-emerald-600',
    logo: null,
  },
  {
    id: 2,
    name: 'CardiaPath',
    client: 'Dr. Matt Jones',
    date: 'Mar-Aug 2025',
    description:
      'Remote cardiac monitoring platform connecting wearables, virtual care, and AI.',
    role: 'Mobile lead (KMP)',
    badge: 'Healthcare AI',
    color: 'from-red-400 to-pink-600',
    logo: '/images/logo_cardiapath.png',
  },
  {
    id: 3,
    name: 'AI Financial Feeds',
    client: 'Pragmatic Coders',
    description:
      'AI-powered financial news aggregation and analysis platform processing thousands of sources.',
    role: 'Technical architect',
    badge: 'AI/ML',
    icon: LineChart,
    color: 'from-indigo-400 to-indigo-600',
    logo: null,
  },
  {
    id: 4,
    name: 'AI Tech Candidate Evaluation',
    client: 'Pragmatic Coders',
    description:
      'Intelligent candidate screening system using AI to evaluate technical skills and cultural fit.',
    role: 'Full-stack developer',
    badge: 'HR Tech',
    icon: Users,
    color: 'from-teal-400 to-teal-600',
    logo: null,
  },
  {
    id: 5,
    name: 'Frost',
    client: 'Fintech Startup',
    description:
      'All-in-one money management: bills, spending insights, currency exchange.',
    role: 'Android lead developer',
    badge: '2x efficiency',
    color: 'from-blue-400 to-blue-600',
    logo: '/images/logo_frost.png',
  },
  {
    id: 6,
    name: 'Health Folder',
    client: 'Teczka Pacjenta',
    description:
      'Medical records platform with AI test processing, categorization & analysis.',
    role: 'Full-stack implementation',
    badge: 'AI-powered',
    color: 'from-purple-400 to-purple-600',
    logo: '/images/logo_hf.png',
  },
  {
    id: 7,
    name: 'WP Poczta',
    client: 'Wirtualna Polska',
    description:
      'Email client with push notifications, offline access, and full mail functionality.',
    role: 'Core mobile developer',
    badge: 'Millions of users',
    color: 'from-orange-400 to-orange-600',
    logo: '/images/logo_wp.png',
  },
  {
    id: 8,
    name: 'Open FM',
    client: 'Wirtualna Polska',
    description:
      "Poland's biggest music platform with 2,000+ hours of music daily.",
    role: 'Mobile developer',
    badge: '100+ stations',
    color: 'from-pink-400 to-rose-600',
    logo: '/images/logo_openfm.png',
  },
  {
    id: 9,
    name: '1login od WP',
    client: 'Wirtualna Polska',
    description:
      'Two-factor authentication app for securing WP account access.',
    role: 'Mobile implementation',
    badge: 'Security',
    color: 'from-yellow-400 to-amber-600',
    logo: '/images/logo_onelogin.png',
  },
  {
    id: 10,
    name: 'Poczta o2',
    client: 'Wirtualna Polska',
    description:
      'Free email app with push notifications and offline message access.',
    role: 'Mobile developer',
    badge: 'Email client',
    color: 'from-cyan-400 to-cyan-600',
    logo: '/images/logo_o2.png',
  },
  {
    id: 11,
    name: 'Super-Pharm',
    client: 'Future Mind',
    description:
      'Loyalty club & pharmacy e-commerce with virtual cards, coupons, rewards.',
    role: 'Android developer',
    badge: 'E-commerce',
    color: 'from-green-400 to-green-600',
    logo: '/images/logo_superpharm.png',
  },
  {
    id: 12,
    name: 'XKCD Explorer',
    client: 'Side Project',
    description:
      'Comic viewer app for browsing and exploring XKCD comics collection.',
    role: 'Solo developer',
    badge: 'Personal',
    icon: Hash,
    color: 'from-gray-400 to-gray-600',
    logo: null,
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllInitiatives, setShowAllInitiatives] = useState(false);
  const [language, setLanguage] = useState<'en' | 'pl'>('en');
  const [activeSection, setActiveSection] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'initiatives',
        'projects',
        'certifications',
        'recommendations',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counting animation for Three Pillars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate years
            const yearsInterval = setInterval(() => {
              setYearsCount((prev) => {
                if (prev >= 10) {
                  clearInterval(yearsInterval);
                  return 10;
                }
                return prev + 1;
              });
            }, 200);
            // Animate products
            const productsInterval = setInterval(() => {
              setProductsCount((prev) => {
                if (prev >= 12) {
                  clearInterval(productsInterval);
                  return 12;
                }
                return prev + 1;
              });
            }, 150);
            // Animate clients
            const clientsInterval = setInterval(() => {
              setClientsCount((prev) => {
                if (prev >= 100) {
                  clearInterval(clientsInterval);
                  return 100;
                }
                return prev + 5;
              });
            }, 30);
          }
        });
      },
      { threshold: 0.5 }
    );

    const pillarsElement = document.getElementById('three-pillars');
    if (pillarsElement) {
      observer.observe(pillarsElement);
    }

    return () => {
      if (pillarsElement) {
        observer.unobserve(pillarsElement);
      }
    };
  }, [hasAnimated]);

  return (
    <main className='bg-cream text-charcoal'>
      {/* Structured Data for SEO and AI Search */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Jakub Pruszyński',
            jobTitle: 'Mobile & AI Product Engineer',
            description:
              'Mobile Engineer specializing in Kotlin Multiplatform (KMP), AI integration, and product development with 10+ years of experience.',
            url: 'https://www.linkedin.com/in/jpruszynski',
            sameAs: [
              'https://www.linkedin.com/in/jpruszynski',
              'https://github.com/PruszynskiJakub',
              'https://medium.com/@jakub-pruszynski',
              'https://www.youtube.com/@jpruszynski',
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Warsaw',
              addressCountry: 'Poland',
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'DeepLearning.AI',
            },
            knowsAbout: [
              'Kotlin Multiplatform',
              'Mobile Development',
              'iOS Development',
              'Android Development',
              'Artificial Intelligence',
              'Machine Learning',
              'Product Strategy',
              'Technical Architecture',
              'AI Automation',
              'Cross-platform Development',
            ],
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'Machine Learning Specialization',
                credentialCategory: 'certificate',
                recognizedBy: {
                  '@type': 'Organization',
                  name: 'DeepLearning.AI',
                },
              },
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'AI_devs 3 Agents',
                credentialCategory: 'certificate',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'Zautomatyzowani',
                credentialCategory: 'certificate',
              },
            ],
            performerIn: [
              {
                '@type': 'Event',
                name: 'Mobile Trends 2024',
                description: 'Speaking engagement on mobile development trends',
              },
            ],
          }),
        }}
      />

      {/* Navigation Menu - Responsive */}
      <nav className='fixed top-4 right-4 left-4 md:left-auto md:top-6 md:right-6 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-md'>
        <div className='flex items-center justify-between md:justify-start gap-2 md:gap-6 px-4 py-3 md:px-6'>
          {/* Mobile: Only show Connect button and language */}
          <a
            href='https://www.linkedin.com/in/jpruszynski'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm font-semibold px-4 py-2.5 md:px-3 md:py-1.5 bg-forest text-white rounded-full hover:bg-[var(--color-forest-600)] transition-all hover:scale-105 flex items-center gap-2 min-h-[44px] md:min-h-0'
          >
            <Linkedin className='w-4 h-4 md:w-3.5 md:h-3.5' />
            <span>{language === 'en' ? "Let's Connect" : 'Poznajmy się'}</span>
          </a>

          {/* Desktop navigation links - hidden on mobile */}
          <div className='hidden md:flex items-center gap-6'>
            <a
              href='#initiatives'
              className={`text-sm font-semibold transition-colors ${
                activeSection === 'initiatives'
                  ? 'text-[var(--color-forest-600)]'
                  : 'text-gray-600 hover:text-forest'
              }`}
            >
              {language === 'en' ? 'Initiatives' : 'Inicjatywy'}
            </a>
            <a
              href='#certifications'
              className={`text-sm transition-colors ${
                activeSection === 'certifications'
                  ? 'text-forest font-semibold'
                  : 'text-gray-600 hover:text-forest'
              }`}
            >
              {language === 'en' ? 'Certifications' : 'Certyfikaty'}
            </a>
            <a
              href='#projects'
              className={`text-sm transition-colors ${
                activeSection === 'projects'
                  ? 'text-forest font-semibold'
                  : 'text-gray-600 hover:text-forest'
              }`}
            >
              {language === 'en' ? 'Built Products' : 'Zbudowane produkty'}
            </a>
            <a
              href='#recommendations'
              className={`text-sm transition-colors ${
                activeSection === 'recommendations'
                  ? 'text-forest font-semibold'
                  : 'text-gray-600 hover:text-forest'
              }`}
            >
              {language === 'en' ? 'Testimonials' : 'Referencje'}
            </a>
            <div className='border-l border-gray-300 h-4'></div>
          </div>

          <button
            onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
            className='text-sm font-medium px-3 py-2.5 md:px-2 md:py-1 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-1.5 min-h-[44px] md:min-h-0'
          >
            {language === 'en' ? '🇬🇧' : '🇵🇱'}
            <span>{language === 'en' ? 'EN' : 'PL'}</span>
          </button>
        </div>
      </nav>

      {/* Refined Split Hero - Mobile Optimized */}
      <section className='min-h-[70vh] relative pt-20 md:pt-0'>
        {/* Background gradients - hidden on mobile */}
        <div className='absolute inset-0 hidden md:grid grid-cols-2'>
          {/* Left Side - Builder */}
          <div className='bg-gradient-to-br from-[var(--color-forest-50)] via-cream to-white relative overflow-hidden'>
            <div className='absolute top-10 -left-10 w-40 h-40 bg-[var(--color-forest-100)] rounded-full blur-3xl opacity-20'></div>
          </div>

          {/* Right Side - Creative */}
          <div className='bg-gradient-to-bl from-[#FFE8D6] via-[#FFF5EE] to-white relative overflow-hidden'>
            <div className='absolute bottom-10 -right-10 w-40 h-40 bg-[#FFD4B3] rounded-full blur-3xl opacity-20'></div>
          </div>
        </div>

        {/* Mobile gradient background */}
        <div className='absolute inset-0 md:hidden bg-gradient-to-b from-[var(--color-forest-50)] via-cream to-white'></div>

        {/* Brain Background Icon */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div className='relative w-64 md:w-96 h-64 md:h-96'>
            <Image
              src='/images/brain.svg'
              alt='Brain background'
              fill
              className='object-contain opacity-[0.08]'
            />
          </div>
        </div>

        <div className='relative z-10 min-h-[70vh] flex items-center'>
          <div className='w-full'>
            {/* Mobile: Stacked layout */}
            <div className='md:hidden flex flex-col items-center text-center px-6 py-12 space-y-8'>
              {/* Center Profile - Mobile First */}
              <div className='relative w-full flex flex-col items-center'>
                <div className='w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-forest-400)] to-[#FF8C69] p-0.5'>
                  <div className='w-full h-full rounded-full bg-cream overflow-hidden'>
                    <Image
                      src='/images/me.jpeg'
                      alt='Jakub Pruszyński'
                      width={128}
                      height={128}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='mt-4'>
                  <p className='text-xl font-bold text-charcoal'>
                    Jakub Pruszyński
                  </p>
                  <p className='text-sm text-gray-500'>Warsaw 🇵🇱</p>
                </div>
              </div>

              {/* Left Side Content */}
              <div className='space-y-4'>
                <div>
                  <Code2 className='w-6 h-6 text-forest mx-auto mb-2' />
                  <span className='text-sm font-mono text-forest'>
                    {language === 'en' ? 'ENGINEER' : 'INŻYNIER'}
                  </span>
                </div>
                <h1 className='text-2xl font-bold leading-tight'>
                  Mobile +<br />
                  <span className='text-forest'>AI Builder</span>
                </h1>
                <p className='text-base text-gray-600 max-w-sm mx-auto'>
                  {language === 'en'
                    ? 'I transform complex problems into elegant solutions. KMP, ML, and products that matter.'
                    : 'Przekształcam złożone problemy w eleganckie rozwiązania. KMP, ML i produkty, które mają znaczenie.'}
                </p>
              </div>

              {/* Right Side Content */}
              <div className='space-y-4 pt-4 border-t border-gray-200'>
                <div>
                  <Layers className='w-6 h-6 text-[#FF8C69] mx-auto mb-2' />
                  <span className='text-sm font-mono text-[#FF8C69]'>
                    {language === 'en' ? 'ARCHITECT' : 'ARCHITEKT'}
                  </span>
                </div>
                <h1 className='text-2xl font-bold leading-tight'>
                  {language === 'en' ? 'Product' : 'Produkt'}
                  <br />
                  <span className='text-[#FF8C69]'>
                    {language === 'en' ? 'Thinker' : 'Strateg'}
                  </span>
                </h1>
                <p className='text-base text-gray-600 max-w-sm mx-auto'>
                  {language === 'en'
                    ? 'Beyond code. Strategy, discovery, and execution with business impact in mind.'
                    : 'Poza kodem. Strategia, odkrywanie i wykonanie z myślą o wpływie na biznes.'}
                </p>
              </div>
            </div>

            {/* Desktop: Original grid layout */}
            <div className='hidden md:grid grid-cols-2'>
              {/* Left Side Content */}
              <div className='px-8 lg:px-16 py-12 text-left'>
                <div className='mb-4'>
                  <Code2 className='w-6 h-6 text-forest mb-2' />
                  <span className='text-xs font-mono text-forest'>
                    {language === 'en' ? 'ENGINEER' : 'INŻYNIER'}
                  </span>
                </div>
                <h1 className='text-3xl lg:text-4xl font-bold mb-4 leading-tight'>
                  Mobile +<br />
                  <span className='text-forest'>AI Builder</span>
                </h1>
                <p className='text-sm text-gray-600 mb-6 max-w-xs'>
                  {language === 'en'
                    ? 'I transform complex problems into elegant solutions. KMP, ML, and products that matter.'
                    : 'Przekształcam złożone problemy w eleganckie rozwiązania. KMP, ML i produkty, które mają znaczenie.'}
                </p>
              </div>

              {/* Right Side Content */}
              <div className='px-8 lg:px-16 py-12 text-right'>
                <div className='mb-4 flex justify-end'>
                  <Layers className='w-6 h-6 text-[#FF8C69] mb-2' />
                </div>
                <span className='text-xs font-mono text-[#FF8C69]'>
                  {language === 'en' ? 'ARCHITECT' : 'ARCHITEKT'}
                </span>
                <h1 className='text-3xl lg:text-4xl font-bold mb-4 leading-tight mt-4'>
                  {language === 'en' ? 'Product' : 'Produkt'}
                  <br />
                  <span className='text-[#FF8C69]'>
                    {language === 'en' ? 'Thinker' : 'Strateg'}
                  </span>
                </h1>
                <p className='text-sm text-gray-600 mb-6 max-w-xs ml-auto'>
                  {language === 'en'
                    ? 'Beyond code. Strategy, discovery, and execution with business impact in mind.'
                    : 'Poza kodem. Strategia, odkrywanie i wykonanie z myślą o wpływie na biznes.'}
                </p>
              </div>
            </div>

            {/* Center Profile - Desktop Only */}
            <div className='hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='relative'>
                {/* Avatar */}
                <div className='w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[var(--color-forest-400)] to-[#FF8C69] p-0.5'>
                  <div className='w-full h-full rounded-full bg-cream overflow-hidden'>
                    <Image
                      src='/images/me.jpeg'
                      alt='Jakub Pruszyński'
                      width={128}
                      height={128}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='absolute -bottom-15 left-1/2 -translate-x-1/2 whitespace-nowrap text-center'>
                  <p className='text-lg lg:text-xl font-bold text-charcoal'>
                    Jakub Pruszyński
                  </p>
                  <p className='text-xs text-gray-500'>Warsaw 🇵🇱</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Quote Section */}
      <section className='py-12 bg-white'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
          <h2 className='text-2xl font-semibold'>
            {language === 'en' ? (
              <>
                Code is just the <span className='text-forest'>artifact</span>.
                Impact is what <span className='text-[#FF8C69]'>matters</span>.
              </>
            ) : (
              <>
                Kod to tylko <span className='text-forest'>artefakt</span>. To
                wpływ się <span className='text-[#FF8C69]'>liczy</span>.
              </>
            )}
          </h2>
          <p className='mt-4 text-sm text-gray-600 max-w-xl mx-auto'>
            {language === 'en'
              ? 'A decade of building mobile apps for enterprises and startups. Now focused on the full picture: product discovery, technical strategy, and execution.'
              : 'Dekada budowania aplikacji mobilnych dla korporacji i startupów. Teraz skupiony na pełnym obrazie: odkrywanie produktu, strategia techniczna i wykonanie.'}
          </p>
        </div>
      </section>

      {/* Three Pillars Section - Animated Metrics */}
      <section
        id='three-pillars'
        className='py-8 bg-gradient-to-b from-white to-cream'
      >
        <div className='max-w-5xl mx-auto px-6'>
          <div className='flex justify-center gap-12'>
            <div className='text-center'>
              <p className='text-4xl font-bold text-forest transition-all duration-300'>
                {yearsCount}+
              </p>
              <p className='text-sm text-gray-600 mt-2'>
                {language === 'en'
                  ? 'Years of experience'
                  : 'Lat doświadczenia'}
              </p>
            </div>
            <div className='text-center'>
              <p className='text-4xl font-bold text-forest transition-all duration-300'>
                {productsCount}+
              </p>
              <p className='text-sm text-gray-600 mt-2'>
                {language === 'en' ? 'Built products' : 'Zbudowane produkty'}
              </p>
            </div>
            <div className='text-center'>
              <p className='text-4xl font-bold text-forest transition-all duration-300'>
                {clientsCount}%
              </p>
              <p className='text-sm text-gray-600 mt-2'>
                {language === 'en' ? 'Happy clients' : 'Zadowoleni klienci'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taleb Quote */}
      <section className='py-8 bg-gradient-to-b from-cream to-white'>
        <div className='max-w-3xl mx-auto px-6'>
          <div className='text-center'>
            <p className='text-lg italic text-gray-700 mb-2'>
              {language === 'en'
                ? '"Those who talk should do and only those who do should talk"'
                : '"Powinni mówić Ci co robią i TYLKO Ci co robią mogą mówić"'}
            </p>
            <p className='text-sm text-gray-500'>— Nassim Taleb</p>
          </div>
        </div>
      </section>

      {/* Initiatives Section - Teaching & Sharing */}
      <section id='initiatives' className='py-12 bg-white'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold'>
              {language === 'en' ? 'Initiatives' : 'Inicjatywy'}
            </h2>
            <p className='text-sm text-gray-600 mt-2'>
              {language === 'en'
                ? 'Sharing knowledge and building community'
                : 'Dzielenie się wiedzą i budowanie społeczności'}
            </p>
          </div>

          <div className='max-w-3xl mx-auto space-y-3'>
            {/* Claude Insights - In Progress */}
            <div className='flex items-center gap-3 p-4 bg-gradient-to-r from-[#F0F4FF] to-white border-2 border-dashed border-[#6366F1]/30 rounded-lg relative min-h-[68px]'>
              <div className='absolute top-2 right-2 px-2 py-0.5 bg-[#6366F1] text-white text-xs rounded-full font-medium'>
                {language === 'en' ? 'In Progress' : 'W trakcie'}
              </div>
              <div className='w-10 h-10 bg-[#6366F1]/10 rounded flex items-center justify-center flex-shrink-0'>
                <Layers className='w-5 h-5 text-[#6366F1]' />
              </div>
              <div className='flex-1'>
                <h4 className='text-base font-semibold text-charcoal'>
                  Claude Insights
                </h4>
                <p className='text-sm text-gray-600'>
                  An app created to boost your AI assisted productivity and
                  workflows
                </p>
              </div>
            </div>

            {/* Claude Code Meet Up */}
            <div className='flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFE8D6] to-white rounded-lg hover:shadow-md transition-all group min-h-[68px]'>
              <div className='w-10 h-10 bg-[#FFD4B3]/50 rounded flex items-center justify-center flex-shrink-0'>
                <Presentation className='w-5 h-5 text-[#FF8C69]' />
              </div>
              <div className='flex-1'>
                <h4 className='text-base font-semibold text-charcoal'>
                  Claude Code Meet Up by Brave.courses x Anthropic
                </h4>
                <p className='text-sm text-gray-600'>
                  Presentation: "Rewriting app without the budget but with AI"
                </p>
              </div>
            </div>

            {/* YouTube/Speaking items */}
            <a
              href='https://www.youtube.com/watch?v=Gp6FVfMknYQ&t=2s'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group min-h-[68px]'
            >
              <div className='w-10 h-10 bg-red-50 rounded flex items-center justify-center flex-shrink-0'>
                <Youtube className='w-5 h-5 text-red-600' />
              </div>
              <div className='flex-1'>
                <h4 className='text-base font-semibold text-charcoal group-hover:text-forest transition-colors'>
                  Claude Code Without Hype - Just Practically
                </h4>
                <p className='text-sm text-gray-600'>
                  Webinar on practical AI coding techniques
                </p>
              </div>
              <ExternalLink className='w-4 h-4 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
            </a>

            <a
              href='https://www.youtube.com/watch?v=l1ANxjUhxKU&pp=0gcJCfsJAYcqIYzv'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group min-h-[68px]'
            >
              <div className='w-10 h-10 bg-red-50 rounded flex items-center justify-center flex-shrink-0'>
                <Youtube className='w-5 h-5 text-red-600' />
              </div>
              <div className='flex-1'>
                <h4 className='text-base font-semibold text-charcoal group-hover:text-forest transition-colors'>
                  Pragmatic Talks: AI Agents - How They Work
                </h4>
                <p className='text-sm text-gray-600'>
                  Guest speaker on AI architecture
                </p>
              </div>
              <ExternalLink className='w-4 h-4 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
            </a>

            {/* Workshop */}
            <div className='flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg min-h-[68px]'>
              <div className='w-10 h-10 bg-[#FFD4B3]/30 rounded flex items-center justify-center flex-shrink-0'>
                <Presentation className='w-5 h-5 text-[#FF8C69]' />
              </div>
              <div className='flex-1'>
                <h4 className='text-base font-semibold text-charcoal'>
                  Open Workshops on Programming with AI
                </h4>
                <p className='text-sm text-gray-600'>
                  Community workshops with hands-on AI development
                </p>
              </div>
            </div>

            {/* Medium articles */}
            <a
              href='https://medium.com/@jakub-pruszynski/fastlane-kmm-the-ultimate-ci-cd-combo-for-cross-platform-success-a7a98ecbb962'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
            >
              <div className='w-7 h-7 bg-gray-100 rounded flex items-center justify-center flex-shrink-0'>
                <BookMarked className='w-4 h-4 text-gray-700' />
              </div>
              <div className='flex-1'>
                <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                  Fastlane + KMM: Ultimate CI/CD
                </h4>
                <p className='text-xs text-gray-600'>
                  Cross-platform CI/CD excellence
                </p>
                <span className='inline-block px-1.5 py-0.5 bg-forest/10 text-forest text-[10px] rounded mt-1'>
                  TOP SEARCH RESULT on Google
                </span>
              </div>
              <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
            </a>

            {/* Additional items - shown when expanded */}
            {showAllInitiatives && (
              <>
                <a
                  href='https://medium.com/@jakub-pruszynski/from-mockup-to-mobile-in-minutes-rapid-ui-prototyping-with-ai-for-android-and-ios-d943b07f79e7'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
                >
                  <div className='w-7 h-7 bg-gray-100 rounded flex items-center justify-center flex-shrink-0'>
                    <BookMarked className='w-4 h-4 text-gray-700' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                      From Mockup to Mobile in Minutes
                    </h4>
                    <p className='text-xs text-gray-600'>
                      AI-powered rapid UI prototyping guide
                    </p>
                  </div>
                  <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
                </a>

                <a
                  href='https://medium.com/@jakub-pruszynski/thinking-in-terms-of-intentions-the-best-friend-of-software-developer-13357baaefee'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
                >
                  <div className='w-7 h-7 bg-gray-100 rounded flex items-center justify-center flex-shrink-0'>
                    <BookMarked className='w-4 h-4 text-gray-700' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                      Thinking in Terms of Intentions
                    </h4>
                    <p className='text-xs text-gray-600'>
                      Software development philosophy
                    </p>
                  </div>
                  <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
                </a>

                <a
                  href='https://medium.com/@jakub-pruszynski/t-stands-for-testing-understand-it-first-chapter-3-the-right-way-fdf2de3d3073'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
                >
                  <div className='w-7 h-7 bg-gray-100 rounded flex items-center justify-center flex-shrink-0'>
                    <BookMarked className='w-4 h-4 text-gray-700' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                      T Stands for Testing - Part 3: The Right Way
                    </h4>
                    <p className='text-xs text-gray-600'>
                      Best practices for effective testing
                    </p>
                  </div>
                  <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
                </a>

                <a
                  href='https://medium.com/@jakub-pruszynski/t-stands-for-testing-understand-it-first-chapter-2-the-missing-puzzle-752bad570082'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
                >
                  <div className='w-7 h-7 bg-gray-100 rounded flex items-center justify-center flex-shrink-0'>
                    <BookMarked className='w-4 h-4 text-gray-700' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                      T Stands for Testing - Part 2: The Missing Puzzle
                    </h4>
                    <p className='text-xs text-gray-600'>
                      Uncovering what's often overlooked in testing
                    </p>
                  </div>
                  <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
                </a>

                <a
                  href='https://medium.com/@jakub-pruszynski/t-stands-for-testing-understand-it-first-part-1-327aa0f7ce40'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
                >
                  <div className='w-7 h-7 bg-gray-100 rounded flex items-center justify-center flex-shrink-0'>
                    <BookMarked className='w-4 h-4 text-gray-700' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                      T Stands for Testing - Part 1: Foundation
                    </h4>
                    <p className='text-xs text-gray-600'>
                      Understanding the fundamentals of testing
                    </p>
                  </div>
                  <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
                </a>
              </>
            )}

            {/* Show more/less button */}
            <button
              onClick={() => setShowAllInitiatives(!showAllInitiatives)}
              className='w-full py-3 text-base text-forest hover:text-[var(--color-forest-600)] transition-colors flex items-center justify-center gap-2 min-h-[48px]'
            >
              {showAllInitiatives ? 'Show less' : 'Show more'}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  showAllInitiatives ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Clear Divider */}
      <div className='bg-white'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='py-8'>
            <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
          </div>
        </div>
      </div>

      {/* Certifications Section - Compact and Professional */}
      <section
        id='certifications'
        className='py-12 bg-gradient-to-b from-cream-light to-cream'
      >
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold'>
              {language === 'en' ? 'Certifications' : 'Certyfikaty'}
            </h2>
            <p className='text-sm text-gray-600 mt-2'>
              {language === 'en'
                ? 'Continuous learning in AI, security, and automation'
                : 'Ciągła nauka w AI, bezpieczeństwie i automatyzacji'}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* AI Product Heroes - In Progress */}
            <div className='bg-gradient-to-br from-[#F0F4FF] to-white rounded-lg p-4 border-2 border-dashed border-[#6366F1]/30 relative'>
              <div className='absolute top-2 right-2 px-1.5 py-0.5 bg-[#6366F1] text-white text-xs rounded-full text-[10px] font-medium'>
                {language === 'en' ? 'In Progress' : 'W trakcie'}
              </div>
              <div className='flex items-start gap-3'>
                <div className='relative w-10 h-10 flex-shrink-0'>
                  <Image
                    src='/images/cert_aiproductheroes.png'
                    alt='AI Product Heroes logo'
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    AI Product Heroes
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    {language === 'en'
                      ? 'Product-focused AI development'
                      : 'Rozwój AI zorientowany na produkt'}
                  </p>
                  <p className='text-xs text-[#6366F1] mt-1'>
                    {language === 'en' ? 'October 2025' : 'Październik 2025'}
                  </p>
                </div>
              </div>
            </div>

            {/* AI_devs 3 Agents */}
            <div className='bg-gradient-to-br from-[#FFF5EE] to-white rounded-lg p-4 border border-[#FFD4B3]/30'>
              <div className='flex items-start gap-3'>
                <div className='relative w-10 h-10 flex-shrink-0'>
                  <Image
                    src='/images/cert_aidevs.png'
                    alt='AI_devs logo'
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    AI_devs 3 Agents
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    {language === 'en'
                      ? 'Building AI Agents'
                      : 'Budowanie agentów AI'}
                  </p>
                  <p className='text-xs text-[#FF8C69] mt-1'>
                    {language === 'en' ? 'December 2024' : 'Grudzień 2024'}
                  </p>
                </div>
              </div>
            </div>

            {/* Zautomatyzowani */}
            <div className='bg-gradient-to-br from-[var(--color-forest-50)] to-white rounded-lg p-4 border border-[var(--color-forest-100)]'>
              <div className='flex items-start gap-3'>
                <div className='relative w-10 h-10 flex-shrink-0'>
                  <Image
                    src='/images/cert_zautomatyzowani.png'
                    alt='Zautomatyzowani logo'
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    Zautomatyzowani
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    {language === 'en'
                      ? 'Automation tools, process & RPA'
                      : 'Narzędzia automatyzacji, procesy i RPA'}
                  </p>
                  <p className='text-xs text-forest mt-1'>
                    {language === 'en' ? 'April 2025' : 'Kwiecień 2025'}
                  </p>
                </div>
              </div>
            </div>

            {/* AI Devs 2 */}
            <div className='bg-gradient-to-br from-[#FFF5EE] to-white rounded-lg p-4 border border-[#FFD4B3]/30'>
              <div className='flex items-start gap-3'>
                <div className='relative w-10 h-10 flex-shrink-0'>
                  <Image
                    src='/images/cert_aidevs.png'
                    alt='AI Devs logo'
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    AI Devs 2
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    {language === 'en'
                      ? 'Building AI Applications'
                      : 'Budowanie aplikacji AI'}
                  </p>
                  <p className='text-xs text-[#FF8C69] mt-1'>
                    {language === 'en' ? 'April 2024' : 'Kwiecień 2024'}
                  </p>
                </div>
              </div>
            </div>

            {/* Android Mobile Security */}
            <div className='bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200'>
              <div className='flex items-start gap-3'>
                <div className='relative w-10 h-10 flex-shrink-0'>
                  <Image
                    src='/images/cert_niebezpiecznik.png'
                    alt='Niebezpiecznik logo'
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    Android Mobile Security
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    Niebezpiecznik.pl
                  </p>
                  <p className='text-xs text-gray-500 mt-1'>
                    {language === 'en' ? 'November 2024' : 'Listopad 2024'}
                  </p>
                </div>
              </div>
            </div>

            {/* Machine Learning Specialization */}
            <div className='bg-gradient-to-br from-[var(--color-forest-50)] to-white rounded-lg p-4 border border-[var(--color-forest-100)]'>
              <div className='flex items-start gap-3'>
                <div className='relative w-10 h-10 flex-shrink-0'>
                  <Image
                    src='/images/cert_machinelearning.png'
                    alt='DeepLearning.AI logo'
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    Machine Learning Specialization
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    DeepLearning.AI
                  </p>
                  <p className='text-xs text-forest mt-1'>
                    {language === 'en' ? 'February 2024' : 'Luty 2024'}
                  </p>
                  <p className='text-xs text-gray-400 mt-0.5'>
                    ID: 7Q2U3QRHZXUP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Compact Grid */}
      <section id='projects' className='py-12 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-semibold'>
              {language === 'en' ? 'Built Products' : 'Zbudowane produkty'}
            </h2>
            <div className='flex gap-2'>
              <button
                onClick={prevSlide}
                className='p-2.5 rounded-full hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center'
                aria-label='Previous projects'
              >
                <ChevronLeft className='w-5 h-5' />
              </button>
              <button
                onClick={nextSlide}
                className='p-2.5 rounded-full hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center'
                aria-label='Next projects'
              >
                <ChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <div key={pageIndex} className='min-w-full'>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                    {projects
                      .slice(
                        pageIndex * itemsPerPage,
                        (pageIndex + 1) * itemsPerPage
                      )
                      .map((project) => {
                        const Icon = project.icon;

                        return (
                          <div
                            key={project.id}
                            className='group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all'
                          >
                            <div className='flex items-start justify-between mb-3'>
                              <div className='flex items-center gap-3'>
                                {project.logo ? (
                                  <div className='relative w-8 h-8 flex-shrink-0'>
                                    <Image
                                      src={project.logo}
                                      alt={`${project.name} logo`}
                                      width={32}
                                      height={32}
                                      className='object-contain'
                                    />
                                  </div>
                                ) : (
                                  Icon && (
                                    <div className='w-8 h-8 bg-[var(--color-forest-50)] rounded-lg flex items-center justify-center flex-shrink-0'>
                                      <Icon className='w-4 h-4 text-forest' />
                                    </div>
                                  )
                                )}
                                <div>
                                  <h3 className='font-semibold text-sm'>
                                    {project.name}
                                  </h3>
                                  <p className='text-xs text-gray-500'>
                                    {project.client}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <p className='text-xs text-gray-600 mb-3 line-clamp-2'>
                              {project.description}
                            </p>

                            <div className='flex items-center justify-between'>
                              <span className='text-xs text-forest font-medium'>
                                {project.badge}
                              </span>
                              <span className='text-xs text-gray-400'>
                                {project.role}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className='flex justify-center gap-1.5 mt-6'>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 rounded-full transition-all ${
                  currentIndex === i ? 'w-6 bg-forest' : 'w-1.5 bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section
        id='recommendations'
        className='py-12 bg-gradient-to-b from-white to-cream'
      >
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold'>
              {language === 'en' ? 'What People Say' : 'Co mówią inni'}
            </h2>
            <p className='text-sm text-gray-600 mt-2'>
              {language === 'en'
                ? 'Testimonials from clients and colleagues'
                : 'Referencje od klientów i współpracowników'}
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {/* Matthew Jones */}
            <div className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <div className='flex text-forest mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                  ))}
                </div>
                <p className='text-sm text-gray-600 italic leading-relaxed'>
                  "What sets Jakub apart is not only his strong technical
                  skills, but also his excellent business orientation. He
                  approaches building products with a clear understanding of the
                  client's goals, always seeking the right balance between value
                  and cost."
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-forest'>MJ</span>
                </div>
                <div>
                  <p className='text-sm font-semibold'>
                    Matthew Jones, MD FACC FSCAI
                  </p>
                  <p className='text-xs text-gray-500'>
                    Founder, Everbeat | Client
                  </p>
                </div>
              </div>
            </div>

            {/* Steven Miyao */}
            <div className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <div className='flex text-forest mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                  ))}
                </div>
                <p className='text-sm text-gray-600 italic leading-relaxed'>
                  "Jakub combines strong technical expertise with a keen eye for
                  design and usability. He regularly delivered high-quality work
                  on tight deadlines and was proactive in suggesting
                  enhancements that improved the overall product."
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-forest'>SM</span>
                </div>
                <div>
                  <p className='text-sm font-semibold'>Steven Miyao</p>
                  <p className='text-xs text-gray-500'>
                    Executive Coach | Client
                  </p>
                </div>
              </div>
            </div>

            {/* Pawel Oltuszyk */}
            <div className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <div className='flex text-forest mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                  ))}
                </div>
                <p className='text-sm text-gray-600 italic leading-relaxed'>
                  "Jakub's expertise in Kotlin development is remarkable,
                  demonstrating a deep understanding of complex coding
                  principles. His positive attitude and engaging personality
                  greatly enhanced our team dynamics."
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-forest'>PO</span>
                </div>
                <div>
                  <p className='text-sm font-semibold'>Pawel Oltuszyk</p>
                  <p className='text-xs text-gray-500'>Frost | Client</p>
                </div>
              </div>
            </div>

            {/* Rafal Jachimczyk */}
            <div className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <div className='flex text-forest mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                  ))}
                </div>
                <p className='text-sm text-gray-600 italic leading-relaxed'>
                  "Jakub excels because he's very careful with all the little
                  details. He's committed to doing things right and his
                  dedication to high-quality work shows that he cares about
                  delivering the best results."
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-forest'>RJ</span>
                </div>
                <div>
                  <p className='text-sm font-semibold'>Rafal Jachimczyk</p>
                  <p className='text-xs text-gray-500'>
                    CTO at Keel | Direct Manager
                  </p>
                </div>
              </div>
            </div>

            {/* Michał Diner */}
            <div className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <div className='flex text-forest mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                  ))}
                </div>
                <p className='text-sm text-gray-600 italic leading-relaxed'>
                  "I was consistently impressed by Jakub's technical expertise
                  and his ability to solve complex problems with ease. Despite
                  the high-pressure environment, he remained upbeat and
                  maintained excellent rapport with the team."
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-forest'>MD</span>
                </div>
                <div>
                  <p className='text-sm font-semibold'>Michał Diner</p>
                  <p className='text-xs text-gray-500'>
                    Senior Android Developer | Colleague
                  </p>
                </div>
              </div>
            </div>

            {/* Michał Hawryszko */}
            <div className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <div className='flex text-forest mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                  ))}
                </div>
                <p className='text-sm text-gray-600 italic leading-relaxed'>
                  "Kuba to świetny specjalista, który ciągle dąży do wzbogacania
                  swoich umiejętności. Potrafi bardzo dobrze interpretować
                  potrzeby biznesowe na techniczne rozwiązania i odwrotnie."
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-forest'>MH</span>
                </div>
                <div>
                  <p className='text-sm font-semibold'>Michał Hawryszko</p>
                  <p className='text-xs text-gray-500'>
                    IT Manager, WP | Direct Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Simple and Humble */}
      <section id='contact' className='py-12 bg-white'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
          <h2 className='text-2xl font-semibold mb-3'>
            {language === 'en' ? "Let's Connect" : 'Nawiążmy kontakt'}
          </h2>
          <p className='text-sm text-gray-600 mb-8'>
            {language === 'en'
              ? 'Open to interesting projects and collaborations.'
              : 'Otwarty na ciekawe projekty i współpracę.'}
          </p>

          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
            <a
              href='https://www.linkedin.com/in/jpruszynski'
              className='flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-forest-50)] rounded-lg hover:bg-[var(--color-forest-100)] transition-colors min-h-[48px]'
            >
              <Linkedin className='w-5 h-5 text-forest' />
              <span className='text-base'>LinkedIn</span>
            </a>

            <a
              href='mailto:jakub.mikolaj.pruszynski@gmail.com'
              className='flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[48px]'
            >
              <Mail className='w-5 h-5 text-gray-600' />
              <span className='text-base'>Email</span>
            </a>

            <a
              href='https://github.com/PruszynskiJakub'
              className='flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[48px]'
            >
              <Github className='w-5 h-5 text-gray-600' />
              <span className='text-base'>GitHub</span>
            </a>
          </div>

          <div className='mt-8 text-xs text-gray-500'>
            Warsaw, Poland • Remote friendly
          </div>
        </div>
      </section>
    </main>
  );
}
