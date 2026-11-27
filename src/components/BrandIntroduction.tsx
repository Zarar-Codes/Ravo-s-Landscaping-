import { motion } from 'motion/react';
import { MEDIA } from '../data/businessData';
import { SafeImage } from './SafeImage';

const APPROACH_QUALITIES = [
  {
    number: '01',
    title: 'Experience',
    description:
      'Over 15 years of landscaping and property maintenance experience.',
  },
  {
    number: '02',
    title: 'Reliability',
    description:
      'A professional approach focused on dependable service.',
  },
  {
    number: '03',
    title: 'Flexibility',
    description:
      'Once-off projects and ongoing property maintenance options.',
  },
] as const;

export function BrandIntroduction() {
  return (
    <section
      id="approach"
      className="bg-[#F3F0E8] text-[#20251F] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
                The Ravo&apos;s Approach
              </p>

              <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
                More Than Maintenance.{' '}
                <span className="block mt-1">
                  A Better{' '}
                  <span className="font-editorial italic font-medium text-[#263B2E]">
                    Outdoor
                  </span>{' '}
                  Space.
                </span>
              </h2>
            </div>

            <div className="mt-8 lg:mt-14 max-w-xl">
              <p className="text-base sm:text-lg text-[#525B51] leading-relaxed">
                Every property has different needs. Whether you&apos;re looking to transform an outdoor area, maintain your garden, or improve your property&apos;s functionality, Ravo&apos;s offers practical landscaping and maintenance solutions.
              </p>
              <p className="mt-4 text-sm text-[#525B51] leading-relaxed">
                Working across residential, commercial and public outdoor areas from our base in Trafalgar, Victoria, we take pride in straightforward advice, punctual service and neat finishes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SafeImage
              src={MEDIA.approachGarden}
              alt="Representative Australian garden border with steel edging, dark mulch, native grasses and timber sleeper retaining edge"
              containerClassName="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full w-full bg-[#263B2E]/10"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              fallbackTitle="Thoughtful Outdoor Craftsmanship"
            />
          </motion.div>
        </div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-[#20251F]/15 my-14 lg:my-20"
          aria-hidden="true"
        />

        {/* Three Horizontal Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {APPROACH_QUALITIES.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-2"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-sm font-bold text-[#B77A52] tabular-nums">
                  {item.number}
                </span>
                <span className="text-xs text-[#20251F]/35" aria-hidden="true">
                  —
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-[#20251F]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[15px] text-[#525B51] leading-relaxed pl-0 sm:pl-9">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
