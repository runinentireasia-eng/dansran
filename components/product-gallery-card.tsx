"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { productHref, type DansranProduct } from "@/lib/dansran-products"

export function ProductGalleryCard({ product }: { product: DansranProduct }) {
  const [active, setActive] = useState(0)
  const { name, code, price, size, slug, images } = product
  const href = productHref(slug)

  return (
    <article className="group">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e7dfd2]"
      >
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${name} — зураг ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-700 group-hover:scale-105",
              index === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <span className="sr-only">{`${name} бүтээгдэхүүний хуудас руу очих`}</span>
      </a>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2" role="group" aria-label={`${name} зургууд`}>
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              aria-label={`${index + 1}-р зургийг харах`}
              aria-pressed={index === active}
              className={cn(
                "aspect-square overflow-hidden rounded-xl bg-[#e7dfd2] ring-offset-2 ring-offset-[#172b35] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5b04b]",
                index === active ? "opacity-100 ring-1 ring-[#f6f4ef]/70" : "opacity-50 hover:opacity-90",
              )}
            >
              <img src={src} alt="" loading="lazy" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <a href={href} target="_blank" rel="noreferrer" className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.08em]">{name}</h2>
          <p className="mt-2 text-xs text-[#f6f4ef]/50">
            {code} · {size}
          </p>
        </div>
        <span className="shrink-0 text-sm text-[#e5b04b]">{price}</span>
      </a>
    </article>
  )
}
