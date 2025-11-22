import Link from 'next/link';
import { useTranslations } from 'next-intl';

const NavBar = () => {
  const t = useTranslations('Navbar');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-slate-900 dark:text-white hover:text-primary transition-colors"
        >
          {t('logo')}
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">
            {t('home')}
          </Link>
          <Link href="/projects" className="hover:text-primary transition-colors">
            {t('projects')}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t('about')}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t('contact')}
          </Link>
        </div>

        {/* Bouton CTA */}
        <Link
          href="https://wa.me/+2120782901759"
          target='_blank'
          className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
        >
          {t('cta')}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;