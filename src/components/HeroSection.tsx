import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { MEDIA } from '../data/businessData';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '14%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, prefersReducedMotion ? 1.02 : 1.09]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-end overflow-hidden bg-[#1A2A20] text-[#F3F0E8]"
    >
      {/* Cinematic Background with Clip-Path Reveal & Subtle Scroll Parallax */}
      <motion.div
        initial={
          prefersReducedMotion
            ? { opacity: 1 }
            : { clipPath: 'inset(4% 3% 4% 3%)', opacity: 0.85 }
        }
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src={MEDIA.hero}
          alt="Contemporary Australian residential garden with natural stone stepping stones, manicured lawn, hardwood retaining wall and timber deck"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          referrerPolicy="no-referrer"
          style={{ y: bgY, scale: bgScale }}
          className="w-full h-full object-cover object-center will-change-transform"
        />
        {/* Measured multi-stop scrim for guaranteed WCAG AA legibility across all screen widths */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#142018]/92 via-[#1A2A20]/50 to-[#142018]/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#142018]/75 via-[#142018]/25 to-transparent"
        />
      </motion.div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow metadata — clean unboxed typography */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-[13px] tracking-[0.18em] uppercase text-[#E5D9C9] font-semibold mb-5"
          >
            Trafalgar · Victoria · 15+ Years of Experience
          </motion.p>

          {/* Primary H1 Display Headline */}
          <h1 className="font-display font-extrabold text-white tracking-[-0.03em] leading-[0.98] text-[clamp(2.6rem,6.4vw,5.75rem)]">
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              OUTDOOR SPACES.
            </motion.span>
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              DONE{' '}
              <span className="font-editorial italic font-medium tracking-normal text-[#E5C1A7]">
                right.
              </span>
            </motion.span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base sm:text-lg text-[#F3F0E8]/90 leading-relaxed font-normal"
          >
            From complete garden transformations to reliable property maintenance, Ravo&apos;s brings experience and practical expertise to the spaces around your property.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo('portfolio')}
              className="inline-flex items-center justify-center gap-2.5 bg-[#B77A52] text-white px-7 py-4 text-sm font-semibold tracking-wide hover:bg-[#9E6540] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('quote-form')}
              className="inline-flex items-center justify-center gap-2 border border-[#F3F0E8]/55 bg-[#1A2A20]/45 backdrop-blur-xs text-[#F3F0E8] px-7 py-4 text-sm font-semibold tracking-wide hover:bg-[#F3F0E8] hover:text-[#20251F] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Editorial Trust Strip + Scroll Indicator */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-14 lg:mt-20 pt-6 border-t border-[#F3F0E8]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <p className="text-xs sm:text-[13px] tracking-[0.14em] uppercase text-[#F3F0E8]/80 font-medium">
            Family Owned <span aria-hidden="true" className="mx-2 text-[#B77A52]">·</span>
            Over 15 Years <span aria-hidden="true" className="mx-2 text-[#B77A52]">·</span>
            Ongoing or Once-Off Work
          </p>

          <button
            type="button"
            onClick={() => scrollTo('approach')}
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#F3F0E8]/80 hover:text-white transition-colors self-start sm:self-auto cursor-pointer whitespace-nowrap"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
