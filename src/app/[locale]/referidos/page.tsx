import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  Handshake,
  MapPinned,
  MessageCircle,
  Sprout,
  Users,
} from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import { ReferralCalculator } from '@/components/referrals/ReferralCalculator';
import { pageMetadata } from '@/lib/seo';
import { referralsConfig } from '@/lib/referrals';

const copy = {
  es: {
    metaTitle: 'Programa de Referidos y Experiencia en Campo',
    metaDescription:
      'Conectá productores con BioAgroSolutions, aprendé en visitas reales y accedé a una comisión por ventas concretadas.',
    eyebrow: 'BioAgroSolutions · Estudiantes y Campo',
    title: 'Tu próximo contacto puede convertirse en experiencia. Y en ingresos.',
    intro:
      'Conectá productores con soluciones biológicas para el campo. Acompañá a nuestro equipo, aprendé en visitas reales y ganá un 3,3% de comisión por cada venta concretada con tus referidos.',
    join: 'Quiero ser parte',
    calculate: 'Ver cuánto puedo ganar',
    highlight: '1.000 hectáreas de soya pueden representar USD 7.788 para vos.',
    highlightNote:
      'Ejemplo calculado con un plan de USD 236/ha en productos y una comisión del 3,3%. Sujeto al valor final de la venta y a que la operación se concrete.',
    howEyebrow: 'Cómo funciona',
    howTitle: 'Vos generás la conexión. Nosotros te acompañamos.',
    steps: [
      ['Conectá', '¿Conocés a un productor interesado en mejorar su manejo? Presentale BioAgroSolutions y generá el interés por conocer nuestra propuesta.'],
      ['Coordiná', 'Ayudanos a conseguir una reunión. Nuestro equipo conversa con el productor y evalúa sus necesidades.'],
      ['Viví la experiencia', 'Te llevamos a la visita al campo para que conozcas cómo trabajamos y cómo se presenta una propuesta técnica.'],
      ['Ganá', 'Si cerramos la venta con tu referido, ganás el 3,3% de comisión.'],
    ],
    condition: 'El contacto o la reunión por sí solos no generan comisión. La comisión se genera únicamente cuando la venta se concreta.',
    exampleEyebrow: 'Ejemplo comercial',
    exampleTitle: 'Pensá en hectáreas. Visualizá tu oportunidad.',
    planTitle: 'Plan de manejo completo para soya',
    planRows: [
      ['Superficie', '1.000 hectáreas'],
      ['Valor de referencia en productos', 'USD 236/ha'],
      ['Venta del ejemplo', 'USD 236.000'],
      ['Tu comisión del 3,3%', 'USD 7.788'],
    ],
    opportunity: 'Una oportunidad para transformar tus vínculos con el sector en aprendizaje, experiencia y una recompensa económica por los negocios que ayudás a generar.',
    disclaimer: 'El valor de referencia incluye productos, no el costo de aplicación. El ejemplo no garantiza ingresos: la comisión depende de la venta concretada y de su importe final.',
    calculator: {
      title: 'Simulá una oportunidad', hectares: 'Hectáreas', price: 'Venta por hectárea (USD)', sale: 'Total de venta', commission: 'Comisión estimada · 3,3%',
      simulation: 'Esta es una simulación orientativa, no un presupuesto ni una promesa de ingresos. El monto final depende de la venta concretada.',
      invalid: 'Ingresá valores mayores que cero para realizar la simulación.',
    },
    benefitsEyebrow: 'Tu experiencia',
    benefitsTitle: 'Lo que ganás va más allá de la comisión.',
    benefits: [
      ['Experiencia en campo', 'Acompañá al equipo en las visitas vinculadas a tus referidos.'],
      ['Conocimiento aplicado', 'Aprendé sobre productos biológicos, microbiología y microorganismos benéficos para las plantas.'],
      ['Contacto con el sector', 'Participá del intercambio con productores y nuestro equipo.'],
      ['Recursos para empezar', 'Accedé a planes de manejo, infografías e información de BioAgroSolutions.'],
    ],
    resourcesEyebrow: 'Recursos para empezar',
    resourcesTitle: 'Sumate. Aprendé. Empezá a conectar.',
    communityTitle: 'Comunidad de WhatsApp',
    communityText: 'Un espacio para aprender sobre agricultura biológica y mantenerte en contacto con nuestro equipo.',
    communityConfigured: 'Ingresar a la comunidad',
    communityFallback: 'Solicitar acceso por WhatsApp',
    driveTitle: 'Materiales en Drive',
    driveText: 'Todo lo que necesitás para conocer nuestra propuesta: planes de manejo completos, infografías y material de BioAgroSolutions.',
    driveButton: 'Explorar los materiales',
    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Todo lo que necesitás saber antes de empezar.',
    faqs: [
      ['¿Para quién es?', 'Para estudiantes interesados en aprender sobre agricultura biológica y ganar experiencia con productores.'],
      ['¿Solo puedo referir el plan de soya?', 'No. También podés referir nuestros productos biológicos.'],
      ['¿Tengo que hacer la presentación técnica?', 'Nuestro equipo presenta la propuesta técnica. Tu participación consiste en generar el contacto y ayudar a conseguir una reunión.'],
      ['¿Cuándo se genera la comisión?', 'Cuando se concreta la venta con tu referido. El registro del referido y la liquidación se coordinan con el equipo.'],
      ['¿Cómo empiezo?', 'Accedé al Drive, solicitá ingreso a la comunidad y contanos qué estudiás y de qué zona sos. Los datos de productores se comparten por privado con el equipo.'],
    ],
    finalTitle: 'Tu carrera también se construye en el campo.',
    finalText: 'Sumate a BioAgroSolutions y empezá a conectar lo que estudiás con experiencias reales.',
    finalButton: 'Quiero sumarme',
  },
  en: {
    metaTitle: 'Referral and Field Experience Program',
    metaDescription: 'Connect growers with BioAgroSolutions, learn through real field visits and earn a commission on completed sales.',
    eyebrow: 'BioAgroSolutions · Students and Fieldwork',
    title: 'Your next contact can become experience. And income.',
    intro: 'Connect growers with biological solutions for the field. Join our team on real visits, learn firsthand and earn a 3.3% commission on every completed sale from your referrals.',
    join: 'I want to join', calculate: 'See what I could earn',
    highlight: '1,000 hectares of soybeans could represent USD 7,788 for you.',
    highlightNote: 'Example based on a USD 236/ha product plan and a 3.3% commission. Subject to the final sale value and completion of the transaction.',
    howEyebrow: 'How it works', howTitle: 'You make the connection. We support you.',
    steps: [
      ['Connect', 'Know a grower interested in improving their management? Introduce BioAgroSolutions and spark their interest in our proposal.'],
      ['Coordinate', 'Help us arrange a meeting. Our team talks with the grower and assesses their needs.'],
      ['Get field experience', 'Join us on the field visit to learn how we work and present a technical proposal.'],
      ['Earn', 'If we close the sale with your referral, you earn a 3.3% commission.'],
    ],
    condition: 'A contact or meeting alone does not generate a commission. Commission is earned only when the sale is completed.',
    exampleEyebrow: 'Commercial example', exampleTitle: 'Think in hectares. Picture your opportunity.',
    planTitle: 'Complete soybean management plan',
    planRows: [['Area', '1,000 hectares'], ['Reference product value', 'USD 236/ha'], ['Example sale', 'USD 236,000'], ['Your 3.3% commission', 'USD 7,788']],
    opportunity: 'Turn your connections in the sector into learning, experience and financial recognition for the business you help generate.',
    disclaimer: 'The reference value includes products, not application costs. The example does not guarantee income: commission depends on the completed sale and its final amount.',
    calculator: { title: 'Simulate an opportunity', hectares: 'Hectares', price: 'Sale per hectare (USD)', sale: 'Total sale', commission: 'Estimated commission · 3.3%', simulation: 'This is an illustrative simulation, not a quote or income promise. The final amount depends on the completed sale.', invalid: 'Enter values greater than zero to run the simulation.' },
    benefitsEyebrow: 'Your experience', benefitsTitle: 'What you gain goes beyond commission.',
    benefits: [['Field experience', 'Join the team on visits connected to your referrals.'], ['Applied knowledge', 'Learn about biological products, microbiology and beneficial microorganisms for plants.'], ['Industry connections', 'Take part in conversations with growers and our team.'], ['Resources to begin', 'Access management plans, infographics and BioAgroSolutions information.']],
    resourcesEyebrow: 'Resources to begin', resourcesTitle: 'Join. Learn. Start connecting.',
    communityTitle: 'WhatsApp community', communityText: 'A space to learn about biological agriculture and stay connected with our team.', communityConfigured: 'Join the community', communityFallback: 'Request access on WhatsApp',
    driveTitle: 'Drive materials', driveText: 'Everything you need to understand our proposal: complete management plans, infographics and BioAgroSolutions materials.', driveButton: 'Explore the materials',
    faqEyebrow: 'Frequently asked questions', faqTitle: 'Everything you need to know before you begin.',
    faqs: [['Who is it for?', 'Students interested in learning about biological agriculture and gaining experience with growers.'], ['Can I only refer the soybean plan?', 'No. You can also refer our biological products.'], ['Do I have to make the technical presentation?', 'Our team presents the technical proposal. Your role is to make the connection and help arrange a meeting.'], ['When is commission generated?', 'When a sale with your referral is completed. Referral registration and settlement are coordinated with the team.'], ['How do I start?', 'Access the Drive, request community access and tell us what you study and where you are from. Grower details are shared privately with the team.']],
    finalTitle: 'Your career is also built in the field.', finalText: 'Join BioAgroSolutions and connect what you study with real experiences.', finalButton: 'I want to join',
  },
} as const;

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const t = locale === 'en' ? copy.en : copy.es;
  return pageMetadata({ locale, path: '/referidos', title: t.metaTitle, description: t.metaDescription });
}

