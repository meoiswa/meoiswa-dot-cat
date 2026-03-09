import { useState } from 'react';
import { Badge, BADGE_VARIANTS } from '@/components/ui/badge';
import { Button, BUTTON_VARIANTS } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github } from 'react-bootstrap-icons';

// ─── Types ────────────────────────────────────────────────────────────────────

const TABS = ['Badge', 'Button', 'Card'] as const;
type Tab = (typeof TABS)[number];
const asKeys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[];

// ─── Badge showcase ───────────────────────────────────────────────────────────

function BadgeTab() {
  return (
    <div className="space-y-6">
      {asKeys(BADGE_VARIANTS).map((variant) => (
        <ShowcaseRow key={variant} label={variant}>
          <Badge variant={variant}>Badge</Badge>
          <Badge variant={variant}>With longer label</Badge>
          <Badge variant={variant}>TypeScript</Badge>
        </ShowcaseRow>
      ))}
    </div>
  );
}

// ─── Button showcase ──────────────────────────────────────────────────────────

const BUTTON_SIZES = ['sm', 'default', 'lg', 'icon'] as const;

function ButtonTab() {
  return (
    <div className="space-y-6">
      {asKeys(BUTTON_VARIANTS).map((variant) => (
        <ShowcaseRow key={variant} label={variant}>
          {BUTTON_SIZES.map((size) => (
            <div key={size} className="flex flex-col items-center gap-1">
              <span className="text-xs text-muted-foreground">{size}</span>
              <Button variant={variant} size={size}>
                {size === 'icon' ? <Github /> : 'Button'}
              </Button>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground">disabled</span>
            <Button variant={variant} disabled>
              Button
            </Button>
          </div>
        </ShowcaseRow>
      ))}
    </div>
  );
}

// ─── Card showcase ────────────────────────────────────────────────────────────

function CardTab() {
  return (
    <div className="space-y-6">
      <ShowcaseRow label="default">
        <Card className="w-72">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>A short description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/80">
              Card body content. Can contain anything.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">Action</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </CardFooter>
        </Card>
      </ShowcaseRow>

      <ShowcaseRow label="with badges">
        <Card className="w-72">
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-xl text-primary">Project Name</CardTitle>
              <div className="flex gap-1 flex-wrap justify-end max-w-[45%]">
                <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">TypeScript</Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">React</Badge>
              </div>
            </div>
            <CardDescription className="mt-2">Project description text.</CardDescription>
          </CardHeader>
          <CardFooter className="border-t pt-4 gap-2">
            <Button size="sm" variant="outline"><Github /> GitHub</Button>
          </CardFooter>
        </Card>
      </ShowcaseRow>

      <ShowcaseRow label="content-only">
        <Card className="w-72">
          <CardContent className="pt-6">
            <p className="text-sm text-foreground/80">A card with only content and no header or footer.</p>
          </CardContent>
        </Card>
      </ShowcaseRow>
    </div>
  );
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function ShowcaseRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border p-4 bg-background/50">
        {children}
      </div>
    </div>
  );
}

// ─── Main showcase ────────────────────────────────────────────────────────────

const TAB_CONTENT: Record<Tab, React.ReactNode> = {
  Badge: <BadgeTab />,
  Button: <ButtonTab />,
  Card: <CardTab />,
};

export function UIShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>('Badge');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              DEV
            </span>
            <span className="font-headline font-bold text-lg">UI Showcase</span>
          </div>
          <a href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            ← Back to site
          </a>
        </div>

        {/* Tab bar */}
        <div className="container mx-auto px-6 flex gap-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={[
                'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="font-headline text-2xl font-bold mb-6">{activeTab}</h2>
        {TAB_CONTENT[activeTab]}
      </div>
    </div>
  );
}
