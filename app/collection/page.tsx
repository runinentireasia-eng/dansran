import Link from "next/link"
import DansranFooter from "@/components/dansran-footer"
import DansranNavbar from "@/components/dansran-navbar"
import DansranBreadcrumb from "@/components/ui/breadcrumb"

const products = [
  ["Хөлтэй таваг", "CEJ101", "98,000 ₮", "14 см диаметр · 12 см өндөр", "https://www.dansran.mn/cdn/shop/files/DSC_2882_540x.jpg?v=1772690086", "cej101"],
  ["3-тай гэр таваг", "CEJ102", "158,000 ₮", "22 см диаметр · 10 см өндөр", "https://www.dansran.mn/cdn/shop/files/137331a666647a0a065a20ffd061a5fc_540x.webp?v=1772524646", "cej102"],
  ["Платтер сэт", "CEJ106", "218,000 ₮", "Керамик platter set", "https://www.dansran.mn/cdn/shop/files/DSC_2897_540x.jpg?v=1771297495", "cej106"],
  ["Зууван таваг", "CEJ104", "168,000 ₮", "Керамик oval plate", "https://www.dansran.mn/cdn/shop/files/DSC_28752_540x.jpg?v=1771296912", "cej104"],
  ["Салфетка суурь", "CEJ107", "68,000 ₮", "14 × 4.8 × 8 см", "https://www.dansran.mn/cdn/shop/files/DSC_2907_540x.jpg?v=1771298072", "cej107"],
  ["Эргэдэг таваг", "CEJ103", "168,000 ₮", "26 см диаметр · 17 см өндөр", "https://www.dansran.mn/cdn/shop/files/cakestand5_540x.jpg?v=1771297018", "cej103"],
  ["3-тай модон суурьтай сэт", "CEJ105", "98,000 ₮", "Керамик + хулс мод", "https://www.dansran.mn/cdn/shop/files/DSC_2891_540x.jpg?v=1771297711", "cej105"],
]

export default function CollectionPage() {
  return <main className="min-h-screen bg-[#172b35] px-5 py-6 text-[#f6f4ef] md:px-10 md:py-8">
    <header className="mx-auto max-w-6xl"><DansranNavbar dark /><div className="mt-5"><DansranBreadcrumb current="Бэлэн коллекц" dark /></div></header>
    <section className="mx-auto max-w-6xl pb-24 pt-28 md:pt-40"><h1 className="max-w-4xl text-6xl font-medium leading-[0.86] tracking-[-0.07em] md:text-9xl">Жаргалтайн<br /><em className="font-serif font-normal text-[#dce8d9]">дэлгэр.</em></h1><p className="mt-10 max-w-md text-base leading-relaxed text-[#f6f4ef]/65">Seven hand-painted ceramic accessories, ready for considered tables, hospitality spaces and meaningful gifts.</p><div className="mt-24 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{products.map(([name, code, price, size, image, slug]) => <a key={code} href={`https://www.dansran.mn/collections/jargaltaindelger/products/${slug}`} target="_blank" rel="noreferrer" className="group"><div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e7dfd2]"><img src={image} alt={`${name} from Жаргалтайн дэлгэр`} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="mt-4 flex items-start justify-between gap-4"><div><h2 className="text-sm font-medium uppercase tracking-[0.08em]">{name}</h2><p className="mt-2 text-xs text-[#f6f4ef]/50">{code} · {size}</p></div><span className="shrink-0 text-sm text-[#e5b04b]">{price}</span></div></a>)}</div></section>
    <DansranFooter />
  </main>
}
