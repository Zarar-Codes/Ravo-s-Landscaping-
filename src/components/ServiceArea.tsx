import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export function ServiceArea() {
  return (
    <section
      id="service-area"
      className="bg-[#FFFFFF] text-[#20251F] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Copy & Verified Coverage */}
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
              Service Area
            </p>
            <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
              Local Experience.{' '}
              <span className="block mt-1">
                Practical{' '}
                <span className="font-editorial italic font-medium text-[#263B2E]">
                  Property
                </span>{' '}
                Care.
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#525B51] leading-relaxed max-w-xl">
              Based in Trafalgar, Victoria, Ravo&apos;s provides landscaping and property maintenance services across West &amp; South Gippsland and the Latrobe Valley.
            </p>

            {/* Verified Regions List */}
            <div className="mt-9 pt-7 border-t border-[#20251F]/12 grid grid-cols-2 gap-y-5 gap-x-8 max-w-lg">
              {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                <div key={area} className="flex items-baseline gap-3">
                  <span className="font-display text-xs font-bold text-[#B77A52] tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-[#20251F]">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#20251F]/12 flex items-start gap-3 text-sm text-[#525B51]">
              <MapPin className="w-4 h-4 text-[#B77A52] mt-0.5 shrink-0" aria-hidden="true" />
              <p>
                <span className="font-semibold text-[#20251F]">Base Address:</span>{' '}
                {BUSINESS_INFO.address.full}
              </p>
            </div>
          </div>

          {/* Right Minimalist Architectural Regional Map Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative bg-[#F3F0E8] border border-[#20251F]/12 p-6 sm:p-10 aspect-[4/3] flex flex-col justify-between overflow-hidden">
              {/* Topographic / Corridor SVG Illustration */}
              <svg
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                role="img"
                aria-label="Stylised regional map showing Trafalgar VIC 3824 surrounded by West Gippsland, South Gippsland and the Latrobe Valley"
              >
                {/* Subtle Topographic Contour Lines */}
                <path
                  d="M-20 95 C 120 65, 220 140, 360 110 C 470 85, 540 120, 620 95"
                  stroke="#78866B"
                  strokeOpacity="0.22"
                  strokeWidth="1.2"
                />
                <path
                  d="M-20 175 C 140 145, 250 225, 390 190 C 490 165, 550 205, 620 185"
                  stroke="#78866B"
                  strokeOpacity="0.22"
                  strokeWidth="1.2"
                />
                <path
                  d="M-20 315 C 130 285, 260 355, 420 320 C 510 300, 560 335, 620 310"
                  stroke="#78866B"
                  strokeOpacity="0.2"
                  strokeWidth="1.2"
                />
                <path
                  d="M-20 385 C 160 365, 290 420, 460 385 C 535 370, 580 390, 620 380"
                  stroke="#78866B"
                  strokeOpacity="0.16"
                  strokeWidth="1.2"
                />

                {/* Princes Highway Corridor Line (West Gippsland -> Trafalgar -> Latrobe Valley) */}
                <path
                  d="M 45 205 Q 190 228 295 215 T 555 200"
                  stroke="#263B2E"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* South Gippsland Corridor */}
                <path
                  d="M 295 215 Q 275 305 245 385"
                  stroke="#263B2E"
                  strokeOpacity="0.28"
                  strokeWidth="1.8"
                  strokeDasharray="5 6"
                />

                {/* Concentric Reach Rings Centered on Trafalgar */}
                <circle
                  cx="295"
                  cy="215"
                  r="148"
                  stroke="#263B2E"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                />
                <circle
                  cx="295"
                  cy="215"
                  r="92"
                  stroke="#263B2E"
                  strokeOpacity="0.2"
                  strokeWidth="1"
                />
                <circle
                  cx="295"
                  cy="215"
                  r="42"
                  fill="#263B2E"
                  fillOpacity="0.08"
                  stroke="#B77A52"
                  strokeOpacity="0.55"
                  strokeWidth="1.2"
                />

                {/* Regional Markers */}
                {/* West Gippsland */}
                <circle cx="135" cy="212" r="4.5" fill="#78866B" />
                <text
                  x="135"
                  y="194"
                  textAnchor="middle"
                  fill="#20251F"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0.12em"
                >
                  WEST GIPPSLAND
                </text>

                {/* Latrobe Valley */}
                <circle cx="465" cy="204" r="4.5" fill="#78866B" />
                <text
                  x="465"
                  y="186"
                  textAnchor="middle"
                  fill="#20251F"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0.12em"
                >
                  LATROBE VALLEY
                </text>

                {/* South Gippsland */}
                <circle cx="255" cy="348" r="4.5" fill="#78866B" />
                <text
                  x="255"
                  y="372"
                  textAnchor="middle"
                  fill="#20251F"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0.12em"
                >
                  SOUTH GIPPSLAND
                </text>

                {/* Primary Location Marker: Trafalgar VIC 3824 */}
                <circle cx="295" cy="215" r="9" fill="#263B2E" />
                <circle cx="295" cy="215" r="3.5" fill="#F3F0E8" />

                <rect
                  x="212"
                  y="138"
                  width="166"
                  height="42"
                  fill="#263B2E"
                />
                <text
                  x="295"
                  y="156"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="0.14em"
                >
                  TRAFALGAR VIC 3824
                </text>
                <text
                  x="295"
                  y="171"
                  textAnchor="middle"
                  fill="#E5C1A7"
                  fontSize="9.5"
                  fontWeight="600"
                  letterSpacing="0.1em"
                >
                  7 FACTORY ROAD
                </text>
              </svg>

              <div className="pt-4 border-t border-[#20251F]/10 flex items-center justify-between text-xs text-[#525B51]">
                <span>Regional Victoria · Australia</span>
                <span className="tabular-nums">38.2067° S · 146.1536° E</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
