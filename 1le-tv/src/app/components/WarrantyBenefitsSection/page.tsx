"use client";

export default function WarrantyBenefitsSection() {
  return (
    <section className="relative w-full bg-[#5a005a] text-white py-24 md:py-32 overflow-hidden">
      {/* Deep purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6a006a]/40 via-transparent to-[#4a004a]/60 pointer-events-none" />
      
      {/* Elegant metallic strips */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#d4af37]/90 via-[#f5d77a] to-[#d4af37]/90 shadow-2xl" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-[#d4af37]/90 via-[#f5d77a] to-[#d4af37]/90 shadow-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] text-[#f5d77a] uppercase">
                1le Technology
              </span>
              <div className="w-20 h-[1px] bg-gradient-to-r from-[#f5d77a] to-transparent" />
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight">
              Sit Back.
              <br />
              <span className="font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Relax.
              </span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Relax and enjoy more with 1le Technology&apos;s integrated panel care
              that keeps your screen like new for longer, backed with the
              confidence of a comprehensive{" "}
              <span className="text-[#f5d77a] font-medium">3-year warranty</span>.
            </p>

            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5d77a]" />
                <span>Premium panel protection technology</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5d77a]" />
                <span>Extended coverage for complete peace of mind</span>
              </div>
            </div>
          </div>

          {/* Right – Warranty Highlight */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5d77a] to-[#b8860b] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-[#f5d77a] via-[#e6c858] to-[#b8860b] rounded-2xl px-12 py-16 shadow-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out">
                <div className="text-center text-black">
                  <div className="text-8xl md:text-9xl font-bold leading-none tracking-tighter">3</div>
                  <div className="text-3xl font-bold mt-3 tracking-wide">Years</div>
                  <div className="mt-3 text-lg font-semibold uppercase tracking-[0.15em] opacity-90">
                    Warranty
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Free Benefits */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {/* Installation */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative">
              {/* Mounting bracket visual */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-3 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
              
              {/* Badge */}
              <div className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 px-12 py-8 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 ease-out">
                <span className="text-black font-extrabold text-4xl tracking-tight">
                  FREE
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </div>
            
            <p className="mt-8 text-2xl font-medium tracking-wide">
              Installation
            </p>
            <p className="mt-2 text-white/60 text-sm font-light">
              Professional setup included
            </p>
          </div>

          {/* Wall Mount */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative">
              {/* Mounting bracket visual */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-3 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
              
              {/* Badge */}
              <div className="relative bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 px-12 py-8 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:-rotate-1 transition-all duration-500 ease-out">
                <span className="text-white font-extrabold text-4xl tracking-tight">
                  FREE
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </div>
            
            <p className="mt-8 text-2xl font-medium tracking-wide">
              Wall Mount
            </p>
            <p className="mt-2 text-white/60 text-sm font-light">
              Premium mounting hardware
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-20 md:mt-24 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-white/50 font-light tracking-wider">
            <span className="w-8 h-[1px] bg-white/30" />
            www.1le.in
            <span className="w-8 h-[1px] bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}