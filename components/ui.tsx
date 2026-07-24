import type React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) { return <Link className={cn("focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-1", variant === "primary" ? "bg-white text-slate-950 shadow-glow" : "glass text-white hover:bg-white/10")} href={href}>{children}<ArrowRight size={16} /></Link>; }
export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) { return <section id={id} className="mx-auto max-w-7xl px-6 py-24"><p className="mb-4 text-sm font-bold uppercase tracking-[.3em] text-cyan-300">{eyebrow}</p><h2 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h2><div className="mt-10">{children}</div></section>; }
export function Card({ children, className }: { children: React.ReactNode; className?: string }) { return <div className={cn("glass rounded-4xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50", className)}>{children}</div>; }
