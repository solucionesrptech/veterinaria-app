import Link from "next/link";

const servicesRow1 = [
  {
    title: "Consulta general",
    description: "Revisiones, vacunas y seguimiento personalizado.",
  },
  {
    title: "Urgencias",
    description: "Atención prioritaria y estabilización.",
  },
  {
    title: "Cirugía",
    description: "Quirófano equipado y monitorización.",
  },
] as const;

const servicesRow2 = [
  {
    title: "Laboratorio",
    description: "Analíticas y pruebas rápidas in house.",
  },
  {
    title: "Imagen",
    description: "Radiología y ecografía veterinaria.",
  },
  {
    title: "Peluquería",
    description: "Higiene, corte y cuidado del pelaje.",
  },
] as const;

const products = [
  { title: "Pienso adulto rico en proteína", detail: "desde 42€ / 12kg" },
  { title: "Snack dental", detail: "pack 30 unidades · 18€" },
  { title: "Antiparasitario mensual", detail: "pipetas desde 12€" },
] as const;

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex h-[200px] w-[440px] shrink-0 flex-col gap-2 rounded-[16px] border border-[#c8e6d5] bg-[#ecfdf5] p-6">
      <p className="text-lg font-semibold leading-none text-[#1b4332]">{title}</p>
      <p className="max-w-[380px] text-sm font-normal leading-[1.5] text-[#4a6356]">{description}</p>
    </div>
  );
}

function ProductCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="flex h-[220px] w-[420px] shrink-0 flex-col gap-3 rounded-[16px] border border-[#d8e8dc] bg-white p-5">
      <p className="text-[17px] font-semibold leading-none text-[#1b4332]">{title}</p>
      <p className="text-[15px] font-normal leading-none text-[#2f5f4f]">{detail}</p>
    </div>
  );
}

export function VeterinariaPencilLanding() {
  return (
    <div className="mx-auto w-full max-w-[1440px] overflow-x-auto bg-[#f8faf8]">
      <div className="flex min-w-[1440px] flex-col gap-0">
        <header className="flex h-[72px] items-center justify-between border-b border-[#d8e8dc] bg-[#f8faf8] px-[72px] py-[18px]">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-[14px] border border-[#c5d9ce] bg-[#ecfdf5] text-lg font-bold text-[#2f5f4f]">
              A
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[11px] font-semibold leading-none text-[#2f5f4f]">Medicina de precisión</p>
              <p className="text-base font-semibold leading-none text-[#1b4332]">Arcadia Veterinaria</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm font-semibold text-[#2f5f4f] underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f5f4f]"
            >
              Iniciar sesión
            </Link>
            <button
              type="button"
              className="flex h-11 w-[158px] items-center justify-center rounded-full bg-[#2f5f4f] text-sm font-semibold text-white"
            >
              Reservar cita
            </button>
          </div>
        </header>

        <section className="flex h-[220px] items-center justify-center bg-[#f8faf8]">
          <div className="flex size-[200px] items-center justify-center rounded-[4px] bg-[#dc2626]">
            <span className="text-lg font-bold text-[#fde047]">Texto amarillo</span>
          </div>
        </section>

        <section className="flex h-[520px] items-center justify-between gap-10 bg-[#2f5f4f] px-[72px] py-14">
          <div className="flex h-[400px] w-[620px] flex-col justify-center gap-5">
            <h1 className="w-[560px] text-[44px] font-semibold leading-[1.12] text-white">
              Salud y bienestar para tu mascota
            </h1>
            <p className="w-[520px] text-[17px] font-normal leading-[1.55] text-[#e8f5e9]">
              Medicina preventiva, urgencias 24h, cirugía y nutrición guiada por un equipo que ama los animales.
            </p>
            <div className="flex h-[52px] w-[520px] items-center gap-4 pt-2">
              <button
                type="button"
                className="flex h-12 w-[168px] items-center justify-center rounded-full bg-white text-[15px] font-semibold text-[#1b4332]"
              >
                Agendar cita
              </button>
              <button
                type="button"
                className="flex h-12 w-[188px] items-center justify-center rounded-full border-2 border-[#ffffffaa] border-solid bg-transparent text-[15px] font-medium text-white"
              >
                Nuestros servicios
              </button>
            </div>
          </div>
          <div className="flex h-[380px] w-[560px] flex-col items-center justify-center rounded-[20px] border border-[#ffffff33] bg-[#1a3d2e]">
            <p className="text-sm font-normal text-[#a8c5b8]">Imagen: veterinario / consulta</p>
          </div>
        </section>

        <section className="flex h-[920px] flex-col gap-9 bg-[#f8faf8] px-[72px] pb-12 pt-16">
          <h2 className="text-4xl font-semibold leading-none text-[#1b4332]">Servicios</h2>
          <div className="flex h-[200px] w-full gap-5">
            {servicesRow1.map((item) => (
              <ServiceCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
          <div className="flex h-[200px] w-full gap-5">
            {servicesRow2.map((item) => (
              <ServiceCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="flex h-[420px] flex-col gap-7 bg-[#f1f5f2] px-[72px] pb-16 pt-12">
          <div className="flex h-20 flex-col gap-2">
            <h2 className="text-[32px] font-semibold leading-none text-[#1b4332]">Productos recomendados</h2>
            <p className="w-[720px] max-w-full text-[15px] font-normal leading-[1.5] text-[#4a6356]">
              Alimentación y cuidado de la selección por nuestros veterinarios.
            </p>
          </div>
          <div className="flex h-[220px] gap-6">
            {products.map((item) => (
              <ProductCard key={item.title} title={item.title} detail={item.detail} />
            ))}
          </div>
        </section>

        <footer className="flex h-[100px] flex-col items-center justify-center bg-[#e8f0ea]">
          <p className="text-[13px] font-normal text-[#5a6f62]">Clínica veterinaria — diseño guía</p>
        </footer>
      </div>
    </div>
  );
}
