'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiMail } from 'react-icons/fi';

import realEstate1 from '../../public/Realstate.png';
import heaven from '../../public/Heaven_Furniture.png';
import agency from '../../public/Agenc_landingpage.png';
import saas from '../../public/saas.png';
import coffee from '../../public/Coffieshope_landingpage.png';
import realEstate2 from '../../public/Real_state2.png';

const ease = [0.22, 1, 0.36, 1];

const EMAIL = 'rabby17946@gmail.com';

/* Prothome koyta project dekhabe */
const INITIAL_COUNT = 3;

/* ===== Project data ===== */
const projects = [
  {
    id: 'heaven-furniture-mart',
    title: 'Heaven Furniture Mart',
    type: 'Business Website',
    description:
      'A website for a bespoke furniture and interior styling house in Chattogram. It showcases the collections, the custom-order service and the brand story, and lets customers reach out instantly over WhatsApp.',
    features: [
      'Collections for living, bedroom, dining and office furniture',
      'Bespoke order section with free design consultation',
      'Direct WhatsApp and call contact for quick inquiries',
    ],
    tech: ['Next.js'],
    image: heaven,
    live: 'https://heaven-furniture-mart-mu.vercel.app/',
    github: 'https://github.com/Mahadi17946/Heaven-Furniture-mart',
  },
  {
    id: 'agency',
    title: 'Agency Landing Page',
    type: 'Landing Page',
    description:
      'A landing page for a digital agency, built to introduce its services and turn visitors into leads.',
    features: [],
    tech: ['React.js'],
    image: agency,
    live: 'https://mahadi17946.vercel.app/',
    github: 'https://github.com/Mahadi17946/Figma-Project',
  },
  {
    id: 'scopeguard',
    title: 'ScopeGuard',
    type: 'SaaS Web App',
    description:
      "A tool for freelancers that turns a client's new request into an evidence-backed change request. It checks the request against the original agreement, helps price the extra work and drafts the reply.",
    features: [
      'Quotes exact clauses from the contract instead of guessing',
      'Smart pricing for extra work outside the original scope',
      'Interactive demo with a ready-to-send client reply',
    ],
    tech: ['Next.js'],
    image: saas,
    live: 'https://scope-guard-orcin.vercel.app/',
    github: 'https://github.com/Mahadi17946/ScopeGuard',
  },
  {
    id: 'star-homes',
    title: 'Star Homes',
    type: 'Real Estate Website',
    description:
      'A modern real estate website designed to showcase properties with a clean, easy-to-browse layout.',
    features: [],
    tech: ['Next.js'],
    image: realEstate1,
    live: 'https://real-estate-website-delta-red.vercel.app/',
    github: 'https://github.com/Mahadi17946/Real-Estate-Website',
  },
  {
    id: 'caffeine-coffee',
    title: 'Caffeine Coffee',
    type: 'Landing Page',
    description:
      'A landing page for a coffee shop, designed around its menu and brand feel.',
    features: [],
    tech: ['Next.js'],
    image: coffee,
    live: 'https://caffeine-coffee-git-master-mahadi-17946.vercel.app/',
    github: 'https://github.com/Mahadi17946/Caffeine-Coffee',
  },
  {
    id: 'greendoors',
    title: 'GreenDoors',
    type: 'Real Estate Website',
    description:
      'A real estate website focused on a fresh look and a smooth property browsing experience.',
    features: [],
    tech: ['Next.js'],
    image: realEstate2,
    live: 'https://greendoors.vercel.app/',
    github: 'https://github.com/Mahadi17946/GreenDoors',
  },
];

const Reveal = ({ delay = 0, x = 0, y = 40, className = '', children }) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

const hostOf = url => {
  try {
    return new URL(url).host;
  } catch {
    return 'preview';
  }
};

/* ===== Browser mockup (screenshot) ===== */
const Mockup = ({ p }) => {
  const Tag = p.live ? 'a' : 'div';
  const linkProps = p.live
    ? { href: p.live, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <Tag {...linkProps} className="group relative block">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#050a1c] shadow-xl shadow-blue-950/30">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-500/70" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-500/70" />
          <div className="ml-2 min-w-0 flex-1 truncate rounded-md border border-white/10 bg-black/40 px-2.5 py-0.5 font-mono text-[10px] text-zinc-500">
            {p.live ? hostOf(p.live) : 'coming soon'}
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-950 to-black">
          <Image
            src={p.image}
            alt={p.title}
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {p.live && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black">
                Live Preview <FiArrowUpRight size={16} />
              </span>
            </div>
          )}
        </div>
      </div>
    </Tag>
  );
};

const TypeRow = ({ p }) => (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300">
      {p.type}
    </span>
    {p.live && (
      <span className="flex items-center gap-2 text-xs text-zinc-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Live
      </span>
    )}
  </div>
);

