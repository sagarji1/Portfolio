import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectPreviewDailyMart from './ProjectPreviewDailyMart';
import ProjectPreviewAgentHub from './ProjectPreviewAgentHub';
import ProjectPreviewBankEngine from './ProjectPreviewBankEngine';

export default function ProjectCard({ project, index }) {
  const isReversed = index % 2 === 1;

  const renderPreview = () => {
    switch (project.previewType) {
      case 'dailymart':
        return <ProjectPreviewDailyMart />;
      case 'agenthub':
        return <ProjectPreviewAgentHub />;
      case 'bankengine':
        return <ProjectPreviewBankEngine />;
      default:
        return null;
    }
  };

  return (
    <article className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#FFFFFF] border border-[#E8E8E2] shadow-xs hover:border-[#D1D1C7] transition-all duration-300">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
        {/* Project Information */}
        <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div>
            {/* Header / Number & Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm font-bold text-lime-600 bg-lime-50 px-2 py-0.5 rounded border border-lime-200">
                /{project.id}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-[#71717A] uppercase font-semibold">
                {project.eyebrow}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121316]">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#71717A] mt-1 mb-4">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#47484F] leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Contribution / Problem Addressed */}
            <div className="p-3.5 rounded-xl bg-[#F8F8F5] border border-[#EAEAE5] mb-5">
              <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#52525B] mb-1">
                My Contribution &amp; Implementation
              </div>
              <p className="text-xs sm:text-sm text-[#47484F] leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-[#F1F1ED] text-[#27272A] border border-[#E2E2DC]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links and Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#EDEDE8]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#121316] text-white hover:bg-[#23252a] transition-all shadow-xs group"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#F1F1ED] text-[#121316] hover:bg-[#E5E5DF] border border-[#E2E2DC] transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-mono text-[#71717A] bg-[#F8F8F5] border border-[#EAEAE5] rounded-lg">
                Source available upon request
              </span>
            )}
          </div>
        </div>

        {/* Visual Preview */}
        <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative group">
            {renderPreview()}
          </div>
        </div>
      </div>
    </article>
  );
}
