import { useCallback, useRef, useState } from 'react';
import { MoveHorizontal, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, MEDIA } from '../data/businessData';

interface BeforeAfterSliderProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export function BeforeAfterSlider({ onSelectServiceForQuote }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const rawPercent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(4, Math.min(96, rawPercent)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((prev) => Math.max(4, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((prev) => Math.min(96, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(4);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(96);
    }
  };

  return (
    <section
      id="transformations"
      className="bg-[#F3F0E8] text-[#20251F] py-20 sm:py-28 lg:py-36 border-t border-[#20251F]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
              Outdoor Transformations
            </p>
            <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
              See The Difference Thoughtful{' '}
              <span className="font-editorial italic font-medium text-[#263B2E]">
                Work
              </span>{' '}
              Makes.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base text-[#525B51] leading-relaxed">
              Drag the divider across the yard below to compare an ungraded, overgrown space against a structured retaining wall, fresh turf, native beds and stone stepping path.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          role="slider"
          tabIndex={0}
          aria-label="Before and after landscape transformation comparison slider"
          aria-valuemin={4}
          aria-valuemax={96}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% before image visible`}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[680px] overflow-hidden select-none touch-none bg-[#1A2A20] cursor-ew-resize border border-[#20251F]/15"
        >
          {/* AFTER Image (Full Base Layer) */}
          <img
            src={MEDIA.transformAfter}
            alt="Representative landscaped backyard after transformation with hardwood sleeper retaining walls, native garden beds, bluestone stepping stones and level green turf"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE Image (Clipped Overlay Layer) */}
          <div
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <img
              src={MEDIA.transformBefore}
              alt="Representative unmaintained backyard before landscaping with patchy dry grass, uneven slope and overgrown weeds along the fence"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              draggable={false}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Crisp Unboxed Labels with Scrim */}
          <div
            aria-hidden="true"
            className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#1A2A20]/80 backdrop-blur-xs text-[#F3F0E8] px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase pointer-events-none"
          >
            Before
          </div>
          <div
            aria-hidden="true"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#263B2E]/90 backdrop-blur-xs text-[#F3F0E8] px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase pointer-events-none"
          >
            After
          </div>

          {/* Vertical Divider Line & Handle */}
          <div
            style={{ left: `${position}%` }}
            aria-hidden="true"
            className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-[#F3F0E8] shadow-[0_0_16px_rgba(0,0,0,0.45)] pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#F3F0E8] text-[#20251F] border border-[#20251F]/20 shadow-md flex items-center justify-center">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Honest Editorial Context Bar */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-5 border-t border-[#20251F]/12">
          <p className="text-xs sm:text-sm text-[#525B51] max-w-2xl leading-relaxed">
            <span className="font-semibold text-[#20251F]">Representative Transformation Preview</span>
            <span aria-hidden="true" className="mx-2">·</span>
            Illustrates how grading, timber retaining walls, native planting and fresh lawn restore usability. Use arrow keys or drag to compare. View live local jobs on{' '}
            <a
              href={BUSINESS_INFO.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-[#263B2E] hover:text-[#B77A52]"
            >
              Instagram
            </a>
            .
          </p>

          <button
            type="button"
            onClick={() => onSelectServiceForQuote('Garden Makeover')}
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-[#263B2E] hover:text-[#B77A52] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Plan a Garden Makeover</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
