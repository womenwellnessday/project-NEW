import { Flower2 } from 'lucide-react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-5 text-[#E07893]/35" aria-hidden="true">
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#E07893]/35" />
      <Flower2 size={18} strokeWidth={1.2} />
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#E07893]/35" />
    </div>
  );
}
