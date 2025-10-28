import * as React from 'react'

import { ComponentExample } from '@/components/docs/component-example'
import { DocsSidebar } from '@/components/docs/sidebar'
import { ThemeToggle } from '@/components/docs/theme-toggle'
import { ComingSoon } from '@/components/docs/coming-soon'
import { ALL_COMPONENT_ITEMS } from '@/components/docs/sidebar-data'
import { Button } from '@/components/ui/button'
import { Anchor } from '@/components/ui/anchor'
import { Avatar } from '@/components/ui/avatar'
import { AnimatedCheckmark } from '@/components/ui/animated-checkmark'
import { Badge } from '@/components/ui/badge'
import { Bar } from '@/components/ui/bar'
import { Capsule } from '@/components/ui/capsule'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ColorsDocs } from '@/components/docs/colors'
import { Bell } from 'lucide-react'
import { ToastProvider } from '@/components/ui/toast'
import { Menu, X } from 'lucide-react'

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

const anchorPreview = (
  <div className="flex flex-wrap items-center gap-4">
    <Anchor href="#">Default Link</Anchor>
    <Anchor href="#" decorated>
      Decorated
    </Anchor>
    <Anchor href="#" tone="muted">
      Muted
    </Anchor>
    <Anchor href="#" tone="primary" target="_blank">
      External Target
    </Anchor>
  </div>
)

const anchorCode = `import { Anchor } from "@/components/ui/anchor"

export function AnchorExamples() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Anchor href="#">Default Link</Anchor>
      <Anchor href="#" decorated>Decorated</Anchor>
      <Anchor href="#" tone="muted">Muted</Anchor>
      <Anchor href="#" tone="primary" target="_blank">External Target</Anchor>
    </div>
  )
}`

const animatedCheckmarkPreview = (
  <div className="flex flex-wrap items-center gap-6">
    <AnimatedCheckmark />
    <AnimatedCheckmark filled />
    <AnimatedCheckmark tone="success" />
    <AnimatedCheckmark tone="warning" />
    <AnimatedCheckmark tone="danger" />
    <AnimatedCheckmark size="large" replayOnHover />
  </div>
)

const animatedCheckmarkCode = `import { AnimatedCheckmark } from "@/components/ui/animated-checkmark"\n\nexport function AnimatedCheckmarkExamples() {\n  return (\n    <div className=\"flex flex-wrap items-center gap-6\">\n      <AnimatedCheckmark />\n      <AnimatedCheckmark filled />\n      <AnimatedCheckmark tone=\"success\" />\n      <AnimatedCheckmark tone=\"warning\" />\n      <AnimatedCheckmark tone=\"danger\" />\n      <AnimatedCheckmark size=\"large\" replayOnHover />\n    </div>\n  )\n}`

const badgePreview = (
  <div className="flex flex-wrap items-center gap-4">
    <Badge item={1} />
    <Badge item={9} />
    <Badge item={12} />
    <Badge>New</Badge>
    <Badge tone="secondary">Beta</Badge>
    <Badge tone="success">Live</Badge>
    <Badge tone="warning">Warn</Badge>
    <Badge tone="danger">Fail</Badge>
    <Badge icon={<Bell className="h-3 w-3" aria-hidden />}>Alert</Badge>
  </div>
)

const badgeCode = `import { Badge } from \"@/components/ui/badge\"\nimport { Bell } from \"lucide-react\"\n\nexport function BadgeExamples() {\n  return (\n    <div className=\"flex flex-wrap items-center gap-4\">\n      <Badge item={1} />\n      <Badge item={9} />\n      <Badge item={12} />\n      <Badge>New</Badge>\n      <Badge tone=\"secondary\">Beta</Badge>\n      <Badge tone=\"success\">Live</Badge>\n      <Badge tone=\"warning\">Warn</Badge>\n      <Badge tone=\"danger\">Fail</Badge>\n      <Badge icon={<Bell className=\"h-3 w-3\" aria-hidden />} >Alert</Badge>\n    </div>\n  )\n}`

