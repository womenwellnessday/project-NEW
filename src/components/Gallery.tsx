const photos = [
  { image: '/images/Blooming_picnic1.jpg', alt: 'Blooming picnic' },
  { image: '/images/Blooming_picnic2.jpg', alt: 'Blooming picnic' },
  { image: '/images/Blooming_picnic3.jpg', alt: 'Blooming picnic' },
  { image: '/images/Blooming.jpg', alt: 'Blooming picnic' },
  { image: '/images/Blooming_picnic5.jpg', alt: 'Blooming picnic' },
  { image: '/images/Blooming_picnic6.jpg', alt: 'Blooming picnic' },
  { image: '/images/Trekking.jpg', alt: 'Trekking to Bukit Paniisan' },
  { image: '/images/Trekking2.jpg', alt: 'Trekking to Bukit Paniisan' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center"><span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#E07893]">Galeri</span><h2 className="mb-4 text-4xl font-bold text-[#2d2d2d] sm:text-5xl">Momen <span className="text-[#E07893]">Berharga</span> Bersama</h2><p className="mx-auto max-w-lg text-[#6b6b6b]">Setiap foto adalah cerita tentang wanita yang berani hadir, tumbuh, dan menyembuhkan diri.</p></div>
        <div className="columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4">{photos.map((photo, index) => <div key={photo.image} className="group break-inside-avoid overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl"><div className="relative overflow-hidden"><img src={photo.image} alt={photo.alt} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ aspectRatio: index % 3 === 0 ? '4/3' : index % 3 === 1 ? '3/4' : '1/1' }} /><div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/30 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className="text-xs font-medium text-white">{photo.alt}</span></div></div></div>)}</div>
        <div className="mt-16 rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #FFF0F3 0%, #F0F5EE 100%)' }}><p className="mb-1 text-lg font-semibold text-[#E07893]">Jadilah Bagian dari Momen Ini</p><p className="text-sm text-[#6b6b6b]">Daftarkan dirimu untuk Journaling Picnic dan ciptakan kenangan indah bersama kami.</p></div>
      </div>
    </section>
  );
}
