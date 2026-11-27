import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MEDIA, SPECIALIST_SERVICES } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface SpecialistServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export function SpecialistServices({ onSelectServiceForQuote }: SpecialistServicesProps) {
  const timberService = SPECIALIST_SERVICES[0];
  const practicalMiddle = SPECIALIST_SERVICES.slice(1, 4);
  const outdoorFeatures = SPECIALIST_SERVICES[4];

  return (
    <section
      id="specialist"
      className="bg-[#EAE5D9] text-[#20251F] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
            Specialist Services
          </p>
          <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
            The Practical Details{' '}
            <span className="font-editorial italic font-medium text-[#263B2E]">
              Matter
            </span>{' '}
            Too.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#525B51] leading-relaxed max-w-2xl">
            Beyond planting and regular upkeep, Ravo&apos;s handles custom timber milling, concreting, small tree removals and practical handyman work around the property.
          </p>
        </div>

        {/* Treatment 01: Featured Custom Timber Milling Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 bg-[#FFFFFF] border border-[#20251F]/12 overflow-hidden mb-8 lg:mb-10 items-stretch"
        >
          <div className="lg:col-span-6">
            <SafeImage
              src={MEDIA.timberMilling}
              alt={timberService.imageAlt ?? 'Representative custom-milled Australian hardwood timber slabs'}
              containerClassName="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full w-full bg-[#263B2E]/10"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              fallbackTitle="Custom Timber Milling"
            />
          </div>

          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <p className="font-display text-xs font-bold tracking-[0.18em] uppercase text-[#B77A52] tabular-nums">
                {timberService.number} · Specialist Capability
              </p>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#20251F]">
                {timberService.title}
              </h3>
              <p className="mt-4 text-base text-[#525B51] leading-relaxed max-w-lg">
                {timberService.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#20251F]/10">
              <button
                type="button"
                onClick={() => onSelectServiceForQuote(timberService.quoteService)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#263B2E] hover:text-[#B77A52] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Enquire About Timber Milling Orders</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Treatment 02–04: Clean Editorial Horizontal Ledger (Handyman, Concreting, Tree Removal) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#20251F]/15">
          {practicalMiddle.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`py-8 sm:py-10 flex flex-col justify-between gap-6 border-b border-[#20251F]/15 ${
                idx < practicalMiddle.length - 1
                  ? 'md:pr-8 lg:pr-10 md:border-r md:border-[#20251F]/12'
                  : ''
              } ${idx > 0 ? 'md:pl-8 lg:pl-10' : ''}`}
            >
              <div>
                <span className="font-display text-xs font-bold tracking-[0.16em] text-[#B77A52] tabular-nums">
                  {item.number}
                </span>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#20251F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] text-[#525B51] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectServiceForQuote(item.quoteService)}
                className="self-start inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#263B2E] hover:text-[#B77A52] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Treatment 05: Outdoor Steps & Fire Pits Reverse Editorial Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4"
        >
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="font-display text-xs font-bold tracking-[0.16em] text-[#B77A52] tabular-nums">
              {outdoorFeatures.number}
            </span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#20251F]">
              {outdoorFeatures.title}
            </h3>
            <p className="mt-3 text-base text-[#525B51] leading-relaxed">
              {outdoorFeatures.description}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => onSelectServiceForQuote(outdoorFeatures.quoteService)}
                className="inline-flex items-center gap-2 bg-[#263B2E] text-[#F3F0E8] px-6 py-3.5 text-sm font-semibold hover:bg-[#1A2A20] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Enquire About Outdoor Features</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <SafeImage
              src={MEDIA.retainingWallSteps}
              alt={outdoorFeatures.imageAlt ?? 'Representative outdoor concrete and timber garden steps'}
              containerClassName="relative overflow-hidden aspect-[16/10] w-full bg-[#263B2E]/10"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              fallbackTitle="Outdoor Steps & Fire Pits"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
