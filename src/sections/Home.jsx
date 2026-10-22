import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, GitBranch, CheckCircle, Code2 } from 'lucide-react';
import Button from '../components/Button';
import { heroContent, personalInfo, techStackStrip } from '../data/portfolioData';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Text & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status / Availability Pill */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDEDE7] border border-[#DCDCD5] text-xs font-mono text-[#38393D]">
                <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                <span className="font-semibold text-neutral-800">{personalInfo.status.badge}</span>
                <span className="text-[#84858B] hidden sm:inline">· {personalInfo.institution.split('(')[1]?.replace(')', '') || 'DSEU'}</span>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#5E5F66] font-semibold block mb-3">
                {heroContent.eyebrow}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121316] leading-[1.08] mb-6"
            >
              Hey, I'm Yash. <br />
              <span className="text-[#55565C] font-semibold">I build for the web.</span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#404147] leading-relaxed max-w-2xl mb-3"
            >
              {heroContent.description}
            </motion.p>

            {/* Natural Secondary Line */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[#686970] leading-relaxed max-w-2xl mb-8"
            >
              {heroContent.secondaryLine}
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <Button href={heroContent.primaryCta.href} size="lg" variant="primary">
                {heroContent.primaryCta.label}
              </Button>
              <Button href={heroContent.secondaryCta.href} size="lg" variant="secondary">
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Credibility / Quick assurances */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#585960]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-lime-600" />
                <span>Full-Stack MERN Foundation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-lime-600" />
                <span>Clean API Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-lime-600" />
                <span>Modern React UI</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Code Window Composition */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card */}
              <div className="w-full bg-[#18181B] text-slate-200 border border-[#27272A] rounded-2xl shadow-xl overflow-hidden font-mono text-xs">
                {/* Window Title Bar */}
                <div className="bg-[#121214] px-4 py-3 border-b border-[#27272A] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="ml-2 text-[11px] text-[#A1A1AA] flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-slate-400" />
                      developer-manifest.ts
                    </span>
                  </div>
                  <span className="text-[10px] text-[#71717A] bg-[#27272A] px-2 py-0.5 rounded">
                    YS / DEV
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-[12px] leading-relaxed">
                  <div className="text-[#71717A] italic mb-2">
                    // Yash Sagar — Student &amp; Web Developer
                  </div>
                  <div>
                    <span className="text-violet-400 font-semibold">const</span>{' '}
                    <span className="text-amber-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">name</span>:{' '}
                    <span className="text-emerald-400">'Yash Sagar'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">major</span>:{' '}
                    <span className="text-emerald-400">'B.Tech Computer Engineering'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">institute</span>:{' '}
                    <span className="text-emerald-400">'DSEU (2023–2027)'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">focus</span>: [
                    <span className="text-emerald-400">'React Interfaces'</span>,{' '}
                    <span className="text-emerald-400">'Node/Express APIs'</span>,{' '}
                    <span className="text-emerald-400">'MongoDB'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">mindset</span>:{' '}
                    <span className="text-emerald-400">
                      'Understanding how the whole product works'
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">available</span>:{' '}
                    <span className="text-amber-400 font-semibold">true</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="mt-3 text-[#71717A]">
                    <span className="text-violet-400">export default</span> developer;
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 bg-[#121214] border-t border-[#27272A] flex items-center justify-between text-[11px] text-[#A1A1AA]">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-3.5 h-3.5 text-lime-400" />
                    <span>main</span>
                    <span className="text-[#52525B]">·</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Build Ready
                    </span>
                  </div>
                  <span className="text-[10px] text-[#71717A]">Node v20+</span>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E5E5DF] rounded-xl p-3 shadow-lg flex items-center gap-3 text-xs font-sans">
                <div className="w-8 h-8 rounded-lg bg-lime-100 flex items-center justify-center text-lime-800">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#121316]">Clean Code Advocate</div>
                  <div className="text-[11px] text-[#71717A]">Practical &amp; Maintainable</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#EAEAE5]">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] mb-4 font-semibold text-center sm:text-left">
            Core Technologies &amp; Tooling
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5">
            {techStackStrip.map((item) => (
              <div
                key={item.name}
                className="px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#E5E5DF] flex flex-col items-center sm:items-start justify-center hover:border-[#121316] transition-colors group"
              >
                <span className="text-xs font-semibold text-[#18181B] group-hover:text-neutral-950 font-sans">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[#8E8F94]">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
