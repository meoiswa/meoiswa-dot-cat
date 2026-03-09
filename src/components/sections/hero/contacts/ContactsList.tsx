import { Contact, contactMethods } from '@/lib/contacts';
import { ContactCard } from './ContactCard';

export interface ContactListProps {
  contact: Contact;
}

export function ContactsList() {
  return (
    <div className='flex flex-col space-y-4 items-start py-4 w-full max-w-md mx-auto'>
      {contactMethods.map((method) => (
        <ContactCard key={method.label} contact={method} />
      ))}
    </div>
  );
}
