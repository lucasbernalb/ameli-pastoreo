import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoOnHoverProps {
  image: string;
  video: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const VideoOnHover = ({
  image,
  video,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'absolute inset-0',
}: VideoOnHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play()?.catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const handleTouchStart = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play()?.catch(() => {});
      setIsHovered(true);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsHovered(false);
    }
  };

  return (
    <div
      className={containerClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <motion.img
        src={image}
        alt={alt}
        className={className}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        loading="lazy"
      />
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        className={`absolute inset-0 ${className} ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.4s' }}
      />
    </div>
  );
};

export default VideoOnHover;
