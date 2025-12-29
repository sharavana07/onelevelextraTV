"use client";
import Image from "next/image";

export default function ModelShowcaseAura55() {
  return (
    <section className="relative w-full py-24" style={{ backgroundColor: '#5a005a' }}>
      {/* Layered gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex items-center justify-between">
          <h2 className="text-4xl font-semibold text-white">
            Ile Aura 55
          </h2>
          <span className="rounded-full border border-white/20 px-5 py-1.5 text-sm text-white" style={{ opacity: 0.7 }}>
            Google TV · 120Hz
          </span>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* TV Visual */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/50 to-black/50">
            <Image
              src="/images/tv/ile-aura-55.png"
              alt="Ile Aura 55 Google TV"
              fill
              priority
              className="object-contain"
            />
          </div>
          
          {/* Specifications */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Feature Badges */}
            <div className="flex flex-wrap gap-5">
              <FeatureBadge label="4K Ultra HD" />
              <FeatureBadge label="Dolby Audio" />
              <FeatureBadge label="Google TV" />
              <FeatureBadge label="120Hz Refresh Rate" />
            </div>
            
            {/* Specs Table */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left">
                <tbody className="divide-y divide-white/10">
                  <SpecRow label="Model Name" value="Ile Aura 55" />
                  <SpecRow label="Screen Size" value="55 inch (139 cm)" />
                  <SpecRow label="Resolution" value="4K UHD (3840 × 2160)" />
                  <SpecRow label="Display Type" value="LED Panel" />
                  <SpecRow
                    label="Specification"
                    value="Google TV · 2GB RAM · 16GB Storage"
                  />
                  <SpecRow label="Refresh Rate" value="120Hz" />
                </tbody>
              </table>
            </div>
            
            {/* CTA */}
            <div>
              <button className="rounded-lg bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Explore Aura 55
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */
function FeatureBadge({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white" style={{ opacity: 0.8 }}>
      {label}
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="bg-black/40">
      <td className="px-6 py-4 text-sm text-white" style={{ opacity: 0.6 }}>
        {label}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-white" style={{ opacity: 0.8 }}>
        {value}
      </td>
    </tr>
  );
}