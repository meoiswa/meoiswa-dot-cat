import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const BADGE_VARIANTS = {
  default:
    'bg-primary/10 text-primary',
  accent:
    'bg-accent/10 text-accent',
  secondary:
    'bg-secondary text-secondary-foreground',
  outline:
    'border border-primary/90 bg-background text-primary/90',
  outlineAccent:
    'border border-accent/90 bg-background text-accent/90',
  outlineSecondary:
    'border border-secondary-foreground bg-background text-secondary-foreground',
  destructive:
    'bg-destructive/10 text-destructive',
} as const;

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: BADGE_VARIANTS,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
