import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#EAEAE5] scroll-mt-16 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Featured Projects."
          subtitle="A few things I've worked on, built, and learned from."
          description="Each project highlights hands-on experience in full-stack architecture, clean frontend implementation, and reliable backend design."
        />

        {/* Projects List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Open-source notice */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#E8E8E2] text-center max-w-2xl mx-auto shadow-xs">
          <h4 className="font-bold text-base text-[#121316] mb-1">
            Looking for more repositories and experiments?
          </h4>
          <p className="text-xs sm:text-sm text-[#55565B] mb-4">
            I regularly test ideas, build micro-tools, and solve data structures problems on GitHub.
          </p>
          <a
            href="https://github.com/sagarji1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2 rounded-lg bg-[#121316] text-white hover:bg-[#27282D] transition-colors"
          >
            <span>Visit @sagarji1 on GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
