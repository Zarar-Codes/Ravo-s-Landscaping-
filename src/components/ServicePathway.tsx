import { ArrowUpRight } from 'lucide-react';
import type { ServicePathwayData } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface ServicePathwayProps {
  pathway: ServicePathwayData;
  isSelected: boolean;
  onSelect: () => void;
}

export function ServicePathway({
  pathway,
  isSelected,
  onSelect,
}: ServicePathwayProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`group relative text-left w-full flex flex-col justify-between overflow-hidden transition-all duration-300 cursor-pointer border ${
        isSelected
          ? 'border-[#263B2E] bg-[#263B2E] text-[#F3F0E8]'
          : 'border-[#20251F]/15 bg-[#FFFFFF] text-[#20251F] hover:border-[#263B2E]/50'
      }`}
    >
      {/* Image Header Panel */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <SafeImage
          src={pathway.image}
          alt={pathway.imageAlt}
          containerClassName="w-full h-full"
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isSelected ? 'scale-[1.04]' : 'group-hover:scale-[1.04]'
          }`}
          fallbackTitle={pathway.title}
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-300 ${
            isSelected
              ? 'bg-gradient-to-t from-[#263B2E] via-[#263B2E]/25 to-transparent opacity-95'
              : 'bg-gradient-to-t from-[#1A2A20]/65 via-transparent to-transparent opacity-80 group-hover:opacity-65'
          }`}
        />
        <span
          className={`absolute top-4 left-4 font-display text-xs font-bold tracking-[0.18em] uppercase tabular-nums ${
            isSelected ? 'text-[#E5C1A7]' : 'text-white/95'
          }`}
        >
          Pathway {pathway.number}
        </span>
      </div>

      {/* Text Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight leading-snug">
            {pathway.title}
          </h3>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              isSelected ? 'text-[#F3F0E8]/80' : 'text-[#525B51]'
            }`}
          >
            {pathway.subtitle}
          </p>
        </div>

        <div className="pt-4 border-t border-current/15 flex items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase">
          <span className={isSelected ? 'text-[#E5C1A7]' : 'text-[#263B2E]'}>
            {isSelected ? 'Selected Pathway' : pathway.ctaLabel}
          </span>
          <ArrowUpRight
            className={`w-4 h-4 transition-transform duration-200 ${
              isSelected
                ? 'text-[#E5C1A7] translate-x-0.5 -translate-y-0.5'
                : 'text-[#263B2E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    </button>
  );
}
