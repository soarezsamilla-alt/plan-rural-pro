import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ImagePlaceholder,
  Section,
  SectionTitle,
} from "@/components/plan-rural/primitives";
import { SampleGallery } from "@/components/plan-rural/sample-gallery";
import aereoAntesAsset from "@/assets/aereo-antes.jpg.asset.json";
import aereoDespuesAsset from "@/assets/aereo-despues.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Plan Rural — +120 Proyectos de Fincas Rurales Productivas",
      },
      {
        name: "description",
        content:
          "+120 planos profesionales de fincas y propiedades rurales con medidas reales, divisiones estratégicas y layouts listos para ejecutar. Acceso inmediato.",
      },
      {
        property: "og:title",
        content: "Plan Rural — +120 Proyectos de Fincas Rurales Productivas",
      },
      {
        property: "og:description",
        content:
          "La biblioteca más completa de proyectos rurales de América Latina. Acceso inmediato en tu correo y 7 días de garantía.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanRuralLanding,
});

/* ---------------------------------------------------------------- datos --- */

const BENEFITS = [
  {
    title: "Planifica con Visión Profesional",
    text: "Deja de adivinar qué hacer con tu terreno. Ahora sigues proyectos listos con división estratégica.",
  },
  {
    title: "Sabe Dónde Va Cada Cosa",
    text: "Casa, cultivos, animales, riego… todo ya posicionado para el mejor flujo y aprovechamiento.",
  },
  {
    title: "Deja de Perder Tiempo",
    text: "Sin errores, sin intentos, sin desperdicio. Proyectos con medidas reales para aplicación directa.",
  },
  {
    title: "Empieza en Minutos",
    text: "Abre el proyecto y aplícalo directo en tu terreno. Recíbelo al instante en tu correo.",
  },
];

const WITHOUT = [
  "Tierra parada sin uso",
  "No sabes por dónde empezar",
  "Mezclas todo sin organización",
  "Dependes de ideas sueltas de internet",
];

const WITH = [
  "Terreno dividido con estrategia",
  "Cada área con función clara",
  "Más productividad y más ingresos",
  "Planificación profesional en tu mano",
];

const INCLUDED = [
  {
    title: "Proyectos con Medidas Reales",
    text: "Planos técnicos dimensionados en metros",
  },
  {
    title: "Divisiones por Vocación Productiva",
    text: "Café, hortalizas, ganadería, piscicultura y más",
  },
  {
    title: "Adaptados a 5 Regiones Climáticas",
    text: "Tropical húmedo, sabana, semiárido, templado y andino",
  },
  {
    title: "Acceso Vitalicio e Inmediato",
    text: "Compra una vez y úsalo siempre",
  },
  {
    title: "Actualizaciones Gratuitas",
    text: "Siempre nuevos modelos incluidos",
  },
  { title: "6 Bonos Exclusivos", text: "abajo 👇" },
];

const BONUSES = [
  {
    id: "Bono 01",
    title: "Pack de Construcciones Rurales",
    text: "10 planos listos de gallineros, chiqueros, establos y tanques.",
    image: "https://www.image2url.com/r2/default/images/1788105907110-daea85f2-2fd3-4a5a-83cc-e4ed5adfb9c6.blob",
  },
  {
    id: "Bono 02",
    title: "Calculadora de ROI Productivo",
    text: "Calculadora editable con retorno financiero estimado.",
    image: "https://www.image2url.com/r2/default/images/1788105963768-6b826a84-9149-431e-a3f3-544ee53878ab.blob",
  },
  {
    id: "Bono 03",
    title: "Guía de Plantas Compañeras",
    text: "Aprende qué plantar junto para aumentar la productividad.",
    image: "https://www.image2url.com/r2/default/images/1788106038628-648b34b8-4103-4476-8cc2-c8bca7dc3b0b.blob",
  },
  {
    id: "Bono 04",
    title: "Manual de Energía Solar Rural",
    text: "Dimensiona sistemas solares para casas, pozos y riego.",
    image: "https://www.image2url.com/r2/default/images/1788106085460-45dbe0c5-d117-45e7-9a0a-20bbfe4aa462.blob",
  },
  {
    id: "Bono 05",
    title: "Checklist de Viabilidad Rural",
    text: "Lista de verificación paso a paso para evaluar tu terreno.",
    image: "https://www.image2url.com/r2/default/images/1788106129504-e7e19a14-fc07-41a8-89ac-ae837938b8c0.blob",
  },
  {
    id: "Bono 06",
    title: "Guía de Normativas y Permisos por País",
    text: "Resumen de regulaciones para proyectos rurales en Latinoamérica.",
    image: "https://www.image2url.com/r2/default/images/1788106168351-5a6ee2ac-f161-4a5e-8a84-6e698d3fb5a7.blob",
  },
];

