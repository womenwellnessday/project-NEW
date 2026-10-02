const photos = [
  { url: 'https://images.pexels.com/photos/10896958/pexels-photo-10896958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Perempuan berhijab menikmati kebersamaan di alam' },
  { url: 'https://images.pexels.com/photos/4884255/pexels-photo-4884255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Muslimah berbincang di taman' },
  { url: 'https://images.pexels.com/photos/36356779/pexels-photo-36356779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Muslimah berefleksi dengan tenang' },
  { url: 'https://images.pexels.com/photos/35960251/pexels-photo-35960251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Aktivitas wellness bersama di Indonesia' },
  { url: 'https://images.pexels.com/photos/6084128/pexels-photo-6084128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Muslimah menulis dan berefleksi' },
  { url: 'https://images.pexels.com/photos/36493690/pexels-photo-36493690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Komunitas Muslim berdiskusi' },
  { url: 'https://images.pexels.com/photos/7690843/pexels-photo-7690843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Muslimah melakukan peregangan' },
  { url: 'https://images.pexels.com/photos/4884246/pexels-photo-4884246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Kebersamaan perempuan di ruang hijau' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center"><span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#E07893]">Galeri</span><h2 className="mb-4 text-4xl font-bold text-[#2d2d2d] sm:text-5xl">Momen <span className="text-[#E07893]">Berharga</span> Bersama</h2><p className="mx-auto max-w-lg text-[#6b6b6b]">Setiap foto adalah cerita tentang wanita yang berani hadir, tumbuh, dan menyembuhkan diri.</p></div>
        <div className="columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4">{photos.map((photo, index) => <div key={photo.url} className="group break-inside-avoid overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl"><div className="relative overflow-hidden"><img src={photo.url} alt={photo.alt} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ aspectRatio: index % 3 === 0 ? '4/3' : index % 3 === 1 ? '3/4' : '1/1' }} /><div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/30 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className="text-xs font-medium text-white">{photo.alt}</span></div></div></div>)}</div>
        <div className="mt-16 rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #FFF0F3 0%, #F0F5EE 100%)' }}><p className="mb-1 text-lg font-semibold text-[#E07893]">Jadilah Bagian dari Momen Ini</p><p className="text-sm text-[#6b6b6b]">Daftarkan dirimu untuk Journaling Picnic dan ciptakan kenangan indah bersama kami.</p></div>
      </div>
    </section>
  );
}
