import 'bootstrap-icons/font/bootstrap-icons.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection';
import { UIShowcase } from '@/components/dev/UIShowcase';

export default function App() {
  if (window.location.hash === '#ui') {
    return <UIShowcase />;
  }

  return (
    <LanguageProvider>
      <div className='flex h-screen flex-col overflow-hidden'>
        <Navbar />
        <main className='flex-grow overflow-y-auto'>
          <div className='flex flex-col h-full'>
            <div className='flex flex-col justify-center items-center bg-secondary'>
              <HeroSection />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <ProjectsSection />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
