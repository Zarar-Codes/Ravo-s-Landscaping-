import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react';
import { SERVICE_PATHWAYS, type ServicePathwayData } from '../data/businessData';
import { ServicePathway } from './ServicePathway';
import { SafeImage } from './SafeImage';

interface ServiceFinderProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export function ServiceFinder({ onSelectServiceForQuote }: ServiceFinderProps) {
  const [selectedId, setSelectedId] = useState<ServicePathwayData['id']>('landscaping');

  const activePathway =
    SERVICE_PATHWAYS.find((item) => item.id === selectedId) ?? SERVICE_PATHWAYS[0];

  const scrollToSection = (anchor: string) => {
    const id = anchor.replace('#', '');
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="services"
      className="bg-[#EAE5D9] text-[#20251F] py-20 sm:py-28 lg:py-36 border-y border-[#20251F]/10 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
              Find The Right Service
            </p>
            <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
              What Does Your{' '}
              <span className="font-editorial italic font-medium text-[#263B2E]">
                Property
              </span>{' '}
              Need?
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-base text-[#525B51] leading-relaxed">
              Whether you&apos;re planning a complete outdoor transformation or simply need help keeping your property in shape, select a pathway below to see how Ravo&apos;s can help.
            </p>
          </div>
        </div>

        {/* Three Prominent Image-Led Pathway Selectors */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          role="region"
          aria-label="Service pathways"
        >
          {SERVICE_PATHWAYS.map((pathway) => (
            <ServicePathway
              key={pathway.id}
              pathway={pathway}
              isSelected={pathway.id === selectedId}
              onSelect={() => setSelectedId(pathway.id)}
            />
          ))}
        </div>

        {/* Dynamic Expanded Detail Panel */}
        <div className="mt-8 lg:mt-10 bg-[#FFFFFF] border border-[#20251F]/12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePathway.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Featured Visual */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px]">
                <SafeImage
                  src={activePathway.image}
                  alt={activePathway.imageAlt}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  fallbackTitle={activePathway.title}
                />
              </div>

              {/* Associated Services & Conversion Actions */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.16em] uppercase font-semibold text-[#78866B]">
                    <span>Pathway {activePathway.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>Once-Off or Ongoing Options</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#20251F]">
                    {activePathway.title}
                  </h3>

                  <p className="mt-3 text-[15px] sm:text-base text-[#525B51] leading-relaxed max-w-2xl">
                    {activePathway.description}
                  </p>

                  {/* Included Services List */}
                  <div className="mt-7 pt-6 border-t border-[#20251F]/10">
                    <p className="text-xs tracking-[0.16em] uppercase font-semibold text-[#20251F]/60 mb-4">
                      Included Services
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {activePathway.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-3 text-sm sm:text-[15px] font-medium text-[#20251F]"
                        >
                          <Check
                            className="w-4 h-4 text-[#B77A52] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Pathway CTAs */}
                <div className="mt-8 pt-6 border-t border-[#20251F]/10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(activePathway.defaultQuoteService)}
                    className="inline-flex items-center justify-center gap-2 bg-[#263B2E] text-[#F3F0E8] px-6 py-3.5 text-sm font-semibold hover:bg-[#1A2A20] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Request a Quote for {activePathway.title}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection(activePathway.sectionAnchor)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#263B2E] hover:text-[#B77A52] px-2 py-2 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>{activePathway.ctaLabel} details</span>
                    <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
