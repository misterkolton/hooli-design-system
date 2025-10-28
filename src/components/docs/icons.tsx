import * as React from 'react'
import { Icon } from '@/components/ui/icon'
import { ICON_KEYS } from '@/components/ui/icon'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useToast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'

export function IconsCatalog() {
  const [query, setQuery] = React.useState('')
  const { toast } = useToast()
  const items = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    const arr = [...ICON_KEYS].sort((a, b) => a.localeCompare(b))
    return q ? arr.filter((n) => n.toLowerCase().includes(q)) : arr
  }, [query])

  return (
    <Card className="border-border/70 bg-card/80 backdrop-blur">
      <CardContent className="p-0">
        {/* Static header to avoid clipping the top border */}
        <div className="border-b border-border/60 bg-card p-3 rounded-t-xl">
          <input
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Search icons…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search icons"
          />
        </div>
        {/* Fixed-height scroll region so the page doesn’t reflow while filtering */}
        <ScrollArea className="h-[520px]">
          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {items.map((name) => (
              <button
                key={name}
                type="button"
                className={cn(
                  'group flex items-center gap-3 rounded-lg border border-border/60 bg-background/60 p-3 text-left transition-colors hover:bg-accent/30',
                )}
                onClick={async () => {
                  const value = `<Icon name="${name}" />`
                  await navigator.clipboard.writeText(value)
                  toast({ title: 'Copied', description: value })
                }}
              >
                <Icon name={name} />
                <span className="truncate text-xs text-muted-foreground group-hover:text-foreground">{name}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
