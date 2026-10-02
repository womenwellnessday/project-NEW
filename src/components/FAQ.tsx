import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Apa dress code untuk setiap event?', a: 'Untuk Journaling Picnic (Oktober): Outfit kasual estetik, nyaman, dan modest. Disarankan warna pastel atau earth tone. Untuk Mat Pilates (November): Pakaian olahraga yang nyaman dan modest. Untuk Main Event (Desember): Smart casual modest — tampil rapi dan nyaman.' },
  { q: 'Barang apa yang perlu dibawa saat Journaling Picnic?', a: 'Buku jurnal atau notebook dan alat tulis favorit kamu, alas piknik bila diperlukan, snack ringan, kamera atau HP, dan yang paling penting — hati yang terbuka dan siap untuk hadir penuh.' },
  { q: 'Apakah Mat Pilates cocok untuk pemula?', a: 'Sangat cocok! Sesi Mat Pilates dirancang inklusif untuk semua tingkat kemampuan. Instruktur akan memandu dengan sabar dan memastikan semua peserta merasa nyaman.' },
  { q: 'Di mana saya bisa melakukan registrasi ulang saat hari H?', a: 'Meja registrasi ulang akan tersedia di pintu masuk venue paling lambat 30 menit sebelum acara dimulai. Pastikan kamu membawa bukti pendaftaran dari panitia.' },
  { q: 'Apakah ada biaya pendaftaran?', a: 'Informasi biaya pendaftaran akan diumumkan melalui media sosial resmi YISC Al-Azhar. Pastikan kamu mengikuti akun kami untuk update terbaru.' },
  { q: 'Bisakah saya mendaftar untuk semua event sekaligus?', a: 'Pendaftaran dilakukan secara bertahap dan terpisah untuk setiap event sesuai dengan jadwal pembukaan masing-masing rangkaian acara.' },
  { q: 'Bagaimana cara menghubungi panitia?', a: "Silakan buka menu 'Contact' pada navigasi di bagian atas halaman untuk terhubung langsung dengan tim panitia via WhatsApp." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ background: 'linear-gradient(180deg, #fdf9f6 0%, #fff5f7 100%)' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center"><span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#E07893]">FAQ</span><h2 className="mb-4 text-4xl font-bold text-[#2d2d2d] sm:text-5xl">Pertanyaan yang <span className="text-[#E07893]">Sering Ditanyakan</span></h2><p className="text-[#6b6b6b]">Tidak menemukan jawabanmu? Hubungi kami melalui menu Contact.</p></div>
        <div className="space-y-3">{faqs.map((faq, index) => { const isOpen = openIndex === index; return <div key={faq.q} className="overflow-hidden rounded-2xl border transition-all duration-300" style={{ borderColor: isOpen ? '#F4BFC9' : '#f0ebe8', background: isOpen ? '#FFF8F9' : 'white' }}><button className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpenIndex(isOpen ? null : index)}><span className="text-sm font-semibold text-[#2d2d2d] transition-colors group-hover:text-[#E07893] sm:text-base">{faq.q}</span><ChevronDown size={18} className="shrink-0 transition-transform duration-300" style={{ color: '#E07893', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} /></button><div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}><p className="px-6 pb-5 text-sm leading-relaxed text-[#6b6b6b]">{faq.a}</p></div></div>; })}</div>
      </div>
    </section>
  );
}
