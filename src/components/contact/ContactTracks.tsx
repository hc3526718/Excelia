"use client";

import { type FormEvent, useCallback } from "react";

/** Replace with live inboxes before launch. */
const HELLO = "hello@excelia.co.uk";
const TRADE = "trade@excelia.co.uk";
const PRESS = "press@excelia.co.uk";

function useMailtoSubmit(
  buildQuery: (data: Record<string, string>) => {
    to: string;
    subject: string;
    body: string;
  },
) {
  return useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const fd = new FormData(form);
      const data: Record<string, string> = {};
      fd.forEach((value, key) => {
        if (typeof value === "string") data[key] = value;
      });
      const { to, subject, body } = buildQuery(data);
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    [buildQuery],
  );
}

export function GardenerContactForm() {
  const onSubmit = useMailtoSubmit((data) => {
    const newsletter = data.newsletter === "on" ? "yes" : "no";
    return {
      to: HELLO,
      subject: "Excelia — gardener enquiry",
      body: `Name: ${data.name || ""}\nEmail: ${data.email || ""}\nNewsletter: ${newsletter}\n\nMessage:\n${data.message || ""}\n`,
    };
  });

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 space-y-4 font-[family-name:var(--font-barlow)] text-sm text-[var(--excelia-forest)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="gardener-name"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Name
          </label>
          <input
            id="gardener-name"
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none ring-0 transition-[border,box-shadow] focus:border-[var(--excelia-forest)]/45 focus:shadow-[0_0_0_3px_rgba(45,77,54,0.08)]"
          />
        </div>
        <div>
          <label
            htmlFor="gardener-email"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Email
          </label>
          <input
            id="gardener-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none ring-0 transition-[border,box-shadow] focus:border-[var(--excelia-forest)]/45 focus:shadow-[0_0_0_3px_rgba(45,77,54,0.08)]"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="gardener-message"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
        >
          Message
        </label>
        <textarea
          id="gardener-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
          className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none ring-0 transition-[border,box-shadow] focus:border-[var(--excelia-forest)]/45 focus:shadow-[0_0_0_3px_rgba(45,77,54,0.08)]"
        />
      </div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-1 size-4 rounded border-[var(--excelia-stone)] text-[var(--excelia-rust)]"
        />
        <span className="text-[13px] leading-snug text-[var(--excelia-olive)]">
          Email me occasional updates from Excelia (optional).
        </span>
      </label>
      <p className="text-[13px] text-[var(--excelia-olive)]">
        Prefer email directly?{" "}
        <a
          className="font-semibold text-[var(--excelia-rust)] underline-offset-4 hover:underline"
          href={`mailto:${HELLO}`}
        >
          {HELLO}
        </a>
      </p>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--excelia-rust)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
      >
        Send via email
      </button>
      <p className="text-[11px] leading-relaxed text-[var(--excelia-olive)]">
        Opens your mail app with a draft — confirm addresses before going live.
      </p>
    </form>
  );
}

export function TradeEnquiryForm() {
  const onSubmit = useMailtoSubmit((data) => ({
    to: TRADE,
    subject: `Excelia trade enquiry — ${data.business || "Business"}`,
    body: `Business / organisation: ${data.business || ""}\nExpected volume: ${data.volume || ""}\nDelivery region: ${data.region || ""}\nContact email: ${data.email || ""}\nNotes:\n${data.notes || ""}\n`,
  }));

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 space-y-4 font-[family-name:var(--font-barlow)] text-sm text-[var(--excelia-forest)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="trade-business"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Business name
          </label>
          <input
            id="trade-business"
            name="business"
            required
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
        <div>
          <label
            htmlFor="trade-volume"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Expected volume
          </label>
          <input
            id="trade-volume"
            name="volume"
            placeholder="e.g. pallets / season"
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
        <div>
          <label
            htmlFor="trade-region"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Delivery region
          </label>
          <input
            id="trade-region"
            name="region"
            placeholder="e.g. South East UK"
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="trade-email"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Work email
          </label>
          <input
            id="trade-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="trade-notes"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Notes
          </label>
          <textarea
            id="trade-notes"
            name="notes"
            rows={3}
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--excelia-forest)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
      >
        Submit trade enquiry
      </button>
    </form>
  );
}

export function PressBlurb() {
  return (
    <div className="mt-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)]">
      <p>
        Press, media, and UK retail partnership conversations:{" "}
        <a
          className="font-semibold text-[var(--excelia-rust)] underline-offset-4 hover:underline"
          href={`mailto:${PRESS}`}
        >
          {PRESS}
        </a>
        . We&apos;re open to thoughtful retail introductions that fit a
        heritage-led garden brand.
      </p>
    </div>
  );
}
