import { useState } from 'react';
import { Trees } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#263B2E]/10',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  fallbackTitle,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`${containerClassName} flex flex-col items-center justify-center bg-gradient-to-br from-[#263B2E] to-[#1A2A20] text-[#F3F0E8] p-6 text-center`}
        role="img"
        aria-label={alt}
      >
        <Trees className="w-8 h-8 text-[#B77A52] mb-3 opacity-80" aria-hidden="true" />
        <p className="font-display text-sm tracking-tight max-w-xs">
          {fallbackTitle || "Ravo's Landscaping & Property Maintenance"}
        </p>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={loading === 'eager' ? 'sync' : 'async'}
        fetchPriority={fetchPriority}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
