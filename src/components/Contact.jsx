'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiArrowLeft } from 'react-icons/fi';

const ease = [0.22, 1, 0.36, 1];

/* ===== Nijer details ===== */
const EMAIL = 'rabby17946@gmail.com';
const WHATSAPP = '8801881090417';

const projectTypes = ['Website', 'Web App', 'Landing Page', 'Other'];

const Contact = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'Website',
    message: '',
  });
  const [error, setError] = useState('');

  // Ager page-e fire jabe, na thakle Home-e
  const goBack = () => {
    if (window.history.length > 1) router.back();
    else router.push('/');
  };

  const onChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const buildText = () =>
    `Hi Mahadi, I'm ${form.name}.\nProject type: ${form.type}\n\n${form.message}${
      form.email ? `\n\nMy email: ${form.email}` : ''
    }`;

  const validate = () => {
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please add your name and a short message.');
      return false;
    }
    setError('');
    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildText())}`,
      '_blank',
    );
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `${form.type} project inquiry from ${form.name}`,
    )}&body=${encodeURIComponent(buildText())}`;
  };

  const inputCls =
    'w-full rounded-xl focus:bg-white/10 border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500/60';

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pb-16 pt-28 sm:px-6">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-[40%] h-[460px] w-[460px] rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="relative rounded-3xl border border-white/10 bg-black/40 px-5 pb-8 pt-16 text-center backdrop-blur-sm sm:px-10 sm:pb-10">
          {/* Back button: upore dane */}
          <button
            type="button"
            onClick={goBack}
            className="group absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-blue-500/60 hover:text-white sm:right-6 sm:top-6"
          >
            <FiArrowLeft
              size={14}
              className="text-blue-400 transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back
          </button>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
            Send a message
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Tell me about your project
          </h2>

          <div className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className={inputCls}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your email (optional)"
                className={inputCls}
              />
            </div>

            <div>
              <p className="mb-3 text-xs text-zinc-500">Project type</p>
              <div className="flex flex-wrap justify-center gap-2">
                {projectTypes.map(t => {
                  const active = form.type === t;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm(f => ({ ...f, type: t }))}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                        active
                          ? 'border-blue-500/70 bg-blue-500/15 text-white shadow-[0_0_18px_rgba(59,130,246,0.3)]'
                          : 'border-white/10 text-zinc-400 hover:border-blue-500/40 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              placeholder="Tell me a little about what you need..."
              className={`${inputCls} resize-none`}
            />

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={sendWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-black hover:shadow-blue-500/25 sm:w-auto"
              >
                <FaWhatsapp size={22} className="text-green-500 " /> Send on
                WhatsApp
              </button>

              <button
                type="button"
                onClick={sendEmail}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-black hover:shadow-blue-500/25 sm:w-auto"
              >
                <svg
                  aria-hidden="true"
                  viewBox="52 42 88 66"
                  className="size-5"
                >
                  <path
                    fill="#4285f4"
                    d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                  />
                  <path
                    fill="#34a853"
                    d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                  />
                  <path
                    fill="#fbbc04"
                    d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                  />
                  <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                  <path
                    fill="#c5221f"
                    d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                  />
                </svg>
                Send via Email
              </button>
            </div>

            <p className="text-xs text-zinc-600">
              This opens your WhatsApp or email app with the message already
              filled in.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
