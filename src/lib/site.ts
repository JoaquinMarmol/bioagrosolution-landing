/**
 * Datos de la empresa (ver docs/05-company-info.md).
 * Las redes sociales pendientes del cliente quedan como placeholders.
 */
export const siteConfig = {
  name: 'Green Science',
  tagline: 'Living Soil Biotechnology',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://greenscience.bo',

  // Contacto
  phones: ['+54 9 2262 48-7998'],
  whatsapp: '5492262487998', // formato wa.me (sin + ni espacios)
  email: 'bioagrosolutions@gmail.com',
  address: 'Edificio Saota Park, 6RH2+X5X, Santa Cruz de la Sierra, Bolivia',
  addressShort: 'Santa Cruz de la Sierra, Bolivia',
  region: 'Santa Cruz, Bolivia',

  // Emergencias / legal
  emergency: 'Hospital Japonés 800-10-6966',

  // Mapa embebido (sin API key)
  mapsEmbed:
    'https://www.google.com/maps?q=-17.7700042,-63.1995129&z=17&output=embed',
  mapsLink: 'https://maps.app.goo.gl/UhJuwa1pRrdBAPKB8',

  // Redes (pendientes de confirmar por el cliente)
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
} as const;

/** Construye un enlace de WhatsApp con mensaje opcional prellenado. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
