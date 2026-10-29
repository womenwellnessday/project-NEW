import { Flower2, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff5f7 0%, #fdf9f0 40%, #f0f5ee 100%)' }}
    >
      <div className="absolute right-0 top-20 h-[600px] w-[600px] rounded-full bg-[#F4BFC9] opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#67855F] opacity-15 blur-3xl" />
      
      <Flower2 className="botanical-line-art absolute bottom-[12%] left-[8%] h-28 w-28 rotate-12 text-[#E07893]" strokeWidth={0.8} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 text-center">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E07893]/20 bg-[#F4BFC9]/40 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#E07893]" />
            <span className="text-xs font-medium text-[#E07893] sm:text-sm">
              Presented by Youth Islamic Study Club (YISC) Al Azhar
            </span>
          </div>

          <img
            src="/images/logos/IMG-20260928-WA0018 copy.jpg"
            alt="Women Wellness Day — Healthy Body, Healing Soul"
            className="mx-auto max-h-80 w-full max-w-sm rounded-3xl object-contain mix-blend-multiply"
          />

          <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#6b6b6b] sm:text-xl">
            Merawat Raga, Menyembuhkan Jiwa.
            <br />
            <em className="font-medium not-italic text-[#E07893]">Ruang Aman untuk Setiap Wanita.</em>
          </p>

          {/* Tombol Utama Dipusatkan ke Tengah Menuju Schedule */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => scrollTo('#schedule')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E07893] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#E07893]/30 transition-all duration-200 hover:bg-[#c96070] active:scale-95 sm:text-base"
            >
              Lihat Seluruh Rangkaian Acara
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex justify-center gap-8 pt-4">
            {[
              { number: '3', label: 'Rangkaian Event' },
              { number: '5+', label: 'Narasumber Ahli' },
              { number: '∞', label: 'Inspirasi & Healing' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#E07893]">{stat.number}</div>
                <div className="mt-0.5 text-xs text-[#8a8a8a]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
        <span className="text-xs text-[#8a8a8a]">Scroll</span>
        <svg className="h-4 w-4 text-[#E07893]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}