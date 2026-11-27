import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MAINTENANCE_SERVICES, MEDIA } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface MaintenanceSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export function MaintenanceSection({ onSelectServiceForQuote }: MaintenanceSectionProps) {
  return (
    <section
      id="maintenance"
      className="bg-[#263B2E] text-[#F3F0E8] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Editorial Headline + Large Photographic Composition */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#E5C1A7] mb-4">
                Property Maintenance
              </p>
              <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.03] text-[clamp(2rem,4vw,3.5rem)] text-white">
                Keep Your Property Looking Its{' '}
                <span className="font-editorial italic font-medium text-[#E5C1A7]">
                  Best.
                </span>
              </h2>
              <p className="mt-5 text-base text-[#F3F0E8]/85 leading-relaxed tracking-[0.01em]">
                Good outdoor spaces need consistent attention. Ravo&apos;s provides practical property maintenance for customers who need regular upkeep or occasional help.
              </p>

              <p className="mt-6 pt-5 border-t border-[#F3F0E8]/15 text-xs tracking-[0.18em] uppercase font-semibold text-[#E5C1A7]">
                Ongoing or Once-Off Jobs Available
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SafeImage
                src={MEDIA.propertyMaintenance}
                alt="Representative freshly mowed lawn with tidy trimmed hedge and clean garden beds"
                containerClassName="relative overflow-hidden aspect-[4/3] w-full bg-[#1A2A20]"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                fallbackTitle="Reliable Property Maintenance"
              />
            </motion.div>
          </div>

          {/* Right Column: Two-Column Structured Service List & Direct CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 border-t border-[#F3F0E8]/15">
              {MAINTENANCE_SERVICES.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-7 border-b border-[#F3F0E8]/15 flex flex-col justify-between gap-4 group"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <span className="font-display text-xs text-[#E5C1A7]/70 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-[#F3F0E8]/80 leading-relaxed tracking-[0.01em]">
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(item.quoteService)}
                    className="self-start inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#E5C1A7] hover:text-white transition-colors cursor-pointer pt-1 whitespace-nowrap"
                  >
                    <span>Book or Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom Callout Strip */}
            <div className="mt-10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="font-display text-lg font-bold text-white">
                  Residential, commercial &amp; public areas.
                </p>
                <p className="mt-1 text-sm text-[#F3F0E8]/75">
                  Arrange a single tidy-up or set up a dependable ongoing maintenance schedule.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectServiceForQuote('Property Maintenance')}
                className="inline-flex items-center justify-center gap-2 bg-[#B77A52] text-white px-7 py-4 text-sm font-semibold hover:bg-[#9E6540] transition-colors cursor-pointer shrink-0 whitespace-nowrap"
              >
                <span>Get a Maintenance Quote</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
