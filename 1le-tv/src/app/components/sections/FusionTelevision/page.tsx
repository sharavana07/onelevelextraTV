"use client";
import Image from "next/image";

export default function FusionTelevision() {
  return (
    <section className="w-full bg-[#5a005a] py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a005a] via-[#4a0048] to-[#5a005a] opacity-60" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-[420px] lg:h-[540px] rounded-2xl overflow-hidden group shadow-2xl">
            <Image
              src="/images/fusion-tv-hero.png"
              alt="Fusion Television – Learning with technology"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Premium badge overlay */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-[#5a005a] text-xs font-bold uppercase tracking-wider">
                Innovation
              </span>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="text-white space-y-10">
            {/* Brand Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold">
                  1LE FUSION
                </p>
                <div className="h-px w-12 bg-gradient-to-r from-white/40 to-transparent" />
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                Fusion
                <br />
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Television
                </span>
              </h2>
              
              <p className="text-sm text-white/50 italic font-light tracking-wide">
                One Level Extra
              </p>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
                Dream project of 1le bringing technology to life by empowering
                lower-income families and students to advance their knowledge,
                with a TV that works as a complete in-built PC—requiring no
                external computer.
              </p>
              
              {/* Key highlights as elegant bullets */}
              <ul className="space-y-2 pt-2">
                {[
                  "All-in-one PC television",
                  "Accessible learning technology",
                  "No external computer needed"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Feature
                label="Keyboard & Mouse"
                icon="/icon/keyboard.svg"
              />
              <Feature
                label="16GB RAM"
                icon="/icon/ram.svg"
              />
              <Feature
                label="Built-in Wi-Fi"
                icon="/icon/wifi.svg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300">
        <span className="text-white text-xs uppercase tracking-widest font-light">Explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Feature Item Component - REFINED  */
/* ---------------------------------- */
function Feature({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) {
  return (
    <div className="relative flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-500 group overflow-hidden">
      {/* Elegant shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
      
      {/* Icon Container */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-white/15 group-hover:to-white/10 transition-all duration-500 shadow-lg">
        <Image
          src={icon}
          alt={label}
          width={24}
          height={24}
          className="brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        />
      </div>
      
      {/* Label */}
      <span className="relative text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-500 tracking-wide">
        {label}
      </span>
    </div>
  );
}