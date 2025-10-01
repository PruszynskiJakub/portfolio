'use client';

import {
  Award,
  BookMarked,
  Bot,
  Brain,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Coffee,
  ExternalLink,
  Github,
  GraduationCap,
  Hash,
  Layers,
  LineChart,
  Linkedin,
  Mail,
  Presentation,
  Shield,
  Sparkles,
  Train,
  Users,
  Youtube,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

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
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <main className='bg-cream text-charcoal'>
      {/* Refined Split Hero - More Compact */}
      <section className='min-h-[70vh] relative'>
        <div className='absolute inset-0 grid grid-cols-2'>
          {/* Left Side - Builder */}
          <div className='bg-gradient-to-br from-[var(--color-forest-50)] via-cream to-white relative overflow-hidden'>
            <div className='absolute top-10 -left-10 w-40 h-40 bg-[var(--color-forest-100)] rounded-full blur-3xl opacity-20'></div>
          </div>

          {/* Right Side - Creative */}
          <div className='bg-gradient-to-bl from-[#FFE8D6] via-[#FFF5EE] to-white relative overflow-hidden'>
            <div className='absolute bottom-10 -right-10 w-40 h-40 bg-[#FFD4B3] rounded-full blur-3xl opacity-20'></div>
          </div>
        </div>

        <div className='relative z-10 min-h-[70vh] flex items-center'>
          <div className='w-full'>
            <div className='grid grid-cols-2'>
              {/* Left Side Content */}
              <div className='px-8 lg:px-16 py-12 text-left'>
                <div className='mb-4'>
                  <Code2 className='w-6 h-6 text-forest mb-2' />
                  <span className='text-xs font-mono text-forest'>
                    ENGINEER
                  </span>
                </div>
                <h1 className='text-3xl lg:text-4xl font-bold mb-4 leading-tight'>
                  Mobile +<br />
                  <span className='text-forest'>AI Builder</span>
                </h1>
                <p className='text-sm text-gray-600 mb-6 max-w-xs'>
                  I transform complex problems into elegant solutions. KMP, ML,
                  and products that matter.
                </p>
              </div>

              {/* Right Side Content */}
              <div className='px-8 lg:px-16 py-12 text-right'>
                <div className='mb-4 flex justify-end'>
                  <Layers className='w-6 h-6 text-[#FF8C69] mb-2' />
                </div>
                <span className='text-xs font-mono text-[#FF8C69]'>
                  ARCHITECT
                </span>
                <h1 className='text-3xl lg:text-4xl font-bold mb-4 leading-tight mt-4'>
                  Product
                  <br />
                  <span className='text-[#FF8C69]'>Thinker</span>
                </h1>
                <p className='text-sm text-gray-600 mb-6 max-w-xs ml-auto'>
                  Beyond code. Strategy, discovery, and execution with business
                  impact in mind.
                </p>
              </div>
            </div>

            {/* Center Profile - Smaller */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='relative'>
                <div className='w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[var(--color-forest-400)] to-[#FF8C69] p-0.5'>
                  <div className='w-full h-full rounded-full bg-cream flex items-center justify-center'>
                    <Coffee className='w-10 h-10 lg:w-12 lg:h-12 text-forest/80' />
                  </div>
                </div>
                <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap'>
                  <p className='text-xs font-medium'>Jakub Pruszyński</p>
                  <p className='text-xs text-gray-500 text-center'>Warsaw 🇵🇱</p>
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
            Code is just the <span className='text-forest'>artifact</span>.
            Impact is what <span className='text-[#FF8C69]'>matters</span>.
          </h2>
          <p className='mt-4 text-sm text-gray-600 max-w-xl mx-auto'>
            A decade of building mobile apps for enterprises and startups. Now
            focused on the full picture: product discovery, technical strategy,
            and execution.
          </p>
        </div>
      </section>

      {/* Three Pillars - Compact Cards */}
      <section className='py-12 bg-gradient-to-b from-white to-cream'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold'>What I Do</h2>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {/* Card 1 */}
            <div className='bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow'>
              <div className='w-10 h-10 bg-[var(--color-forest-50)] rounded-lg flex items-center justify-center mb-4'>
                <Brain className='w-5 h-5 text-forest' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>Product Thinking</h3>
              <p className='text-sm text-gray-600'>
                Turn vague ideas into concrete products. Data-driven solutions
                focused on business outcomes.
              </p>
            </div>

            {/* Card 2 */}
            <div className='bg-gradient-to-br from-[#FFF5EE] to-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow'>
              <div className='w-10 h-10 bg-[#FFD4B3]/30 rounded-lg flex items-center justify-center mb-4'>
                <Zap className='w-5 h-5 text-[#FF8C69]' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>Fast Execution</h3>
              <p className='text-sm text-gray-600'>
                2x delivery efficiency. KMP expertise for simultaneous iOS +
                Android shipping.
              </p>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow'>
              <div className='w-10 h-10 bg-[var(--color-forest-50)] rounded-lg flex items-center justify-center mb-4'>
                <Sparkles className='w-5 h-5 text-forest' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>AI Integration</h3>
              <p className='text-sm text-gray-600'>
                Practical AI implementation. From document processing to
                ML-powered mobile apps.
              </p>
            </div>
          </div>

          {/* Metrics Row */}
          <div className='flex justify-center gap-8 mt-8 pt-8 border-t border-gray-200'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-forest'>110-190h</p>
              <p className='text-xs text-gray-500'>Monthly hours saved</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-forest'>2x</p>
              <p className='text-xs text-gray-500'>Delivery efficiency</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-forest'>10+</p>
              <p className='text-xs text-gray-500'>Years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section - Teaching & Sharing */}
      <section className='py-12 bg-white'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold'>Initiatives</h2>
            <p className='text-sm text-gray-600 mt-2'>
              Sharing knowledge and building community
            </p>
          </div>

          <div className='max-w-3xl mx-auto space-y-3'>
            {/* YouTube/Speaking items */}
            <a
              href='https://www.youtube.com/watch?v=Gp6FVfMknYQ&t=2s'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
            >
              <div className='w-7 h-7 bg-red-50 rounded flex items-center justify-center flex-shrink-0'>
                <Youtube className='w-4 h-4 text-red-600' />
              </div>
              <div className='flex-1'>
                <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                  Claude Code Without Hype - Just Practically
                </h4>
                <p className='text-xs text-gray-600'>
                  Webinar on practical AI coding techniques
                </p>
              </div>
              <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
            </a>

            <a
              href='https://www.youtube.com/watch?v=l1ANxjUhxKU&pp=0gcJCfsJAYcqIYzv'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group'
            >
              <div className='w-7 h-7 bg-red-50 rounded flex items-center justify-center flex-shrink-0'>
                <Youtube className='w-4 h-4 text-red-600' />
              </div>
              <div className='flex-1'>
                <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                  Pragmatic Talks: AI Agents - How They Work
                </h4>
                <p className='text-xs text-gray-600'>
                  Guest speaker on AI architecture
                </p>
              </div>
              <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
            </a>

            {/* Blog/Community */}
            <a
              href='https://programujz.ai'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 p-3 bg-gradient-to-r from-[var(--color-forest-50)] to-white rounded-lg hover:shadow-md transition-all group'
            >
              <div className='w-7 h-7 bg-[var(--color-forest-100)] rounded flex items-center justify-center flex-shrink-0'>
                <Users className='w-4 h-4 text-forest' />
              </div>
              <div className='flex-1'>
                <h4 className='text-sm font-semibold text-charcoal group-hover:text-forest transition-colors'>
                  Blog programujz.ai
                </h4>
                <p className='text-xs text-gray-600'>
                  Co-leading AI development blog and resources
                </p>
              </div>
              <ExternalLink className='w-3 h-3 text-gray-400 group-hover:text-forest transition-colors flex-shrink-0' />
            </a>

            {/* Workshop */}
            <div className='flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg'>
              <div className='w-7 h-7 bg-[#FFD4B3]/30 rounded flex items-center justify-center flex-shrink-0'>
                <Presentation className='w-4 h-4 text-[#FF8C69]' />
              </div>
              <div className='flex-1'>
                <h4 className='text-sm font-semibold text-charcoal'>
                  Open Workshops on Programming with AI
                </h4>
                <p className='text-xs text-gray-600'>
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
              </>
            )}

            {/* Show more/less button */}
            <button
              onClick={() => setShowAllInitiatives(!showAllInitiatives)}
              className='w-full py-2 text-sm text-forest hover:text-[var(--color-forest-600)] transition-colors flex items-center justify-center gap-2'
            >
              {showAllInitiatives ? 'Show less' : 'Show more'}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAllInitiatives ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section - Compact and Professional */}
      <section className='py-12 bg-gradient-to-b from-white to-cream'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold'>Certifications</h2>
            <p className='text-sm text-gray-600 mt-2'>
              Continuous learning in AI, security, and automation
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* AI Product Heroes - In Progress */}
            <div className='bg-gradient-to-br from-[#F0F4FF] to-white rounded-lg p-4 border-2 border-dashed border-[#6366F1]/30 relative'>
              <div className='absolute top-2 right-2 px-1.5 py-0.5 bg-[#6366F1] text-white text-xs rounded-full text-[10px] font-medium'>
                In Progress
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 bg-[#6366F1]/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Award className='w-4 h-4 text-[#6366F1]' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    AI Product Heroes
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    Product-focused AI development
                  </p>
                  <p className='text-xs text-[#6366F1] mt-1'>October 2025</p>
                </div>
              </div>
            </div>

            {/* AI_devs 3 Agents */}
            <div className='bg-gradient-to-br from-[#FFF5EE] to-white rounded-lg p-4 border border-[#FFD4B3]/30'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 bg-[#FFD4B3]/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Sparkles className='w-4 h-4 text-[#FF8C69]' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    AI_devs 3 Agents
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    Building AI Agents
                  </p>
                  <p className='text-xs text-[#FF8C69] mt-1'>October 2024</p>
                </div>
              </div>
            </div>

            {/* Zautomatyzowani */}
            <div className='bg-gradient-to-br from-[var(--color-forest-50)] to-white rounded-lg p-4 border border-[var(--color-forest-100)]'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 bg-[var(--color-forest-100)] rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Bot className='w-4 h-4 text-forest' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    Zautomatyzowani
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    Automation tools, process & RPA
                  </p>
                  <p className='text-xs text-forest mt-1'>October 2024</p>
                </div>
              </div>
            </div>

            {/* AI Devs 2 */}
            <div className='bg-gradient-to-br from-[#FFF5EE] to-white rounded-lg p-4 border border-[#FFD4B3]/30'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 bg-[#FFD4B3]/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Brain className='w-4 h-4 text-[#FF8C69]' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    AI Devs 2
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    Building AI Applications
                  </p>
                  <p className='text-xs text-[#FF8C69] mt-1'>June 2024</p>
                </div>
              </div>
            </div>

            {/* Android Mobile Security */}
            <div className='bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Shield className='w-4 h-4 text-gray-600' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    Android Mobile Security
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    Niebezpiecznik.pl
                  </p>
                  <p className='text-xs text-gray-500 mt-1'>May 2024</p>
                </div>
              </div>
            </div>

            {/* Machine Learning Specialization */}
            <div className='bg-gradient-to-br from-[var(--color-forest-50)] to-white rounded-lg p-4 border border-[var(--color-forest-100)]'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 bg-[var(--color-forest-100)] rounded-lg flex items-center justify-center flex-shrink-0'>
                  <GraduationCap className='w-4 h-4 text-forest' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-charcoal'>
                    Machine Learning Specialization
                  </h4>
                  <p className='text-xs text-gray-600 mt-0.5'>
                    DeepLearning.AI
                  </p>
                  <p className='text-xs text-forest mt-1'>February 2024</p>
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
            <h2 className='text-2xl font-semibold'>Built Products</h2>
            <div className='flex gap-2'>
              <button
                onClick={prevSlide}
                className='p-1.5 rounded-full hover:bg-gray-100 transition-colors'
                aria-label='Previous projects'
              >
                <ChevronLeft className='w-4 h-4' />
              </button>
              <button
                onClick={nextSlide}
                className='p-1.5 rounded-full hover:bg-gray-100 transition-colors'
                aria-label='Next projects'
              >
                <ChevronRight className='w-4 h-4' />
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

      {/* Contact - Simple and Humble */}
      <section id='contact' className='py-12 bg-white'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
          <h2 className='text-2xl font-semibold mb-3'>Let's Connect</h2>
          <p className='text-sm text-gray-600 mb-8'>
            Open to interesting projects and collaborations.
          </p>

          <div className='flex justify-center gap-4'>
            <a
              href='https://www.linkedin.com/in/jpruszynski'
              className='flex items-center gap-2 px-4 py-2 bg-[var(--color-forest-50)] rounded-lg hover:bg-[var(--color-forest-100)] transition-colors'
            >
              <Linkedin className='w-4 h-4 text-forest' />
              <span className='text-sm'>LinkedIn</span>
            </a>

            <a
              href='mailto:jakub.mikolaj.pruszynski@gmail.com'
              className='flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
            >
              <Mail className='w-4 h-4 text-gray-600' />
              <span className='text-sm'>Email</span>
            </a>

            <a
              href='https://github.com/PruszynskiJakub'
              className='flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
            >
              <Github className='w-4 h-4 text-gray-600' />
              <span className='text-sm'>GitHub</span>
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
