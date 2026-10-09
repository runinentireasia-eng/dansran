import Link from "next/link"

export default function DansranFooter() {
  return (
    <footer className="border-t border-current/15 px-5 py-8 text-sm md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <img src="/dansran-logo-full.png" alt="Dansran" className="h-8 w-auto object-contain" />
          <p className="mt-3 opacity-60">Монгол утга. Өдөр тутмын бүтээл.</p>
        </div>
        <div className="flex gap-8 opacity-70">
          <Link className="transition-transform duration-300 hover:translate-x-1" href="/collection">Жаргалтайн дэлгэр</Link>
          <Link className="transition-transform duration-300 hover:translate-x-1" href="/custom">Холбогдох</Link>
        </div>
        <span className="text-xs opacity-50">© DANSRAN · 2026</span>
      </div>
    </footer>
  )
}
