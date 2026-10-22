import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Info, FileText } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import Button from '../components/Button';
import { experience, education, technicalSkills, personalInfo } from '../data/portfolioData';

export default function Resume() {
  const shouldReduceMotion = useReducedMotion();
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="resume" className="py-20 sm:py-28 border-t border-[#EAEAE5] scroll-mt-16 bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="RESUME &amp; BACKGROUND"
            title="Experience, education &amp; skills."
            subtitle="My journey and technical capabilities."
            description="A grounded view of my academic background, internship work, and technologies I actively build with."
            className="mb-0"
          />

          {/* Resume Download or Request Button */}
          <div className="shrink-0">
            {personalInfo.resumeUrl ? (
              <Button
                href={personalInfo.resumeUrl}
                download={true}
                variant="primary"
                size="md"
              >
                Download Resume PDF
              </Button>
            ) : (
              <button
                type="button"
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#121316] text-[#FBFBF9] hover:bg-[#27282D] text-xs font-semibold font-mono transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600"
              >
                <FileText className="w-3.5 h-3.5 text-lime-400" />
                <span>Resume / Document Status</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal / Dialog when Resume PDF is not yet in public folder */}
        {showResumeModal && (
          <div className="mb-10 p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-[#121316] text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold text-amber-900 mb-0.5">
                  Resume PDF Configuration
                </strong>
                <p className="text-amber-800 text-xs leading-relaxed">
                  To provide a genuine download link, place your compiled PDF in the <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">public/</code> directory and set <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">resumeUrl: '/resume.pdf'</code> in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">portfolioData.js</code>. In the meantime, you can request an updated copy directly:
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request%20for%20Yash%20Sagar&body=Hi%20Yash,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20request%20a%20copy%20of%20your%20updated%20resume.`}
                className="px-3 py-1.5 rounded-md bg-[#121316] text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
              >
                Request via Email
              </a>
              <button
                type="button"
                onClick={() => setShowResumeModal(false)}
                className="px-2.5 py-1.5 rounded-md bg-amber-200/70 text-amber-900 text-xs font-medium hover:bg-amber-300 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Subsection 1 & 2: Experience & Education (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-lime-700" />
                <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[#55565B]">
                  Practical Experience
                </h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp) => (
                  <article
                    key={exp.company}
                    className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-lg text-[#121316]">
                          {exp.role}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded bg-lime-100 text-lime-800 font-mono font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#71717A]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-[#4B4C52] mb-3 flex items-center gap-2">
                      <span className="font-semibold text-[#121316]">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.description.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-[#4E4F56] flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Used */}
                    <div className="pt-3 border-t border-[#EDEDE8] flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#F4F4F0] text-[#333438] border border-[#E5E5DF]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-lime-700" />
                <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[#55565B]">
                  Education &amp; Academics
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <article
                    key={edu.degree}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h4 className="font-bold text-base text-[#121316]">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs text-[#71717A]">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-sm text-[#55565B] mb-2 font-medium">
                      {edu.institution} {edu.campus && `(${edu.campus})`}
                    </div>

                    <p className="text-xs sm:text-sm text-[#6C6D74] leading-relaxed">
                      {edu.highlights}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Subsection 3: Technical Skills (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-4 h-4 text-lime-700" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[#55565B]">
                Technical Proficiencies
              </h3>
            </div>

            <div className="space-y-4">
              <SkillGroup
                title="Frontend Engineering"
                skills={technicalSkills.frontend}
              />
              <SkillGroup
                title="Backend &amp; APIs"
                skills={technicalSkills.backend}
              />
              <SkillGroup
                title="Databases"
                skills={technicalSkills.databases}
              />
              <SkillGroup
                title="Core Programming"
                skills={technicalSkills.programming}
              />
              <SkillGroup
                title="Developer Tools"
                skills={technicalSkills.tools}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
