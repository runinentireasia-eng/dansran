import CustomRequestForm from "@/components/custom-request-form"
import DansranFooter from "@/components/dansran-footer"
import DansranNavbar from "@/components/dansran-navbar"
import DansranBreadcrumb from "@/components/ui/breadcrumb"
import { TextBlurIn } from "@/components/ui/text-blur-in"

const occasions = [
  { title: "Шинэ жилийн бэлэг", description: "Түнш, харилцагч, хамт олонд" },
  { title: "Удирдлага / VIP бэлэг", description: "Удирдах түвшин, ТУЗ, хүндэт зочинд" },
  { title: "Түншийн бэлэг", description: "Хамтын ажиллагаа, онцгой харилцаанд" },
  { title: "Ойн баяр / Тусгай төсөл", description: "Ойн баяр, арга хэмжээ, нээлт болон онцгой захиалгад" },
]

// Fill in `image` (e.g. "/custom/product-1.jpg") and `name` once photos are uploaded.
const madeProducts: { name: string; image?: string }[] = [
  { name: "Бүтээгдэхүүн 1" },
  { name: "Бүтээгдэхүүн 2" },
  { name: "Бүтээгдэхүүн 3" },
  { name: "Бүтээгдэхүүн 4" },
  { name: "Бүтээгдэхүүн 5" },
]

export default function CustomPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#0E6287]">
      <header className="mx-auto max-w-6xl px-5 pt-6 md:px-10 md:pt-8">
        <DansranNavbar hideCustom current="custom" />
        <div className="mt-5">
          <DansranBreadcrumb current="Custom" />
        </div>
      </header>

      <section className="px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl">Захиалгат бүтээгдэхүүн</h1>
          <TextBlurIn className="mt-6 max-w-xl text-base leading-relaxed text-[#0E6287]/70 md:text-lg" staggerDelay={0.02}>
            Танай байгууллагын хэрэгцээ, зориулалтад тохируулан тусгай бүтээгдэхүүн бүтээнэ.
          </TextBlurIn>
          <ul className="mt-12 grid border-t border-[#0E6287]/20 md:grid-cols-2 md:gap-x-10">
            {occasions.map((occasion) => (
              <li key={occasion.title} className="flex items-center justify-between gap-6 border-b border-[#0E6287]/20 py-6">
                <div>
                  <h2 className="text-2xl tracking-[-0.04em]">{occasion.title}</h2>
                  <p className="mt-2 text-sm text-[#0E6287]/65">{occasion.description}</p>
                </div>
                <img src="/dansran-mark-blue.png" alt="" className="size-5 shrink-0 object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f6f4ef_0%,#dceff4_100%)] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="border-b border-[#0E6287]/20 pb-5 text-4xl tracking-[-0.05em] md:text-5xl">Бидний бүтээсэн</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {madeProducts.map((product) => (
              <li key={product.name}>
                <div data-cursor className="aspect-[4/5] overflow-hidden rounded-sm bg-white/60 ring-1 ring-[#0E6287]/10">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="size-full object-cover" />
                  ) : (
                    <div className="flex size-full items-center justify-center">
                      <img src="/dansran-mark-blue.png" alt="" className="size-8 object-contain opacity-20" />
                    </div>
                  )}
                </div>
                <p className="mt-4 text-sm">{product.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="request" className="bg-[#dceff4] px-5 pb-20 pt-4 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-4xl tracking-[-0.05em] md:text-5xl">Хүсэлт илгээх</h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#0E6287]/70">
              Хүссэн бүтээгдэхүүн, тоо ширхэг, хугацаагаа бичээд илгээгээрэй. Бид тантай эргэн холбогдоно.
            </p>
          </div>
          <CustomRequestForm />
        </div>
      </section>

      <DansranFooter />
    </main>
  )
}
