import { Contact } from '@/lib/contacts';
import { BrandIcon } from '@/components/ui/brand-icon';

export interface ContactProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactProps) {
  return (
    <div
      onClick={() => window.open(contact.href, '_blank', 'noopener,noreferrer')}
      key={contact.label}
      className='flex w-full cursor-pointer items-start gap-3 p-3 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow duration-200'
    >
      <div className='flex-shrink-0 rounded-md bg-primary/10 p-2.5 text-primary mt-1'>
        <BrandIcon name={contact.icon} className='h-5 w-5' />
      </div>
      <div className='flex-grow'>
        <h3 className='text-md font-semibold text-primary font-headline'>
          {contact.label}
        </h3>
        <p className='text-sm text-foreground/80 transition-colors break-all'>
          {contact.text}
        </p>
      </div>
    </div>
  );
}
