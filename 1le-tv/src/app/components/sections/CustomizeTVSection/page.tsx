"use client";

import Image from "next/image";

export default function CustomizeTVSection() {
  return (
    
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5a005a] via-[#4a0047] to-[#3a0038]">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-20 flex flex-col items-center">

        {/* Main Heading */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            India&apos;s first
          </h2>
          <h3 className="text-white text-4xl md:text-6xl font-light italic tracking-wide">
            &quot;customizable television&quot;
          </h3>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-white/40" />
            <p className="text-white/70 text-sm uppercase tracking-[0.3em] font-light">
              Your Brand, Your Way
            </p>
            <div className="h-px w-12 bg-white/40" />
          </div>
        </div>

        {/* TV Mock Container */}
        <div className="relative w-full max-w-4xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-2xl" />
          
          <div className="relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-purple-500/20 hover:shadow-3xl">
            
            {/* Top bar accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            
            <div className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">

              {/* Logo Section */}
              <div className="group flex flex-col items-center gap-6 text-white transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 blur-lg group-hover:blur-xl transition-all duration-300" />
                  
                  {/* Logo circle */}
                  <div className="relative w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                      LOGO
                    </span>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <span className="text-xl font-semibold tracking-wide block">Your Logo</span>
                  <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <span className="text-sm text-white/60 italic block">One Level Extra</span>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block h-32 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />

              {/* Brand Section */}
              <div className="group flex flex-col items-center gap-6 text-white transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/40 to-purple-500/40 blur-lg group-hover:blur-xl transition-all duration-300" />
                  
                  {/* Brand circle */}
                  <div className="relative w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                    <span className="text-3xl">★</span>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <span className="text-xl font-semibold tracking-wide block">Your Brand</span>
                  <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <span className="text-sm text-white/60 italic block">One Level Extra</span>
                </div>
              </div>
            </div>
            
            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        </div>

        {/* Call to action */}
        <button className="mt-12 px-8 py-4 bg-white text-[#5a005a] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 uppercase tracking-wider text-sm">
          Customize Your TV
        </button>
      </div>
    </section>
  );
}