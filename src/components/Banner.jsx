'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

/* ===== Timeline (ms) ===== */
const CENTER_AT = 2400;
const SPLIT_AT = CENTER_AT + 1800;

/* ===== Rotating Badge Words ===== */
const badgeWords = [
  'PREMIUM UI SYSTEMS',
  'MOTION-DRIVEN UX',
  'PERFORMANCE-FIRST ENGINEERING',
  'CLEAN ARCHITECTURE',
];

/* ===== Socials with Icons ===== */
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mahadi17946',
    icon: <FaGithub className="w-4 h-4" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mahadi17946',
    icon: <FaLinkedinIn className="w-4 h-4" />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+8801881090417',
    icon: <FaWhatsapp className="w-4 h-4" />,
  },
];

const ease = [0.22, 1, 0.36, 1];

const Item = ({ i, show, className = '', children }) => (
  <motion.div
    layout="position"
    initial={{ opacity: 0, y: 80 }}
    animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
    transition={{
      opacity: { duration: 0.7, delay: i * 0.1 },
      y: { duration: 0.8, delay: i * 0.1, ease: 'easeOut' },
      layout: { duration: 0.9, ease },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const Banner = () => {
  const [phase, setPhase] = useState('welcome');
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('center'), CENTER_AT);
    const t2 = setTimeout(() => setPhase('split'), SPLIT_AT);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  /* Text rotation interval */
  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex(prev => (prev + 1) % badgeWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const show = phase !== 'welcome';
  const split = phase === 'split';

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-20"
    >
      {/* Background: Deep Blue Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-blue-700/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      {/* WELCOME SVG - Centered and Non-overlapping */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 z-0">
        <svg
          viewBox="0 0 1200 300"
          className="w-full max-w-[950px] drop-shadow-[0_0_14px_rgba(0,102,255,0.4)]"
          role="img"
          aria-label="Welcome"
          style={{
            animation: `welcomeOut 0.9s ease-in-out ${CENTER_AT}ms forwards`,
          }}
        >
          <text
            x="600"
            y="150"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="220"
            fontWeight="700"
            textLength="1100"
            lengthAdjust="spacingAndGlyphs"
            fill="#0055ff"
            fillOpacity="0"
            stroke="#0066ff"
            strokeWidth="3"
            strokeLinejoin="round"
            style={{
              fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
              strokeDasharray: 2200,
              strokeDashoffset: 2200,
              animation:
                'draw 2.2s ease forwards, fillIn 0.6s ease 1.7s forwards',
            }}
          >
            WELCOME
          </text>
        </svg>
      </div>

      {/* Main layout */}
      <div
        className={`relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 ${
          split ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'grid-cols-1'
        }`}
      >
        <div
          className={`flex flex-col gap-6 ${
            split
              ? 'items-center text-center lg:items-start lg:text-left'
              : 'items-center text-center'
          }`}
        >
          {/* Main Heading */}
          <Item i={0} show={show}>
            <h1 className="text-4xl pt-10 font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, it&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                Mahadi
              </span>
            </h1>
          </Item>

          <Item i={1} show={show}>
            <p className="text-base text-zinc-400 sm:text-lg max-w-xl">
              I'm a Frontend Developer. I build fast, responsive, and modern web
              experiences with clean code and thoughtful design.
            </p>
          </Item>

          {/* Animated Clean Single-Line Text */}
          <Item i={2} show={show}>
            <div className="relative h-6 min-w-[280px] sm:min-w-[340px] flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={badgeIndex}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="whitespace-nowrap text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-400"
                >
                  {badgeWords[badgeIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </Item>

          <Item i={3} show={show}>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                download
                className="rounded-full border border-blue-500/30 bg-blue-950/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900/30 hover:border-blue-400"
              >
                Download CV
              </a>
            </div>
          </Item>

          {/* Socials with Icons */}
          <Item i={4} show={show}>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-blue-500/40 bg-gradient-to-r from-blue-950/30 to-black px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(0,102,255,0.3)]"
                >
                  {s.icon}
                  {s.label} ↗
                </a>
              ))}
            </div>
          </Item>
        </div>

        {/* Right: Smaller Photo card */}
        {split && (
          <motion.div
            initial={{ opacity: 0, x: -260 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease }}
            className="relative mx-auto w-full max-w-[280px] lg:ml-auto"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-transparent blur-2xl" />
            <div className="absolute inset-0 rotate-6 rounded-[2rem] border border-blue-500/40 bg-blue-600/10" />

            <div className="relative rounded-[2rem] border border-blue-500/40 bg-[#060919] p-2 shadow-2xl shadow-blue-950/60">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/mahadi1.jpeg"
                  alt="Md Mahadi Hassan"
                  fill
                  priority
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Card bottom details */}
              <div className="px-3 py-3 text-left">
                <div className="text-sm font-semibold text-white">
                  Md Mahadi Hassan
                </div>
                <div className="text-[11px] text-blue-400 font-medium">
                  Frontend Developer
                </div>
              </div>
            </div>

            {/* Floating Top Left Badge: Open to work */}
            {/* <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-6 flex items-center gap-2 rounded-full border border-blue-400/40 bg-black/70 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to work
            </motion.div> */}

            {/* Floating Bottom Right Badge: Stack */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 bottom-15 rounded-xl border border-blue-400/40 bg-black/70 px-3 py-2 backdrop-blur-md"
            >
              <div className="font-mono text-[10px] text-blue-300">
                &lt;/&gt; Stack
              </div>
              <div className="text-xs font-semibold text-white">
                React &amp; Next.js
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute inset-x-0 bottom-12  flex justify-center"
      >
        <a
          href="#about"
          className="hidden lg:flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/20 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300 transition hover:border-white hover:text-white"
        >
          Scroll
          <span className="animate-bounce text-blue-400">↓</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Banner;
