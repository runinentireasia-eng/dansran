"use client"

import { useActionState } from "react"
import { submitCustomRequest, type CustomRequestState } from "@/app/actions/custom-request"

const initialState: CustomRequestState = { status: "idle" }

const inputClass =
  "w-full border-b border-[#0E6287]/25 bg-transparent py-3 text-base text-[#0E6287] placeholder:text-[#0E6287]/40 focus:border-[#0E6287] focus:outline-none"

export default function CustomRequestForm() {
  const [state, formAction, pending] = useActionState(submitCustomRequest, initialState)

  if (state.status === "success") {
    return (
      <div role="status" className="border-t border-[#0E6287]/20 py-10">
        <p className="text-2xl tracking-[-0.04em]">Баярлалаа! Таны хүсэлтийг хүлээн авлаа.</p>
        <p className="mt-3 text-sm text-[#0E6287]/65">Бид тантай удахгүй холбогдох болно.</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="grid gap-8 border-t border-[#0E6287]/20 pt-8 md:grid-cols-2 md:gap-x-10">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Нэр *</span>
        <input name="name" required maxLength={120} autoComplete="name" className={inputClass} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Байгууллага</span>
        <input name="company" maxLength={160} autoComplete="organization" className={inputClass} />
      </label>
      <label className="block md:col-span-2">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Утас эсвэл и-мэйл *</span>
        <input name="contact" required maxLength={160} autoComplete="email" className={inputClass} />
      </label>
      <label className="block md:col-span-2">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Таны хүсэлт *</span>
        <textarea
          name="message"
          required
          minLength={5}
          maxLength={3000}
          rows={5}
          placeholder="Ямар бүтээгдэхүүн, хэдэн ширхэг, хэзээ хэрэгтэй вэ?"
          className={`${inputClass} resize-none`}
        />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p aria-live="polite" className="text-sm text-red-700">
          {state.status === "error" ? state.message : null}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-[#0E6287] px-8 py-3 text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {pending ? "Илгээж байна..." : "Илгээх"}
        </button>
      </div>
    </form>
  )
}
