import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui/toast'

type TokenTileProps = {
  name: string
  className: string
  subtitle?: string
}

function CopyChip({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 1200)
    return () => clearTimeout(id)
  }, [copied])

  return (
    <button
      type="button"
      className={cn(
        'rounded border px-1.5 py-0.5 text-xs transition-colors',
        copied ? 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-900/20 dark:text-emerald-300' : 'border-border/70 bg-muted/50 text-muted-foreground hover:bg-muted/70',
      )}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
          toast({ title: 'Copied', description: value })
        } catch {
          /* no-op */
        }
      }}
      aria-label={`Copy ${value}`}
    >
      {copied ? 'Copied!' : label ?? value}
    </button>
  )
}

function TokenTile({ name, className, subtitle }: TokenTileProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/60">
      <div className={cn('flex h-16 items-center justify-between px-3 py-2 text-sm', className)}>
        <span className="font-medium">{name}</span>
        {subtitle ? <span className="text-xs opacity-80">{subtitle}</span> : null}
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-border/60 bg-background/60 px-3 py-2 text-xs text-muted-foreground">
        <CopyChip value={`bg-${name.toLowerCase()}`} />
        <CopyChip value={`var(--${name.toLowerCase()})`} />
      </div>
    </div>
  )
}

type PairTileProps = {
  name: string
  baseClass: string
  fgClass: string
}

function PairTile({ name, baseClass, fgClass }: PairTileProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/60">
      <div className={cn('flex h-16 items-center justify-between px-3 py-2 text-sm', baseClass)}>
        <span className="font-medium">{name}</span>
        <span className="text-xs opacity-80">base</span>
      </div>
      <div className={cn('flex h-12 items-center justify-between px-3 py-2 text-sm', fgClass)}>
        <span className="font-medium">{name} Foreground</span>
        <span className="text-xs opacity-80">foreground</span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/60 bg-background/60 px-3 py-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <CopyChip value={`bg-${name.toLowerCase()}`} />
          <CopyChip value={`text-${name.toLowerCase()}-foreground`} />
        </div>
        <div className="flex items-center gap-2">
          <CopyChip value={`var(--${name.toLowerCase()})`} />
          <CopyChip value={`var(--${name.toLowerCase()}-foreground)`} />
        </div>
      </div>
    </div>
  )
}

function ScaleRow({ title, scale, labels }: { title: string; scale: string[]; labels?: string[] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { toast } = useToast()
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-foreground">{title}</div>
      <div className="overflow-hidden rounded-lg border border-border/60">
        <div className="grid grid-cols-10">
          {scale.map((cls, i) => (
            <button
              key={i}
              type="button"
              title={`Copy ${cls}`}
              className={cn('relative h-14 transition-transform hover:scale-[1.02] focus:outline-none', cls)}
              onClick={async () => {
                await navigator.clipboard.writeText(cls)
                setCopiedIndex(i)
                toast({ title: 'Copied', description: cls })
                setTimeout(() => setCopiedIndex((v) => (v === i ? null : v)), 1000)
              }}
            >
              {copiedIndex === i ? (
                <span className="pointer-events-none absolute bottom-1 right-1 rounded bg-black/40 px-1 text-[10px] text-white backdrop-blur-sm dark:bg-white/20">Copied</span>
              ) : null}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-10 border-t border-border/60 bg-background/60 text-center text-[11px] text-muted-foreground">
          {(labels ?? ['100','200','300','400','500','600','700','800','900','950']).map((l, i) => (
            <div key={i} className="px-1 py-1">
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ColorsDocs() {
  return (
    <div className="space-y-8">
      {/* Theme tokens */}
      <Card className="border-border/70 bg-card/80 backdrop-blur">
        <CardHeader className="border-b border-border/60">
          <CardTitle>Theme Tokens</CardTitle>
          <CardDescription>Semantic CSS variables that adapt to light and dark themes.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <PairTile name="Primary" baseClass="bg-primary text-primary-foreground" fgClass="bg-primary-foreground text-primary" />
            <PairTile name="Secondary" baseClass="bg-secondary text-secondary-foreground" fgClass="bg-secondary-foreground text-secondary" />
            <PairTile name="Accent" baseClass="bg-accent text-accent-foreground" fgClass="bg-accent-foreground text-accent" />
            <PairTile name="Muted" baseClass="bg-muted text-muted-foreground" fgClass="bg-muted-foreground text-muted" />
            <PairTile name="Destructive" baseClass="bg-destructive text-destructive-foreground" fgClass="bg-destructive-foreground text-destructive" />
            <PairTile name="Card" baseClass="bg-card text-card-foreground" fgClass="bg-card-foreground text-card" />
            <PairTile name="Popover" baseClass="bg-popover text-popover-foreground" fgClass="bg-popover-foreground text-popover" />
            <PairTile name="Background" baseClass="bg-background text-foreground" fgClass="bg-foreground text-background" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <TokenTile name="Border" className="bg-border text-foreground" subtitle="outline/separators" />
            <TokenTile name="Input" className="bg-input text-foreground" subtitle="form borders" />
            <TokenTile name="Ring" className="bg-ring text-background" subtitle="focus ring" />
          </div>
        </CardContent>
      </Card>

      {/* Functional scales */}
      <Card className="border-border/70 bg-card/80 backdrop-blur">
        <CardHeader className="border-b border-border/60">
          <CardTitle>Functional Scales</CardTitle>
          <CardDescription>Utility palettes used by variants (success, warning, danger, gray).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 p-6">
          <ScaleRow
            title="Success (emerald)"
            scale={['bg-emerald-100','bg-emerald-200','bg-emerald-300','bg-emerald-400','bg-emerald-500','bg-emerald-600','bg-emerald-700','bg-emerald-800','bg-emerald-900','bg-emerald-950']}
          />
          <ScaleRow
            title="Warning (amber)"
            scale={['bg-amber-100','bg-amber-200','bg-amber-300','bg-amber-400','bg-amber-500','bg-amber-600','bg-amber-700','bg-amber-800','bg-amber-900','bg-amber-950']}
          />
          <ScaleRow
            title="Danger (red)"
            scale={['bg-red-100','bg-red-200','bg-red-300','bg-red-400','bg-red-500','bg-red-600','bg-red-700','bg-red-800','bg-red-900','bg-red-950']}
          />
          <ScaleRow
            title="Gray (slate)"
            scale={['bg-slate-100','bg-slate-200','bg-slate-300','bg-slate-400','bg-slate-500','bg-slate-600','bg-slate-700','bg-slate-800','bg-slate-900','bg-slate-950']}
          />
        </CardContent>
      </Card>

      {/* Chart tokens */}
      <Card className="border-border/70 bg-card/80 backdrop-blur">
        <CardHeader className="border-b border-border/60">
          <CardTitle>Chart Tokens</CardTitle>
          <CardDescription>Brand-agnostic categorical colors exposed as CSS vars and Tailwind keys.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 p-6">
          {[1,2,3,4,5].map((n) => (
            <div key={n} className="space-y-2">
              <div
                className="flex h-16 items-center justify-between rounded-lg border border-border/60 px-3 py-2 text-sm"
                style={{ backgroundColor: `hsl(var(--chart-${n}))`, color: 'hsl(var(--foreground))' }}
              >
                <span className="font-medium">Chart {n}</span>
                <span className="text-xs opacity-80">--chart-{n}</span>
              </div>
              <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <CopyChip value={`bg-chart-${n}`} />
                <CopyChip value={`var(--chart-${n})`} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
