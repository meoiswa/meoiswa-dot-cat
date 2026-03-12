import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { contactMethods } from '@/lib/contacts';
import { BrandIcon } from '../ui/brand-icon';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className='border-t border-border/40 bg-background'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8'>
        <div className='flex items-center gap-2'>
          <span className='text-sm text-muted-foreground'>
            &copy; {currentYear} meoiswa.cat. {translations[language].copyright}
          </span>
        </div>
        <div className='flex items-center space-x-4'>
          {contactMethods.map((method) => {
            return (
              <a
                key={method.label}
                href={method.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={method.label}
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                <BrandIcon
                  name={method.icon}
                  className='h-5 w-5'
                  aria-hidden='true'
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
