"use client";

import type { FormEvent } from "react";

export function PencilLoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <h1 className="text-[28px] font-semibold leading-none text-[#1b4332]">Iniciar sesión</h1>
      <p className="max-w-[360px] text-[15px] font-normal leading-[1.5] text-[#2f5f4f]">
        Accede con tu correo y contraseña de la clínica.
      </p>

      <div className="flex flex-col gap-2">
        <label htmlFor="pencil-login-email" className="text-[13px] font-semibold text-[#1b4332]">
          Correo electrónico
        </label>
        <input
          id="pencil-login-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nombre@ejemplo.com"
          className="h-12 w-full rounded-xl border border-[#c5d9ce] bg-[#f8faf8] px-[14px] text-[15px] text-[#1b4332] outline-none placeholder:text-[#5a6f62] focus:border-[#2f5f4f] focus:ring-2 focus:ring-[#2f5f4f]/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pencil-login-password" className="text-[13px] font-semibold text-[#1b4332]">
          Contraseña
        </label>
        <input
          id="pencil-login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className="h-12 w-full rounded-xl border border-[#c5d9ce] bg-[#f8faf8] px-[14px] text-[15px] text-[#1b4332] outline-none placeholder:text-[#5a6f62] focus:border-[#2f5f4f] focus:ring-2 focus:ring-[#2f5f4f]/20"
        />
      </div>

      <button
        type="submit"
        className="flex h-12 w-full items-center justify-center rounded-full bg-[#2f5f4f] text-[15px] font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f5f4f]"
      >
        Entrar
      </button>
    </form>
  );
}
