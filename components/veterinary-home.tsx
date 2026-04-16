import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

function IconStethoscope(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={props.className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75V18a2.25 2.25 0 002.25 2.25h.75M4.5 12.75a3 3 0 013-3h3a3 3 0 013 3v1.5a3 3 0 01-3 3h-3a3 3 0 01-3-3v-1.5zM19.5 3.75v9a2.25 2.25 0 01-2.25 2.25h-1.5"
      />
    </svg>
  );
}

function IconSyringe(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={props.className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2-10H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2z" />
    </svg>
  );
}

function IconScissors(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={props.className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6a3 3 0 11-3 3m12-3a3 3 0 10-3 3M7.5 15.5L12 12m0 0l4.5 3.5M12 12l4.5-3.5M12 12L7.5 8.5"
      />
    </svg>
  );
}

function IconTooth(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={props.className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 4.5c.5 2.5 1 4 2.25 4S12 7 12.5 4.5m3 0c-.5 2.5-1 4-2.25 4S12 7 11.5 4.5M6 4.5h12c.5 3 .5 6-1 9.75-.75 2-2.25 3-3.75 3s-2.25-1-3-3c-.75 2-1.75 3-3.25 3s-3-1-3.75-3C5.5 10.5 5.5 7.5 6 4.5z"
      />
    </svg>
  );
}