const STEPS = [
  { title: "Realiza el Pago", text: "Acceso inmediato tras la confirmación de compra." },
  { title: "Recibe por Correo", text: "Tu usuario y contraseña llegan en segundos." },
  {
    title: "Abre los Proyectos",
    text: "Descarga los PDFs desde el celular, tablet o computadora.",
  },
  { title: "Aplica en tu Tierra", text: "Sigue los planos y transforma tu propiedad." },
];

const BASIC_ITEMS = [
  { text: "+120 proyectos completos", included: true },
  { text: "Acceso inmediato tras la compra", included: true },
  { text: "Garantía de 7 días", included: true },
  { text: "Sin los 6 Bonos Exclusivos", included: false },
];

const FULL_ITEMS = [
  "+120 proyectos completos",
  "Bono 1: Construcciones Rurales",
  "Bono 2: Calculadora ROI",
  "Bono 3: Plantas Compañeras",
  "Bono 4: Energía Solar Rural",
  "Bono 5: Guía de Cultivos Pro",
  "Bono 6: Manual de Agua/Riego",
  "Acceso prioritario a nuevos proyectos",
  "Actualizaciones gratuitas semanales",
  "Garantía de 7 días",
];

const FAQ = [
  {
    q: "¿Cómo recibo los materiales tras la compra?",
    a: "Apenas se confirma el pago, recibes en tu correo el acceso con usuario y contraseña.",
  },
  {
    q: "¿Necesito tener experiencia en agricultura?",
    a: "No. Los proyectos están pensados para que cualquier persona los aplique, incluso sin experiencia técnica.",
  },
  {
    q: "¿Los proyectos sirven para cualquier región?",
    a: "Sí. Están adaptados a 5 regiones climáticas de América Latina.",
  },
  {
    q: "¿En qué formato se entrega el material?",
    a: "100% digital, en archivos PDF de alta calidad.",
  },
  {
    q: "¿Funciona para terrenos pequeños?",
    a: "Sí. Hay proyectos desde 0,5 hasta 5 hectáreas.",
  },
  {
    q: "¿Qué diferencia hay con contratar un agrónomo?",
    a: "Un proyecto a la medida cuesta miles. Aquí recibes +120 proyectos por un precio único.",
  },
  {
    q: "¿Y si no me gusta el material?",
    a: "7 días de garantía incondicional. Te devolvemos cada centavo.",
  },
];

/* -------------------------------------------------------------- página --- */

