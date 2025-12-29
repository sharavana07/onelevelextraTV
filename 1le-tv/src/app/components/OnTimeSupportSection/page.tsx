"use client";

import { useState, useEffect } from "react";
import { Phone, Shield, Clock } from "lucide-react";

export default function OnTimeSupportSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null | undefined>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Shield, text: "100% Guaranteed Service" },
    { icon: Clock, text: "On-Time Every Time" },
    { icon: Phone, text: "24/7 Support Available" },
  ];

  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15),_transparent_60%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              animationDelay: `${Math.random() * 5}s`,
              // eslint-disable-next-line react-hooks/purity
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Feature cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              <feature.icon
                className={`w-4 h-4 ${
                  hoveredCard === idx ? "text-purple-400" : "text-purple-500"
                } transition-colors`}
              />
              <span className="text-sm text-gray-300">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Main heading with gradient */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white animate-gradient">
          PEACE OF MIND WITH
        </h2>

        <h3 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 animate-gradient-shift">
            ON TIME SUPPORT
          </span>
        </h3>

        {/* Subtext with fade-in */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          &quot;We care for your TV and ensure our promise is delivered every single
          time&quot;
        </p>

        {/* Animated divider */}
        <div className="relative w-32 h-1 mx-auto my-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer" />
        </div>

        {/* CTA Section with enhanced design */}
        <div className="space-y-6 animate-fade-in-up-delay">
          <p className="text-2xl md:text-3xl font-bold text-gray-400 tracking-wider uppercase">
            Book Now
          </p>

          {/* Phone number with call button */}
          <a
            href="tel:7788877188"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <Phone className="w-6 h-6 text-white animate-bounce-subtle" />
            <span className="text-3xl md:text-4xl font-bold text-white tracking-widest">
              77888 77188
            </span>
          </a>

          <p className="text-sm text-gray-500 animate-pulse">
            Available 24/7 • Instant Response
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}
