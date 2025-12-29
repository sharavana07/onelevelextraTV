"use client";

import Image from "next/image";

export default function ModelShowcase() {
  return (
    <section className="relative w-full py-20" style={{ backgroundColor: '#5a005a' }}>
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-white">
            Ile Aura 43
          </h2>

          <span className="rounded-full border border-white/20 px-4 py-1 text-sm text-white/70">
            4K Android TV
          </span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* TV Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-purple-950/60">
            <Image
              src="/images/tv/ile-aura-43.png"
              alt="Ile Aura 43 TV"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Specs */}
          <div className="flex flex-col justify-center space-y-8">

            {/* Feature Icons */}
            <div className="flex items-center gap-6">
              <FeatureBadge label="4K UHD" />
              <FeatureBadge label="Dolby Audio" />
              <FeatureBadge label="Android TV" />
            </div>

            {/* Specs Table */}
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-left">
                <tbody className="divide-y divide-white/10">

                  <SpecRow label="Model Name" value="Ile Aura 43" />
                  <SpecRow label="Screen Size" value="43 inch (109 cm)" />
                  <SpecRow label="Resolution" value="4K UHD (3840 × 2160)" />
                  <SpecRow label="Display Type" value="LED Panel" />
                  <SpecRow label="Specification" value="Android · 2GB RAM · 16GB Storage" />
                  <SpecRow label="Refresh Rate" value="60Hz" />

                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div>
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                View Full Specifications
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Helpers --- */

function FeatureBadge({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80">
      {label}
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="bg-black/40">
      <td className="px-5 py-4 text-sm text-white/60">{label}</td>
      <td className="px-5 py-4 text-sm font-medium text-white/80">{value}</td>
    </tr>
  );
}