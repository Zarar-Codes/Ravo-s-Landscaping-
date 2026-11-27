import { motion } from 'motion/react';
import { MEDIA, WHY_RAVOS_PILLARS } from '../data/businessData';
import { SafeImage } from './SafeImage';

export function WhyRavosSection() {
  return (
    <section
      id="why-ravos"
      className="bg-[#F3F0E8] text-[#20251F] py-20 sm:py-28 lg:py-36 border-t border-[#20251F]/10 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
                Why Choose Ravo&apos;s
              </p>
              <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
                Experience You Can{' '}
                <span className="font-editorial italic font-medium text-[#263B2E]">
                  Rely
                </span>{' '}
                On.
              </h2>
              <p className="mt-5 text-base text-[#525B51] leading-relaxed">
                Practical landscaping and dependable property care built on professionalism, reliability and punctuality across Trafalgar and Gippsland.
              </p>
            </div>

            <SafeImage
              src={MEDIA.timberMilling}
              alt="Representative hands-on timber milling and practical outdoor craftsmanship in regional Victoria"
              containerClassName="relative overflow-hidden aspect-[4/3] w-full bg-[#263B2E]/10"
              className="w-full h-full object-cover"
              fallbackTitle="Practical Craftsmanship & Reliability"
            />
          </div>

          {/* Right Oversized Editorial Pillars */}
          <div className="lg:col-span-7 divide-y divide-[#20251F]/15 border-y border-[#20251F]/15">
            {WHY_RAVOS_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-8 sm:py-11 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-baseline"
              >
                <div className="sm:col-span-4">
                  <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#263B2E] tabular-nums leading-none">
                    {pillar.metric}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.16em] uppercase font-semibold text-[#B77A52]">
                    {pillar.unit}
                  </p>
                </div>

                <div className="sm:col-span-8">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#20251F]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] sm:text-base text-[#525B51] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
