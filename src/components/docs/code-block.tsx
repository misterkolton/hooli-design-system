import * as React from 'react'

import { Copy, CopyCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  className,
}) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch (error) {
      console.warn('Unable to copy code to clipboard', error)
    }
  }, [code])

  return (
    <div
      className={cn(
        'relative rounded-xl border border-border bg-muted/40 text-left font-mono text-xs text-muted-foreground',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border/50 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/80">
        <span>{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-muted-foreground hover:text-foreground"
        >
          {copied ? (
            <CopyCheck className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">{copied ? 'Copied' : 'Copy code'}</span>
        </Button>
      </div>
      <pre className="max-h-[400px] overflow-auto px-4 py-4 text-[0.8rem] leading-6">
        <code>{code}</code>
      </pre>
    </div>
  )
}
