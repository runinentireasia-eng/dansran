import Link from "next/link"

export default function DansranFooter() {
  return (
    <footer className="bg-[#172b35] px-5 pb-6 text-[#f6f4ef] md:px-10 md:pb-8">
      <div className="overflow-hidden border-t border-current/15 px-5 pt-10 text-sm md:px-10 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">Холбогдох</p>
            <Link href="/contact" className="mt-3 inline-block underline underline-offset-4 transition-opacity hover:opacity-60">info@dansran.mn</Link>
          </div>
          <nav aria-label="Footer navigation" className="flex items-center justify-between gap-2 text-[11px] sm:justify-start sm:gap-8 sm:text-sm">
            <Link className="whitespace-nowrap transition-transform duration-300 hover:translate-x-1" href="/collection">Жаргалтайн дэлгэр</Link>
            <Link className="whitespace-nowrap transition-transform duration-300 hover:translate-x-1" href="/custom">Захиалгат бүтээл</Link>
            <Link className="whitespace-nowrap transition-transform duration-300 hover:translate-x-1" href="/">Нүүр хуудас</Link>
          </nav>
        </div>
        <div className="mt-6 md:mt-8">
          <img src="/dansran-logo-blue.svg" alt="Dansran" className="relative left-1/2 block w-[92%] max-w-none -translate-x-1/2 object-contain md:w-[105%]" />
        </div>
        <div className="flex justify-between py-5 text-xs opacity-50"><span>© DANSRAN · 2026</span><span>Монголдоо бүтээж, Монголдоо үлдээв</span></div>
      </div>
      </div>
    </footer>
  )
}
