"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Menu, MoveDown, X } from "lucide-react"
import { useRef, useState } from "react"

const plateImage = "/dansran-plate.png"

export function DansranHome() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 540])
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.76, 1, 0.9, 0.72])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.72, 1], [36, 0, -10, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.14, 0.8, 1], [0.82, 1, 1, 0.45])
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f4ef] text-[#172b35] selection:bg-[#e5b04b] selection:text-[#172b35]">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 mix-blend-multiply md:px-10 md:py-7">
        <a href="#top" className="group flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em]" aria-label="Dansran home">
          <span className="flex size-7 items-center justify-center rounded-full border border-[#172b35] text-[9px] transition-transform group-hover:rotate-45">D</span>
          Dansran
        </a>
        <nav className="hidden items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.2em] md:flex" aria-label="Main navigation">
          <a className="transition-opacity hover:opacity-50" href="#collection">Ready to ship</a>
          <a className="transition-opacity hover:opacity-50" href="#custom">Custom inquiry</a>
        </nav>
        <button className="flex size-9 items-center justify-center rounded-full border border-[#172b35] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        {menuOpen && <nav className="absolute right-5 top-16 flex min-w-44 flex-col gap-4 rounded-2xl bg-[#172b35] p-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f4ef] shadow-xl md:hidden"><a href="#collection" onClick={() => setMenuOpen(false)}>Ready to ship</a><a href="#custom" onClick={() => setMenuOpen(false)}>Custom inquiry</a></nav>}
      </header>

      <section id="top" ref={heroRef} className="relative h-[340vh]">
        <div className="sticky top-0 flex h-screen min-h-[660px] flex-col items-center justify-center overflow-hidden px-5">
          <div className="pointer-events-none absolute left-5 top-28 flex max-w-[145px] flex-col gap-3 md:left-10 md:top-36"><span className="text-[9px] uppercase tracking-[0.25em] text-[#172b35]/60">01 / 03</span><p className="text-xs leading-relaxed text-[#172b35]/70">Objects that carry a little of Mongolia into the room.</p></div>
          <div className="pointer-events-none absolute right-5 top-28 max-w-[145px] text-right md:right-10 md:top-36"><span className="text-[9px] uppercase tracking-[0.25em] text-[#172b35]/60">Est. 2020</span><p className="mt-3 text-xs leading-relaxed text-[#172b35]/70">Made in Ulaanbaatar<br />for considered spaces.</p></div>
          <motion.img src={plateImage} alt="Hand-painted ceramic oval plate with a central opening, horses, clouds and a mountain" style={{ rotate, scale, y, opacity }} className="relative z-10 w-[min(74vw,660px)] max-w-none rounded-full object-contain drop-shadow-[0_34px_38px_rgba(23,43,53,0.18)]" />
          <motion.div style={{ opacity }} className="pointer-events-none absolute z-20 flex flex-col items-center text-center"><span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#172b35]/70">Dansran presents</span><h1 className="max-w-3xl text-[17vw] font-medium leading-[0.78] tracking-[-0.09em] md:text-[13vw]">Жаргалтайн<br />дэлгэр</h1><p className="mt-8 max-w-xs text-sm leading-relaxed text-[#172b35]/75 md:max-w-sm">A new collection of ceramic accessories for warm, memorable places.</p></motion.div>
          <div className="absolute bottom-8 flex flex-col items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#172b35]/60"><MoveDown className="size-4 animate-bounce" aria-hidden="true" />Scroll to explore</div>
        </div>
      </section>

      <section id="collection" className="relative overflow-hidden bg-[#172b35] px-5 py-28 text-[#f6f4ef] md:px-10 md:py-40"><div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-end"><div><p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-[#e5b04b]">01 — Ready to ship</p><h2 className="max-w-3xl text-6xl font-medium leading-[0.86] tracking-[-0.07em] md:text-8xl">A table can<br /><em className="font-serif font-normal text-[#dce8d9]">hold a story.</em></h2></div><div className="max-w-sm md:pb-2"><p className="text-base leading-relaxed text-[#f6f4ef]/70">The first edition of Жаргалтайн дэлгэр brings hand-painted movement to everyday rituals. A small collection, ready to travel to your table.</p><a href="mailto:hello@dansran.com" className="mt-8 inline-flex items-center gap-3 border-b border-[#e5b04b] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e5b04b]">Request collection <ArrowUpRight className="size-4" /></a></div></div><div className="mx-auto mt-24 max-w-6xl border-t border-[#f6f4ef]/20 pt-6"><div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#f6f4ef]/50"><span>For hotels · restaurants · homes</span><span>Edition 01 / 2025</span></div></div></section>

      <section id="custom" className="bg-[#e7dfd2] px-5 py-28 md:px-10 md:py-40"><div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2"><div><p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#172b35]/60">02 — Custom inquiry</p><h2 className="max-w-xl text-6xl font-medium leading-[0.86] tracking-[-0.07em] md:text-8xl">Make it<br /><em className="font-serif font-normal">yours.</em></h2></div><div className="flex flex-col justify-end"><p className="max-w-md text-lg leading-relaxed text-[#172b35]/70">For teams, hosts and places with a point of view. We can create custom ceramic objects, gifting sets and table pieces for your next chapter.</p><a href="mailto:hello@dansran.com?subject=Custom%20inquiry" className="mt-10 flex w-fit items-center gap-5 rounded-full bg-[#172b35] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f6f4ef] transition-transform hover:-translate-y-1">Start a conversation <ArrowDownRight className="size-4" /></a></div></div></section>

      <footer className="flex flex-col gap-8 bg-[#e7dfd2] px-5 pb-8 md:flex-row md:items-end md:justify-between md:px-10"><div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em]"><span className="flex size-7 items-center justify-center rounded-full border border-[#172b35] text-[9px]">D</span>Dansran</div><div className="flex justify-between gap-8 text-[10px] uppercase tracking-[0.16em] text-[#172b35]/60 md:gap-12"><span>Ulaanbaatar, Mongolia</span><a href="mailto:hello@dansran.com" className="hover:text-[#172b35]">hello@dansran.com</a></div></footer>
    </main>
  )
}

export default DansranHome
