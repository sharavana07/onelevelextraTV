"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ================= CMS CONTENT ================= */
const cmsContent = {
  hero: {
    baseImage: "/images/rocket2.jpg",
    compareImage: "/images/rocket1.jpg",
    alt: "Display comparison",
    brand: {
      main: "1LE",
      subtitle: "One Level\nExtra",
    },
    scrollText: "Discover",
  },
  centerText: {
    headline: ["Brighter.", "Better."],
    subheadline: "Experience visuals that transcend expectation",
  },
  showcase: {
    image: "/images/parrot.jpg",
    alt: "Color accuracy demonstration",
    badge: "Display Technology",
    title: ["Perfect", "Color"],
    mainFeature: "100% Color Volume",
    description:
      "Enjoy accurate, vibrant colours on a reflection-free screen—stunning clarity in sunlight or complete darkness.",
    features: [
      "True-to-life accuracy",
      "Anti-reflective coating",
      "Adaptive brightness",
    ],
  },
};

/* ================= COMPONENT ================= */
export default function DisplayShowcaseSection() {
  const [imagesLoaded, setImagesLoaded] = useState({
    hero: false,
    compare: false,
    showcase: false,
  });

  const [sliderX, setSliderX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  /* ---------- Hero preload ---------- */
  useEffect(() => {
    const img = new window.Image();
    img.src = cmsContent.hero.baseImage;
    img.onload = () =>
      setImagesLoaded((prev) => ({ ...prev, hero: true }));
  }, []);

  /* ---------- Slider logic ---------- */
  const updateSlider = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.min(100, Math.max(0, percent)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    updateSlider(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      updateSlider(e.touches[0].clientX);
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      updateSlider(e.touches[0].clientX);
    } else {
      updateSlider(e.clientX);
    }
  };

  // Cleanup effect for event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchend", stopDrag);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mouseup", stopDrag);
        window.removeEventListener("touchend", stopDrag);
      };
    }
  }, [isDragging]);

  /* ================= RENDER ================= */
  return (
    <section className="w-full bg-[#5a005a] text-white overflow-hidden">

      {/* ================= HERO SLIDER ================= */}
      <div
        ref={sliderRef}
        className="relative w-full h-[85vh] overflow-hidden"
      >
        {!imagesLoaded.hero && (
          <div className="absolute inset-0 bg-[#4a004a] animate-pulse z-10" />
        )}

        {/* Base Image */}
        <Image
          src={cmsContent.hero.baseImage}
          alt={cmsContent.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Comparison Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
        >
          <Image
            src={cmsContent.hero.compareImage}
            alt="Enhanced display"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onLoad={() =>
              setImagesLoaded((prev) => ({ ...prev, compare: true }))
            }
          />
        </div>

        {/* Slider Divider */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/70 z-20 pointer-events-none"
          style={{ left: `${sliderX}%` }}
        />

        {/* Slider Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 cursor-ew-resize touch-none"
          style={{ left: `${sliderX}%` }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          role="slider"
          aria-label="Image comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderX)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              setSliderX(prev => Math.max(0, prev - 5));
            } else if (e.key === 'ArrowRight') {
              setSliderX(prev => Math.min(100, prev + 5));
            }
          }}
        >
          <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-xl">
            <div className="flex gap-1">
              <span className="w-1 h-4 bg-[#5a005a]" />
              <span className="w-1 h-4 bg-[#5a005a]" />
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#5a005a]/90 via-[#5a005a]/50 to-transparent z-10 pointer-events-none" />

        {/* Brand */}
        <div className="absolute top-12 left-12 flex items-center gap-3 z-20">
          <div className="text-6xl font-bold tracking-tighter">
            1<span className="text-white/80">LE</span>
          </div>
          <div className="h-12 w-px bg-white/30" />
          <div className="text-xs font-light tracking-widest uppercase text-white/70 leading-snug">
            One Level
            <br />
            Extra
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
          <div className="text-xs tracking-widest uppercase text-white/60">
            Discover
          </div>
          <div className="w-px h-12 bg-white/30" />
        </div>
      </div>

      {/* ================= CENTER TEXT ================= */}
      <div className="py-24 px-6 min-h-[50vh] flex items-center justify-center text-center">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
            Brighter.
            <br />
            <span className="text-white/80">Better.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Experience visuals that transcend expectation
          </p>
        </div>
      </div>

      {/* ================= SHOWCASE ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pb-32 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row gap-20 items-center w-full">

          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-2xl">
              {!imagesLoaded.showcase && (
                <div className="absolute inset-0 bg-[#4a004a] animate-pulse" />
              )}
              <Image
                src={cmsContent.showcase.image}
                alt={cmsContent.showcase.alt}
                width={700}
                height={500}
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoad={() =>
                  setImagesLoaded((prev) => ({ ...prev, showcase: true }))
                }
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <span className="inline-block px-4 py-2 border border-white/20 rounded-full text-xs tracking-widest uppercase text-white/70">
              Display Technology
            </span>

            <h3 className="text-5xl md:text-6xl font-bold leading-tight">
              Perfect
              <br />
              Color
            </h3>

            <p className="text-xl font-semibold">
              100% Color Volume
            </p>

            <p className="text-white/70">
              Enjoy accurate, vibrant colours on a reflection-free screen—stunning clarity in sunlight or complete darkness.
            </p>

            <ul className="space-y-3 pt-4">
              {cmsContent.showcase.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="h-20" />
    </section>
  );
}