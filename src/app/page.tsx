'use client';

import {
  ArrowRight,
  AtSign,
  BookOpen,
  Brain,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  FileText,
  Github,
  Hash,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Radio,
  Shield,
  ShoppingBag,
  Sparkles,
  Train,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import * as React from 'react';

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
    icon: Heart,
    color: 'from-red-400 to-pink-600',
  },
  {
    id: 3,
    name: 'Frost',
    client: 'Fintech Startup',
    description:
      'All-in-one money management: bills, spending insights, currency exchange.',
    role: 'Android lead developer',
    badge: '2x efficiency',
    icon: DollarSign,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 4,
    name: 'Health Folder',
    client: 'Teczka Pacjenta',
    description:
      'Medical records platform with AI test processing, categorization & analysis.',
    role: 'Full-stack implementation',
    badge: 'AI-powered',
    icon: FileText,
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 5,
    name: 'WP Poczta',
    client: 'Wirtualna Polska',
    description:
      'Email client with push notifications, offline access, and full mail functionality.',
    role: 'Core mobile developer',
    badge: 'Millions of users',
    icon: Mail,
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 6,
    name: 'Open FM',
    client: 'Wirtualna Polska',
    description:
      "Poland's biggest music platform with 2,000+ hours of music daily.",
    role: 'Mobile developer',
    badge: '100+ stations',
    icon: Radio,
    color: 'from-pink-400 to-rose-600',
  },
  {
    id: 7,
    name: '1login od WP',
    client: 'Wirtualna Polska',
    description:
      'Two-factor authentication app for securing WP account access.',
    role: 'Mobile implementation',
    badge: 'Security',
    icon: Shield,
    color: 'from-yellow-400 to-amber-600',
  },
  {
    id: 8,
    name: 'Poczta o2',
    client: 'Wirtualna Polska',
    description:
      'Free email app with push notifications and offline message access.',
    role: 'Mobile developer',
    badge: 'Email client',
    icon: AtSign,
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    id: 9,
    name: 'Super-Pharm',
    client: 'Future Mind',
    description:
      'Loyalty club & pharmacy e-commerce with virtual cards, coupons, rewards.',
    role: 'Android developer',
    badge: 'E-commerce',
    icon: ShoppingBag,
    color: 'from-green-400 to-green-600',
  },
  {
    id: 10,
    name: 'XKCD Explorer',
    client: 'Side Project',
    description:
      'Comic viewer app for browsing and exploring XKCD comics collection.',
    role: 'Solo developer',
    badge: 'Personal',
    icon: Hash,
    color: 'from-gray-400 to-gray-600',
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <main className='bg-cream text-charcoal'>
      {/* Compact Hero Section */}
      <section
        id='hero'
        className='bg-gradient-to-b from-cream-light to-[var(--color-cream)] py-12 md:py-16'
      >
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex-1 space-y-4'>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full text-xs font-medium text-forest shadow-sm'>
                <span>Builder</span>
                <span className='text-gray-400'>•</span>
                <span>Speaker</span>
                <span className='text-gray-400'>•</span>
                <span>Writer</span>
              </div>

              <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
                I Build Products <span className='text-forest'>That Ship</span>
              </h1>

              <p className='text-base text-gray-600 max-w-lg'>
                Mobile + AI builder who turns startup visions into working
                solutions. From Warsaw, working globally.
              </p>

              <div className='flex gap-3 pt-2'>
                <a
                  href='#contact'
                  className='inline-flex items-center gap-1.5 px-4 py-2 bg-forest text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-forest-600)] transition-colors'
                >
                  Let's Talk
                  <ArrowRight className='w-3.5 h-3.5' />
                </a>
                <a
                  href='#projects'
                  className='inline-flex items-center gap-1.5 px-4 py-2 bg-white text-forest text-sm font-semibold rounded-lg border border-forest hover:bg-gray-50 transition-colors'
                >
                  View Work
                </a>
              </div>
            </div>

            <div className='w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[var(--color-forest-200)] to-[var(--color-forest-400)] rounded-full shadow-lg'></div>
          </div>

          {/* Compact positioning statement */}
          <div className='mt-12 pt-8 border-t border-gray-200'>
            <p className='text-lg md:text-xl font-semibold text-center text-forest mb-3'>
              Code is just the artifact. Impact is what matters.
            </p>
            <p className='text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto'>
              For a decade, I built mobile apps - from national institutions to
              Poland's biggest media company. Now I focus on the full picture:
              product discovery, technical strategy, and execution. I'm the
              technical co-founder who thinks like a founder.
            </p>
          </div>
        </div>
      </section>

      {/* Compact Three Pillars */}
      <section className='bg-white py-12'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-2xl font-bold text-center mb-8'>What I Do</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-cream rounded-lg p-5'>
              <div className='flex items-center gap-3 mb-3'>
                <Brain className='w-5 h-5 text-forest' />
                <h3 className='font-bold'>Product Thinking</h3>
              </div>
              <p className='text-sm text-gray-600'>
                Turn vague ideas into concrete products. I ask the right
                questions and propose data-driven solutions focused on business
                outcomes.
              </p>
            </div>

            <div className='bg-cream rounded-lg p-5'>
              <div className='flex items-center gap-3 mb-3'>
                <Zap className='w-5 h-5 text-forest' />
                <h3 className='font-bold'>Fast Execution</h3>
              </div>
              <p className='text-sm text-gray-600'>
                2x delivery efficiency through smart simplifications. KMP
                expertise means shipping iOS + Android simultaneously.
              </p>
            </div>

            <div className='bg-cream rounded-lg p-5'>
              <div className='flex items-center gap-3 mb-3'>
                <Sparkles className='w-5 h-5 text-forest' />
                <h3 className='font-bold'>AI Integration</h3>
              </div>
              <p className='text-sm text-gray-600'>
                Practical AI implementation. From document processing saving
                110-190h/month to ML-powered mobile health apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id='projects' className='bg-cream py-12'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-2xl font-bold text-center mb-8'>Projects</h2>

          {/* Carousel Container */}
          <div className='relative'>
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow'
              aria-label='Previous projects'
            >
              <ChevronLeft className='w-5 h-5 text-forest' />
            </button>

            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow'
              aria-label='Next projects'
            >
              <ChevronRight className='w-5 h-5 text-forest' />
            </button>

            {/* Projects Cards */}
            <div className='overflow-hidden'>
              <div
                className='flex gap-5 transition-transform duration-300 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={project.id}
                      className='min-w-[calc(33.333%-14px)] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'
                    >
                      {/* Logo/Icon Header */}
                      <div
                        className={`h-24 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                      >
                        <Icon className='w-12 h-12 text-white/90' />
                      </div>

                      {/* Content */}
                      <div className='p-5'>
                        <div className='flex items-start justify-between mb-3'>
                          <h3 className='font-bold'>{project.name}</h3>
                          <span className='px-2 py-0.5 bg-[var(--color-forest-50)] text-forest text-xs font-semibold rounded'>
                            {project.badge}
                          </span>
                        </div>
                        <p className='text-xs text-gray-500 mb-2'>
                          {project.client} {project.date && `• ${project.date}`}
                        </p>
                        <p className='text-sm text-gray-600 mb-3'>
                          {project.description}
                        </p>
                        <p className='text-xs text-forest font-medium'>
                          {project.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className='flex justify-center gap-2 mt-6'>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === i
                      ? 'w-8 bg-forest'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile View: Show all projects vertically */}
          <div className='md:hidden grid gap-5 mt-8'>
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className='bg-white rounded-lg overflow-hidden shadow-sm'
                >
                  <div
                    className={`h-20 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <Icon className='w-10 h-10 text-white/90' />
                  </div>
                  <div className='p-4'>
                    <div className='flex items-start justify-between mb-2'>
                      <h3 className='font-bold text-sm'>{project.name}</h3>
                      <span className='px-2 py-0.5 bg-[var(--color-forest-50)] text-forest text-xs font-semibold rounded'>
                        {project.badge}
                      </span>
                    </div>
                    <p className='text-xs text-gray-500 mb-2'>
                      {project.client} {project.date && `• ${project.date}`}
                    </p>
                    <p className='text-xs text-gray-600 mb-2'>
                      {project.description}
                    </p>
                    <p className='text-xs text-forest font-medium'>
                      {project.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Combined Writing & Speaking + Background */}
      <section className='bg-white py-12'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Left: Writing & Speaking */}
            <div>
              <h2 className='text-2xl font-bold mb-6'>Knowledge Sharing</h2>

              <div className='space-y-6'>
                <div>
                  <div className='flex items-center gap-2 mb-3'>
                    <BookOpen className='w-4 h-4 text-forest' />
                    <h3 className='font-semibold'>Recent Writing</h3>
                    <span className='ml-auto px-2 py-0.5 bg-[var(--color-forest-50)] text-forest text-xs rounded'>
                      Medium
                    </span>
                  </div>
                  <ul className='space-y-2 text-sm'>
                    <li className='text-gray-600'>
                      • From Mockup to Mobile in Minutes: AI Prototyping (2024)
                    </li>
                    <li className='text-gray-600'>
                      • Fastlane + KMM: CI/CD for Cross-Platform (2024)
                    </li>
                    <li className='text-gray-600'>
                      • T stands for testing: Mobile testing guide series
                    </li>
                  </ul>
                </div>

                <div>
                  <div className='flex items-center gap-2 mb-3'>
                    <MessageSquare className='w-4 h-4 text-forest' />
                    <h3 className='font-semibold'>Speaking</h3>
                  </div>
                  <div className='bg-[var(--color-forest-50)] rounded-lg p-3 mb-3'>
                    <p className='font-medium text-sm'>
                      Claude Code Without Hype - Just Practical
                    </p>
                    <p className='text-xs text-gray-600 mt-1'>
                      2025 Webinar on practical agentic coding
                    </p>
                  </div>
                  <p className='text-sm text-gray-600 italic'>
                    "Beyond the hype, focused on what actually works."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Background */}
            <div>
              <h2 className='text-2xl font-bold mb-6'>Journey</h2>

              <div className='space-y-4'>
                <div className='flex gap-3'>
                  <div className='w-2 h-2 bg-forest rounded-full mt-1.5 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-sm'>
                      Now: AI/LLM Product Builder
                    </p>
                    <p className='text-xs text-gray-600'>
                      Speaker, writer, startup advisor
                    </p>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <div className='w-2 h-2 bg-forest rounded-full mt-1.5 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-sm'>
                      2022-25: Startup Focus
                    </p>
                    <p className='text-xs text-gray-600'>
                      CardiaPath, Frost, Lockus - E2E ownership
                    </p>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <div className='w-2 h-2 bg-forest rounded-full mt-1.5 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-sm'>
                      Before: Scale & Enterprise
                    </p>
                    <p className='text-xs text-gray-600'>
                      Wirtualna Polska, Future Mind, National Institute
                    </p>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <div className='w-2 h-2 bg-forest rounded-full mt-1.5 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-sm'>
                      Foundation: Mathematics
                    </p>
                    <p className='text-xs text-gray-600'>
                      Analytical thinking shapes technical approach
                    </p>
                  </div>
                </div>

                <div className='mt-6 pt-4 border-t border-gray-200'>
                  <p className='font-semibold text-sm mb-2'>Core Skills</p>
                  <div className='flex flex-wrap gap-1.5'>
                    {[
                      'Kotlin Multiplatform',
                      'Mobile (iOS/Android)',
                      'AI/ML',
                      'Product Strategy',
                      'React/Next.js',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className='px-2 py-0.5 bg-[var(--color-forest-50)] text-forest text-xs rounded'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Approach - Inline */}
          <div className='mt-12 pt-8 border-t border-gray-200'>
            <h3 className='text-lg font-bold mb-3'>My Approach</h3>
            <p className='text-sm text-gray-600 leading-relaxed'>
              I'm the "move fast" type who loves simple solutions. Direct client
              collaboration, product discovery participation, and outcome
              ownership - not just task completion. 5 years remote from Warsaw,
              comfortable across time zones. Sweet spot: early-stage products
              where I can wear multiple hats.
            </p>
          </div>
        </div>
      </section>

      {/* Compact Contact Section */}
      <section
        id='contact'
        className='bg-gradient-to-b from-cream to-white py-12'
      >
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-2xl font-bold mb-3'>Let's Build Something</h2>
          <p className='text-sm text-gray-600 mb-8'>
            Looking for a technical co-founder? Need someone to own your mobile
            + AI product?
          </p>

          <div className='flex flex-wrap justify-center gap-4 mb-6'>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
            >
              <Linkedin className='w-4 h-4 text-forest' />
              <span className='text-sm font-medium'>LinkedIn</span>
            </a>

            <a
              href='mailto:hello@example.com'
              className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
            >
              <Mail className='w-4 h-4 text-forest' />
              <span className='text-sm font-medium'>Email</span>
            </a>

            <a
              href='https://medium.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
            >
              <BookOpen className='w-4 h-4 text-forest' />
              <span className='text-sm font-medium'>Medium</span>
            </a>

            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
            >
              <Github className='w-4 h-4 text-forest' />
              <span className='text-sm font-medium'>GitHub</span>
            </a>
          </div>

          <div className='flex items-center justify-center gap-1.5 text-sm text-gray-600'>
            <MapPin className='w-3.5 h-3.5' />
            <span>Warsaw 🇵🇱 | Global 🌍</span>
          </div>
        </div>
      </section>
    </main>
  );
}
