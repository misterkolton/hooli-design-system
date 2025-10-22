import { ComponentExample } from '@/components/docs/component-example'
import { Button } from '@/components/ui/button'

const buttonVariantsPreview = (
  <div className="flex flex-wrap gap-3">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="accent">Accent</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="smoke">Smoke</Button>
    <Button variant="shadow">Shadow</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="subtle">Subtle</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
)

const buttonVariantsCode = `import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="smoke">Smoke</Button>
      <Button variant="shadow">Shadow</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`

const buttonLayoutPreview = (
  <div className="flex flex-wrap gap-3">
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
    <Button variant="secondary" fullWidth>
      Full Width
    </Button>
    <Button variant="shadow" elevated>
      Elevated Shadow
    </Button>
    <Button size="icon" aria-label="Search">
      <span className="sr-only">Search</span>🔍
    </Button>
  </div>
)

const buttonLayoutCode = `import { Button } from "@/components/ui/button"

export function ButtonLayout() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button variant="secondary" fullWidth>
        Full Width
      </Button>
      <Button variant="shadow" elevated>
        Elevated Shadow
      </Button>
      <Button size="icon" aria-label="Search">
        <span className="sr-only">Search</span>🔍
      </Button>
    </div>
  )
}`

const buttonCompositionPreview = (
  <div className="flex flex-wrap gap-3">
    <Button asChild>
      <a href="#cta">Link as Button</a>
    </Button>
    <Button disabled>Disabled</Button>
  </div>
)

const buttonCompositionCode = `import { Button } from "@/components/ui/button"

export function ButtonComposition() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <a href="#cta">Link as Button</a>
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}`

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Hooli Design System
          </span>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Component Documentation Playground
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 md:text-base">
            A guided preview of the rebuilt ShadCN-powered component library. Each
            section highlights atomic components, their variants, and recommended
            usage patterns as we translate the legacy QDS experience.
          </p>
        </header>

        <section className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Button</h2>
            <p className="text-sm text-slate-600 md:text-base">
              ShadCN button primitives enriched with the legacy QDS semantic palette.
              Reference these examples when mapping old button usages to the new stack.
            </p>
          </div>

          <ComponentExample
            title="Variants"
            description="Semantic variants cover the original QDS themes while using ShadCN styling."
            preview={buttonVariantsPreview}
            code={buttonVariantsCode}
          />

          <ComponentExample
            title="Sizes & Layout"
            description="Size tokens align with ShadCN defaults and introduce full-width and elevation modifiers."
            preview={buttonLayoutPreview}
            code={buttonLayoutCode}
          />

          <ComponentExample
            title="Composition"
            description="Buttons support composition via the asChild prop and standard disabled states."
            preview={buttonCompositionPreview}
            code={buttonCompositionCode}
          />
        </section>
      </div>
    </main>
  )
}
