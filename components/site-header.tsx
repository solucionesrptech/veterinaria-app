"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function IconPaw(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M12 10.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-3.5 2c-.8 0-1.5-.7-1.5-1.5S7.7 9.5 8.5 9.5 10 10.2 10 11s-.7 1.5-1.5 1.5zm7 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-3.5 3c-1.9 0-3.5 1.4-3.5 3.2 0 .4.3.8.8.8h7.4c.5 0 .8-.4.8-.8 0-1.8-1.6-3.2-3.5-3.2zm-4-5.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
    </svg>
  );
}

export function SiteHeader() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,color] duration-300 ${
        elevated
          ? "border-b border-stone-200/80 bg-stone-50/95 text-stone-800 shadow-sm shadow-stone-900/5 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-stone-950/55 via-stone-950/20 to-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <a href="/" className="group flex items-center gap-3">
          <span
            className={
              elevated
                ? "flex size-10 items-center justify-center rounded-2xl bg-vet-soft text-vet-primary transition-colors"
                : "flex size-10 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 transition-colors group-hover:bg-white/20"
            }
          >
            <IconPaw className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${elevated ? "text-vet-primary" : "text-emerald-100/90"}`}
            >
              Medicina de precisión
            </span>
            <span className={`mt-1 text-base font-semibold tracking-tight ${elevated ? "text-stone-900" : "text-white"}`}>
              Arcadia Veterinaria
            </span>
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-6 md:gap-8">
          <nav className="hidden items-center gap-10 text-sm font-medium md:flex" aria-label="Principal">
            <a
              href="#servicios"
              className={
                elevated
                  ? "text-stone-600 transition-colors hover:text-vet-primary"
                  : "text-white/85 transition-colors hover:text-white"
              }
            >
              Servicios
            </a>
            <a
              href="#destacados"
              className={
                elevated
                  ? "text-stone-600 transition-colors hover:text-vet-primary"
                  : "text-white/85 transition-colors hover:text-white"
              }
            >
              Farmacia
            </a>
            <a
              href="#cita"
              className={
                elevated
                  ? "text-stone-600 transition-colors hover:text-vet-primary"
                  : "text-white/85 transition-colors hover:text-white"
              }
            >
              Citas
            </a>
          </nav>
          <Link
            href="/login"
            className={
              elevated
                ? "text-sm font-semibold text-vet-primary underline-offset-4 transition-colors hover:underline"
                : "text-sm font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
            }
          >
            Iniciar sesión
          </Link>
          <a
            href="#cita"
            className={
              elevated
                ? "inline-flex shrink-0 items-center justify-center rounded-full bg-vet-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-vet-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vet-primary"
                : "inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-vet-deep shadow-md shadow-stone-950/20 transition-colors hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            }
          >
            Reservar cita
          </a>
        </div>
      </div>
    </header>
  );
}
