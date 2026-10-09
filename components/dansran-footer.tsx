import Link from "next/link"

export default function DansranFooter() {
  return (
    <footer className="overflow-hidden border-t border-current/15 px-5 pt-10 text-sm md:px-10 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">Холбогдох</p>
            <a href="mailto:hello@dansran.com" className="mt-3 inline-block underline underline-offset-4 transition-opacity hover:opacity-60">hello@dansran.com</a>
            <p className="mt-7 max-w-[220px] leading-relaxed opacity-60">Монгол утга. Өдөр тутмын бүтээл.</p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            <div className="flex flex-col gap-2"><Link className="transition-transform duration-300 hover:translate-x-1" href="/collection">Жаргалтайн дэлгэр</Link><Link className="transition-transform duration-300 hover:translate-x-1" href="/custom">Захиалгат бүтээл</Link></div>
            <div className="flex flex-col gap-2"><Link className="transition-transform duration-300 hover:translate-x-1" href="/">Нүүр хуудас</Link><Link className="transition-transform duration-300 hover:translate-x-1" href="/custom">Хамтдаа бүтээе</Link></div>
            <div className="hidden flex-col gap-2 opacity-60 md:flex"><span>Улаанбаатар</span><span>Монгол</span></div>
          </nav>
        </div>
        <div className="relative mt-12 h-[230px] border-t border-current/15 pt-8 md:mt-16 md:h-[300px]">
          <img src="/dansran-logo-blue.png" alt="Dansran" className="absolute bottom-[-0.08em] left-1/2 w-[120%] max-w-none -translate-x-1/2 object-contain md:w-[105%]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[-10px] md:gap-2">
            <img src="/dansran-plate.png" alt="Жаргалтайн дэлгэр ceramic plate" className="h-28 w-28 object-contain md:h-40 md:w-40" />
            <img src="/dansran-cakestand.jpg" alt="Dansran ceramic cake stand" className="h-32 w-32 object-contain mix-blend-multiply md:h-44 md:w-44" />
            <img src="/dansran-jug.png" alt="Dansran ceramic jug" className="h-36 w-36 object-contain mix-blend-multiply md:h-52 md:w-52" />
          </div>
        </div>
        <div className="flex justify-between border-t border-current/15 py-5 text-xs opacity-50"><span>© DANSRAN · 2026</span><span>Монгол утга. Өдөр тутмын бүтээл.</span></div>
      </div>
    </footer>
  )
}
