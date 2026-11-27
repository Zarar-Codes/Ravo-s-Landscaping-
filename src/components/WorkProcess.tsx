import { motion } from 'motion/react';
import { WORK_PROCESS_STEPS } from '../data/businessData';

export function WorkProcess() {
  return (
    <section
      id="process"
      className="bg-[#FFFFFF] text-[#20251F] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
            How Ravo&apos;s Works
          </p>
          <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
            From The First Conversation To The Finished{' '}
            <span className="font-editorial italic font-medium text-[#263B2E]">
              Outdoor Space.
            </span>
          </h2>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting Animated Horizontal Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
            className="hidden lg:block origin-left absolute top-[26px] left-0 right-0 h-px bg-[#20251F]/18"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {WORK_PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-6 lg:pl-0 border-l lg:border-l-0 border-[#20251F]/15"
              >
                {/* Step Number Marker */}
                <div className="relative inline-flex items-center justify-center w-13 h-13 bg-[#F3F0E8] border border-[#20251F]/15 font-display text-lg font-extrabold text-[#263B2E] tabular-nums mb-6">
                  {step.number}
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-[#20251F]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] text-[#525B51] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