const barPreview = (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <Bar width={64} height={8} tone="muted" />
      <Bar width={128} height={8} tone="primary" />
      <Bar width={192} height={8} tone="success" />
    </div>
    <div className="flex items-end gap-3" style={{ height: 80 }}>
      <Bar width={8} height={24} tone="danger" />
      <Bar width={8} height={40} tone="warning" />
      <Bar width={8} height={64} tone="accent" />
    </div>
  </div>
)

const barCode = `import { Bar } from "@/components/ui/bar"\n\nexport function BarExamples() {\n  return (\n    <div className=\"flex flex-col gap-4\">\n      <div className=\"flex items-center gap-3\">\n        <Bar width={64} height={8} tone=\"muted\" />\n        <Bar width={128} height={8} tone=\"primary\" />\n        <Bar width={192} height={8} tone=\"success\" />\n      </div>\n      <div className=\"flex items-end gap-3\" style={{ height: 80 }}>\n        <Bar width={8} height={24} tone=\"danger\" />\n        <Bar width={8} height={40} tone=\"warning\" />\n        <Bar width={8} height={64} tone=\"accent\" />\n      </div>\n    </div>\n  )\n}`

const capsulePreview = (
  <div className="flex flex-wrap items-center gap-4">
    <Capsule>Success</Capsule>
    <Capsule tone="primary">Primary</Capsule>
    <Capsule tone="secondary">Secondary</Capsule>
    <Capsule tone="accent">Accent</Capsule>
    <Capsule tone="warning">Warning</Capsule>
    <Capsule tone="danger" shadow="sm">
      Danger
    </Capsule>
    <Capsule size="xSmall">XS</Capsule>
    <Capsule size="large">Large</Capsule>
  </div>
)

const capsuleCode = `import { Capsule } from "@/components/ui/capsule"\n\nexport function CapsuleExamples() {\n  return (\n    <div className=\"flex flex-wrap items-center gap-4\">\n      <Capsule>Success</Capsule>\n      <Capsule tone=\"primary\">Primary</Capsule>\n      <Capsule tone=\"secondary\">Secondary</Capsule>\n      <Capsule tone=\"accent\">Accent</Capsule>\n      <Capsule tone=\"warning\">Warning</Capsule>\n      <Capsule tone=\"danger\" shadow=\"sm\">Danger</Capsule>\n      <Capsule size=\"xSmall\">XS</Capsule>\n      <Capsule size=\"large\">Large</Capsule>\n    </div>\n  )\n}`

const cardPreview = (
  <div className="grid gap-6 md:grid-cols-2">
    <Card>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>Header, content, and footer slots.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Use CardHeader, CardContent, and CardFooter to organize content.
        </p>
      </CardContent>
      <CardFooter>
        <Badge>New</Badge>
      </CardFooter>
    </Card>

    <Card elevated hoverable>
      <CardHeader>
        <CardTitle>Elevated + Hoverable</CardTitle>
        <CardDescription>Shadow increases on hover.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-20 rounded-md bg-muted" />
      </CardContent>
      <CardFooter>
        <Anchor href="#">Learn more</Anchor>
      </CardFooter>
    </Card>

    <Card center className="h-32">
      <div className="text-sm text-muted-foreground">Centered content</div>
    </Card>

    <Card className="overflow-hidden">
      <div className="h-24 w-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />
      <CardContent className="pt-4">
        <CardTitle className="text-base">Media Card</CardTitle>
        <CardDescription>Combine with images or charts.</CardDescription>
      </CardContent>
    </Card>
  </div>
)

const cardCode = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"\nimport { Anchor } from "@/components/ui/anchor"\nimport { Badge } from "@/components/ui/badge"\n\nexport function CardExamples() {\n  return (\n    <div className=\"grid gap-6 md:grid-cols-2\">\n      <Card>\n        <CardHeader>\n          <CardTitle>Basic Card</CardTitle>\n          <CardDescription>Header, content, and footer slots.</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p className=\"text-sm text-muted-foreground\">Use CardHeader, CardContent, and CardFooter to organize content.</p>\n        </CardContent>\n        <CardFooter>\n          <Badge>New</Badge>\n        </CardFooter>\n      </Card>\n\n      <Card elevated hoverable>\n        <CardHeader>\n          <CardTitle>Elevated + Hoverable</CardTitle>\n          <CardDescription>Shadow increases on hover.</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <div className=\"h-20 rounded-md bg-muted\" />\n        </CardContent>\n        <CardFooter>\n          <Anchor href=\"#\">Learn more</Anchor>\n        </CardFooter>\n      </Card>\n\n      <Card center className=\"h-32\">\n        <div className=\"text-sm text-muted-foreground\">Centered content</div>\n      </Card>\n\n      <Card className=\"overflow-hidden\">\n        <div className=\"h-24 w-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20\" />\n        <CardContent className=\"pt-4\">\n          <CardTitle className=\"text-base\">Media Card</CardTitle>\n          <CardDescription>Combine with images or charts.</CardDescription>\n        </CardContent>\n      </Card>\n    </div>\n  )\n}`

