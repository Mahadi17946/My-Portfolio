'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import Logo from './Logo';

const ease = [0.22, 1, 0.36, 1];

/* ===== Replace with your own details ===== */
const EMAIL = 'rabby17946@gmail.com';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mahadi17946',
    Icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mahadi17946',
    Icon: FaLinkedinIn,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801881090417',
    Icon: FaWhatsapp,
  },
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    Icon: FiMail,
  },
];

const Reveal = ({ delay = 0, y = 30, className = '', children }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black px-6 pt-16 pb-8 sm:px-8 md:pt-20">
      {/* Top glowing divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[90px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ===== Link columns ===== */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <Reveal>
            <Link href="/#home" className="inline-block text-white">
              <Logo variant="full" className="h-10 sm:h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Frontend developer building modern, responsive and user-friendly
              web applications with React and Next.js.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to work
            </span>
          </Reveal>

          {/* Navigate */}
          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Connect */}
          <Reveal delay={0.2}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel="noreferrer"
                    className="group flex w-fit items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition-all duration-300 group-hover:border-blue-500/60 group-hover:text-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <Icon size={14} />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="relative z-10 mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row text-center sm:text-left">
          <p className="text-xs text-zinc-500">
            © {year} Md Mahadi Hassan. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
            Built with Next.js · Tailwind · Framer Motion
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-blue-500/60 hover:text-white"
          >
            Back to top
            <FiArrowUp
              size={14}
              className="text-blue-400 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