const TechChips = ({ p }) =>
  p.tech.length > 0 && (
    <div className="flex flex-wrap gap-2">
      {p.tech.map(t => (
        <span
          key={t}
          className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-blue-500/50 hover:text-white"
        >
          {t}
        </span>
      ))}
    </div>
  );

const Actions = ({ p, small = false }) => {
  const size = small
    ? 'px-4 py-2.5 text-xs sm:px-5'
    : 'px-5 py-3 text-sm sm:px-6';
  return (
    <div className="flex flex-wrap gap-3">
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:flex-none ${size}`}
        >
          Live Demo <FiArrowUpRight size={15} />
        </a>
      )}
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-blue-500/30 font-semibold text-white transition hover:border-blue-500/60 sm:flex-none ${size}`}
        >
          <FiGithub size={15} /> Source Code
        </a>
      )}
    </div>
  );
};

/* ===== Boro featured card (prothom project) ===== */
const FeaturedCard = ({ p }) => (
  <Reveal>
    <div className="grid items-center gap-6 rounded-3xl border border-white/10 bg-transparent p-4 transition-colors duration-500 hover:border-blue-500/40 sm:gap-8 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:p-8">
      <Mockup p={p} />

      <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
        <TypeRow p={p} />
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {p.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
          {p.description}
        </p>

        {p.features.length > 0 && (
          <ul className="space-y-2.5">
            {p.features.map(f => (
              <li
                key={f}
                className="flex items-start gap-3 text-sm text-zinc-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <TechChips p={p} />
        <Actions p={p} />
      </div>
    </div>
  </Reveal>
);

/* ===== Chhoto card ===== */
const SmallCard = ({ p, delay = 0, animateOnScroll = true }) => {
  const card = (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-transparent p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] sm:gap-5 sm:p-5">
      <Mockup p={p} />
      <div className="flex flex-1 flex-col gap-3 sm:gap-4">
        <TypeRow p={p} />
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {p.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {p.description}
        </p>
        <TechChips p={p} />
        <div className="mt-auto pt-1">
          <Actions p={p} small />
        </div>
      </div>
    </div>
  );

  if (animateOnScroll) {
    return <Reveal delay={delay}>{card}</Reveal>;
  }

  /* "See more" e khulle ek ek kore slide hoye ashbe */
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {card}
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const anchorRef = useRef(null);

  const featured = projects[0];
  const firstRow = projects.slice(1, INITIAL_COUNT);
  const extra = projects.slice(INITIAL_COUNT);

  const toggle = () => {
    const opening = !showAll;
    setShowAll(opening);

    // Layout bodlano shesh hole screen-ke button / notun project-er sathe nao
    setTimeout(() => {
      const el = anchorRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const target = opening
        ? top - 90 // notun project gulo navbar-er thik niche
        : top - window.innerHeight * 0.5; // button screen-er majhkhane
      window.scrollTo({ top: Math.max(target, 0), behavior: 'smooth' });
    }, 60);
  };

  return (
    <section
      id="projects"
      // Browser-er scroll anchoring bondho, noile button jaygay atke thake
      className="relative overflow-hidden bg-black px-4 py-20 [overflow-anchor:none] sm:px-6 sm:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-[460px] w-[460px] rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm">
              Projects
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected work that<br/>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                actually ships
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-6">
          <FeaturedCard p={featured} />

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {firstRow.map((p, i) => (
              <SmallCard key={p.id} p={p} delay={0.1 * i} />
            ))}
          </div>
        </div>

        {/* Extra projects: first row-er thik niche, button-er upore */}
        <div ref={anchorRef}>
          <AnimatePresence initial={false}>
            {showAll && extra.length > 0 && (
              <motion.div
                key="extra"
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2"
              >
                {extra.map((p, i) => (
                  <SmallCard
                    key={p.id}
                    p={p}
                    delay={0.12 * i}
                    animateOnScroll={false}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* See more / See less */}
        {extra.length > 0 && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              onClick={toggle}
              className="group flex items-center gap-3 rounded-full border border-blue-500/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-500/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              {showAll ? 'See Less' : 'See More'}
              <span
                className={`text-blue-400 transition-transform duration-300 ${
                  showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`}
              >
                ↓
              </span>
            </button>
          </div>
        )}

        {/* ===== CTA card ===== */}
        <Reveal className="mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 p-6 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/15 blur-[80px]" />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-500 sm:text-xs">
                  Let&apos;s work together
                </p>
                <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-white sm:mt-4 sm:text-3xl lg:text-4xl">
                  Have a project in mind? <br/>
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Let&apos;s build it.
                  </span>
                </h2>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Let&apos;s talk <FiArrowUpRight size={16} />
                </Link>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-blue-500/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-blue-500/60"
                >
                  <FiMail size={16} /> Email me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
