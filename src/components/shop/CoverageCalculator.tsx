"use client";

import { useId, useMemo, useState } from "react";

/** Nominal m² per bag at a typical decorative depth — calibrate with product tests. */
const M2_PER_5KG = 5;
const M2_PER_10KG = 11;

function recommendBags(sqm: number): { text: string; detail: string } {
  if (Number.isNaN(sqm) || sqm <= 0) {
    return { text: "Enter a bed size to see a recommendation.", detail: "" };
  }
  if (sqm <= M2_PER_5KG) {
    return {
      text: "5kg hessian sack",
      detail: `Covers roughly up to ${M2_PER_5KG} m²; for a little extra depth or reserve, consider the 10kg sack.`,
    };
  }
  if (sqm <= M2_PER_10KG) {
    return {
      text: "10kg hessian sack",
      detail: `Covers roughly up to ${M2_PER_10KG} m² at a similar depth to our 5kg guidance.`,
    };
  }
  const bags10 = Math.ceil(sqm / M2_PER_10KG);
  return {
    text: `${bags10} × 10kg sack${bags10 > 1 ? "s" : ""}`,
    detail: `For areas over ${M2_PER_10KG} m², use the trade route for volume, delivery, and pricing — or stack ${bags10} retail units to start.`,
  };
}

export function CoverageCalculator() {
  const id = useId();
  const [raw, setRaw] = useState("");

  const sqm = useMemo(() => {
    const n = parseFloat(raw.replace(",", "."));
    return n;
  }, [raw]);

  const rec = useMemo(() => recommendBags(sqm), [sqm]);

  return (
    <div className="rounded-2xl border border-[var(--excelia-stone)]/45 bg-white/80 p-6 shadow-[0_16px_40px_rgba(45,77,54,0.07)] sm:p-8">
      <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl italic text-[var(--excelia-forest)]">
        Coverage calculator
      </h3>
      <p className="mt-3 font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-[var(--excelia-olive)]">
        Enter the area you want to cover in m². We use retail bag coverage
        estimates; depth and surface texture will shift real-world use.
      </p>
      <div className="mt-6">
        <label
          htmlFor={id}
          className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--excelia-tan)]"
        >
          Bed or path area (m²)
        </label>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder="e.g. 4.5"
          className="mt-2 w-full max-w-xs rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 font-[family-name:var(--font-barlow)] text-[15px] text-[var(--excelia-forest)] outline-none focus:border-[var(--excelia-forest)]/45"
        />
      </div>
      <div className="mt-6 border-t border-[var(--excelia-stone)]/30 pt-6">
        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--excelia-tan)]">
          Suggested
        </p>
        <p className="mt-2 font-[family-name:var(--font-barlow)] text-lg font-semibold text-[var(--excelia-forest)]">
          {rec.text}
        </p>
        {rec.detail ? (
          <p className="mt-2 max-w-prose font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-[var(--excelia-olive)]">
            {rec.detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}
