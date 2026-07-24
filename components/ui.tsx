"use client";

import type React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  return (
    <motion.div whileHover={{ scale: 1.045, y: -2 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 420, damping: 18 }}>
      <Link className={cn("magnetic shine focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-1", variant === "primary" ? "bg-white text-slate-950 shadow-glow" : "glass text-white hover:bg-white/10")} href={href}>
        {children}
        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}><ArrowRight size={16} /></motion.span>
      </Link>
    </motion.div>
  );
}

export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section id={id} className="mx-auto max-w-7xl px-6 py-24" initial={{ opacity: 0, y: 36, filter: "blur(12px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <motion.p className="mb-4 text-sm font-bold uppercase tracking-[.3em] text-cyan-300" initial={{ x: -24, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>{eyebrow}</motion.p>
      <motion.h2 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl" initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>{title}</motion.h2>
      <div className="mt-10">{children}</div>
    </motion.section>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={cn("interactive-card glass rounded-4xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50", className)} whileHover={{ rotate: 1.5 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
