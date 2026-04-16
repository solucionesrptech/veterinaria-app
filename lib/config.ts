/**
 * URL base del backend Nest (desarrollo: puerto 3333 por defecto).
 * Sobrescribe con NEXT_PUBLIC_API_URL si lo necesitas.
 */
export function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";
}
