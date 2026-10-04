import { Calendar, ChevronRight, Flower2, Clock, MapPin, Users } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/Zb1XbyNEe2xgNnRZ6';

const events: Event[] = [
  {
    id: 'october', tag: 'Pre-Event 1', date: 'Sabtu, 24 Oktober 2026', title: 'Journaling Picnic', subtitle: 'Journaling & Refleksi Diri',
    desc: 'Konsep santai di area terbuka yang mengajak peserta menemukan kedamaian melalui tulisan. Ekspresi emosi, refleksi diri, dan koneksi mendalam dengan diri sendiri — dibungkus dalam suasana piknik yang estetik dan menenangkan.', time: '15.00-Selesai WIB', location: 'Taman Bendera Pusaka, Jakarta', capacity: '35 Peserta', accentColor: '#E07893', bgColor: '#FFF5F7', borderColor: '#F4BFC9', open: true,
    image: '/images/Journaling-picnic.png',
  },
  {
    id: 'november', tag: 'Pre-Event 2', date: 'Sabtu, 21 November 2026', title: 'Mat Pilates Class', subtitle: 'Gerakan untuk Tubuh & Ketenangan Pikiran',
    desc: 'Sesi pilates di atas matras yang dirancang untuk semua tingkat kemampuan. Melalui gerakan yang lembut namun terstruktur, peserta akan merasakan keselarasan antara kekuatan fisik dan ketenangan mental.', time: 'coming soon', location: 'Studio / Ruang Indoor — Jakarta', capacity: '40 Peserta', accentColor: '#67855F', bgColor: '#F0F5EE', borderColor: '#b5cca8', open: false,
    speaker: { role: 'Instruktur', title: 'Coming Soon', credential: 'Cooming Soon' }, image: '/images/Mat-pilates.png',
  },
  {
    id: 'december', tag: 'Main Event', date: 'Desember 2026', title: 'Women Wellness Main Session', subtitle: 'Sesi Mendalam: Reproduksi & Fatherless Healing',
    desc: 'Puncak rangkaian Women Wellness Day dengan dua sesi utama: edukasi kesehatan organ reproduksi wanita bersama dokter spesialis Obgyn, dan sesi Fatherless Healing bersama psikolog klinis berpengalaman.', time: 'Coming Soon', location: 'Venue Utama — Jakarta', capacity: '150 Peserta', accentColor: '#c8825a', bgColor: '#FFF6F0', borderColor: '#e8c4a8', open: false,
    speakers: [
      { role: 'Sesi Reproduksi', title: 'Coming Soon', credential: 'Dokter Spesialis Obstetri & Ginekologi' },
      { role: 'Sesi Fatherless Healing', title: 'Coming Soon', credential: 'Coming Soon' },
    ], image: '/images/Main-Event.png',
  },
];

type Speaker = { role: string; title: string; credential: string };
type Event = {
  id: string;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
  desc: string;
  time: string;
  location: string;
  capacity: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  open: boolean;
  image: string;
  speaker?: Speaker;
  speakers?: Speaker[];
};

function SpeakerCard({ speaker, accentColor }: { speaker: Speaker; accentColor: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/60 bg-white/70 p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: `${accentColor}40`, color: accentColor }}><Users size={16} /></div>
      <div><p className="text-xs font-semibold" style={{ color: accentColor }}>{speaker.role}</p><p className="text-sm font-medium text-[#2d2d2d]">{speaker.title}</p><p className="text-xs text-[#8a8a8a]">{speaker.credential}</p></div>
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(180deg, #fdf9f6 0%, #f8f4f0 100%)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#E07893]">Rangkaian Acara</span>
          <h2 className="mb-4 text-4xl font-bold text-[#2d2d2d] sm:text-5xl">3 Bulan, <span className="text-[#E07893]">1 Perjalanan</span> <span className="text-[#67855F]">Wellness</span></h2>
          <p className="mx-auto max-w-xl text-base text-[#6b6b6b] sm:text-lg">Setiap event dirancang sebagai satu kesatuan perjalanan — dari refleksi diri, penguatan fisik, hingga pemulihan jiwa.</p>
        </div>
        <div className="absolute bottom-24 left-1/2 top-40 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#F4BFC9] via-[#b5cca8] to-[#e8c4a8] opacity-30 lg:block" />
        <div className="space-y-10">
          {events.map((event, index) => (
            <div key={event.id} className={`flex flex-col items-stretch gap-8 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2"><div className="h-56 overflow-hidden rounded-3xl shadow-lg sm:h-72"><img src={event.image} alt={event.title} className="h-full w-full object-cover" /></div></div>
              <div className="lg:w-1/2">
                <div className="relative h-full rounded-3xl border p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8" style={{ background: event.bgColor, borderColor: event.borderColor }}>
                  <Flower2 className="absolute right-5 top-5 h-16 w-16 opacity-[0.09]" style={{ color: event.accentColor }} strokeWidth={1} />
                  <div className="mb-4 flex flex-wrap items-center gap-3"><span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: event.accentColor }}>{event.tag}</span><div className="flex items-center gap-1.5 text-xs text-[#6b6b6b]"><Calendar size={13} /><span>{event.date}</span></div></div>
                  <h3 className="mb-1 text-2xl font-bold text-[#2d2d2d]">{event.title}</h3><p className="mb-3 text-sm font-medium" style={{ color: event.accentColor }}>{event.subtitle}</p><p className="mb-5 text-sm leading-relaxed text-[#6b6b6b]">{event.desc}</p>
                  <div className="mb-5 flex flex-wrap gap-4 text-xs text-[#6b6b6b]"><div className="flex items-center gap-1.5"><Clock size={13} style={{ color: event.accentColor }} /><span>{event.time}</span></div><div className="flex items-center gap-1.5"><MapPin size={13} style={{ color: event.accentColor }} /><span>{event.location}</span></div><div className="flex items-center gap-1.5"><Users size={13} style={{ color: event.accentColor }} /><span>{event.capacity}</span></div></div>
                  <div className="mb-6 space-y-2">{event.speaker && <SpeakerCard speaker={event.speaker} accentColor={event.accentColor} />}{event.speakers?.map((speaker) => <SpeakerCard key={speaker.role} speaker={speaker} accentColor={event.accentColor} />)}</div>
                  {event.open ? <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95" style={{ background: event.accentColor }}>Daftar Sekarang <ChevronRight size={16} /></a> : <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-[#d5d0cc] px-5 py-2.5 text-sm font-semibold text-white">Pendaftaran Belum Dibuka</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