const stepIcons = [Handshake, Users, MapPinned, CircleDollarSign];
const benefitIcons = [BriefcaseBusiness, GraduationCap, Users, BookOpen];

export default function ReferidosPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = locale === 'en' ? copy.en : copy.es;
  const communityReady = Boolean(referralsConfig.communityUrl);
  const communityHref = communityReady ? referralsConfig.communityUrl : referralsConfig.fallbackCommunityUrl;

  return (
    <>
      <section className="relative overflow-hidden bg-night pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <Image src="/casos/03_comparativa_tratamiento_semilla/07.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">{t.eyebrow}</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/78 sm:text-xl">{t.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#sumate" className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-lime px-7 font-semibold text-forest-deep shadow-glow transition hover:bg-lime-400">{t.join}<ArrowRight className="h-4 w-4" aria-hidden /></a>
              <a href="#calculadora" className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">{t.calculate}</a>
            </div>
          </div>
          <div className="mt-10 max-w-3xl rounded-2xl border border-lime/25 bg-lime/10 p-5 backdrop-blur-md sm:p-6">
            <p className="font-display text-xl font-bold text-white sm:text-2xl">{t.highlight}</p>
            <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">{t.highlightNote}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow={t.howEyebrow} title={t.howTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map(([title, description], index) => {
              const Icon = stepIcons[index];
              return <FadeIn key={title} delay={index * 0.07}><article className="h-full rounded-3xl bg-cream p-6 ring-1 ring-ink/5"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest text-white"><Icon className="h-5 w-5" /></span><span className="font-display text-3xl font-bold text-forest/15">0{index + 1}</span></div><h3 className="mt-6 text-xl font-bold text-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{description}</p></article></FadeIn>;
            })}
          </div>
          <p className="mt-7 rounded-2xl border-l-4 border-lime bg-lime/10 px-5 py-4 text-sm font-medium leading-relaxed text-forest-deep">{t.condition}</p>
        </Container>
      </section>

      <section id="calculadora" className="scroll-mt-20 bg-cream py-16 sm:py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow={t.exampleEyebrow} title={t.exampleTitle} />
          <div className="mt-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-forest-deep p-6 text-white shadow-glow sm:p-8">
              <Sprout className="h-9 w-9 text-lime" aria-hidden />
              <h3 className="mt-5 text-2xl font-bold text-white">{t.planTitle}</h3>
              <dl className="mt-7 divide-y divide-white/10">
                {t.planRows.map(([label, value], index) => <div key={label} className="flex items-end justify-between gap-4 py-4"><dt className="text-sm text-white/65">{label}</dt><dd className={index === 3 ? 'text-right text-xl font-bold text-lime-400' : 'text-right font-semibold text-white'}>{value}</dd></div>)}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-white/75">{t.opportunity}</p>
              <p className="mt-4 text-xs leading-relaxed text-white/50">{t.disclaimer}</p>
            </div>
            <ReferralCalculator copy={t.calculator} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow={t.benefitsEyebrow} title={t.benefitsTitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {t.benefits.map(([title, description], index) => { const Icon = benefitIcons[index]; return <FadeIn key={title} delay={index * 0.06}><article className="flex h-full gap-5 rounded-3xl border border-ink/10 bg-cream/60 p-6"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lime/15 text-forest-deep"><Icon className="h-6 w-6" /></span><div><h3 className="text-lg font-bold text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{description}</p></div></article></FadeIn>; })}
          </div>
        </Container>
      </section>

      <section id="sumate" className="scroll-mt-20 bg-night py-16 text-white sm:py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow={t.resourcesEyebrow} title={t.resourcesTitle} dark />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ResourceCard icon={MessageCircle} title={t.communityTitle} text={t.communityText} href={communityHref} button={communityReady ? t.communityConfigured : t.communityFallback} green />
            <ResourceCard icon={FolderOpen} title={t.driveTitle} text={t.driveText} href={referralsConfig.driveUrl} button={t.driveButton} />
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-ink/10 rounded-3xl bg-white px-5 shadow-card ring-1 ring-ink/5 sm:px-8">
            {t.faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-navy"><span>{question}</span><ChevronDown className="h-5 w-5 shrink-0 text-forest transition-transform group-open:rotate-180" /></summary><p className="pr-8 pt-3 text-sm leading-relaxed text-mute sm:text-base">{answer}</p></details>)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center text-white shadow-glow sm:px-12 lg:py-20">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/10" aria-hidden />
            <div className="relative mx-auto max-w-2xl"><Check className="mx-auto h-10 w-10 text-lime-400" /><h2 className="mt-5 text-balance text-3xl font-bold text-white sm:text-4xl">{t.finalTitle}</h2><p className="mt-4 text-lg text-white/80">{t.finalText}</p><a href={referralsConfig.contactUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-forest-deep shadow-soft transition hover:bg-cream">{t.finalButton}<ArrowRight className="h-4 w-4" /></a><div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/70"><span>+54 9 2262 48-7998</span><a href={referralsConfig.websiteUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-white">bioagrosolutions.com.ar</a></div></div>
          </div>
        </Container>
      </section>
    </>
  );
}

function SectionTitle({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-forest sm:text-sm">{eyebrow}</p><h2 className={`mt-3 text-balance text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2></div>;
}

function ResourceCard({ icon: Icon, title, text, href, button, green = false }: { icon: typeof MessageCircle; title: string; text: string; href: string; button: string; green?: boolean }) {
  return <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm sm:p-8"><span className={`grid h-12 w-12 place-items-center rounded-2xl ${green ? 'bg-[#25D366]/15 text-[#4ade80]' : 'bg-lime/15 text-lime-400'}`}><Icon className="h-6 w-6" /></span><h3 className="mt-6 text-2xl font-bold text-white">{title}</h3><p className="mt-3 flex-1 leading-relaxed text-white/65">{text}</p><a href={href} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold transition ${green ? 'bg-[#25D366] text-white hover:brightness-95' : 'bg-white text-forest-deep hover:bg-cream'}`}>{button}<ExternalLink className="h-4 w-4" /></a></article>;
}
