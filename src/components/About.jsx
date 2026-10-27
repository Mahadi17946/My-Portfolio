'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FaReact, FaBootstrap, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FiX, FiMaximize2 } from 'react-icons/fi';

import racdoxCert from '../../public/RACDOX_Hackathon.png';
import bupCert from '../../public/BUP_Hackethon.png';

const ease = [0.22, 1, 0.36, 1];

const Reveal = ({ delay = 0, x = 0, y = 40, className = '', children }) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Text-er moddhe important shobdo highlight korar jonno */
const Hl = ({ children }) => (
  <span className="font-medium text-white">{children}</span>
);

const story = [
  {
    no: '01',
    label: 'Who I am',
    body: (
      <>
        I&apos;m <Hl>Mahadi Hassan</Hl>, a{' '}
        <Hl>Computer Science and Engineering</Hl> student at{' '}
        <Hl>Southeast University</Hl> and a <Hl>Frontend Developer</Hl>{' '}
        passionate about building modern, responsive, and user-friendly web
        applications.
      </>
    ),
  },
  {
    no: '02',
    label: 'What I build',
    body: (
      <>
        I work with <Hl>React</Hl>, <Hl>Next.js</Hl>, <Hl>JavaScript</Hl>,{' '}
        <Hl>TypeScript</Hl>, and <Hl>Tailwind CSS</Hl> to create clean
        interfaces and smooth user experiences. I enjoy turning ideas into
        functional web applications, solving problems, and exploring better ways
        to build for the web.
      </>
    ),
  },
  {
    no: '03',
    label: "Where I'm heading",
    body: (
      <>
        Alongside my academic journey, I&apos;m continuously improving my
        development skills through <Hl>hands-on projects</Hl>,{' '}
        <Hl>hackathons</Hl> and exploring <Hl>backend technologies</Hl> to
        expand my knowledge of <Hl>full-stack development</Hl>. I also use{' '}
        <Hl>AI tools</Hl> thoughtfully to streamline my workflow and approach
        development challenges more efficiently.
      </>
    ),
  },
];

const pillars = [
  {
    no: '01',
    title: 'Modern & Responsive',
    text: 'Interfaces that look and feel right on every screen size.',
  },
  {
    no: '02',
    title: 'Clean Code',
    text: 'Readable, reusable React and Next.js components.',
  },
  {
    no: '03',
    title: 'Problem Solving',
    text: 'Turning ideas into working apps, one problem at a time.',
  },
  {
    no: '04',
    title: 'Always Learning',
    text: 'Growing towards full-stack, with AI tools as a smart helper.',
  },
];

/* ===== Hackathons ===== */
const hackathons = [
  {
    id: 'racdox',
    name: 'RACDOX Hackathon',
    role: 'Participant',
    date: 'Sep 15, 2026',
    image: racdoxCert,
    accent: '#ef4444',
  },
  {
    id: 'bup',
    name: 'BUP CSE FEST 26 Hackathon',
    role: 'Preliminary Round · Team Infinity Loop SEU',
    date: 'Sep 27, 2026',
    image: bupCert,
    accent: '#3b82f6',
  },
];

/* Icon + brand color shoho tech list */
const techs = [
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React.js', Icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#9B6CF0' },
  { name: 'CSS', Icon: FaCss3Alt, color: '#2D8CFF' },
  { name: 'HTML', Icon: FaHtml5, color: '#F26B3A' },
  { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
];

const idRows = [
  { k: 'Role', v: 'Frontend Developer' },
  { k: 'Studying', v: 'CSE, Southeast University' },
  { k: 'Focus', v: 'Modern, responsive web apps' },
  { k: 'Hackathons', v: '2 completed' },
];

