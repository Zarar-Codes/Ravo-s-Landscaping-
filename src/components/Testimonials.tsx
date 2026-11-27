import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

const VERIFIED_STANDARDS = [
  {
    number: '01',
    heading: 'Professionalism, Reliability & Punctuality',
    detail:
      'Turning up when agreed, communicating clearly about the scope of work, and leaving outdoor areas neat and usable.',
  },
  {
    number: '02',
    heading: 'Residential, Commercial & Public Spaces',
    detail:
      'Practical capability across family backyards, investment properties, commercial grounds and community public areas.',
  },
  {
    number: '03',
    heading: 'Fully Insured Local Family Business',
    detail:
      'Backed by over 15 years of industry experience and full insurance cover from our base in Trafalgar, Victoria.',
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="reputation"
      className="bg-[#263B2E] text-[#F3F0E8] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Statement */}
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#E5C1A7] mb-4">
              Standards &amp; Accountability
            </p>
            <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.03] text-[clamp(2rem,4vw,3.5rem)] text-white">
              Good Work Should Speak For{' '}
              <span className="font-editorial italic font-medium text-[#E5C1A7]">
                Itself.
              </span>
            </h2>
            <p className="mt-5 text-base text-[#F3F0E8]/85 leading-relaxed tracking-[0.01em]">
              Rather than displaying unverified quotes, we let our published standards and ongoing local projects speak directly. Follow our latest completed jobs and community updates on our official channels.
            </p>

            {/* Official Verified Channels */}
            <div className="mt-8 pt-6 border-t border-[#F3F0E8]/15 flex flex-wrap gap-x-6 gap-y-3">
              <a
                href={BUSINESS_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E5C1A7] hover:text-white transition-colors whitespace-nowrap"
              >
                <span>Instagram @ravos_landscaping</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E5C1A7] hover:text-white transition-colors whitespace-nowrap"
              >
                <span>Official Facebook Page</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E5C1A7] hover:text-white transition-colors whitespace-nowrap"
              >
                <span>ravosmaintenance.com.au</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Verified Business Trust Columns */}
          <div className="lg:col-span-7 divide-y divide-[#F3F0E8]/15 border-y border-[#F3F0E8]/15">
            {VERIFIED_STANDARDS.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-7 sm:py-9 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-7"
              >
                <span className="font-display text-sm font-bold text-[#E5C1A7] tabular-nums pt-1 shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-2.5 text-[15px] text-[#F3F0E8]/80 leading-relaxed tracking-[0.01em]">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="py-6 flex items-center gap-3 text-sm text-[#F3F0E8]/85">
              <ShieldCheck className="w-5 h-5 text-[#E5C1A7] shrink-0" aria-hidden="true" />
              <span>
                Fully insured · Online job booking also available via{' '}
                <a
                  href={BUSINESS_INFO.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-white hover:text-[#E5C1A7]"
                >
                  ravosmaintenance.com.au
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
