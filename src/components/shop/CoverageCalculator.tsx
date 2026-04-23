"use client";

import { useId, useMemo, useState } from "react";

/** Nominal m² per bag at a typical decorative depth: tune against field tests. */
const M2_PER_5KG = 5;
const M2_PER_10KG = 11;

export type AreaUnit =
  | "m2"
  | "sqft"
  | "sqyd"
  | "acre"
  | "hectare";

const UNIT: Record<
  AreaUnit,
  { label: string; toM2: (v: number) => number }
> = {
  m2: {
    label: "Square metres (m²)",
    toM2: (v) => v,
  },
  sqft: {
    label: "Square feet (ft²)",
    toM2: (v) => v * 0.09290304,
  },
  sqyd: {
    label: "Square yards (yd²)",
    toM2: (v) => v * 0.83612736,
  },
  acre: {
    label: "Acres",
    toM2: (v) => v * 4046.8564224,
  },
  hectare: {
    label: "Hectares",
    toM2: (v) => v * 10000,
  },
};

function recommendBags(sqm: number): { text: string; detail: string } {
  if (Number.isNaN(sqm) || sqm <= 0) {
    return { text: "Enter an area to see a recommendation.", detail: "" };
  }
  if (sqm <= M2_PER_5KG) {
    return {
      text: "5kg hessian sack",
      detail: `Roughly up to ${M2_PER_5KG} m² at our reference depth. For extra depth or spare, step up to 10kg.`,
    };
  }
  if (sqm <= M2_PER_10KG) {
    return {
      text: "10kg hessian sack",
      detail: `Roughly up to ${M2_PER_10KG} m² at the same reference depth as the 5kg guide.`,
    };
  }
  const bags10 = Math.ceil(sqm / M2_PER_10KG);
  return {
    text: `${bags10} × 10kg sack${bags10 > 1 ? "s" : ""}`,
    detail: `Above ${M2_PER_10KG} m², talk to us on the trade route for volume and delivery, or plan on ${bags10} retail sacks to start.`,
  };
}

export function CoverageCalculator() {
  const idArea = useId();
  const idUnit = useId();
  const [raw, setRaw] = useState("");
  const [unit, setUnit] = useState<AreaUnit>("m2");

  const sqm = useMemo(() => {
    const n = parseFloat(raw.replace(",", "."));
    if (Number.isNaN(n) || n <= 0) return NaN;
    return UNIT[unit].toM2(n);
  }, [raw, unit]);

  const rec = useMemo(() => recommendBags(sqm), [sqm]);

  return (
    <div className="rounded-2xl border border-[var(--excelia-stone)]/45 bg-white/80 p-6 shadow-[0_16px_40px_rgba(45,77,54,0.07)] sm:p-8">
      <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl italic text-[var(--excelia-forest)]">
        Coverage calculator
      </h3>
      <p className="mt-3 font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-[var(--excelia-olive)]">
        Enter the area you want to cover. We convert to square metres, then map
        to bag size. Surface texture and how deep you lay shells will change
        real coverage.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-end">
        <div>
          <label
            htmlFor={idUnit}
            className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--excelia-tan)]"
          >
            Unit
          </label>
          <select
            id={idUnit}
            value={unit}
            onChange={(e) => setUnit(e.target.value as AreaUnit)}
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 font-[family-name:var(--font-barlow)] text-[15px] text-[var(--excelia-forest)] outline-none focus:border-[var(--excelia-forest)]/45"
          >
            {(Object.keys(UNIT) as AreaUnit[]).map((u) => (
              <option key={u} value={u}>
                {UNIT[u].label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor={idArea}
            className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--excelia-tan)]"
          >
            Area
          </label>
          <input
            id={idArea}
            type="text"
            inputMode="decimal"
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            placeholder={
              unit === "m2"
                ? "e.g. 4.5"
                : unit === "sqft"
                  ? "e.g. 180"
                  : unit === "acre"
                    ? "e.g. 0.05"
                    : "e.g. value in selected unit"
            }
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 font-[family-name:var(--font-barlow)] text-[15px] text-[var(--excelia-forest)] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
      </div>
      {!Number.isNaN(sqm) && sqm > 0 && (
        <p className="mt-3 font-[family-name:var(--font-barlow)] text-[12px] text-[var(--excelia-olive)]">
          About {sqm.toFixed(sqm < 10 ? 2 : 1)} m² after conversion.
        </p>
      )}
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
