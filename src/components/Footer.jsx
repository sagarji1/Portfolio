import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-20 border-t border-[#E8E8E2] bg-[#F4F4F0] py-12 text-[#55565B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Sign-off */}
          <div className="flex flex-col sm:items-start text-center sm:text-left gap-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 font-mono font-bold text-sm text-[#121316]">
              <Terminal className="w-4 h-4 text-lime-600" />
              <span>{personalInfo.name}</span>
              <span className="text-xs font-normal text-[#71717A]">
                — Computer Engineering &amp; Web Development
              </span>
            </div>
            <p className="text-xs text-[#71717A]">
              Built with React, Tailwind CSS &amp; Framer Motion. Focused on clean code and reliable products.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#55565B] hover:text-[#121316] hover:bg-[#EAEAE5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#55565B] hover:text-[#121316] hover:bg-[#EAEAE5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EAEAE5] text-[#121316] hover:bg-[#E0E0DB] text-xs font-mono font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-[#E5E5DF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8B92]">
          <span>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</span>
          <span className="font-mono text-[11px] mt-2 sm:mt-0">
            DSEU Okhla 2 · New Delhi
          </span>
        </div>
      </div>
    </footer>
  );
}
