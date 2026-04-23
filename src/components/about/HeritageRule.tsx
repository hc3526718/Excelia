/** Thin heritage-style rule — swap for deck engraving asset when available. */
export function HeritageRule({ label }: { label?: string }) {
  return (
    <div
      className="relative my-14 flex items-center gap-4 sm:my-20"
      aria-hidden={!label}
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--excelia-forest)]/35 to-[var(--excelia-forest)]/25" />
      {label ? (
        <span className="font-[family-name:var(--font-barlow)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--excelia-tan)]">
          {label}
        </span>
      ) : null}
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--excelia-forest)]/35 to-[var(--excelia-forest)]/25" />
    </div>
  );
}
