"use client";

import { type FormEvent, useCallback, useMemo, useState } from "react";

const HELLO = "hello@excelia.co.uk";
const TRADE = "trade@excelia.co.uk";
const PRESS = "press@excelia.co.uk";

export type ContactCategory = "gardener" | "trade" | "press" | "more";

function routeForCategory(
  category: ContactCategory,
  data: Record<string, string>,
): { to: string; subject: string; body: string } {
  const name = data.name?.trim() || "";
  const email = data.email?.trim() || "";
  const message = data.message?.trim() || "";

  switch (category) {
    case "gardener": {
      const topic = data.gardenerTopic || "general";
      return {
        to: HELLO,
        subject: `Excelia: gardener (${topic})`,
        body: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nNewsletter: ${data.newsletter === "on" ? "yes" : "no"}\n\nMessage:\n${message}\n`,
      };
    }
    case "trade":
      return {
        to: TRADE,
        subject: `Excelia trade: ${data.business || "Enquiry"}`,
        body: `Name: ${name}\nEmail: ${email}\nBusiness: ${data.business || ""}\nExpected volume: ${data.volume || ""}\nDelivery region: ${data.region || ""}\n\nDetails:\n${message}\n`,
      };
    case "press":
      return {
        to: PRESS,
        subject: "Excelia: press or partnership",
        body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
      };
    case "more": {
      const sub = data.moreTopic || "general";
      return {
        to: HELLO,
        subject: `Excelia: ${sub}`,
        body: `Name: ${name}\nEmail: ${email}\nCategory: ${sub}\n\nMessage:\n${message}\n`,
      };
    }
    default:
      return {
        to: HELLO,
        subject: "Excelia: contact",
        body: `${name}\n${email}\n\n${message}`,
      };
  }
}

export function UnifiedContactForm() {
  const [category, setCategory] = useState<ContactCategory>("gardener");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      fd.forEach((value, key) => {
        if (typeof value === "string") data[key] = value;
      });
      const { to, subject, body } = routeForCategory(category, data);
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    [category],
  );

  const helpText = useMemo(() => {
    switch (category) {
      case "gardener":
        return "Tell us what you are working on in the garden. We read every message.";
      case "trade":
        return "Share volume, region, and timing so we can route your note to the right person.";
      case "press":
        return "Media, interviews, or UK retail introductions: a short outline is enough to start.";
      case "more":
        return "Pick the closest label and add detail in your own words below.";
      default:
        return "";
    }
  }, [category]);

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-sm text-[var(--excelia-forest)]"
    >
      <div>
        <label
          htmlFor="contact-category"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
        >
          I am writing about
        </label>
        <select
          id="contact-category"
          value={category}
          onChange={(e) => setCategory(e.target.value as ContactCategory)}
          className="mt-2 w-full max-w-lg rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 font-[family-name:var(--font-barlow)] text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
        >
          <option value="gardener">
            Comments, questions, help, or queries from gardeners
          </option>
          <option value="trade">
            Garden centres and landscape architects
          </option>
          <option value="press">Press and partnerships</option>
          <option value="more">More</option>
        </select>
        <p className="mt-2 text-[13px] leading-snug text-[var(--excelia-olive)]">
          {helpText}
        </p>
      </div>

      {category === "gardener" && (
        <div>
          <label
            htmlFor="gardener-topic"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Topic
          </label>
          <select
            id="gardener-topic"
            name="gardenerTopic"
            className="mt-2 w-full max-w-lg rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 font-[family-name:var(--font-barlow)] text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
            defaultValue="question"
          >
            <option value="comment">Comment</option>
            <option value="question">Question</option>
            <option value="help">Help or advice</option>
            <option value="general">General</option>
          </select>
        </div>
      )}

      {category === "more" && (
        <div>
          <label
            htmlFor="more-topic"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            What is this about?
          </label>
          <select
            id="more-topic"
            name="moreTopic"
            className="mt-2 w-full max-w-lg rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 font-[family-name:var(--font-barlow)] text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
            defaultValue="feedback"
          >
            <option value="feedback">Feedback about the site or brand</option>
            <option value="other_trade">Buying or stocking (other)</option>
            <option value="community">Community or heritage</option>
            <option value="general">Something else</option>
          </select>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="unified-name"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Name
          </label>
          <input
            id="unified-name"
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
        <div>
          <label
            htmlFor="unified-email"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Email
          </label>
          <input
            id="unified-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
          />
        </div>
      </div>

      {category === "trade" && (
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
              placeholder="For example pallets per season"
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
              placeholder="For example South East UK"
              className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
            />
          </div>
        </div>
      )}

      {category !== "trade" && (
        <div>
          <label
            htmlFor="unified-message"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Message
          </label>
          <textarea
            id="unified-message"
            name="message"
            rows={6}
            required
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
            placeholder={
              category === "press"
                ? "Outlet, deadline, angle you have in mind"
                : "Your question or note"
            }
          />
        </div>
      )}

      {category === "trade" && (
        <div>
          <label
            htmlFor="unified-message-trade"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--excelia-tan)]"
          >
            Details
          </label>
          <textarea
            id="unified-message-trade"
            name="message"
            rows={5}
            className="mt-2 w-full rounded-xl border border-[var(--excelia-stone)]/55 bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--excelia-forest)]/45"
            placeholder="Volume, timing, anything else we should know"
          />
        </div>
      )}

      {category === "gardener" && (
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="newsletter"
            className="mt-1 size-4 rounded border-[var(--excelia-stone)] text-[var(--excelia-rust)]"
          />
          <span className="text-[13px] leading-snug text-[var(--excelia-olive)]">
            Send me occasional updates from Excelia (optional).
          </span>
        </label>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--excelia-rust)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
      >
        Open email draft
      </button>
      <p className="text-[11px] leading-relaxed text-[var(--excelia-olive)]">
        Confirms your mail app opens with a draft. Replace placeholder addresses
        in code when your inboxes go live.
      </p>
    </form>
  );
}
