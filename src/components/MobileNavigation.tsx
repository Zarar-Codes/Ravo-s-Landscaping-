import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Phone, ArrowUpRight, X } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/businessData';

interface MobileNavigationProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export function MobileNavigation({
  isOpen,
  activeSection,
  onClose,
  onNavigate,
}: MobileNavigationProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#1A2A20] text-[#F3F0E8] flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-[#F3F0E8]/15">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#home');
              }}
              className="font-display text-xl font-extrabold tracking-tight text-[#F3F0E8] whitespace-nowrap"
            >
              RAVO&apos;S
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-11 h-11 flex items-center justify-center border border-[#F3F0E8]/25 text-[#F3F0E8] hover:border-[#B77A52] hover:text-[#B77A52] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Primary Nav Links */}
          <nav className="py-8 flex flex-col gap-2" aria-label="Mobile site sections">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.04 * idx,
                    duration: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href);
                  }}
                  className={`py-3 flex items-baseline justify-between border-b border-[#F3F0E8]/10 font-display text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                    isActive
                      ? 'text-[#B77A52]'
                      : 'text-[#F3F0E8] hover:text-[#B77A52]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-sans-body text-xs text-[#F3F0E8]/50 tabular-nums">
                    0{idx + 1}
                  </span>
                </motion.a>
              );
            })}
          </nav>

          {/* Actions & Direct Contact */}
          <div className="pt-6 border-t border-[#F3F0E8]/15 space-y-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('#quote-form');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#B77A52] text-white px-6 py-4 text-sm font-semibold tracking-wide hover:bg-[#9E6540] transition-colors whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.phones[0].href}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-[#F3F0E8]/30 text-[#F3F0E8] px-6 py-4 text-sm font-semibold tracking-wide hover:border-[#F3F0E8] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{BUSINESS_INFO.phones[0].display}</span>
              </a>
            </div>
            <p className="text-xs text-[#F3F0E8]/65 leading-relaxed">
              {BUSINESS_INFO.address.full} · Serving Trafalgar, West &amp; South Gippsland &amp; the Latrobe Valley
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
