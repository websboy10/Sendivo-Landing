import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className = "" }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-gradient-to-br from-slate-800 to-teal-900 flex items-center justify-center ${className}`}>
        <div className="text-white/40 text-center p-8">
          <p className="text-sm">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
