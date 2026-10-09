import { Heart, Instagram, MessageCircle } from 'lucide-react';

const WHATSAPP_LINKS = [
  { label: 'WA Admin 1', href: 'https://wa.me/6285776227265?text=Halo%20Panitia%20Women%20Wellness%20Day,%20saya%20ingin%20bertanya%20mengenai%20informasi%20acara.' },
  { label: 'WA Admin 2', href: 'https://wa.me/6282210719013?text=Halo%20Panitia%20Women%20Wellness%20Day,%20saya%20ingin%20bertanya%20mengenai%20informasi%20acara.' },
  { label: 'WA Sponsorship', href: 'https://wa.me/6285786838664?text=Halo%20Tim%20Sponsorship%20Women%20Wellness%20Day,%20saya%20ingin%20berdiskusi%20mengenai%20peluang%20kerjasama.' },
];

const INSTAGRAM_LINKS = [
  { label: '@womenwellnessday', href: 'https://instagram.com/womenwellnessday' },
  { label: '@yisc_alazhar', href: 'https://instagram.com/yisc_alazhar' },
];

export default function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="contact" className="bg-[#2d2d2d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-2xl bg-white p-2.5"><img src="/images/logos/IMG-20260928-WA0018 copy.jpg" alt="Women Wellness Day" className="h-12 w-auto object-contain" /></div>
              <div className="h-10 w-px bg-white/20" />
              <div className="rounded-2xl bg-white p-2.5"><img src="/images/logos/Logo_Al-Azhar_dan_YISC.png" alt="Al-Azhar dan YISC Al-Azhar" className="h-12 w-auto object-contain" /></div>
            </div>
            <div><p className="text-lg font-semibold text-[#F4BFC9]">Women Wellness Day</p><p className="mt-1 text-xs text-white/60">Sebuah program YISC Al Azhar</p><p className="text-xs text-white/60">#MudaSekali, JadikanBerarti</p></div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">Merawat Raga, Menyembuhkan Jiwa. Ruang aman untuk setiap wanita Muslimah bertumbuh, berefleksi, dan pulih.</p>
            <div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-wide text-[#F4BFC9]">Pertanyaan Peserta & Informasi Acara</p>{WHATSAPP_LINKS.slice(0, 2).map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="mr-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-[#E07893]/30 hover:text-white"><MessageCircle size={16} />{link.label}</a>)}</div>
            <div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-wide text-[#F4BFC9]">Peluang Kerjasama & Sponsorship</p><a href={WHATSAPP_LINKS[2].href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-[#E07893]/30 hover:text-white"><MessageCircle size={16} />WA Sponsorship</a></div>
          </div>

          <div><h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#F4BFC9]">Navigasi</h4><ul className="space-y-3">{[{ label: 'Home', href: '#home' }, { label: 'About Us', href: '#about' }, { label: 'Schedule', href: '#schedule' }, { label: 'Gallery', href: '#gallery' }, { label: 'FAQ', href: '#faq' }].map((link) => <li key={link.href}><button onClick={() => scrollTo(link.href)} className="text-sm text-white/60 transition-colors hover:text-[#F4BFC9]">{link.label}</button></li>)}</ul><h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-[#F4BFC9]">Instagram Resmi</h4>{INSTAGRAM_LINKS.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="mb-2 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#F4BFC9]"><Instagram size={15} />{link.label}</a>)}</div>

          <div><h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#F4BFC9]">Rangkaian Event</h4><ul className="space-y-4">{[{ name: 'Journaling Picnic', date: '24 Okt 2026', color: '#E07893' }, { name: 'Mat Pilates Class', date: '21 Nov 2026', color: '#67855F' }, { name: 'Main Session', date: 'Des 2026', color: '#c8825a' }].map((event) => <li key={event.name} className="flex items-start gap-2.5"><div className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: event.color }} /><div><p className="text-sm font-medium text-white/80">{event.name}</p><p className="text-xs text-white/40">{event.date}</p></div></li>)}</ul></div>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8"><p className="text-center text-xs text-white/40 sm:text-left">&copy; 2026 Women Wellness Day — YISC Al Azhar. All rights reserved.</p><p className="flex items-center gap-1 text-xs text-white/40">Made with <Heart size={12} className="text-[#E07893]" /> for every woman</p></div></div>
    </footer>
  );
}
