import { Flower2, Heart, Leaf, Shield } from 'lucide-react';

const pillars = [
  { icon: Heart, title: 'Kesehatan Jiwa', desc: 'Ruang aman untuk healing, refleksi diri, dan pemulihan emosional bagi setiap wanita.', color: '#E07893', bg: '#FFF0F3' },
  { icon: Shield, title: 'Kesehatan Reproduksi', desc: 'Edukasi dan diskusi terbuka mengenai kesehatan organ reproduksi bersama dokter ahli.', color: '#67855F', bg: '#F0F5EE' },
  { icon: Leaf, title: 'Kesehatan Raga', desc: 'Aktivitas fisik ringan yang menyatukan kekuatan tubuh dan ketenangan pikiran.', color: '#c8825a', bg: '#FFF6F0' },
];

const pastEvents = [
  {
    title: 'Blooming Picnic',
    description: 'Piknik hangat untuk berbagi cerita, menulis refleksi, dan merayakan proses bertumbuh bersama.',
    highlight: '32 peserta',
    year: '2026',
    image: '/images/Blooming_picnic1.jpg',
  },
  {
    title: 'YISC Al Azhar Trekking to Bukit Paniisan',
    description: 'Momen rehat sejenak dari rutinitas kota dengan trekking ringan dan refleksi bersama',
    highlight: '11 perserta',
    year: '2026',
    image: '/images/Trekking.jpg',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <Flower2 className="botanical-line-art absolute right-[-2rem] top-20 h-56 w-56 text-[#E07893]" strokeWidth={0.7} />
      <Flower2 className="botanical-line-art absolute bottom-24 left-[-2rem] h-44 w-44 rotate-45 text-[#67855F]" strokeWidth={0.7} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#E07893]">Tentang Event</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#2d2d2d] sm:text-5xl">
              Lebih dari Sekadar <span className="text-[#E07893]">Acara</span>, Sebuah <span className="text-[#67855F]">Gerakan</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#6b6b6b] sm:text-lg">
              <p>
                <strong className="text-[#2d2d2d]">Women Wellness Day</strong> adalah sebuah inisiatif perdana dari <strong className="text-[#67855F]">Youth Islamic Study Club (YISC) Al Azhar</strong> di bawah naungan Yayasan Pesantren Islam Al Azhar — sebuah wadah yang dirancang khusus untuk wanita Muslimah dan generasi muda.
              </p>
              <p>Dalam tiga seri event yang terintegrasi, kami menghadirkan ruang yang aman dan nyaman untuk refleksi diri, menjaga kesehatan reproduksi, serta proses <em>healing</em> yang bermakna — dibalut dalam nuansa yang estetik, hangat, dan penuh kebersamaan.</p>
              <p>Karena setiap wanita berhak untuk didengar, dipulihkan, dan mekar dalam caranya sendiri.</p>
            </div>
            <blockquote className="mt-8 border-l-4 border-[#F4BFC9] pl-5">
              <p className="text-lg font-medium italic text-[#E07893]">&quot;Healthy Body, Healing Soul.&quot;</p>
              <footer className="mt-1 text-sm text-[#8a8a8a]">— Women Wellness Day</footer>
            </blockquote>
          </div>

          <div className="space-y-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-5 rounded-2xl border border-gray-100 p-6 transition-shadow duration-300 hover:shadow-md" style={{ background: pillar.bg }}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: `${pillar.color}20` }}>
                  <pillar.icon size={22} style={{ color: pillar.color }} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-[#2d2d2d]">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6b6b6b]">{pillar.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-6 pl-2 pt-4">
              <img src="/images/logos/Logo_Al-Azhar_dan_YISC.png" alt="Al-Azhar dan YISC Al-Azhar" className="h-16 w-auto object-contain" />
              <p className="text-xs text-[#8a8a8a]">Youth Islamic Study Club (YISC) Al Azhar</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#E07893]">Past Events</span>
              <h3 className="max-w-2xl text-3xl font-bold leading-tight text-[#2d2d2d] sm:text-4xl">Kilas balik momen kebersamaan yang menjadi bagian dari perjalanan Women Wellness Day.</h3>
            </div>
            
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pastEvents.map((event) => (
              <article key={event.title} className="group overflow-hidden rounded-3xl border border-[#F4BFC9]/40 bg-[#FFF8F9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#E07893]">{event.year}</span>
                </div>
                <div className="p-5">
                  <h4 className="mb-2 font-semibold text-[#2d2d2d]">{event.title}</h4>
                  <p className="mb-4 text-sm leading-relaxed text-[#6b6b6b]">{event.description}</p>
                  <div className="flex items-center justify-between border-t border-[#F4BFC9]/40 pt-3 text-xs font-semibold text-[#67855F]">
                    <span>{event.highlight}</span>
                    <span className="text-[#E07893]">YISC Al Azhar</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
