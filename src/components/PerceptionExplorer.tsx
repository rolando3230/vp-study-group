"use client";

import { useState } from "react";
import { perceptions } from "@/lib/content";

export default function PerceptionExplorer() {
  const [active, setActive] = useState<number | null>(null);
  const chosen = active === null ? null : perceptions[active];

  return (
    <div className="grid gap-6">
      <ul className="grid gap-3 sm:grid-cols-2" role="list">
        {perceptions.map((p, i) => {
          const isActive = i === active;
          return (
            <li key={p.label}>
              <button
                type="button"
                onClick={() => setActive(isActive ? null : i)}
                aria-pressed={isActive}
                className={`group flex h-full w-full items-start gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                  isActive
                    ? "border-berry bg-berry text-white shadow-lg shadow-berry/20"
                    : "border-petal bg-white text-ink hover:-translate-y-0.5 hover:border-lotus hover:shadow-md"
                }`}
              >
                <span
                  aria-hidden
                  className={`mt-1 inline-block size-2.5 shrink-0 rounded-full transition-colors ${
                    isActive ? "bg-white" : "bg-lotus group-hover:bg-berry"
                  }`}
                />
                <span className="text-[0.95rem] leading-snug">
                  Is she {p.label.charAt(0).toLowerCase() + p.label.slice(1)}?
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        aria-live="polite"
        className="relative min-h-56 overflow-hidden rounded-3xl bg-ink p-8 text-blush sm:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-berry/30 blur-3xl"
        />
        {chosen ? (
          <div key={active} className="rise relative grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lotus">
              If she is {chosen.label.charAt(0).toLowerCase() + chosen.label.slice(1)}
            </p>
            <p className="font-display text-4xl italic sm:text-5xl">{chosen.feeling}</p>
            <p className="max-w-[40ch] text-blush/85">{chosen.reaction}</p>
            <p className="mt-2 border-t border-white/15 pt-4 text-sm text-blush/70">
              Same woman, same dance. Only the story you tell yourself changed.
            </p>
          </div>
        ) : (
          <div className="relative grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lotus">
              Pick one
            </p>
            <p className="font-display text-3xl sm:text-4xl">Which one is she to you?</p>
            <p className="max-w-[42ch] text-blush/80">
              Your answer decides whether the relationship goes well or badly. Choose
              a reading to see how it changes what you feel and do.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
