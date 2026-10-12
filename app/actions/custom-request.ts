"use server"

import { db } from "@/lib/db"
import { customRequests } from "@/lib/db/schema"

export type CustomRequestState = { status: "idle" | "success" | "error"; message?: string }

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export async function submitCustomRequest(
  _prev: CustomRequestState,
  formData: FormData,
): Promise<CustomRequestState> {
  // Hidden honeypot field: real visitors never fill it, bots usually do.
  if (field(formData, "website", 200)) return { status: "success" }

  const name = field(formData, "name", 120)
  const company = field(formData, "company", 160)
  const contact = field(formData, "contact", 160)
  const message = field(formData, "message", 3000)

  if (!name || !contact || message.length < 5) {
    return { status: "error", message: "Нэр, холбоо барих мэдээлэл болон хүсэлтээ бөглөнө үү." }
  }

  try {
    await db.insert(customRequests).values({ name, company: company || null, contact, message })
    return { status: "success" }
  } catch (error) {
    console.error("Failed to save custom request", error)
    return { status: "error", message: "Илгээхэд алдаа гарлаа. Дахин оролдоно уу." }
  }
}
