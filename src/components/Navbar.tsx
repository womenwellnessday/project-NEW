import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const GOOGLE_FORM_URL = 'https://forms.gle/4ACdPUkyj7Wv3oZU8';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <div className="flex shrink-0 items-center gap-2.5">
            <img
              src="/images/logos/IMG-20260928-WA0018 copy.jpg"
              alt="Women Wellness Day"
              className="h-10 w-auto object-contain md:h-12"
            />
            <div className="h-8 w-px bg-[#E07893]/30" />
            <img
              src="/images/logos/Logo_Al-Azhar_dan_YISC.png"
              alt="Al-Azhar dan YISC Al-Azhar"
              className="h-10 w-auto object-contain md:h-12"
            />
          </div>

          <div className="scrollbar-hide flex min-w-0 items-center gap-0 overflow-x-auto md:gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="shrink-0 rounded-lg px-2.5 py-2 text-xs font-medium text-[#4a4a4a] transition-colors hover:bg-[#F4BFC9]/20 hover:text-[#E07893] sm:px-3 sm:text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center rounded-full bg-[#E07893] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#E07893]/30 transition-all hover:bg-[#c96070] active:scale-95 sm:inline-flex"
          >
            Daftar Acara
          </a>
        </div>
      </div>
    </nav>
  );
}
