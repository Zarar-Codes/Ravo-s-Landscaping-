import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  BUSINESS_INFO,
  PORTFOLIO_CATEGORIES,
  SHOWCASE_PROJECTS,
  type PortfolioCategory,
  type ShowcaseProject,
} from '../data/businessData';
import { SafeImage } from './SafeImage';
import { ProjectModal } from './ProjectModal';

interface ProjectsGalleryProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export function ProjectsGallery({ onSelectServiceForQuote }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? SHOWCASE_PROJECTS
      : SHOWCASE_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="bg-[#FFFFFF] text-[#20251F] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
              Selected Work &amp; Capabilities
            </p>
            <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.4vw,3.85rem)] text-[#20251F]">
              Real Work.{' '}
              <span className="block mt-1">
                Visible{' '}
                <span className="font-editorial italic font-medium text-[#263B2E]">
                  Difference.
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base text-[#525B51] leading-relaxed">
              Explore examples of landscaping, outdoor improvements and property work reflecting Ravo&apos;s published services. Select any showcase to read the full breakdown.
            </p>
            <p className="mt-3 text-xs text-[#525B51]/85 leading-relaxed">
              Note: Photography below is representative of Ravo&apos;s service categories. For live recent site photos, visit{' '}
              <a
                href={BUSINESS_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-[#263B2E] hover:text-[#B77A52] transition-colors"
              >
                @ravos_landscaping
              </a>{' '}
              or{' '}
              <a
                href={BUSINESS_INFO.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-[#263B2E] hover:text-[#B77A52] transition-colors"
              >
                ravosmaintenance.com.au
              </a>
              .
            </p>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-[#20251F]/12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#263B2E] text-[#F3F0E8]'
                    : 'bg-[#F3F0E8] text-[#20251F]/75 hover:text-[#20251F] hover:bg-[#EAE5D9]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {filteredProjects.map((project, idx) => {
            const dynamicSpan =
              filteredProjects.length === 1
                ? 'lg:col-span-12'
                : activeCategory === 'All Projects'
                  ? project.spanClass
                  : 'lg:col-span-6';

            const dynamicAspect =
              filteredProjects.length === 1
                ? 'aspect-[16/9] max-h-[620px]'
                : activeCategory === 'All Projects'
                  ? project.aspectClass
                  : 'aspect-[16/10]';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(idx * 0.05, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${dynamicSpan} group`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B77A52]"
                >
                  <div className="relative overflow-hidden bg-[#263B2E]/10">
                    <SafeImage
                      src={project.image}
                      alt={project.galleryImages[0].alt}
                      containerClassName={`relative overflow-hidden w-full ${dynamicAspect}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      fallbackTitle={project.title}
                    />
                  </div>

                  {/* Minimal Editorial Caption */}
                  <div className="mt-4 pt-4 border-t border-[#20251F]/12 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-[#78866B] font-medium">
                        {project.category} <span aria-hidden="true">·</span> {project.projectType}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#20251F] group-hover:text-[#263B2E] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#525B51] leading-relaxed line-clamp-2 max-w-xl">
                        {project.theResult}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 w-10 h-10 shrink-0 border border-[#20251F]/15 inline-flex items-center justify-center text-[#263B2E] group-hover:bg-[#263B2E] group-hover:text-[#F3F0E8] group-hover:border-[#263B2E] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Project Modal Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={onSelectServiceForQuote}
      />
    </section>
  );
}
