import React, { useState } from 'react';
import { Copy, Check, Send, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // spam prevention bot trap
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = personalInfo.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email to clipboard', err);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields before sending.',
      });
      return;
    }

    setIsSubmitting(true);

    // Honest delivery mechanism:
    // Generate a cleanly formatted mailto link that opens the user's default email client
    // with all form fields prefilled. This guarantees the email is genuinely sent directly to Yash,
    // without faking a database submission when there is no remote server configured.
    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent via Yash Sagar Portfolio Website`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setStatus({
        type: 'info',
        message:
          'Your default email application has been launched with your message pre-filled. Simply click "Send" in your mail client to deliver your note to Yash.',
      });
    }, 400);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[#EAEAE5] scroll-mt-16 bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Have something in mind?"
          subtitle="Let's build something together."
          description="If you're working on an interesting product, need help with a web application, or simply want to connect, I'd be happy to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#121316] mb-3">
                Let's start a conversation.
              </h3>
              <p className="text-sm text-[#55565B] leading-relaxed mb-8">
                I am actively interested in software development internships, full-stack web roles, and collaborative projects. Reach out through the form or directly via email.
              </p>

              {/* Direct Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E2] mb-6 shadow-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block mb-1">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold text-[#121316] truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#F4F4F0] hover:bg-[#EAEAE5] text-[#121316] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-emerald-700 mt-1.5 block">
                    ✓ Email copied to clipboard!
                  </span>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-[#E8E8E2] hover:border-[#121316] flex items-center justify-between transition-all group shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-[#121316]" />
                      <span className="text-xs font-semibold text-[#121316]">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8F94] group-hover:text-[#121316] transition-colors" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-[#E8E8E2] hover:border-[#121316] flex items-center justify-between transition-all group shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                      <span className="text-xs font-semibold text-[#121316]">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8F94] group-hover:text-[#121316] transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="mt-8 p-4 rounded-xl bg-[#F4F4F0] border border-[#E2E2DC] text-xs text-[#5E5F65]">
              <span className="font-semibold text-[#121316] block mb-1">
                Typical Response Time
              </span>
              <span>I usually reply within 24 to 48 hours for project discussions and student opportunities.</span>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
              <h3 className="text-lg font-bold text-[#121316] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#71717A] mb-6">
                Fill in your details below to compose a direct inquiry.
              </p>

              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start gap-3 ${
                    status.type === 'error'
                      ? 'bg-rose-50 border border-rose-200 text-rose-900'
                      : 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  }`}
                >
                  {status.type === 'error' ? (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  <p className="leading-relaxed">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from real users, traps bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#27272A] mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2DC] bg-[#FCFCFB] text-sm text-[#121316] placeholder:text-[#9A9B9F] focus:bg-white focus:border-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316] transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#27272A] mb-1.5"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2DC] bg-[#FCFCFB] text-sm text-[#121316] placeholder:text-[#9A9B9F] focus:bg-white focus:border-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-[#27272A] mb-1.5"
                  >
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Full-Stack Role / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2DC] bg-[#FCFCFB] text-sm text-[#121316] placeholder:text-[#9A9B9F] focus:bg-white focus:border-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316] transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#27272A] mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or what you'd like to build together..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2DC] bg-[#FCFCFB] text-sm text-[#121316] placeholder:text-[#9A9B9F] focus:bg-white focus:border-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316] transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#121316] text-white text-sm font-semibold hover:bg-[#27282D] transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Launching Email...' : 'Send Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <span className="block mt-2 text-[11px] text-[#787880]">
                    No third-party trackers or spam bots. Launches your default email client with your drafted message.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
