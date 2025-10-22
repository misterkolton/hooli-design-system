import { Button } from '@/components/ui/button'
import type { CSSProperties } from 'react'



const fallbackMainStyles: CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 1.5rem',
  background:
    'radial-gradient(circle at top, rgba(59, 130, 246, 0.12), transparent 60%), #f8fafc',
  width: '100%',
  fontFamily: "'Inter', system-ui, -apple-system",
};

const fallbackCardStyles: CSSProperties = {
  width: '100%',
  maxWidth: '36rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',
  padding: '2.5rem',
  textAlign: 'center',
  borderRadius: '1.5rem',
  border: '1px solid rgba(148, 163, 184, 0.35)',
  background: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 20px 45px -15px rgba(15, 23, 42, 0.3)',
  backdropFilter: 'blur(12px)',
}

const fallbackBadgeStyles: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.35rem 0.8rem',
  borderRadius: '9999px',
  border: '1px solid rgba(59, 130, 246, 0.25)',
  background: 'rgba(59, 130, 246, 0.12)',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: '#2563eb',
}

const fallbackChipStyles: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.4rem 0.85rem',
  borderRadius: '0.75rem',
  border: '1px solid rgba(148, 163, 184, 0.45)',
  background: 'rgba(241, 245, 249, 0.75)',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#64748b',
}

const fallbackButtonBase: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.65rem 1.25rem',
  borderRadius: '0.75rem',
  gap: '0.5rem',
  fontWeight: 600,
  fontSize: '0.95rem',
  cursor: 'pointer',
  transition: 'all 150ms ease-in-out',
}

export default function App() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-16"
      style={fallbackMainStyles}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%)]" />
      <section
        className="relative flex w-full max-w-xl flex-col items-center gap-5 rounded-3xl border border-slate-200 bg-white/90 p-10 text-center shadow-xl shadow-slate-900/10 backdrop-blur"
        style={fallbackCardStyles}
      >
        <span
          className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600"
          style={fallbackBadgeStyles}
        >
          Hooli Design System
        </span>
        <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          React 18 + Vite + Tailwind are wired up
        </h1>
        <p className="max-w-lg text-sm text-slate-600 md:text-base">
          Run{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold">
            npm run dev
          </code>{' '}
          to start the playground and begin migrating QDS atoms into the new ShadCN-style stack
          inside{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold">
            src/components
          </code>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2 w-full">
          <div
            className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 "
            style={fallbackChipStyles}
          >
            Next: add shadcn/ui
          </div>
          <div
            className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500"
            style={fallbackChipStyles}
          >
            Plan component migration
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Button style={fallbackButtonBase}>Primary</Button>
            <Button variant="secondary" style={fallbackButtonBase}>
              Secondary
            </Button>
            <Button variant="accent" style={fallbackButtonBase}>
              Accent
            </Button>
            <Button variant="success" style={fallbackButtonBase}>
              Success
            </Button>
            <Button variant="warning" style={fallbackButtonBase}>
              Warning
            </Button>
            <Button variant="danger" style={fallbackButtonBase}>
              Danger
            </Button>
            <Button variant="smoke" style={fallbackButtonBase}>
              Smoke
            </Button>
            <Button variant="shadow" style={fallbackButtonBase}>
              Shadow
            </Button>
            <Button variant="outline" style={fallbackButtonBase}>
              Outline
            </Button>
            <Button variant="subtle" style={fallbackButtonBase}>
              Subtle
            </Button>
            <Button variant="ghost" style={fallbackButtonBase}>
              Ghost
            </Button>
            <Button variant="link" style={fallbackButtonBase}>
              Link
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="sm" style={fallbackButtonBase}>
              Small
            </Button>
            <Button style={fallbackButtonBase}>Default</Button>
            <Button size="lg" style={fallbackButtonBase}>
              Large
            </Button>
            <Button size="xl" style={fallbackButtonBase}>
              Extra Large
            </Button>
            <Button size="icon" style={fallbackButtonBase} aria-label="Icon">
              <span className="sr-only">Icon button</span>🔍
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild style={fallbackButtonBase}>
              <a href="#cta">As Child Link</a>
            </Button>
            <Button disabled style={fallbackButtonBase}>
              Disabled
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
