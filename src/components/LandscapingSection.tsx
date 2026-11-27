import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { LANDSCAPING_SERVICES, MEDIA } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface LandscapingSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export function LandscapingSection({ onSelectServiceForQuote }: LandscapingSectionProps) {
  return (
    <section
      id="landscaping"
      className="bg-[#FFFFFF] text-[#20251F] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
              Landscape Construction
            </p>
            <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
              Turn Your Outdoor Ideas Into{' '}
              <span className="font-editorial italic font-medium text-[#263B2E]">
                Real Spaces.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base text-[#525B51] leading-relaxed">
              Create an outdoor environment that feels more considered, functional and connected to your property.
            </p>
          </div>
        </div>

        {/* Oversized Featured Architectural Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <SafeImage
            src={MEDIA.deckFirepit}
            alt="Representative Australian outdoor living transformation featuring hardwood timber decking, steps and stone fire pit courtyard"
            containerClassName="relative overflow-hidden aspect-[16/9] lg:aspect-[21/10] w-full bg-[#263B2E]/10"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            fallbackTitle="Landscape Construction & Outdoor Living"
          />
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#525B51]">
            <span>
              Decking · Fire Pits · Retaining Walls · Garden Makeovers · General Landscaping
            </span>
            <span className="italic">Representative outdoor living visual</span>
          </div>
        </motion.div>

        {/* Asymmetric Editorial Compositions — Not 5 Identical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Structured Editorial Service Ledger */}
          <div className="lg:col-span-7 divide-y divide-[#20251F]/12 border-y border-[#20251F]/12">
            {LANDSCAPING_SERVICES.map((service, idx) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group py-7 sm:py-9 flex flex-col sm:flex-row sm:items-start justify-between gap-5"
              >
                <div className="flex items-start gap-5 sm:gap-7">
                  <span className="font-display text-sm font-bold text-[#B77A52] tabular-nums pt-1.5 shrink-0">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#20251F] group-hover:text-[#263B2E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] text-[#525B51] leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectServiceForQuote(service.quoteService)}
                  aria-label={`Enquire about ${service.title}`}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#263B2E] hover:text-[#B77A52] transition-colors shrink-0 cursor-pointer py-2 whitespace-nowrap"
                >
                  <span>Enquire</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Alternating Vertical & Landscape Supporting Photography */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <SafeImage
                src={MEDIA.retainingWallSteps}
                alt="Representative hardwood sleeper retaining wall and wide concrete-timber garden steps"
                containerClassName="relative overflow-hidden aspect-[4/3] w-full bg-[#263B2E]/10"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                fallbackTitle="Retaining Walls & Steps"
              />
              <p className="mt-3 text-xs text-[#525B51]">
                03 — Retaining walls and terraced garden access designed for sloping Victorian blocks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F3F0E8] p-7 sm:p-8 border border-[#20251F]/10"
            >
              <p className="font-editorial italic text-2xl sm:text-[26px] leading-snug text-[#263B2E]">
                &ldquo;Practical outdoor construction that fits the way you actually use your yard.&rdquo;
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => onSelectServiceForQuote('Landscaping')}
                  className="inline-flex items-center gap-2 bg-[#263B2E] text-[#F3F0E8] px-6 py-3.5 text-sm font-semibold hover:bg-[#1A2A20] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss Your Landscape Project</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
