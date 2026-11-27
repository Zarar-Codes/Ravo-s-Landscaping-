import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import type { ShowcaseProject } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface ProjectModalProps {
  project: ShowcaseProject | null;
  onClose: () => void;
  onEnquire: (serviceName: string) => void;
}

export function ProjectModal({ project, onClose, onEnquire }: ProjectModalProps) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && project.galleryImages.length > 1) {
        setImageIndex((prev) => (prev + 1) % project.galleryImages.length);
      } else if (e.key === 'ArrowLeft' && project.galleryImages.length > 1) {
        setImageIndex(
          (prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const currentImage = project?.galleryImages[imageIndex] ?? project?.galleryImages[0];

  return (
    <AnimatePresence>
      {project && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#142018]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.985 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F3F0E8] text-[#20251F] w-full max-w-6xl max-h-[92vh] overflow-y-auto border border-[#20251F]/15"
          >
            {/* Modal Top Bar */}
            <div className="sticky top-0 z-20 bg-[#F3F0E8]/95 backdrop-blur-sm px-6 sm:px-8 py-4 border-b border-[#20251F]/12 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase font-semibold text-[#78866B]">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>Representative Scope Showcase</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="w-10 h-10 inline-flex items-center justify-center border border-[#20251F]/20 text-[#20251F] hover:bg-[#263B2E] hover:text-[#F3F0E8] hover:border-[#263B2E] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Viewer */}
              <div className="lg:col-span-7 bg-[#1A2A20] flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <SafeImage
                    src={currentImage.src}
                    alt={currentImage.alt}
                    loading="eager"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                    fallbackTitle={project.title}
                  />
                </div>

                {/* Caption & Image Controls */}
                <div className="px-6 py-4 bg-[#1A2A20] text-[#F3F0E8] flex flex-wrap items-center justify-between gap-4 border-t border-[#F3F0E8]/10">
                  <p className="text-xs sm:text-sm text-[#F3F0E8]/80">
                    {currentImage.caption}
                  </p>

                  {project.galleryImages.length > 1 && (
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-[#F3F0E8]/60 tabular-nums mr-2">
                        {imageIndex + 1} / {project.galleryImages.length}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setImageIndex(
                            (prev) =>
                              (prev - 1 + project.galleryImages.length) %
                              project.galleryImages.length
                          )
                        }
                        aria-label="Previous image"
                        className="w-9 h-9 inline-flex items-center justify-center border border-[#F3F0E8]/25 text-[#F3F0E8] hover:border-[#B77A52] hover:text-[#B77A52] transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setImageIndex((prev) => (prev + 1) % project.galleryImages.length)
                        }
                        aria-label="Next image"
                        className="w-9 h-9 inline-flex items-center justify-center border border-[#F3F0E8]/25 text-[#F3F0E8] hover:border-[#B77A52] hover:text-[#B77A52] transition-colors cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Structured Project Storytelling */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8">
                <div>
                  <h3
                    id="project-modal-title"
                    className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#20251F]"
                  >
                    {project.title}
                  </h3>

                  <dl className="mt-7 space-y-5 border-t border-[#20251F]/12 pt-6">
                    <div>
                      <dt className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#B77A52]">
                        Project Type
                      </dt>
                      <dd className="mt-1 text-sm sm:text-[15px] font-medium text-[#20251F]">
                        {project.projectType}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#78866B]">
                        The Space
                      </dt>
                      <dd className="mt-1 text-sm text-[#525B51] leading-relaxed">
                        {project.theSpace}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#78866B]">
                        The Work
                      </dt>
                      <dd className="mt-1 text-sm text-[#525B51] leading-relaxed">
                        {project.theWork}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#78866B]">
                        The Result
                      </dt>
                      <dd className="mt-1 text-sm text-[#525B51] leading-relaxed">
                        {project.theResult}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="pt-6 border-t border-[#20251F]/12 space-y-4">
                  <button
                    type="button"
                    onClick={() => {
                      const service = project.quoteService;
                      onClose();
                      onEnquire(service);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#263B2E] text-[#F3F0E8] px-6 py-4 text-sm font-semibold hover:bg-[#1A2A20] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Enquire About Similar Work</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <p className="text-[11px] text-[#525B51] leading-relaxed">
                    Visual showcase illustrates Ravo&apos;s published service capabilities. Official job photos can be viewed on Ravo&apos;s Instagram and Facebook pages.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
