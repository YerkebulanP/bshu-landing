"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATE_INTERVAL_MS = 5000;

export type GalleryImage = { src: string; alt: string };

export function HeroGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      ROTATE_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={image.alt}
            aria-current={i === index}
            className={clsx(
              "h-2 rounded-full transition-all",
              i === index ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80",
            )}
          />
        ))}
      </div>
    </div>
  );
}
