import { motion } from 'motion/react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/businessData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToHref = (href: string) => {
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#1A2A20] text-[#F3F0E8] pt-16 sm:pt-24 pb-10 border-t border-[#F3F0E8]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Closing Editorial Statement + Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="pb-12 sm:pb-16 border-b border-[#F3F0E8]/15 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#E5C1A7] mb-3">
              {BUSINESS_INFO.name}
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.025em] leading-[1.02] text-[clamp(1.85rem,4vw,3.5rem)] text-white max-w-2xl">
              Better Outdoor Spaces Start{' '}
              <span className="font-editorial italic font-medium text-[#E5C1A7]">
                Here.
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2.5 border border-[#F3F0E8]/25 px-5 py-3 text-xs font-semibold tracking-[0.16em] uppercase text-[#F3F0E8] hover:border-[#E5C1A7] hover:text-[#E5C1A7] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>

        {/* Main Footer Columns */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-display text-2xl font-extrabold tracking-tight text-white">
              RAVO&apos;S
            </p>
            <p className="text-sm text-[#F3F0E8]/75 leading-relaxed max-w-sm">
              Landscaping, outdoor improvements and reliable property maintenance in Trafalgar and surrounding areas.
            </p>
            <p className="text-xs text-[#F3F0E8]/60 leading-relaxed">
              Family-owned · Over 15 years experience · Fully insured
            </p>
          </div>

          {/* Homepage Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold tracking-[0.18em] uppercase text-[#E5C1A7] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHref(link.href);
                    }}
                    className="text-[#F3F0E8]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold tracking-[0.18em] uppercase text-[#E5C1A7] mb-4">
              Service Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#landscaping"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHref('#landscaping');
                  }}
                  className="text-[#F3F0E8]/80 hover:text-white transition-colors"
                >
                  Landscaping &amp; Garden Makeovers
                </a>
              </li>
              <li>
                <a
                  href="#landscaping"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHref('#landscaping');
                  }}
                  className="text-[#F3F0E8]/80 hover:text-white transition-colors"
                >
                  Decking, Retaining Walls &amp; Fire Pits
                </a>
              </li>
              <li>
                <a
                  href="#maintenance"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHref('#maintenance');
                  }}
                  className="text-[#F3F0E8]/80 hover:text-white transition-colors"
                >
                  Property Maintenance &amp; Lawn Care
                </a>
              </li>
              <li>
                <a
                  href="#specialist"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHref('#specialist');
                  }}
                  className="text-[#F3F0E8]/80 hover:text-white transition-colors"
                >
                  Custom Timber Milling &amp; Concreting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold tracking-[0.18em] uppercase text-[#E5C1A7]">
              Contact &amp; Social
            </h3>
            <div className="space-y-1.5 text-sm text-[#F3F0E8]/80">
              <p>{BUSINESS_INFO.address.street}</p>
              <p>
                {BUSINESS_INFO.address.suburb} {BUSINESS_INFO.address.state}{' '}
                {BUSINESS_INFO.address.postcode}, {BUSINESS_INFO.address.country}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-sm font-semibold tabular-nums">
              {BUSINESS_INFO.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={phone.href}
                  className="text-white hover:text-[#E5C1A7] transition-colors w-fit"
                >
                  {phone.display}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={BUSINESS_INFO.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#E5C1A7] hover:text-white transition-colors"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#E5C1A7] hover:text-white transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-7 border-t border-[#F3F0E8]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#F3F0E8]/55">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>Trafalgar · West &amp; South Gippsland · Latrobe Valley, Victoria</p>
        </div>
      </div>
    </footer>
  );
}
