import type { Metadata } from "next";
import { PencilLoginForm } from "@/components/pencil-login-form";

export const metadata: Metadata = {
  title: "Iniciar sesión — Arcadia Veterinaria",
  description: "Acceso con correo y contraseña.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 bg-[#f8faf8] px-[72px] py-12">
      <div className="w-full max-w-[440px] rounded-[20px] border border-[#d8e8dc] bg-white p-10">
        <PencilLoginForm />
      </div>
    </div>
  );
}
