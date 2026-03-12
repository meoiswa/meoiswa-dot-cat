import {
  Github,
  Bluesky,
  Discord,
  Telegram,
  QuestionCircle,
} from 'react-bootstrap-icons';
import { cn } from '@/lib/utils';
import React from 'react';

export interface BrandIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

export function BrandIcon({ name, className, ...props }: BrandIconProps) {
  switch (name.toLocaleLowerCase()) {
    case 'github':
      return <Github className={className} {...props} />;
    case 'bluesky':
      return <Bluesky className={className} {...props} />;
    case 'discord':
      return <Discord className={className} {...props} />;
    case 'telegram':
      return <Telegram className={className} {...props} />;
    case 'patreon':
      return (
        <svg name={name} className={cn(className, 'patreon')} {...props} />
      );
    case 'kofi':
      return <svg name={name} className={cn(className, 'kofi')} {...props} />;
    default:
      return <QuestionCircle className={className} {...props} />; // Fallback icon for unknown types
  }
}