function IconBolt(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={props.className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconFlask(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={props.className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.75v4.5m0 0l-3 11.25a2.25 2.25 0 002.16 2.75h6.18a2.25 2.25 0 002.16-2.75l-3-11.25m-7.5 0h7.5"
      />
    </svg>
  );
}

function IconPaw(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M12 10.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-3.5 2c-.8 0-1.5-.7-1.5-1.5S7.7 9.5 8.5 9.5 10 10.2 10 11s-.7 1.5-1.5 1.5zm7 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-3.5 3c-1.9 0-3.5 1.4-3.5 3.2 0 .4.3.8.8.8h7.4c.5 0 .8-.4.8-.8 0-1.8-1.6-3.2-3.5-3.2zm-4-5.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
    </svg>
  );
}

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=2400&q=88";

const services = [
  {
    title: "Medicina preventiva",
    description:
      "Planes personalizados de revisión, nutrición y longevidad para acompañar cada fase de la vida.",
    Icon: IconStethoscope,
  },
  {
    title: "Inmunología y vacunas",
    description:
      "Protocolos basados en estilo de vida y riesgo, con registro digital y recordatorios discretos.",
    Icon: IconSyringe,
  },
  {
    title: "Cirugía suave",
    description:
      "Técnicas mínimamente invasivas, analgesia multimodal y recuperación tranquila en salas calmadas.",
    Icon: IconScissors,
  },
  {
    title: "Salud oral",
    description:
      "Profilaxis guiada por imagen, extracciones conservadoras y educación para el hogar.",
    Icon: IconTooth,
  },
  {
    title: "Urgencias estables",
    description:
      "Triaje inmediato, monitorización continua y comunicación clara con la familia en todo momento.",
    Icon: IconBolt,
  },
  {
    title: "Diagnóstico por laboratorio",
    description:
      "Hemograma, bioquímica e inmunología con interpretación veterinaria el mismo día en la mayoría de casos.",
    Icon: IconFlask,
  },
] as const;

const featuredProducts = [
  {
    name: "Parasitarios de amplio espectro",
    detail: "Dosis según peso real — seguimiento farmacológico incluido.",
    price: "Desde 14 €",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85",
    alt: "Perros jugando al aire libre con luz cálida de atardecer",
  },
  {
    name: "Dermatología y pelaje",
    detail: "Champús clínicos y omega-3 de alta biodisponibilidad.",
    price: "Desde 26 €",
    image:
      "https://images.unsplash.com/photo-1514888288774-7c38e65c9039?auto=format&fit=crop&w=1200&q=85",
    alt: "Gato de mirada tranquila en ambiente hogareño",
  },
  {
    name: "Movilidad y articulaciones",
    detail: "Matrices con colágeno y condroitina para senior activo.",
    price: "34 €",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Persona acariciando a un perro con luz natural suave",
  },
] as const;

export function VeterinaryHome() {
  return (
    <div className="flex min-h-full flex-col bg-stone-50 text-stone-800">
      <a
        href="#contenido-principal"
        className="sr-only rounded-full bg-white px-4 py-2 text-vet-deep focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Ir al contenido
      </a>

      <SiteHeader />

      <main id="contenido-principal">
        <section className="relative min-h-[100dvh] w-full overflow-hidden" aria-labelledby="hero-title">
          <Image
            src={HERO_IMAGE}
            alt="Persona y perro en un momento cercano, luz natural cálida"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-900/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/35 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-950/15 via-transparent to-emerald-950/25"
            aria-hidden
          />

          <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-5 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-28">
            <div className="mx-auto w-full max-w-6xl">
              <p className="max-w-xl text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/90 sm:text-sm">
                Clínica independiente · Barcelona
              </p>
              <h1
                id="hero-title"
                className="font-display mt-5 max-w-[14ch] text-[2.65rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl sm:leading-[0.98] lg:max-w-[16ch] lg:text-7xl"
              >
                Donde la ciencia se encuentra con el cariño
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-stone-200/95 sm:text-xl">
                Un espacio sereno para quienes aman a sus animales: diagnóstico riguroso, tienda clínica curada y
                tiempos de espera respetuosos.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <a
                  href="#cita"
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-vet-deep shadow-lg shadow-stone-950/25 transition-transform hover:-translate-y-0.5 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Solicitar cita
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-colors hover:border-white/55 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                >
                  Explorar servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="scroll-mt-24 border-b border-stone-200/60 border-t border-stone-200/70 bg-stone-50 py-24 sm:py-32 lg:py-40"
          aria-labelledby="servicios-heading"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-vet-primary">Cuidado integral</p>
              <h2
                id="servicios-heading"
                className="font-display mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-[3.25rem] lg:leading-tight"
              >
                Servicios pensados para el ritmo de vida actual
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">
                Cada protocolo se adapta al temperamento de tu mascota y a tus expectativas como familia responsable.
              </p>
            </div>

            <ul className="mt-20 grid gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-10">
              {services.map(({ title, description, Icon }) => (
                <li
                  key={title}
                  className="group relative flex flex-col rounded-[1.75rem] border border-stone-200/70 bg-white p-9 shadow-[0_1px_2px_rgb(28_25_23/0.04),0_24px_48px_rgb(28_25_23/0.055)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgb(28_25_23/0.06),0_32px_64px_rgb(28_25_23/0.09)]"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-vet-soft text-vet-primary ring-1 ring-vet-border/60 transition-[background-color,color] duration-300 group-hover:bg-vet-primary group-hover:text-white group-hover:ring-vet-primary">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-stone-900">{title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-stone-600">{description}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-vet-primary/70 transition-colors group-hover:text-vet-primary">
                    <span className="h-px w-8 bg-vet-primary/35 transition-all group-hover:w-10 group-hover:bg-vet-primary/60" aria-hidden />
                    Saber más
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="destacados"
          className="scroll-mt-24 bg-vet-warm py-24 sm:py-32 lg:py-40"
          aria-labelledby="destacados-heading"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-vet-primary">Farmacia clínica</p>
                <h2
                  id="destacados-heading"
                  className="font-display mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl"
                >
                  Productos destacados
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">
                  Selección reducida de marcas que usamos en consulta. La imagen cuenta la mitad de la historia; la otra
                  mitad la escribes tú con el bienestar de tu compañero.
                </p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-stone-500 lg:text-right">
                Envío opcional en ciudad · Recogida en mostrador sin colas prolongadas
              </p>
            </div>

            <ul className="mt-20 grid grid-cols-1 gap-8 lg:mt-28 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
              {featuredProducts.map((item, index) => {
                const isFeatured = index === 0;
                return (
                  <li
                    key={item.name}
                    className={`group flex overflow-hidden rounded-[1.75rem] border border-stone-200/60 bg-white shadow-[0_1px_2px_rgb(28_25_23/0.04),0_20px_40px_rgb(28_25_23/0.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgb(28_25_23/0.06),0_36px_72px_rgb(28_25_23/0.08)] ${
                      isFeatured
                        ? "flex-col lg:col-span-2 lg:row-span-2 lg:min-h-[min(640px,78vh)] lg:flex-row lg:items-stretch"
                        : "flex-col"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-stone-200 ${
                        isFeatured
                          ? "aspect-[4/5] w-full lg:aspect-auto lg:h-auto lg:w-[52%] lg:min-h-full"
                          : "aspect-[4/5] w-full"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes={isFeatured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 22vw"}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/10 to-transparent lg:bg-gradient-to-r lg:from-stone-950/40 lg:via-transparent lg:to-transparent"
                        aria-hidden
                      />
                    </div>
                    <div
                      className={`flex flex-1 flex-col justify-center px-8 pb-10 pt-9 ${
                        isFeatured ? "lg:w-[48%] lg:px-10 lg:py-12" : ""
                      }`}
                    >
                      {isFeatured ? (
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vet-primary">Destacado</p>
                      ) : null}
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-stone-900 lg:text-[1.65rem]">
                        {item.name}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-stone-600">{item.detail}</p>
                      <p className="mt-6 font-display text-2xl font-semibold text-vet-primary">{item.price}</p>
                      <a
                        href="#cita"
                        className="mt-8 inline-flex w-fit items-center border-b border-vet-primary/40 pb-1 text-sm font-semibold text-vet-primary transition-colors hover:border-vet-primary"
                      >
                        Pedir asesoramiento
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          id="cita"
          className="scroll-mt-24 bg-stone-50 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
          aria-labelledby="cita-heading"
        >
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-vet-deep shadow-[0_24px_80px_rgb(20_34_28/0.35)] ring-1 ring-white/10">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative px-8 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
                <div
                  className="pointer-events-none absolute -right-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-16 bottom-0 size-72 rounded-full bg-teal-400/10 blur-3xl"
                  aria-hidden
                />
                <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
                  Agenda preferente
                </p>
                <h2
                  id="cita-heading"
                  className="font-display relative mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
                >
                  Reserva una franja tranquila para conversar sin prisas
                </h2>
                <p className="relative mt-8 max-w-md text-lg leading-relaxed text-emerald-50/90">
                  Indica motivo de la visita y horarios que te encajen. Confirmamos por teléfono o correo en horario
                  laboral.
                </p>
                <a
                  href="tel:+34900000000"
                  className="relative mt-12 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-vet-deep shadow-md transition-transform hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Llamar para cita
                </a>
              </div>
              <div className="relative border-t border-white/10 bg-stone-950/40 px-8 py-12 sm:px-12 lg:border-l lg:border-t-0 lg:py-20">
                <dl className="space-y-10 text-emerald-50/95">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/70">Teléfono</dt>
                    <dd className="mt-2 font-display text-2xl font-medium text-white">+34 900 000 000</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/70">Correo</dt>
                    <dd className="mt-2 text-lg">
                      <a
                        href="mailto:citas@arcadia-vet.example"
                        className="border-b border-emerald-200/40 font-medium text-white transition-colors hover:border-white"
                      >
                        citas@arcadia-vet.example
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/70">Horario</dt>
                    <dd className="mt-2 max-w-xs leading-relaxed text-emerald-50/90">
                      Lun–Vie 9:00–20:00 · Sábados 10:00–14:00 · Urgencias telefónicas fuera de horario
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/80 bg-white py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 text-vet-primary">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-vet-soft ring-1 ring-vet-border/50">
              <IconPaw className="size-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-stone-900">Arcadia Veterinaria</p>
              <p className="text-sm text-stone-500">Salud animal con mirada humana</p>
            </div>
          </div>
          <p className="text-sm text-stone-500">© {new Date().getFullYear()} Arcadia Veterinaria</p>
        </div>
      </footer>
    </div>
  );
}
