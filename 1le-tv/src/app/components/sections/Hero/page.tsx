"use client";

import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState({
    tv: false,
    android: false,
    google: false,
    webos: false
  });

  return (
    <section
      className="relative min-h-screen w-full flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top, #6a0060 0%, #5a005a 40%, #3a0038 100%)",
      }}
    >
      {/* Ambient gradient layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700/30 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 backdrop-blur-lg bg-white/5 border-b border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-4xl font-extrabold italic text-white tracking-tight">
            1LE
          </span>

          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 font-semibold">
            One Level Extra
          </span>
        </div>
      </header>
{/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 pt-24 sm:pt-32 pb-24 sm:pb-32 text-center w-full">
        {/* TV Visual */}
        <div className="relative group w-full max-w-[900px]">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-500 opacity-20 blur-3xl scale-110 transition-opacity duration-700 group-hover:opacity-40" />

          <div className="relative transition-transform duration-700 ease-out group-hover:-translate-y-2">
            {!imageError.tv ? (
              <img
                src="/images/tv.png"
                alt="1LE Full HD TV"
                width={900}
                height={500}
                onError={() => setImageError(prev => ({ ...prev, tv: true }))}
                className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] w-full h-auto"
              />
            ) : (
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20">
                <span className="text-white/60 text-sm sm:text-base md:text-lg">1LE Full HD TV</span>
              </div>
            )}

            {/* Product Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-full px-4">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 md:px-10 py-2 sm:py-3 shadow-xl inline-block">
                <span className="text-base sm:text-lg md:text-2xl font-semibold text-white tracking-wide whitespace-nowrap">
                  Full HD Smart TV
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-3 sm:gap-5 max-w-4xl px-4">
          {["Stunning Visuals", "Smart Entertainment", "Premium Build"].map(
            (feature) => (
              <div
                key={feature}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white/90 text-xs sm:text-sm md:text-base font-medium hover:bg-white/10 transition-all cursor-pointer"
              >
                {feature}
              </div>
            )
          )}
        </div>
      </div>

      {/* Platforms */}
      <footer className="relative left-0 right-0 backdrop-blur-lg bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <span className="block text-center mb-8 text-[11px] tracking-[0.4em] uppercase text-white/60 font-semibold">
            Available On
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Android TV */}
            <div className="flex justify-center items-center py-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
              {!imageError.android ? (
                <img
                  src="/images/android.svg"
                  alt="Android TV"
                  width={140}
                  height={140}
                  onError={() => setImageError(prev => ({ ...prev, android: true }))}
                  className="opacity-90 max-w-full h-auto"
                />
              ) : (
                <span className="text-white/70 text-xl font-semibold">Android TV</span>
              )}
            </div>

            {/* Google TV */}
            <div className="flex justify-center items-center py-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
              {!imageError.google ? (
                <img
                  src="/images/google.svg"
                  alt="Google TV"
                  width={220}
                  height={70}
                  onError={() => setImageError(prev => ({ ...prev, google: true }))}
                  className="opacity-90 max-w-full h-auto"
                />
              ) : (
                <span className="text-white/70 text-xl font-semibold">Google TV</span>
              )}
            </div>

            {/* webOS */}
            <div className="flex justify-center items-center py-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
              {!imageError.webos ? (
                <img
                  src="/images/webos.svg"
                  alt="webOS"
                  width={200}
                  height={70}
                  onError={() => setImageError(prev => ({ ...prev, webos: true }))}
                  className="opacity-90 max-w-full h-auto"
                />
              ) : (
                <span className="text-white/70 text-xl font-semibold">webOS</span>
              )}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}