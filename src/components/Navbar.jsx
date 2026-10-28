'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
];

// Glow border ghurar duration (second)
const GLOW_DURATION = 2;

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(isHome ? 'home' : null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  // Intro animation shudhu Home-e dhire hoy, onno page-e direct load hole druto
  const [intro] = useState(
    isHome ? { nav: 1.8, glow: 2.7 } : { nav: 0.1, glow: 0.4 },
  );

  const itemRefs = useRef({});

  // FIX: animation shesh howar por hasLoaded true hobe (delay + duration)
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setHasLoaded(true);
      },
      (intro.glow + GLOW_DURATION) * 1000,
    );
    return () => clearTimeout(timer);
  }, [intro.glow]);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer: shudhu Home page-e kaj kore
  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  // Update Indicator Position
  useEffect(() => {
    const update = () => {
      const el = itemRefs.current[active];

      if (el) {
        setIndicator({
          left: el.offsetLeft,
          width: el.offsetWidth,
          ready: true,
        });
      } else {
        // Contact page-e kono menu active na, underline lukiye dao
        setIndicator(prev => ({ ...prev, ready: false }));
      }
    };

    update();
    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, [active]);

  // Page bodlale mobile menu bondho
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent Body Scroll when Mobile Menu Open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        delay: intro.nav,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full transition-all duration-300"
    >
      <div
        className={`relative mx-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'mt-0 max-w-full border-b border-blue-500/20 bg-black/70 backdrop-blur-md'
            : 'mt-5 max-w-[1200px] bg-transparent'
        }`}
      >
        {/* Glow Border Effect */}
        {!isScrolled && (
          <svg
            className="pointer-events-none absolute -inset-x-0 top-0 h-[72px] w-full overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="blue-white-glow-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0044ff" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="0.8" />

                {/* hasLoaded true na howa porjonto animation DOM-e thakbe */}
                {!hasLoaded && (
                  <animateTransform
                    attributeName="gradientTransform"
                    type="rotate"
                    from="0 0.5 0.5"
                    to="360 0.5 0.5"
                    dur={`${GLOW_DURATION}s`}
                    begin={`${intro.glow}s`}
                    repeatCount="1"
                    fill="freeze"
                  />
                )}
              </linearGradient>
            </defs>

            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="72"
              rx="16"
              fill="none"
              stroke="url(#blue-white-glow-gradient)"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: hasLoaded ? 0 : 0.3,
                delay: hasLoaded ? 0 : intro.glow,
              }}
            />
          </svg>
        )}

        <nav
          className={`mx-auto flex h-[72px] items-center justify-between px-6 transition-all duration-300 ${
            isScrolled ? 'max-w-[1200px]' : 'w-full'
          }`}
        >
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <Link
              href="/#home"
              onClick={() => {
                if (isHome) setActive('home');
                setOpen(false);
              }}
              className="group flex items-center text-white"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo variant="full" className="h-14 w-auto" />
              </motion.div>
            </Link>
          </div>

          {/* Menu (desktop) */}
          <ul className="relative hidden items-center gap-10 md:flex">
            {links.map(link => (
              <motion.li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  ref={el => {
                    itemRefs.current[link.id] = el;
                  }}
                  onClick={() => isHome && setActive(link.id)}
                  className={`group relative block py-2 text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active === link.id
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-white transition-transform duration-300 ease-out ${
                      active === link.id
                        ? 'scale-x-0'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              </motion.li>
            ))}

            <motion.span
              className="pointer-events-none absolute -bottom-1 h-[2px] rounded-full bg-white"
              animate={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.ready ? 1 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 22,
              }}
            />
          </ul>

          {/* Right: Let's Talk + Hamburger */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={`group relative hidden items-center gap-2 overflow-hidden rounded-full border bg-black/40 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md transition-colors duration-500 hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] md:inline-flex ${
                  pathname === '/contact'
                    ? 'border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                    : 'border-white/80 text-white shadow-[0_0_15px_rgba(0,102,255,0.15)]'
                }`}
              >
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Let&apos;s Talk</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="group flex flex-col gap-1.5 rounded-full p-2 transition-colors hover:bg-white/10 md:hidden"
            >
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-full mx-4 mt-2 overflow-hidden rounded-2xl border border-blue-500/20 bg-black/95 backdrop-blur-md md:hidden"
            >
              <ul className="flex flex-col items-center gap-6 py-8">
                {links.map(link => (
                  <li key={link.id}>
                    <Link
                      href={`/#${link.id}`}
                      onClick={() => {
                        if (isHome) setActive(link.id);
                        setOpen(false);
                      }}
                      className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${
                        active === link.id ? 'text-white' : 'text-zinc-500'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-white px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-black"
                  >
                    Let&apos;s Talk
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
