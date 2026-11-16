"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { JOIN_URL, navLinks } from "@/lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Compact the bar and add a shadow once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape and stop the page scrolling behind it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-petal bg-white/95 shadow-[0_6px_24px_-12px_rgba(42,21,48,0.25)] backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 transition-[height] duration-300 sm:px-8 ${
          scrolled ? "h-[68px]" : "h-[84px]"
        }`}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="Vedic Psychology Institute, back to top"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/media/logo.webp"
            alt=""
            width={370}
            height={250}
            priority
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-12" : "h-16"}`}
          />
          <span className="hidden border-l border-petal pl-3 leading-tight md:block">
            <span className="block font-display text-lg text-ink">Study Group</span>
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-berry">
              Saturdays · Online
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive ? "bg-blush text-berry" : "text-ink hover:bg-blush/70 hover:text-berry"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={JOIN_URL}
            className="inline-flex items-center gap-1.5 rounded-full bg-berry px-5 py-2.5 font-semibold text-white shadow-md shadow-berry/25 transition-colors hover:bg-berry-dark"
          >
            Join<span className="hidden sm:inline"> the group</span>
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-blush lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-petal bg-white lg:hidden"
        >
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3.5 text-lg font-medium transition-colors ${
                    active === l.href ? "bg-blush text-berry" : "text-ink hover:bg-blush"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
