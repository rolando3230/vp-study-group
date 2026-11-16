import Image from "next/image";
import DancerMedia from "@/components/DancerMedia";
import PerceptionExplorer from "@/components/PerceptionExplorer";
import { Icon, Lotus } from "@/components/Icons";
import SiteHeader from "@/components/SiteHeader";
import { JOIN_URL, details, included, methods, navLinks } from "@/lib/content";

function JoinButton({
  children = "Join the study group",
  variant = "solid",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "solid" | "light";
  className?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-berry text-white hover:bg-berry-dark shadow-lg shadow-berry/25"
      : "bg-blush text-ink hover:bg-white";
  return (
    <a
      href={JOIN_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-berry px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-ink text-blush">
          <Lotus className="pointer-events-none absolute -right-40 top-1/2 w-[46rem] max-w-none -translate-y-1/2 text-lotus opacity-35 md:-right-24 md:opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-berry/25 blur-3xl"
          />
          <div className={`${container} relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center`}>
            <div className="grid gap-6">
              <p className="rise text-xs font-semibold uppercase tracking-[0.2em] text-lotus">
                Vedic Psychology Study Group
              </p>
              <h1
                className="rise font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ animationDelay: "80ms" }}
              >
                Follow the story <em className="font-normal text-lotus">back to the heart.</em>
              </h1>
              <p className="rise max-w-[46ch] text-lg text-blush/80" style={{ animationDelay: "160ms" }}>
                See the people in your life more clearly, and discover the deeper truths
                behind the conflicts.
              </p>
              <div className="rise flex flex-wrap gap-3 pt-2" style={{ animationDelay: "240ms" }}>
                <JoinButton>Come study with us</JoinButton>
                <a
                  href="#method"
                  className="inline-flex items-center rounded-full border border-blush/30 px-7 py-3.5 font-semibold text-blush transition-colors hover:border-blush hover:bg-white/5"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="rise relative" style={{ animationDelay: "320ms" }}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <Image
                  src="/media/dr-joshi.jpg"
                  alt="Dr. Joshi smiling in a garden, a white flower tucked behind one ear"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover object-[52%_center]"
                />
              </div>
              <dl className="relative -mt-14 mx-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-xl backdrop-blur-md sm:mx-6">
                {details.slice(0, 2).map((d) => (
                  <div key={d.label} className="bg-ink/85 p-4 sm:p-5">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-lotus">
                      {d.label}
                    </dt>
                    <dd className="mt-1 font-display text-lg sm:text-xl">{d.value}</dd>
                    <dd className="text-sm text-blush/70">{d.sub}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-center text-sm text-blush/70">
                With Dr. Joshi, Vedic Psychologist
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-paper">
          <div className={`${container} grid gap-10 py-24 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16`}>
            <h2 className="reveal font-display text-4xl leading-tight sm:text-5xl">
              Behind every reaction is a longing to be <em className="text-berry">understood.</em>
            </h2>
            <div className="grid content-start gap-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Every reaction has a cause. In this group we start with curiosity and
                kindness, not judgment.
              </p>
              <p>
                We trace behavior back to its deeper cause, using Vedic Psychology to
                reveal the hidden logic behind thoughts, emotions, and relationships.
              </p>
              <p className="font-display text-2xl leading-snug text-ink">
                From true understanding comes heart-to-heart connection. Who
                doesn&rsquo;t want that?
              </p>
            </div>
          </div>
        </section>

        {/* Method */}
        <section id="method" className="scroll-mt-16 bg-blush">
          <div className={`${container} grid gap-12 py-24`}>
            <div className="reveal grid max-w-2xl gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">
                How we study together
              </p>
              <h2 className="font-display text-4xl sm:text-5xl">Three ways in</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {methods.map((m) => (
                <article
                  key={m.title}
                  className="reveal grid content-start gap-4 rounded-3xl bg-white p-8 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-berry/10"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-blush text-berry">
                    <Icon name={m.icon} className="size-6" />
                  </span>
                  <h3 className="font-display text-2xl">{m.title}</h3>
                  <p className="text-ink-soft">{m.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-paper">
          <div className={`${container} py-24 text-center`}>
            <Image
              src="/media/lotus-icon.png"
              alt=""
              width={240}
              height={155}
              className="mx-auto mb-8 h-10 w-auto"
            />
            <blockquote className="reveal mx-auto max-w-4xl font-display text-3xl leading-snug sm:text-5xl">
              When how you see things changes,{" "}
              <em className="text-berry">then how you behave changes.</em>
            </blockquote>
          </div>
        </section>

        {/* How do you see her */}
        <section id="see-her" className="scroll-mt-16 border-y border-petal bg-white">
          <div className={`${container} grid gap-12 py-24`}>
            <div className="reveal grid max-w-2xl gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">
                A short exercise
              </p>
              <h2 className="font-display text-4xl sm:text-5xl">How do you see her?</h2>
              <p className="text-lg text-ink-soft">
                A woman is dancing. Six people watch her and see six different women.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <DancerMedia />
              </div>
              <PerceptionExplorer />
            </div>
            <div className="grid gap-6 rounded-3xl bg-blush p-8 sm:p-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <p className="text-lg leading-relaxed text-ink-soft">
                The link between what happens inside us and how we behave is hard to see
                without help. That is what this group offers.
              </p>
              <div className="grid gap-1">
                <p className="font-display text-2xl leading-snug">
                  Vedic Psychology gives us the tools to decode human behavior.
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-berry">
                  Ancient wisdom · Modern mind
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Invitation + pricing */}
        <section id="join" className="scroll-mt-16 bg-paper">
          <div className={`${container} grid gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16`}>
            <div className="grid content-start gap-8">
              <div className="grid gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">
                  You are invited
                </p>
                <h2 className="font-display text-4xl sm:text-5xl">Come study with us</h2>
                <p className="max-w-[55ch] text-lg text-ink-soft">
                  Together we look at real people and trace situations, behaviors, and
                  conflicts back to the hidden feelings and thoughts behind them.
                </p>
              </div>
              <dl className="grid gap-px overflow-hidden rounded-2xl border border-petal bg-petal sm:grid-cols-2">
                {details.map((d) => (
                  <div key={d.label} className="bg-white p-6">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-berry">
                      {d.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl">{d.value}</dd>
                    <dd className="text-sm text-ink-soft">{d.sub}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="relative overflow-hidden rounded-3xl bg-ink p-8 text-blush shadow-2xl shadow-ink/20 sm:p-10">
              <Lotus className="pointer-events-none absolute -bottom-24 -right-24 w-72 text-lotus opacity-40" />
              <div className="relative grid gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lotus">
                  Monthly membership
                </p>
                <p className="flex items-baseline gap-2">
                  <span className="font-display text-6xl">$199</span>
                  <span className="text-blush/70">/ month</span>
                </p>
                <ul className="grid gap-3 text-blush/90">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <JoinButton className="mt-2 w-full">Join the study group</JoinButton>
              </div>
            </aside>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-berry text-white">
          <div className={`${container} grid justify-items-center gap-8 py-20 text-center`}>
            <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
              Knowing the &lsquo;why&rsquo; gives you a <em>wiser eye.</em>
            </h2>
            <JoinButton variant="light">Join the study group</JoinButton>
          </div>
        </section>
      </main>

      <footer className="border-t border-petal bg-white text-ink-soft">
        <div className={`${container} grid gap-10 py-12 md:grid-cols-[auto_1fr_auto] md:items-start`}>
          <a href="#top" aria-label="Vedic Psychology Institute, back to top">
            <Image
              src="/media/logo.webp"
              alt="Vedic Psychology Institute"
              width={370}
              height={250}
              className="h-20 w-auto"
            />
          </a>
          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="grid gap-3 text-[0.95rem] sm:grid-flow-col sm:gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-medium text-ink transition-colors hover:text-berry">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid gap-1 text-sm md:text-right">
            <p className="font-semibold text-ink">Every Saturday, 8:30–9:30 am EST</p>
            <p>Online with Dr. Joshi · Recordings included</p>
            <a href={JOIN_URL} className="mt-2 font-semibold text-berry hover:text-berry-dark">
              Join the study group →
            </a>
          </div>
        </div>
        <div className="border-t border-petal">
          <p className={`${container} py-5 text-sm`}>
            © {new Date().getFullYear()} Vedic Psychology Institute
          </p>
        </div>
      </footer>
    </>
  );
}
