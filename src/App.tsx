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
import { IconsCatalog } from '@/components/docs/icons'
import { Icon } from '@/components/ui/icon'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Prose } from '@/components/ui/prose'
// Icon usage demos moved to our Icon component
import { ToastProvider } from '@/components/ui/toast'

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
    <Badge icon={<Icon name="bell" size="xSmall" decorative />}>Alert</Badge>
  </div>
)

const badgeCode = `import { Badge } from \"@/components/ui/badge\"\nimport { Icon } from \"@/components/ui/icon\"\n\nexport function BadgeExamples() {\n  return (\n    <div className=\"flex flex-wrap items-center gap-4\">\n      <Badge item={1} />\n      <Badge item={9} />\n      <Badge item={12} />\n      <Badge>New</Badge>\n      <Badge tone=\"secondary\">Beta</Badge>\n      <Badge tone=\"success\">Live</Badge>\n      <Badge tone=\"warning\">Warn</Badge>\n      <Badge tone=\"danger\">Fail</Badge>\n      <Badge icon={<Icon name=\"bell\" size=\"xSmall\" decorative />} >Alert</Badge>\n    </div>\n  )\n}`

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
  const [typoBalance, setTypoBalance] = React.useState(true)
  const [typoClamp, setTypoClamp] = React.useState<0|1|2|3|4|5>(0)

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

  // Alphabetical ordering for sections (page order)
  const sortedItems = React.useMemo(() => [...ALL_COMPONENT_ITEMS].sort((a, b) => a.label.localeCompare(b.label)), [])
  const orderMap = React.useMemo(() => Object.fromEntries(sortedItems.map((i, idx) => [i.slug, idx])), [sortedItems])
  const customSlugs = React.useMemo(
    () => new Set([
      'anchor',
      'animatedCheckMark',
      'avatar',
      'badge',
      'bar',
      'button',
      'capsule',
      'card',
      'colors',
      'iconography',
      'loadingSpinner',
      'typography',
      'prose',
      'typographyMigration',
      'typeScale',
      'typographyDosDonts',
    ]),
    [],
  )

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
          <section className="space-y-10" id="colors" style={{ order: orderMap['colors'] }}>
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

          {/* Typography Do's & Don'ts */}
          <section className="space-y-10" id="typographyDosDonts" style={{ order: orderMap['typographyDosDonts'] }}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Typography Do's & Don'ts</h2>
              <p className="text-sm text-muted-foreground md:text-base">Quick, opinionated guidance to keep type consistent and readable.</p>
            </div>
            <ComponentExample
              title="Examples"
              preview={(
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-emerald-300/60 bg-emerald-50/40 p-4 dark:border-emerald-500/40 dark:bg-emerald-500/10">
                    <h4 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-300">Do</h4>
                    <ul className="list-disc pl-5 text-sm text-emerald-900 dark:text-emerald-200">
                      <li><span className="font-medium">Use balanced H1–H2</span> for long titles.</li>
                      <li>Clamp body in tight cards (<code>clamp=2</code>).</li>
                      <li>Keep line length ~60–75ch for paragraphs.</li>
                      <li>Use semantic tones; keep contrast high.</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-red-300/60 bg-red-50/40 p-4 dark:border-red-500/40 dark:bg-red-500/10">
                    <h4 className="mb-2 font-semibold text-red-700 dark:text-red-300">Don't</h4>
                    <ul className="list-disc pl-5 text-sm text-red-900 dark:text-red-200">
                      <li>Clamp headings H1–H3.</li>
                      <li>Use color alone for emphasis.</li>
                      <li>Skip heading levels (e.g., H1 → H3).</li>
                      <li>Overuse all caps or tight tracking.</li>
                    </ul>
                  </div>
                </div>
              )}
              code={`// Do: balance H1–H2, clamp body, maintain contrast\n// Don't: clamp headings, rely on color alone, skip levels`}
            />
          </section>

          {/* Prose */}
          <section className="space-y-10" id="prose" style={{ order: orderMap['prose'] }}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Prose</h2>
              <p className="text-sm text-muted-foreground md:text-base">Editorial wrapper for articles and docs. Provides rhythm, list spacing, and sensible defaults.</p>
            </div>
            <ComponentExample
              title="Full Example"
              description="Headings, paragraphs, lists, blockquote, code, and links."
              preview={(
                <div className="space-y-6">
                  <Prose className="rounded-lg border border-border/60 bg-background/60 p-6">
                    <h1>Prose defaults</h1>
                    <p>
                      Use <a href="#">Prose</a> for rich text like documentation. It sets a comfortable measure and spaced
                      headings, lists, and code. Inline <code>code</code> and <strong>strong</strong> text are styled.
                    </p>
                    <h2>Blockquote</h2>
                    <blockquote>
                      Typography rules should be consistent, predictable, and easy to scan.
                    </blockquote>
                    <h3>Lists</h3>
                    <ul>
                      <li>Consistent spacing</li>
                      <li>Readable measure (~70ch)</li>
                      <li>Themed links and <code>code</code></li>
                    </ul>
                    <h3>Code block</h3>
                    <pre><code>{`function greet(name){\n  return \`Hello, ${'${name}'}!\`\n}`}</code></pre>
                  </Prose>
                  <Prose invert className="rounded-lg border border-border/60 bg-foreground/5 p-6">
                    <h3>Inverted</h3>
                    <p>Use <code>invert</code> for dark cards on light backgrounds or vice versa.</p>
                  </Prose>
                </div>
              )}
              code={`import { Prose } from "@/components/ui/prose"\n\n<Prose>\n  <h1>Prose defaults</h1>\n  <p>Use <a href="#">Prose</a>…</p>\n  <blockquote>…</blockquote>\n  <ul><li>…</li></ul>\n  <pre><code>…</code></pre>\n</Prose>`}
            />
          </section>

          {/* Typography Migration */}
          <section className="space-y-10" id="typographyMigration" style={{ order: orderMap['typographyMigration'] }}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Typography Migration</h2>
              <p className="text-sm text-muted-foreground md:text-base">Map legacy QDS Text → new Heading/Text. Prefer tokens, remove layout props, and clamp instead of ellipsis hacks.</p>
            </div>
            <ComponentExample
              title="Mapping"
              preview={(
                <div className="overflow-x-auto rounded-lg border border-border/60">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50 text-muted-foreground">
                      <tr>
                        <th className="px-3 py-2">Legacy</th>
                        <th className="px-3 py-2">Prop</th>
                        <th className="px-3 py-2">New</th>
                        <th className="px-3 py-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">type="heroTitle"</td><td className="px-3 py-2">&lt;Heading level=1 /&gt;</td><td className="px-3 py-2">Use balance for long titles</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">type="title"</td><td className="px-3 py-2">&lt;Heading level=2 /&gt;</td><td className="px-3 py-2">Keep semantic order</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">type="subtitle"</td><td className="px-3 py-2">&lt;Heading level=3 /&gt;</td><td className="px-3 py-2">Use sparingly</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">type="largeBody"</td><td className="px-3 py-2">&lt;Text size="lg" /&gt;</td><td className="px-3 py-2"></td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">type="body"</td><td className="px-3 py-2">&lt;Text size="base" /&gt;</td><td className="px-3 py-2">Default</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">type="caption"</td><td className="px-3 py-2">&lt;Text size="caption" /&gt;</td><td className="px-3 py-2"></td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">type="footnote"</td><td className="px-3 py-2">&lt;Text size="footnote" /&gt;</td><td className="px-3 py-2"></td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">color props</td><td className="px-3 py-2">tone="muted|danger|…"</td><td className="px-3 py-2">Use semantic tokens</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">whiteSpace / isStrikeThrough</td><td className="px-3 py-2">Tailwind utilities</td><td className="px-3 py-2">whitespace-nowrap, line-through</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">alignment</td><td className="px-3 py-2">align="start|center|end"</td><td className="px-3 py-2">RTL-friendly</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">ellipsis hacks</td><td className="px-3 py-2">clamp=1|2|3</td><td className="px-3 py-2">Prefer clamp</td></tr>
                      <tr className="border-t"><td className="px-3 py-2">Text</td><td className="px-3 py-2">inset/outset</td><td className="px-3 py-2">margin utilities</td><td className="px-3 py-2">m/mt/mb/py etc.</td></tr>
                    </tbody>
                  </table>
                </div>
              )}
              code={`// heroTitle -> <Heading level={1} />\n// title -> <Heading level={2} />\n// body -> <Text size=\"base\" />\n// caption -> <Text size=\"caption\" />\n// whitespace-nowrap -> <Text nowrap /> or utility\n// ellipsis -> <Text clamp={1} />`}
            />
          </section>

          {/* Loading Spinner */}
          <section className="space-y-10" id="loadingSpinner" style={{ order: orderMap['loadingSpinner'] }}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Loading Spinner</h2>
              <p className="text-sm text-muted-foreground md:text-base">Minimal 180° ring spinner with a faint track. Supports size, tone, and speed presets.</p>
            </div>

            <ComponentExample
              title="Sizes"
              preview={(
                <div className="flex flex-wrap items-center gap-6">
                  <LoadingSpinner size="xSmall" />
                  <LoadingSpinner size="small" />
                  <LoadingSpinner size="medium" />
                  <LoadingSpinner size="large" />
                  <LoadingSpinner size="xLarge" />
                </div>
              )}
              code={`import { LoadingSpinner } from "@/components/ui/loading-spinner"\n\nexport function SpinnerSizes(){\n  return (\n    <div className=\"flex items-center gap-6\">\n      <LoadingSpinner size=\"xSmall\" />\n      <LoadingSpinner size=\"small\" />\n      <LoadingSpinner size=\"medium\" />\n      <LoadingSpinner size=\"large\" />\n      <LoadingSpinner size=\"xLarge\" />\n    </div>\n  )\n}`}
            />

            <ComponentExample
              title="Tones"
              preview={(
                <div className="flex flex-wrap items-center gap-6">
                  <LoadingSpinner tone="primary" />
                  <LoadingSpinner tone="secondary" />
                  <LoadingSpinner tone="accent" />
                  <LoadingSpinner tone="success" />
                  <LoadingSpinner tone="warning" />
                  <LoadingSpinner tone="danger" />
                </div>
              )}
              code={`export function SpinnerTones(){\n  return (\n    <div className=\"flex items-center gap-6\">\n      <LoadingSpinner tone=\"primary\" />\n      <LoadingSpinner tone=\"secondary\" />\n      <LoadingSpinner tone=\"accent\" />\n      <LoadingSpinner tone=\"success\" />\n      <LoadingSpinner tone=\"warning\" />\n      <LoadingSpinner tone=\"danger\" />\n    </div>\n  )\n}`}
            />

            <ComponentExample
              title="Speed"
              preview={(
                <div className="flex flex-wrap items-center gap-6">
                  <LoadingSpinner speed="slow" />
                  <LoadingSpinner speed="normal" />
                  <LoadingSpinner speed="fast" />
                </div>
              )}
              code={`export function SpinnerSpeed(){\n  return (\n    <div className=\"flex items-center gap-6\">\n      <LoadingSpinner speed=\"slow\" />\n      <LoadingSpinner speed=\"normal\" />\n      <LoadingSpinner speed=\"fast\" />\n    </div>\n  )\n}`}
            />
          </section>

          {/* Typography */}
          <section className="space-y-10" id="typography" style={{ order: orderMap['typography'] }}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Typography</h2>
              <p className="text-sm text-muted-foreground md:text-base">Inter variable for UI. Balanced H1–H2, clamp support for Text, RTL-friendly alignment, and a Prose wrapper for editorial content.</p>
            </div>

            {/* Playground */}
            <ComponentExample
              title="Playground"
              description="Toggle heading balance and body clamp."
              preview={(
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <label className="inline-flex items-center gap-2">
                      <input type="checkbox" checked={typoBalance} onChange={(e)=>setTypoBalance(e.target.checked)} />
                      <span>Balance H1</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <span>Clamp:</span>
                      <select className="rounded border bg-background px-2 py-1" value={typoClamp} onChange={(e)=>setTypoClamp(Number(e.target.value) as any)}>
                        {[0,1,2,3,4,5].map(n=> <option key={n} value={n}>{n}</option>)}
                      </select>
                    </label>
                  </div>
                  <Heading level={1} balance={typoBalance}>Design delightful, accessible interfaces at scale</Heading>
                  <Text clamp={typoClamp}>ShadCN-powered components + a strict token system keep typography consistent across surfaces. Clamp text to avoid overflow in tight spaces; prefer balance for H1–H2 to prevent awkward breaks.</Text>
                </div>
              )}
              code={`import { Heading } from "@/components/ui/heading"\nimport { Text } from "@/components/ui/text"\n\n<Heading level={1} balance>Design delightful, accessible interfaces at scale</Heading>\n<Text clamp={2}>…body copy…</Text>`}
            />

            <ComponentExample
              title="Prose"
              description="Editorial wrapper with sensible defaults."
              preview={(
                <Prose className="rounded-lg border border-border/60 bg-background/60 p-4">
                  <h2>Typography in practice</h2>
                  <p>Use balanced headings for single-column layouts and clamp body in tight cards. Keep contrast high and avoid relying on color alone for emphasis.</p>
                  <ul>
                    <li>Headings: levels 1–4</li>
                    <li>Body sizes: sm, md, lg</li>
                    <li>Clamp lines for truncation</li>
                  </ul>
                </Prose>
              )}
              code={`import { Prose } from "@/components/ui/prose"\n\n<Prose>\n  <h2>Typography in practice</h2>\n  <p>…</p>\n</Prose>`}
            />
          </section>

          {/* Type Scale */}
          <section className="space-y-10" id="typeScale" style={{ order: orderMap['typeScale'] }}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Type Scale</h2>
              <p className="text-sm text-muted-foreground md:text-base">All sizes at a glance — headings and text.</p>
            </div>
            <ComponentExample
              title="Headings"
              preview={(
                <div className="space-y-3">
                  <Heading level={1}>Heading 1 — level={1}</Heading>
                  <Heading level={2}>Heading 2 — level={2}</Heading>
                  <Heading level={3}>Heading 3 — level={3}</Heading>
                  <Heading level={4}>Heading 4 — level={4}</Heading>
                </div>
              )}
              code={`import { Heading } from "@/components/ui/heading"\n\n<Heading level={1}>Heading 1</Heading>\n<Heading level={2}>Heading 2</Heading>\n<Heading level={3}>Heading 3</Heading>\n<Heading level={4}>Heading 4</Heading>`}
            />
            <ComponentExample
              title="Text"
              preview={(
                <div className="space-y-1.5">
                  <Text size="lg">Text lg — size="lg"</Text>
                  <Text size="base">Text base — size="base"</Text>
                  <Text size="sm">Text sm — size="sm"</Text>
                  <Text size="caption">Text caption — size="caption"</Text>
                  <Text size="footnote">Text footnote — size="footnote"</Text>
                </div>
              )}
              code={`import { Text } from "@/components/ui/text"\n\n<Text size=\"lg\">Text lg</Text>\n<Text size=\"base\">Text base</Text>\n<Text size=\"sm\">Text sm</Text>\n<Text size=\"caption\">Text caption</Text>\n<Text size=\"footnote\">Text footnote</Text>`}
            />
          </section>

          <section className="space-y-10" id="button" style={{ order: orderMap['button'] }}>
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

          <section className="space-y-10" id="anchor" style={{ order: orderMap['anchor'] }}>
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

          <section className="space-y-10" id="avatar" style={{ order: orderMap['avatar'] }}>
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

          <section className="space-y-10" id="animatedCheckMark" style={{ order: orderMap['animatedCheckMark'] }}>
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

          <section className="space-y-10" id="badge" style={{ order: orderMap['badge'] }}>
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

          {sortedItems.filter((i) => !customSlugs.has(i.slug)).map((item) => (
            <section className="space-y-6" id={item.slug} key={item.slug} style={{ order: orderMap[item.slug] }}>
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
          
          <section className="space-y-10" id="bar" style={{ order: orderMap['bar'] }}>
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

          <section className="space-y-10" id="iconography" style={{ order: orderMap['iconography'] }}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Iconography</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                A modern Lucide-based Icon component with legacy QDS name and props mapping. Supports
                tones, sizes (tokens or px), orientation, and stroke width.
              </p>
            </div>

            <ComponentExample
              title="Examples"
              description="Searchable icon registry with legacy mapping and usage."
              preview={<IconsCatalog />}
              code={`import { Icon } from "@/components/ui/icon"\n\nexport function IconExamples() {\n  return (\n    <>\n      {/* Size tokens or pixels */}\n      <Icon name="close" size="small" />\n      <Icon name="close" size={20} />\n\n      {/* Tone or legacy primaryColor mapping */}\n      <Icon name="check" tone="success" />\n      <Icon name="closeCircle" primaryColor="danger" />\n\n      {/* Orientation for directional glyphs */}\n      <Icon name="chevron" orientation="left" />\n\n      {/* Loading uses a spin animation */}\n      <Icon name="loading" />\n    </>\n  )\n}`}
            />
          </section>

          <section className="space-y-10" id="capsule" style={{ order: orderMap['capsule'] }}>
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

          <section className="space-y-10" id="card" style={{ order: orderMap['card'] }}>
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
