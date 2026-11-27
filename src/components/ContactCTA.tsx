import { motion } from 'motion/react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, MEDIA } from '../data/businessData';

export function ContactCTA() {
  const scrollToForm = () => {
    const target = document.getElementById('quote-form');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden bg-[#1A2A20] text-[#F3F0E8] py-24 sm:py-32 lg:py-40">
      {/* Full-Bleed Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={MEDIA.deckFirepit}
          alt="Representative Australian backyard outdoor living space with timber deck and fire pit at dusk"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#142018]/92 via-[#1A2A20]/78 to-[#142018]/65"
        />
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#E5C1A7] mb-4">
            Start With A Conversation
          </p>
          <h2 className="font-display font-extrabold tracking-[-0.025em] leading-[1.01] text-[clamp(2.25rem,5vw,4.5rem)] text-white">
            Ready To Improve Your{' '}
            <span className="font-editorial italic font-medium text-[#E5C1A7]">
              Outdoor Space?
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#F3F0E8]/90 leading-relaxed max-w-xl">
            Whether it&apos;s a garden transformation, ongoing maintenance or a specific outdoor project, start with a conversation.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-[#B77A52] text-white px-7 py-4 text-sm font-semibold tracking-wide hover:bg-[#9E6540] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={BUSINESS_INFO.phones[0].href}
              className="inline-flex items-center justify-center gap-2.5 border border-[#F3F0E8]/55 bg-[#1A2A20]/45 backdrop-blur-xs text-[#F3F0E8] px-7 py-4 text-sm font-semibold tracking-wide hover:bg-[#F3F0E8] hover:text-[#20251F] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call Ravo&apos;s · {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
