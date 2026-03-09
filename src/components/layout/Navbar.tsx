import { CodeSlash } from 'react-bootstrap-icons';
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <a
          href='/'
          className='flex items-center gap-2'
          aria-label='meoiswa.cat Home'
        >
          <CodeSlash className='h-7 w-7 text-primary' />
          <span className='font-headline text-xl font-bold text-primary ml-1'>
            meoiswa.cat
          </span>
        </a>

        <div className='flex items-center space-x-2'>
          <button
            onClick={() => setLanguage('en')}
            aria-label='English (GB)'
            className={`hover:opacity-80 transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-60'}`}
          >
            <img
              src='https://flagcdn.com/gb.svg'
              alt='English (GB)'
              width={24}
              height={18}
              style={{
                display: 'inline',
                verticalAlign: 'middle',
                borderRadius: 2,
              }}
            />
          </button>
          <button
            onClick={() => setLanguage('es')}
            aria-label='Español (ES)'
            className={`hover:opacity-80 transition-opacity ${language === 'es' ? 'opacity-100' : 'opacity-60'}`}
          >
            <img
              src='https://flagcdn.com/es.svg'
              alt='Español (ES)'
              width={24}
              height={18}
              style={{
                display: 'inline',
                verticalAlign: 'middle',
                borderRadius: 2,
              }}
            />
          </button>
          <button
            onClick={() => setLanguage('ca')}
            aria-label='Català (CA)'
            className={`hover:opacity-80 transition-opacity ${language === 'ca' ? 'opacity-100' : 'opacity-60'}`}
          >
            <img
              src='https://flagcdn.com/ad.svg'
              alt='Català (CA)'
              width={24}
              height={18}
              style={{
                display: 'inline',
                verticalAlign: 'middle',
                borderRadius: 2,
              }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
