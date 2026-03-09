import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { ContactsList } from './contacts/ContactsList';

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className='bg-secondary py-8 w-full'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Mobile / tablet layout (< lg) */}
        <div className='flex flex-col items-center text-center gap-8 lg:hidden'>
          <div>
            <h1 className='font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl'>
              {translations[language].greeting}
            </h1>
          </div>

          <div className='relative shrink-0 overflow-hidden rounded-2xl shadow-2xl h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96'>
            <img
              src='/images/avatar.png'
              alt='Avatar of Meoiswa'
              width={384}
              height={384}
              className='object-cover w-full h-full'
              loading='eager'
            />
          </div>

          <div className='w-full max-w-md'>
            <ContactsList />
          </div>
        </div>

        {/* Desktop layout (lg+) */}
        <div className='hidden lg:grid lg:grid-cols-3 gap-12 items-center'>
          <div className='lg:text-left'>
            <h1 className='font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl'>
              {translations[language].greeting}
            </h1>
          </div>

          <div className='flex justify-center'>
            <div className='relative shrink-0 overflow-hidden rounded-2xl shadow-2xl lg:h-80 lg:w-80 xl:h-[420px] xl:w-[420px]'>
              <img
                src='images/avatar.png'
                alt='Avatar of Meoiswa'
                width={320}
                height={320}
                className='object-cover w-full h-full'
                loading='eager'
              />
            </div>
          </div>

          <div>
            <ContactsList />
          </div>
        </div>
      </div>
    </section>
  );
}