type ThemeMode = 'light' | 'dark'
const THEME_STORAGE_KEY = 'hooli-theme'

export default function App() {
  const [theme, setTheme] = React.useState<ThemeMode>('light')
  const [activeSlug, setActiveSlug] = React.useState<string | undefined>('button')
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(mediaQuery.matches ? 'dark' : 'light')

    const listener = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', listener)
      return () => mediaQuery.removeEventListener('change', listener)
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(listener)
      return () => mediaQuery.removeListener(listener)
    }

    return undefined
  }, [])

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  React.useEffect(() => {
    const setFromHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : ''
      setActiveSlug(hash ? hash.replace('#', '') : 'button')
    }
    setFromHash()
    window.addEventListener('hashchange', setFromHash)
    return () => window.removeEventListener('hashchange', setFromHash)
  }, [])

  // Prevent body scroll when the mobile sidebar is open
  React.useEffect(() => {
    if (typeof document === 'undefined') return
    const body = document.body
    if (sidebarOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
    return () => {
      body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <ToastProvider>
    <main className="min-h-screen bg-background transition-colors">
      <div
        className={`mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 pt-6 ${sidebarCollapsed ? 'lg:grid-cols-[64px_1fr]' : 'lg:grid-cols-[260px_1fr]'}`}
      >
        <DocsSidebar
          activeSlug={activeSlug}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
        />

        <div className="flex flex-col gap-10 pt-10">
          <header className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-200">
                Hooli Design System
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle mode={theme} onToggle={toggleTheme} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 rounded-full"
                  aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
                  onClick={() => setSidebarOpen((o) => !o)}
                >
                  {sidebarOpen ? (
                    <X className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Menu className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
                <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
                  Components
                </h1>
              </div>
              <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
                A guided preview of the rebuilt ShadCN-powered component library. Each section
                highlights atomic components, their variants, and recommended usage patterns as we
                translate the legacy QDS experience.
              </p>
            </div>
          </header>

          {/* Colors */}
          <section className="space-y-10" id="colors">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Colors</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Theme tokens are exposed as CSS variables and Tailwind color keys. They adapt to
                light/dark mode and power semantic variants. Utility scales cover success, warning,
                danger, and grays for components.
              </p>
            </div>

            {/* Preview only; code sample focuses on usage */}
            <ComponentExample
              title="Palette"
              description="Semantic tokens and functional scales used across the system."
              preview={<ColorsDocs />}
              code={`// Use semantic tokens for surfaces and text\n<div className=\"bg-card text-card-foreground\">Card</div>\n<button className=\"bg-primary text-primary-foreground hover:bg-primary/90\">Primary</button>\n\n// Utility palettes for states\n<button className=\"bg-emerald-600 text-emerald-50\">Success</button>\n<button className=\"bg-amber-500 text-amber-950\">Warning</button>\n<button className=\"bg-red-600 text-red-50\">Danger</button>`}
            />
          </section>

          <section className="space-y-10" id="button">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Button</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                ShadCN button primitives enriched with the legacy QDS semantic palette. Reference
                these examples when mapping old button usages to the new stack.
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

          <section className="space-y-10" id="anchor">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Anchor</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                A refined link component that preserves the QDS Anchor API (size, color, decoration,
                and download/target behavior) while aligning with ShadCN styling and accessibility.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Decoration, tones, and target behavior mirror legacy defaults with cleaner CSS and focus states."
              preview={anchorPreview}
              code={anchorCode}
            />
          </section>

          <section className="space-y-10" id="avatar">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Avatar</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Image or initials with optional active status or selected checkmark. API mirrors the
                legacy QDS Avatar while using Tailwind/ShadCN styling.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Sizes, initials fallback, active bubble, and selected state with an animated checkmark."
              preview={(
                <div className="flex flex-wrap items-center gap-6">
                  <Avatar size="xSmall" initials="KT" />
                  <Avatar size="small" initials="KT" isActive />
                  <Avatar size="medium" initials="KT" />
                  <Avatar size="large" initials="KT" isSelected />
                  <Avatar size="xLarge" src="/vite.svg" alt="Example" />
                </div>
              )}
              code={`import { Avatar } from "@/components/ui/avatar"\n\nexport function AvatarExamples() {\n  return (\n    <div className=\"flex flex-wrap items-center gap-6\">\n      <Avatar size=\"xSmall\" initials=\"NW\" />\n      <Avatar size=\"small\" initials=\"NW\" isActive />\n      <Avatar size=\"medium\" initials=\"NW\" />\n      <Avatar size=\"large\" initials=\"NW\" isSelected />\n      <Avatar size=\"xLarge\" src=\"/vite.svg\" alt=\"Example\" />\n    </div>\n  )\n}`}
            />
          </section>

          <section className="space-y-10" id="animatedCheckMark">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Animated Checkmark</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                A dependency‑free animated checkmark that mirrors the legacy QDS timings and props
                while aligning with ShadCN tokens and reduced‑motion preferences.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Outline and filled variants, tones, and sizes. Hover the large example to replay."
              preview={animatedCheckmarkPreview}
              code={animatedCheckmarkCode}
            />
          </section>

          <section className="space-y-10" id="badge">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Badge</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Numeric counters and pill labels with tone variants. Caps counts above 10 by default
                for legacy parity, and supports icons.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Numeric count vs text pills, with tone variants and optional icons."
              preview={badgePreview}
              code={badgeCode}
            />
          </section>

          {ALL_COMPONENT_ITEMS.filter((i) =>
            i.slug !== 'button' && i.slug !== 'anchor' && i.slug !== 'animatedCheckMark' && i.slug !== 'avatar' && i.slug !== 'badge' && i.slug !== 'bar' && i.slug !== 'capsule' && i.slug !== 'card' && i.slug !== 'colors',
          ).map((item) => (
            <section className="space-y-6" id={item.slug} key={item.slug}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">{item.label}</h2>
                <p className="text-sm text-muted-foreground md:text-base">
                  Legacy QDS {item.label} is scheduled for migration to the new ShadCN-based
                  component library.
                </p>
              </div>
              <ComingSoon
                title={`${item.label} — migration in progress`}
                description="We’re porting this component to the new API, variants, and theme tokens. Docs and examples will appear here when ready."
              />
            </section>
          ))}
          
          <section className="space-y-10" id="bar">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Bar</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Simple rectangular blocks useful for charts and separators. Accepts width/height in
                px or CSS units and supports tone or custom background colors for legacy parity.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Horizontal and vertical bars with tone variants."
              preview={barPreview}
              code={barCode}
            />
          </section>

          <section className="space-y-10" id="capsule">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Capsule</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Small, rounded labels used for statuses and tags. Compatible with legacy Capsule
                props (backgroundColor/fontColor via tone mapping) and supports size and shadow
                variants.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Tone, size, and optional shadow."
              preview={capsulePreview}
              code={capsuleCode}
            />
          </section>

          <section className="space-y-10" id="card">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Card</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Flexible container with header/content/footer slots. Supports elevated, hoverable,
                and centered variants for quick layouts.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Basic, elevated/hoverable, centered, and media variants."
              preview={cardPreview}
              code={cardCode}
            />
          </section>
        </div>
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen ? (
        <div
          className="fixed inset-0 z-50 grid grid-cols-[minmax(0,1fr)] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Components navigation"
          onKeyDown={(e) => {
            if ((e as React.KeyboardEvent).key === 'Escape') setSidebarOpen(false)
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute inset-y-0 left-0 w-[280px] overflow-hidden rounded-r-xl border-r bg-background shadow-xl">
            <DocsSidebar
              inDrawer
              activeSlug={activeSlug}
              onNavigate={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </main>
    </ToastProvider>
  )
}
