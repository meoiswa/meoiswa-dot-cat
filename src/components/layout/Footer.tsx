import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { Github, Bluesky, Discord, Telegram } from 'react-bootstrap-icons';

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
          <a
            href='https://github.com/meoiswa'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Github className='h-5 w-5' aria-hidden='true' />
          </a>
          <a
            href='https://bsky.app/profile/meoiswa.cat'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Bluesky'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Bluesky className='h-5 w-5' aria-hidden='true' />
          </a>
          <a
            href='https://discord.com/users/142062233638141952'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Discord'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Discord className='h-5 w-5' aria-hidden='true' />
          </a>
          <a
            href='https://t.me/meoiswa'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Telegram'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Telegram className='h-5 w-5' aria-hidden='true' />
          </a>
        </div>
      </div>
    </footer>
  );
}
