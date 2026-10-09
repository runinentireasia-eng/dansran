"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, MoveDown } from "lucide-react"
import ReactLenis from "lenis/react"
import { useRef, useState } from "react"

const plateImage = "/dansran-plate.png"

const collectionProducts = [
  { name: "Хөлтэй таваг", code: "CEJ101", price: "98,000 ₮", size: "14 см диаметр · 12 см өндөр", image: "https://www.dansran.mn/cdn/shop/files/DSC_2882_540x.jpg?v=1772690086", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej101" },
  { name: "3-тай гэр таваг", code: "CEJ102", price: "158,000 ₮", size: "22 см диаметр · 10 см өндөр", image: "https://www.dansran.mn/cdn/shop/files/137331a666647a0a065a20ffd061a5fc_540x.webp?v=1772524646", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej102" },
  { name: "Платтер сэт", code: "CEJ106", price: "218,000 ₮", size: "Керамик platter set", image: "https://www.dansran.mn/cdn/shop/files/DSC_2897_540x.jpg?v=1771297495", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej106" },
  { name: "Зууван таваг", code: "CEJ104", price: "168,000 ₮", size: "Керамик oval plate", image: "https://www.dansran.mn/cdn/shop/files/DSC_28752_540x.jpg?v=1771296912", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej104" },
  { name: "Салфетка суурь", code: "CEJ107", price: "68,000 ₮", size: "14 × 4.8 × 8 см", image: "https://www.dansran.mn/cdn/shop/files/DSC_2907_540x.jpg?v=1771298072", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej107" },
  { name: "Эргэдэг таваг", code: "CEJ103", price: "168,000 ₮", size: "26 см диаметр · 17 см өндөр", image: "https://www.dansran.mn/cdn/shop/files/cakestand5_540x.jpg?v=1771297018", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej103" },
  { name: "3-тай модон суурьтай сэт", code: "CEJ105", price: "98,000 ₮", size: "Керамик + хулс мод", image: "https://www.dansran.mn/cdn/shop/files/DSC_2891_540x.jpg?v=1771297711", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej105" },
]

type CharacterProps = {
  char: string
  index: number
  centerIndex: number
  progress: any
}

function AnimatedCharacter({ char, index, centerIndex, progress }: CharacterProps) {
  const distance = index - centerIndex
  const x = useTransform(progress, [0, 0.5], [distance * 2, 0])
  const rotateX = useTransform(progress, [0, 0.5], [0, 0])
  const scale = useTransform(progress, [0, 0.5], [0.98, 1])

  return (
    <motion.span className={char === " " ? "inline-block w-4" : "inline-block"} style={{ x, rotateX, scale }}>
      {char}
    </motion.span>
  )
}

export function DansranHome() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 540])
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.92, 1, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.72, 1], [12, 0, 0, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18, 0.55, 0.82, 1], [0, 1, 1, 0.16, 0])
  const menuSize = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], ["23vh", "27vh", "21vh", "15vh"])
  const [menuOpen, setMenuOpen] = useState(false)
  const title = "Жаргалтайн дэлгэр"
  const titleCharacters = title.split("")
  const titleCenter = Math.floor(titleCharacters.length / 2)

  return (
    <ReactLenis root options={{ lerp: 0.08 }}>
      <main className="min-h-screen overflow-x-hidden bg-[#f6f4ef] text-[#0E6287] selection:bg-[#0E6287] selection:text-[#AAE7FF]">
      <section id="top" ref={heroRef} className="relative h-[125vh]">
        <div className="sticky top-0 flex h-screen min-h-[660px] flex-col items-center justify-center overflow-hidden px-5">
          <div className="pointer-events-none absolute left-5 top-28 flex max-w-[145px] flex-col gap-3 md:left-10 md:top-36"><span className="text-[9px] uppercase tracking-[0.25em] text-[#172b35]/60">01 / 03</span><p className="text-xs leading-relaxed text-[#172b35]/70">Objects that carry a little of Mongolia into the room.</p></div>
          <div className="pointer-events-none absolute right-5 top-28 max-w-[145px] text-right md:right-10 md:top-36"><span className="text-[9px] uppercase tracking-[0.25em] text-[#172b35]/60">Est. 2020</span><p className="mt-3 text-xs leading-relaxed text-[#172b35]/70">Made in Ulaanbaatar<br />for considered spaces.</p></div>
          <motion.img src={plateImage} alt="Hand-painted ceramic oval plate with a central opening, horses, clouds and a mountain" style={{ rotate, scale, y }} className="relative z-10 w-[min(105vw,92vh)] max-w-none rounded-full object-contain drop-shadow-[0_34px_38px_rgba(23,43,53,0.18)]" />
          <motion.span aria-hidden="true" style={{ rotate, scale, y, width: menuSize, height: menuSize }} className="pointer-events-none absolute z-20 rounded-full bg-[#f6f4ef] shadow-[0_0_0_1px_rgba(14,98,135,0.12),0_18px_50px_rgba(14,98,135,0.14)]" />
          <motion.span aria-hidden="true" animate={{ scale: menuOpen ? [1, 1.12, 1] : [1, 1.04, 1], opacity: menuOpen ? [0.25, 0, 0.25] : [0.18, 0, 0.18] }} transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} style={{ width: menuSize, height: menuSize }} className="pointer-events-none absolute z-20 rounded-full border border-[#0E6287]" />
          <nav aria-label="Main navigation" className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <motion.button type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)} style={{ width: menuSize, height: menuSize }} animate={{ rotate: menuOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 180, damping: 15 }} className="group flex min-h-28 min-w-28 items-center justify-center rounded-full border border-[#0E6287]/25 bg-[#f6f4ef]/95 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0E6287] shadow-[0_12px_30px_rgba(14,98,135,0.16)] backdrop-blur-sm">
              <span className="flex flex-col items-center gap-2"><span className="font-serif text-3xl font-semibold leading-none" aria-hidden="true">D</span><span className="flex gap-1"><i className="size-1 rounded-full bg-[#0E6287]" /><i className="size-1 rounded-full bg-[#0E6287]" /><i className="size-1 rounded-full bg-[#0E6287]" /></span></span>
            </motion.button>
            <motion.div initial={false} animate={menuOpen ? "open" : "closed"} variants={{ open: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } }, closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } } }} className="pointer-events-none absolute left-1/2 top-1/2 z-40 flex w-[380px] max-w-[78vw] -translate-x-1/2 -translate-y-1/2 items-center justify-between gap-2 md:gap-4" aria-hidden={!menuOpen}>
              <motion.a variants={{ open: { opacity: 1, x: 0, scale: 1 }, closed: { opacity: 0, x: 34, scale: 0.7 } }} tabIndex={menuOpen ? 0 : -1} href="/collection" className="relative z-50 pointer-events-auto whitespace-nowrap rounded-full border border-[#0E6287] bg-[#0E6287] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#AAE7FF] shadow-lg transition-transform hover:-translate-y-1">Ready to ship</motion.a>
              <motion.a variants={{ open: { opacity: 1, x: 0, scale: 1 }, closed: { opacity: 0, x: -34, scale: 0.7 } }} tabIndex={menuOpen ? 0 : -1} href="/custom" className="relative z-50 pointer-events-auto whitespace-nowrap rounded-full border border-[#0E6287] bg-[#AAE7FF] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0E6287] shadow-lg transition-transform hover:-translate-y-1">Custom inquiry</motion.a>
            </motion.div>
          </nav>
          <motion.div style={{ opacity: titleOpacity }} className="pointer-events-none absolute z-20 flex flex-col items-center text-center"><span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#172b35]/70">Dansran presents</span><h1 className="max-w-3xl text-[17vw] font-medium leading-[0.78] tracking-[-0.09em] md:text-[13vw]" style={{ perspective: "500px" }}>{titleCharacters.map((char, index) => <AnimatedCharacter key={`${char}-${index}`} char={char} index={index} centerIndex={titleCenter} progress={scrollYProgress} />)}</h1><p className="mt-8 max-w-xs text-sm leading-relaxed text-[#172b35]/75 md:max-w-sm">A new collection of ceramic accessories for warm, memorable places.</p></motion.div>
          <div className="absolute bottom-8 flex flex-col items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#172b35]/60"><MoveDown className="size-4 animate-bounce" aria-hidden="true" />Scroll to explore</div>
        </div>
      </section>

      <section id="collection" className="bg-[#AAE7FF] px-5 py-16 text-[#0E6287] md:px-10 md:py-20"><div className="mx-auto max-w-6xl"><div className="flex items-start justify-between gap-8"><div><p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Жаргалтайн дэлгэр</p><p className="mt-7 max-w-3xl text-xl leading-[1.3] tracking-[-0.03em] md:text-3xl">Монголын дэлгэр цаг, элбэг дэлбэг амьдрал, халуун дулаан ахуй, хамтын жаргалыг дүрслэн бүтээсэн цуглуулга.</p></div><span className="hidden pt-1 text-[10px] uppercase tracking-[0.2em] text-[#0E6287]/60 md:block">Монгол утга агуулга</span></div><div className="mt-10 grid gap-6 border-t border-[#0E6287]/20 pt-8 md:grid-cols-2 md:gap-10"><a href="/collection" className="group border-t border-[#0E6287]/20 pt-5"><span className="text-[10px] text-[#0E6287]/60">01</span><div className="mt-8 flex items-center justify-between"><h3 className="text-2xl tracking-[-0.04em]">Бэлэн бүтээгдэхүүн</h3><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-[#0E6287]/65">Жаргалтайн дэлгэрийн бэлэн бүтээлүүдээс сонгоно.</p></a><a href="/custom" className="group border-t border-[#0E6287]/20 pt-5"><span className="text-[10px] text-[#0E6287]/60">02</span><div className="mt-8 flex items-center justify-between"><h3 className="text-2xl tracking-[-0.04em]">Тохируулан бүтээх</h3><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-[#0E6287]/65">Зураглал, өнгө, мэндчилгээ, савлагаагаар танай байгууллагад тохируулна.</p></a></div></div></section>

      <section id="custom" className="bg-[#f6f4ef] px-5 py-16 text-[#0E6287] md:px-10 md:py-20"><div className="mx-auto max-w-6xl"><p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Хамтдаа бүтээе</p><div className="mt-7 flex flex-col justify-between gap-7 border-b border-[#0E6287]/20 pb-10 md:flex-row md:items-end"><h2 className="max-w-2xl text-4xl leading-[0.98] tracking-[-0.06em] md:text-6xl">Үнэ цэнийг<br />утга агуулгатай болгоё.</h2><a href="mailto:hello@dansran.com?subject=Захиалгат бүтээл" className="inline-flex items-center gap-4 bg-[#0E6287] px-6 py-4 text-sm text-[#f6f4ef] transition-transform hover:-translate-y-1">Холбогдох <ArrowUpRight className="size-4" /></a></div><footer className="flex flex-col gap-6 pt-7 md:flex-row md:items-end md:justify-between"><div><img src="/dansran-wordmark.png" alt="Dansran" className="h-8 w-auto object-contain" /><p className="mt-4 text-sm text-[#0E6287]/60">Монгол утга. Өдөр тутмын бүтээл.</p></div><div className="flex gap-8 text-sm text-[#0E6287]/70"><a href="/collection">Жаргалтайн дэлгэр</a><a href="mailto:hello@dansran.com">Холбогдох</a></div><span className="text-xs text-[#0E6287]/50">© DANSRAN · 2026</span></footer></div></section>
      </main>
    </ReactLenis>
  )
}

export default DansranHome