const About = () => {
  const timelineRef = useRef(null);
  const [openCert, setOpenCert] = useState(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 60%'],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
  });

  /* Lightbox: Esc chaple bondho, khola thakle page scroll bondho */
  useEffect(() => {
    if (!openCert) return;
    const onKey = e => e.key === 'Escape' && setOpenCert(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openCert]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-4 pb-16 pt-24 sm:px-6"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ===== Header ===== */}
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm">
            About Me
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turning ideas into responsive &amp;{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              engaging web applications
            </span>
          </h2>
        </Reveal>

        {/* ===== Main: ID card + Timeline ===== */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[360px_1fr] lg:gap-16">
          {/* LEFT: sticky developer ID card */}
          <Reveal x={-60} y={0} className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl p-px">
              <div className="relative rounded-[calc(1.5rem-1px)] border-2 border-blue-500/50 bg-transparent p-5 shadow-[0_0_24px_rgba(59,130,246,0.25)] backdrop-blur-md sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                    Developer ID
                  </span>
                  <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium text-white">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Open to work
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Md. Mahadi Hassan
                  </h3>
                  <p className="mt-1 text-sm text-blue-400">
                    Frontend Developer
                  </p>
                </div>

                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {idRows.map(row => (
                    <div
                      key={row.k}
                      className="flex items-start justify-between gap-4 py-3"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                        {row.k}
                      </span>
                      <span className="text-right text-sm text-zinc-200">
                        {row.v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(t => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="flex-1 rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                  >
                    Contact
                  </Link>
                  <a
                    href="/cv.pdf"
                    download
                    className="flex-1 rounded-full border border-blue-500/30 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-blue-500/60"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: scroll-driven timeline */}
          <div ref={timelineRef} className="relative min-w-0">
            <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-white/10" />
            <motion.div
              style={{ scaleY: lineScale, originY: 0 }}
              className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-blue-400 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            />

            <div className="space-y-12 sm:space-y-14">
              {story.map(item => (
                <Reveal key={item.no}>
                  <div className="relative pl-14 sm:pl-16">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/50 bg-[#050a1c] font-mono text-xs font-semibold text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.35)]">
                      {item.no}
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
                      {item.label}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Hackathons (compact) ===== */}
        <div className="mt-12 sm:mt-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
                Hackathons
              </p>
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                2 completed
              </span>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {hackathons.map((h, i) => (
              <Reveal key={h.id} delay={0.08 * i}>
                <button
                  type="button"
                  onClick={() => setOpenCert(h)}
                  aria-label={`View ${h.name} certificate`}
                  style={{ '--c': `${h.accent}66` }}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-transparent p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--c)] hover:shadow-[0_0_28px_var(--c)]"
                >
                  <span className="relative block aspect-[1.414/1] w-24 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white sm:w-28">
                    <Image
                      src={h.image}
                      alt={`${h.name} certificate`}
                      fill
                      placeholder="blur"
                      sizes="112px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-snug text-white sm:text-base">
                      {h.name}
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-xs text-zinc-400">
                      {h.role}
                    </span>
                    <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {h.date}
                    </span>
                  </span>

                  <FiMaximize2
                    size={16}
                    className="shrink-0 text-zinc-600 transition-colors duration-300 group-hover:text-white"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===== Pillars ===== */}
        <div className="mt-20 grid gap-4 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.no} delay={0.08 * i}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-300 group-hover:bg-blue-500/25" />
                <span className="font-mono text-3xl font-semibold text-white/15 transition-colors duration-300 group-hover:text-blue-400/60">
                  {p.no}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ===== Tech marquee ===== */}
        <Reveal className="mt-12 sm:mt-16">
          <div className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-4">
              {[...techs, ...techs].map(({ name, Icon, color }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="group flex items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-transparent px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)] sm:px-6 sm:py-4"
                >
                  <Icon size={26} style={{ color }} />
                  <span className="text-sm font-medium text-zinc-200">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ===== Certificate lightbox ===== */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <button
                type="button"
                onClick={() => setOpenCert(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:border-blue-500/60"
              >
                <FiX size={18} />
              </button>
              <Image
                src={openCert.image}
                alt={`${openCert.name} certificate`}
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-auto w-full rounded-xl border border-white/10"
              />
              <p className="mt-3 text-center text-sm text-zinc-400">
                {openCert.name} · {openCert.date}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