function PlanRuralLanding() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. BADGE DE TOPO */}
      <div className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-3 text-center">
          <p className="text-sm font-medium">
            👀 10 personas están viendo esta página ahora
          </p>
        </div>
      </div>

      {/* 2. HERO */}
      <Section className="bg-cream pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="group relative mb-5">
            {/* Soft glow layer */}
            <div className="absolute -inset-1 rounded-full bg-harvest/30 opacity-75 blur-md transition-opacity duration-700 group-hover:opacity-100" />
            {/* Badge body */}
            <div className="relative flex items-center gap-2 overflow-hidden rounded-full border border-harvest/25 bg-card/60 px-3 py-1.5 backdrop-blur-xl shadow-[0_0_15px_-3px_oklch(0.78_0.16_78_/_0.25)]">
              {/* Indicator dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-harvest shadow-[0_0_6px_oklch(0.78_0.16_78_/_0.8)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground">
                Edición Premium 2026
              </span>
              {/* Shimmer sweep */}
              <span aria-hidden="true" className="badge-shimmer absolute inset-0 rounded-full" />
            </div>
          </div>
          <h1 className="font-display text-3xl leading-[1.15] text-foreground sm:text-4xl lg:text-5xl">
            +120 Proyectos de Fincas y Propiedades Rurales Productivas que
            transforman tu tierra parada en una fuente de ingresos mensuales
          </h1>
          <img
            src="https://www.image2url.com/r2/default/images/1788017254104-7d6377d3-e9ea-4182-ac72-34c45a4fe7d8.png"
            alt="Mockup del pack Plan Rural Edición Premium"
            className="mockup-soft-pulse my-8 h-auto w-full max-w-lg rounded-xl object-cover md:my-10"
            width="800"
            height="1000"
            loading="eager"
          />
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            La biblioteca más completa de proyectos rurales de América Latina:
            +120 planos profesionales con medidas reales, divisiones
            estratégicas y layouts listos para ejecutar.
          </p>
          <p className="mt-4 text-sm font-medium text-primary">
            Acceso inmediato en tu correo · Pago 100% seguro
          </p>
          <a
            href="#planes"
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-clay px-8 py-4 text-center text-base font-bold uppercase tracking-wide text-clay-foreground shadow-lift transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            Quiero mi proyecto por $5,90
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            ★ Acceso inmediato · 7 días de garantía ★
          </p>
        </div>
      </Section>

      {/* 3. BENEFÍCIOS */}
      <Section>
        <SectionTitle className="text-center">
          Lo que va a cambiar en tu propiedad
        </SectionTitle>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="font-display text-2xl text-clay">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg leading-snug text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* 4. GALERIA DE AMOSTRAS */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>📖 Una muestra del material que vas a recibir</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Ejemplos reales de las páginas que vas a recibir. Cada proyecto con
            estándar editorial profesional.
          </p>
        </div>
        <div className="mt-10">
          <SampleGallery />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          los +120 proyectos siguen el mismo estándar editorial premium.
        </p>
      </Section>

      {/* 5. ANTES / DEPOIS */}
      <Section>
        <SectionTitle className="text-center">
          Mira la diferencia Sin los Proyectos y Con los Proyectos
        </SectionTitle>
        <div className="mt-10">
          <div className="rounded-[1.75rem] bg-foreground p-2 shadow-lift md:p-3">
            <div className="relative grid grid-cols-2 overflow-hidden rounded-3xl">
              <img
                src={aereoAntesAsset.url}
                alt="Vista aérea de una propiedad rural sin los proyectos: tierra seca y sin organización"
                className="aspect-square h-full w-full bg-muted object-cover"
                loading="eager"
                decoding="async"
                width={1024}
                height={1024}
              />
              <img
                src={aereoDespuesAsset.url}
                alt="Vista aérea de una propiedad rural con los proyectos: cultivos organizados y productivos"
                className="aspect-square h-full w-full bg-muted object-cover"
                loading="eager"
                decoding="async"
                width={1024}
                height={1024}
              />
              <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-foreground" />
              <div className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm md:left-5 md:top-5 md:px-3 md:py-1.5 md:text-xs">
                <span aria-hidden="true" className="mr-1 text-destructive">✕</span>
                Sin los Proyectos
              </div>
              <div className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm md:right-5 md:top-5 md:px-3 md:py-1.5 md:text-xs">
                <span aria-hidden="true" className="mr-1 text-primary">✓</span>
                Con +120 Proyectos
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="text-xl text-foreground">Sin los proyectos</h3>
            <ul className="mt-4 space-y-3">
              {WITHOUT.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="text-destructive">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-secondary p-6 shadow-soft">
            <h3 className="text-xl text-secondary-foreground">Con los proyectos</h3>
            <ul className="mt-4 space-y-3">
              {WITH.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-secondary-foreground">
                  <span aria-hidden="true" className="text-primary">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6. TUDO INCLUÍDO */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <div className="group relative mb-5 inline-block">
            <div className="absolute -inset-1 rounded-full bg-harvest/30 opacity-75 blur-md transition-opacity duration-700 group-hover:opacity-100" />
            <div className="relative flex items-center gap-1.5 overflow-hidden rounded-full border border-harvest/25 bg-card/60 px-2.5 py-1 backdrop-blur-xl shadow-[0_0_12px_-3px_oklch(0.78_0.16_78_/_0.25)]">
              <span className="h-1 w-1 rounded-full bg-harvest shadow-[0_0_5px_oklch(0.78_0.16_78_/_0.8)]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground">
                Todo esto está incluido en tu kit
              </span>
              <span aria-hidden="true" className="badge-shimmer absolute inset-0 rounded-full" />
            </div>
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            +120 Proyectos de Propiedades Rurales Productivas
          </h2>
          <div className="mx-auto mt-8 max-w-4xl">
            <img
              src="https://www.image2url.com/r2/default/images/1788017734020-aca3f843-e313-4f5f-b1f2-6ccce5f5eb3d.png"
              alt="Kit con más de 120 proyectos rurales productivos"
              className="h-auto w-full rounded-xl object-cover"
              width="800"
              height="1000"
              loading="lazy"
            />
          </div>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-primary-foreground/80">
            No es un curso ni un manual teórico. Es una biblioteca visual
            completa, lista para elegir, imprimir y ejecutar.
          </p>
          <ul className="mx-auto mt-7 max-w-xl space-y-4 text-left">
            {INCLUDED.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span aria-hidden="true" className="text-harvest">
                  ✓
                </span>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-primary-foreground/75">
                    {" — "}
                    {item.text}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7. BÔNUS */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>Y no termina aquí… ¡hay más!</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Tu acceso incluye además estos 6 bonos estratégicos, totalmente
            GRATIS.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((bonus) => (
            <article
              key={bonus.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <ImagePlaceholder label={bonus.image} ratio="wide" className="mx-auto block max-w-[220px]" />
              <h3 className="mt-4 text-base leading-snug text-card-foreground">
                🎁 {bonus.id} — {bonus.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {bonus.text}
              </p>
              <p className="mt-4 text-sm font-semibold text-clay">
                <span className="line-through opacity-60">$17 USD</span> → GRATIS
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* 8. CTA */}
      <Section className="py-12 md:py-16">
        <div className="flex justify-center">
          <a
            href="#planes"
            className="inline-flex w-full items-center justify-center rounded-full bg-clay px-10 py-5 text-center text-base font-bold uppercase tracking-wide text-clay-foreground shadow-lift transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            Quiero el plan completo ›
          </a>
        </div>
      </Section>

      {/* 9. GALERIA DE AMOSTRAS (repetição) */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>Deja de buscar proyectos dispersos por ahí</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Ten en tus manos la mayor biblioteca de planos de fincas y casas de
            campo de América Latina.
          </p>
        </div>
        <div className="mt-10">
          <SampleGallery />
        </div>
      </Section>

      {/* 10. COMO FUNCIONA */}
      <Section>
        <SectionTitle className="text-center">
          Empieza a organizar en minutos
        </SectionTitle>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg leading-snug text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 11. DEPOIMENTOS */}
      <Section className="bg-cream">
        <SectionTitle className="mx-auto max-w-2xl text-center">
          Resultados reales y comentarios de productores que ya usan Plan Rural.
        </SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <ImagePlaceholder
              key={index}
              label={`testimonio-0${index + 1}`}
              ratio="tall"
              className="bg-card"
            />
          ))}
        </div>
      </Section>

      {/* 12. PLANOS */}
      <Section id="planes">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>Elige tu plan y empieza ahora</SectionTitle>
          <p className="mt-4 inline-block rounded-full bg-harvest px-4 py-2 text-sm font-semibold text-harvest-foreground">
            ⏱ OFERTA DISPONIBLE SOLO HOY, --/--/----
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          {/* Plan Básico */}
          <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <h3 className="text-2xl text-card-foreground">Plan Básico</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              De <span className="line-through">$47 USD</span> por:
            </p>
            <p className="font-display text-4xl text-primary">$5,90</p>
            <p className="text-sm text-muted-foreground">(Pago único)</p>
            <img
              src="https://www.image2url.com/r2/default/images/1788017703132-d1ef4d1a-8253-4a09-a2c5-1fb586d66206.png"
              alt="Mockup del Plan Básico de Plan Rural"
              className="mt-5 h-auto w-full rounded-xl object-cover"
              width="800"
              height="450"
              loading="lazy"
            />
            <ul className="mt-6 space-y-3">
              {BASIC_ITEMS.map((item) => (
                <li key={item.text} className="flex gap-3 text-sm">
                  <span
                    aria-hidden="true"
                    className={item.included ? "text-primary" : "text-destructive"}
                  >
                    {item.included ? "✓" : "✕"}
                  </span>
                  <span
                    className={
                      item.included ? "text-card-foreground" : "text-muted-foreground"
                    }
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-7 flex w-full items-center justify-center rounded-full border-2 border-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Quiero el Básico ›
            </a>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              [LINK DE CHECKOUT — BÁSICO]
            </p>
          </article>

          {/* Acceso Completo */}
          <article className="relative rounded-3xl border-2 border-clay bg-card p-7 shadow-lift">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-clay px-4 py-1 text-xs font-bold uppercase tracking-widest text-clay-foreground">
              ★ Acceso Completo ★
            </span>
            <h3 className="mt-2 text-2xl text-card-foreground">Acceso Completo</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              De <span className="line-through">$137 USD</span> por:
            </p>
            <p className="font-display text-4xl text-clay">$9,90</p>
            <p className="text-sm text-muted-foreground">
              (Pago único · Acceso vitalicio + Bonos)
            </p>
            <img
              src="https://www.image2url.com/r2/default/images/1788017254104-7d6377d3-e9ea-4182-ac72-34c45a4fe7d8.png"
              alt="Mockup del acceso completo a Plan Rural"
              className="mt-5 h-auto w-full rounded-xl object-cover"
              width="800"
              height="450"
              loading="lazy"
            />
            <ul className="mt-6 space-y-3">
              {FULL_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-card-foreground">
                  <span aria-hidden="true" className="text-primary">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-7 flex w-full items-center justify-center rounded-full bg-clay px-6 py-4 text-sm font-bold uppercase tracking-wide text-clay-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Quiero el plan completo ›
            </a>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              [LINK DE CHECKOUT — COMPLETO]
            </p>
          </article>
        </div>

        <p className="mt-8 text-center text-sm font-medium text-foreground">
          🔥 No vas a encontrar este precio después.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Pago 100% seguro · Acceso inmediato
        </p>
      </Section>

      {/* 13. INSTAGRAM */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>
            Síguenos en Instagram y mira a Plan Rural en acción
          </SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Consejos de planificación rural, proyectos reales y contenido
            exclusivo todas las semanas. ¿Tienes dudas? Escríbenos por allí.
          </p>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:p-8">
          <div>
            <div className="flex items-center gap-4">
              <ImagePlaceholder
                label="foto de perfil Plan Rural"
                ratio="square"
                className="h-20 w-20 shrink-0 rounded-full"
              />
              <div>
                <p className="font-display text-xl text-card-foreground">Plan Rural</p>
                <p className="text-sm text-muted-foreground">@plan.rural.oficial</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Planificación rural de la manera correcta
              <br />
              +120 proyectos profesionales de fincas
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-muted p-3">
                <dt className="font-display text-lg text-foreground">+120</dt>
                <dd className="text-xs text-muted-foreground">Proyectos</dd>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <dt className="font-display text-lg text-foreground">
                  [preencher com número real]
                </dt>
                <dd className="text-xs text-muted-foreground">Productores</dd>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <dt className="font-display text-lg text-foreground">15+</dt>
                <dd className="text-xs text-muted-foreground">Años exp.</dd>
              </div>
            </dl>
            <a
              href="#"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Ver Plan Rural en Instagram
            </a>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              ¿Tienes dudas? Escríbenos directo al perfil
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <ImagePlaceholder key={n} label={`ig-post-${n}`} ratio="square" />
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          ✓ Contenido nuevo toda la semana • Consejos reales de planificación
          rural • Sin rodeos
        </p>
      </Section>

      {/* 14. GARANTIA */}
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center shadow-soft md:flex-row md:text-left">
          <ImagePlaceholder
            label="sello garantía 7 días"
            ratio="square"
            className="h-32 w-32 shrink-0 rounded-full"
          />
          <div>
            <h2 className="font-display text-2xl text-card-foreground md:text-3xl">
              Garantía Incondicional de 7 Días
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tenemos tanta confianza en el valor de Plan Rural que asumimos
              todo el riesgo. Si en 7 días no estás 100% satisfecho, te
              devolvemos cada centavo.
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">
              Riesgo cero para ti
            </p>
          </div>
        </div>
      </Section>

      {/* 15. FAQ */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl">
          <SectionTitle className="text-center">Preguntas frecuentes</SectionTitle>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* 16. RODAPÉ */}
      <footer className="bg-primary px-5 py-12 text-primary-foreground">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="font-display text-2xl">PLAN RURAL</p>
          <p className="mt-1 text-sm text-primary-foreground/75">
            Edición Premium 2026 · Todos los derechos reservados
          </p>
          <p className="mt-4 text-sm">
            <a href="#" className="underline underline-offset-4">
              Términos de Uso
            </a>
            <span className="px-2 text-primary-foreground/50">|</span>
            <a href="#" className="underline underline-offset-4">
              Política de Privacidad
            </a>
          </p>
          <p className="mt-6 text-xs leading-relaxed text-primary-foreground/70">
            Este sitio no está afiliado a Facebook, Instagram, Google ni a
            ninguna otra plataforma. Los resultados dependen del esfuerzo y la
            aplicación práctica del cliente.
          </p>
        </div>
      </footer>

      {/* Prova social flutuante */}
      <div className="pointer-events-none fixed bottom-4 left-4 z-50 max-w-[calc(100%-2rem)] rounded-xl border border-border bg-card px-4 py-3 shadow-lift">
        <p className="text-xs text-card-foreground">
          <span className="font-semibold">Juan P., de Bogotá</span> — Acaba de
          comprar · ahora mismo
        </p>
      </div>
    </main>
  );
}
