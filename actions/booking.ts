"use server";
import { z } from "zod";
const bookingSchema = z.object({ name: z.string().min(2), email: z.string().email(), company: z.string().min(2), phone: z.string().min(7), service: z.string().min(2), budget: z.string().min(2), date: z.string().min(4), time: z.string().min(2), requirements: z.string().min(10).max(2000) });
export type BookingState = { ok: boolean; message: string };
export async function requestConsultation(_: BookingState, formData: FormData): Promise<BookingState> {
  const parsed = bookingSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { ok: false, message: "Please complete every field with valid project details." };
  // Production integration seam: create Google Calendar event, send Resend confirmations, persist via Prisma, notify admins.
  return { ok: true, message: `Thanks ${parsed.data.name}. MahakTech will confirm your ${parsed.data.service} consultation by email.` };
}
