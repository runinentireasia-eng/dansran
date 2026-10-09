"use client"

import { motion } from "framer-motion"
import Link from "next/link"

type DansranNavbarProps = {
  dark?: boolean
  hideCustom?: boolean
}

export default function DansranNavbar({ dark = false, hideCustom = false }: DansranNavbarProps) {
  const textClass = dark ? "text-[#f6f4ef]" : "text-[#0E6287]"
  const logoClass = dark ? "brightness-0 invert" : ""

  return (
    <nav aria-label="Main navigation" className={`mx-auto flex max-w-6xl items-center gap-3 ${textClass}`}>
      <Link href="/" aria-label="Dansran home" className="mr-auto flex items-center">
        <img src="/dansran-logo-blue.svg" alt="Dansran" className={`h-7 w-auto ${logoClass}`} />
      </Link>
      <motion.a href="/collection" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="rounded-full border border-[#0E6287] bg-[#0E6287] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#AAE7FF]">Бэлэн коллекц</motion.a>
      {!hideCustom && <motion.a href="/custom" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="rounded-full border border-[#0E6287] bg-[#0E6287] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#AAE7FF]">Custom</motion.a>}
      <motion.a href="/contact" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="cssbuttons-io-button">Холбогдох<span className="icon" aria-hidden="true"><img src="/dansran-mark-blue.png" alt="" /></span></motion.a>
    </nav>
  )
}
