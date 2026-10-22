import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layout, Server, Database, Globe, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/portfolioData';

const serviceIcons = {
  '01': Layout,
  '02': Globe,
  '03': Server,
  '04': Database,
};

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-20 sm:py-28 border-t border-[#EAEAE5] scroll-mt-16 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SERVICES &amp; CAPABILITIES"
          title="What I can help build."
          subtitle="Practical engineering for the web."
          description="Practical development focused on clean interfaces, reliable functionality, and maintainable code."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.number] || Layout;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E8E8E2] hover:border-[#CFCFC7] shadow-xs transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-lime-700 bg-lime-50 px-2.5 py-1 rounded-md border border-lime-200">
                      /{service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] flex items-center justify-center text-[#121316] group-hover:bg-[#121316] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#121316] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#55565B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Tech Pills & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F4F4F0] text-[#47484F] border border-[#E5E5DF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#121316] hover:text-lime-700 font-mono transition-colors group/link"
                  >
                    <span>Discuss a project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Realistic Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F0F0EB] border border-[#E2E2DC] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5E5F65] gap-2">
          <span>// Built for individuals, student initiatives, startups, and product teams.</span>
          <span className="font-mono font-medium text-[#121316]">Open to freelance &amp; collaborative builds</span>
        </div>
      </div>
    </section>
  );
}
