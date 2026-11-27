import { useEffect, useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/businessData';
import { MobileNavigation } from './MobileNavigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'approach', 'services', 'portfolio', 'why-ravos', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.05, 0.2, 0.4],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToHref = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#F3F0E8]/95 backdrop-blur-md border-b border-[#20251F]/12 text-[#20251F]'
            : 'bg-gradient-to-b from-[#1A2A20]/75 via-[#1A2A20]/35 to-transparent text-[#F3F0E8]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (single clean text element) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToHref('#home');
            }}
            className="font-display text-xl lg:text-2xl font-extrabold tracking-tight whitespace-nowrap shrink-0"
          >
            RAVO&apos;S
          </a>

          {/* Zone 2: Clean Single-Line Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHref(link.href);
                  }}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    scrolled
                      ? isActive
                        ? 'text-[#263B2E] font-semibold'
                        : 'text-[#20251F]/75 hover:text-[#20251F]'
                      : isActive
                        ? 'text-white font-semibold'
                        : 'text-[#F3F0E8]/85 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] transition-transform duration-200 origin-left ${
                      scrolled ? 'bg-[#B77A52]' : 'bg-[#F3F0E8]'
                    } ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Direct Phone */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <a
              href={BUSINESS_INFO.phones[0].href}
              className={`hidden xl:inline-flex items-center gap-2 text-sm font-semibold tabular-nums whitespace-nowrap shrink-0 transition-colors ${
                scrolled
                  ? 'text-[#263B2E] hover:text-[#B77A52]'
                  : 'text-[#F3F0E8] hover:text-[#E5C1A7]'
              }`}
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{BUSINESS_INFO.phones[0].display}</span>
            </a>
            <a
              href="#quote-form"
              onClick={(e) => {
                e.preventDefault();
                scrollToHref('#quote-form');
              }}
              className={`px-5 py-2.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                scrolled
                  ? 'bg-[#263B2E] text-[#F3F0E8] hover:bg-[#1A2A20]'
                  : 'bg-[#F3F0E8] text-[#20251F] hover:bg-white'
              }`}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Compact Controls */}
          <div className="flex lg:hidden items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phones[0].href}
              aria-label={`Call ${BUSINESS_INFO.phones[0].display}`}
              className={`w-11 h-11 inline-flex items-center justify-center border transition-colors ${
                scrolled
                  ? 'border-[#20251F]/20 text-[#20251F]'
                  : 'border-[#F3F0E8]/30 text-[#F3F0E8]'
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className={`w-11 h-11 inline-flex items-center justify-center border transition-colors ${
                scrolled
                  ? 'border-[#20251F]/20 text-[#20251F]'
                  : 'border-[#F3F0E8]/30 text-[#F3F0E8]'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={mobileOpen}
        activeSection={activeSection}
        onClose={() => setMobileOpen(false)}
        onNavigate={scrollToHref}
      />
    </>
  );
}
