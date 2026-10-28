'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiReactrouter,
  SiRedux,
  SiAxios,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiC,
  SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FiCode, FiServer, FiTerminal, FiTool, FiMove } from 'react-icons/fi';

const ease = [0.22, 1, 0.36, 1];

const categories = [
  {
    id: 'frontend',
    title: 'Frontend',
    Icon: FiCode,
    desc: 'Building fast, responsive interfaces with smooth motion and reusable components.',
    items: [
      { name: 'React', Icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'GSAP', Icon: SiGreensock, color: '#88CE02' },
      { name: 'Framer Motion', Icon: SiFramer, color: '#E879F9' },
      { name: 'Lenis', Icon: FiMove, color: '#22D3EE' },
      { name: 'React Router', Icon: SiReactrouter, color: '#F87171' },
      { name: 'Redux', Icon: SiRedux, color: '#A78BFA' },
      { name: 'Axios', Icon: SiAxios, color: '#8B5CF6' },
    ],
  },
  {
    id: 'backend',
    title: 'Basic Backend',
    Icon: FiServer,
    desc: 'Learning to build APIs and work with databases, step by step towards full-stack.',
    items: [
      { name: 'Node.js', Icon: FaNodeJs, color: '#68A063' },
      { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Mongoose', Icon: SiMongoose, color: '#E0524D' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    Icon: FiTerminal,
    desc: 'The core languages behind my problem solving and web development.',
    items: [
      { name: 'C', Icon: SiC, color: '#5C9DF2' },
      { name: 'Java', Icon: FaJava, color: '#F89820' },
      { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
      { name: 'HTML', Icon: FaHtml5, color: '#F26B3A' },
      { name: 'CSS', Icon: FaCss3Alt, color: '#2D8CFF' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    Icon: FiTool,
    desc: 'The tools that keep my workflow clean, organized and fast.',
    items: [
      { name: 'Git', Icon: FaGitAlt, color: '#F05133' },
      { name: 'GitHub', Icon: FaGithub, color: '#FFFFFF' },
      { name: 'VS Code', Icon: VscVscode, color: '#3B9EFF' },
      { name: 'NPM', Icon: FaNpm, color: '#EF4444' },
      { name: 'Figma', Icon: FaFigma, color: '#F472B6' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

const total = categories.reduce((sum, c) => sum + c.items.length, 0);

const Reveal = ({ delay = 0, className = '', children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

const Skills = () => {
  const [activeId, setActiveId] = useState('frontend');
  const active = categories.find(c => c.id === activeId);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-4  sm:px-6 py-20"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px] sm:h-[460px] sm:w-[460px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-[120px] sm:h-[420px] sm:w-[420px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm">
                Skills
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
                The tools I use to{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  build for the web
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex w-fit items-baseline gap-3 rounded-2xl border border-white/10 px-5 py-3.5 sm:px-6 sm:py-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
                {total}
              </span>
              <span className="text-xs text-zinc-400 sm:text-sm">
                technologies
                <br />
                across 4 areas
              </span>
            </div>
          </Reveal>
        </div>

        {/* Main: tabs + panel */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr]">
          {/* Tabs: phone-e 2x2 chhoto box, laptop-e lomba list */}
          <Reveal className="min-w-0">
            <div className="grid grid-cols-2 gap-2.5 lg:flex lg:flex-col lg:gap-3">
              {categories.map(c => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveId(c.id)}
                    className="group relative flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2.5 text-left transition-colors duration-300 hover:border-blue-500/40 lg:gap-4 lg:rounded-2xl lg:px-5 lg:py-4"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skillTab"
                        transition={{ duration: 0.5, ease }}
                        className="absolute inset-0 rounded-xl border border-blue-500/60 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.25)] lg:rounded-2xl"
                      />
                    )}
                    <span
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 lg:h-11 lg:w-11 lg:rounded-xl ${
                        isActive
                          ? 'border-blue-400/50 text-blue-300'
                          : 'border-white/10 text-zinc-400 group-hover:text-white'
                      }`}
                    >
                      <c.Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                    </span>
                    <span className="relative min-w-0">
                      <span
                        className={`block text-xs font-semibold leading-tight transition-colors duration-300 lg:text-base ${
                          isActive ? 'text-white' : 'text-zinc-300'
                        }`}
                      >
                        {c.title}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 lg:text-[11px] lg:tracking-[0.2em]">
                        <span className="lg:hidden">{c.items.length} tech</span>
                        <span className="hidden lg:inline">
                          {c.items.length} technologies
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Panel */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="min-h-[340px] rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm sm:min-h-[420px] sm:rounded-3xl sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 sm:items-center sm:pb-5">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {active.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-xs leading-relaxed text-zinc-400 sm:text-sm">
                        {active.desc}
                      </p>
                    </div>
                    <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-blue-500 sm:block">
                      {String(
                        categories.findIndex(c => c.id === active.id) + 1,
                      ).padStart(2, '0')}{' '}
                      / 04
                    </span>
                  </div>

                  {/* Shob skill ekshathe: phone-eo 3 column, chhoto tile */}
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-4 xl:grid-cols-4">
                    {active.items.map(({ name, Icon, color }, i) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, y: 24, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.04 * i,
                          ease,
                        }}
                        style={{ '--c': `${color}55` }}
                        className="group flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent px-1.5 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--c)] hover:shadow-[0_0_28px_var(--c)] active:border-[var(--c)] active:shadow-[0_0_28px_var(--c)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-6 sm:hover:-translate-y-1.5"
                      >
                        <Icon
                          style={{ color }}
                          className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-[34px] sm:w-[34px]"
                        />
                        <span className="break-words text-center text-[10px] font-medium leading-tight text-zinc-200 sm:text-sm">
                          {name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
