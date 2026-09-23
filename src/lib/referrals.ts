const whatsappMessage =
  'Hola BioAgroSolutions, quiero participar del Programa de Referidos y Experiencia en Campo.';

export const referralsConfig = {
  commissionRate: 0.033,
  referencePricePerHectare: 236,
  quickHectares: [1000, 5000, 10000],
  driveUrl:
    'https://drive.google.com/drive/folders/1KHOGvjM1VU-U7N5ATqaRYWXSJF9lEtjO?usp=drive_link',
  communityUrl: process.env.NEXT_PUBLIC_REFERRALS_COMMUNITY_URL || '',
  fallbackCommunityUrl: `https://wa.me/5492262487998?text=${encodeURIComponent(whatsappMessage)}`,
  contactUrl: `https://wa.me/5492262487998?text=${encodeURIComponent(whatsappMessage)}`,
  websiteUrl: 'https://bioagrosolutions.com.ar',
} as const;
