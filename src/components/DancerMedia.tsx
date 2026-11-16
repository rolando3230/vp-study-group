"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { DANCER_VIDEO_URL } from "@/lib/content";

export default function DancerMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }

  return (
    <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink shadow-2xl shadow-ink/20">
      {DANCER_VIDEO_URL ? (
        <>
          <video
            ref={videoRef}
            src={DANCER_VIDEO_URL}
            poster="/media/dancer.jpg"
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onClick={toggle}
            className="size-full cursor-pointer object-cover"
          />
          {!playing && (
            <button
              type="button"
              onClick={toggle}
              aria-label="Play the dancer video"
              className="absolute inset-0 grid place-items-center bg-ink/20 transition-colors hover:bg-ink/10"
            >
              <span className="grid size-20 place-items-center rounded-full bg-white/90 text-berry shadow-xl backdrop-blur transition-transform hover:scale-105">
                <svg viewBox="0 0 24 24" className="ml-1 size-8" fill="currentColor" aria-hidden>
                  <path d="M7 4.5v15l13-7.5z" />
                </svg>
              </span>
            </button>
          )}
        </>
      ) : (
        <Image
          src="/media/dancer.jpg"
          alt="A Balinese dancer in a gold and red costume, mid-dance"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      )}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 pt-16 font-display text-xl text-white italic">
        Same dancer. Six different women.
      </figcaption>
    </figure>
  );
}
