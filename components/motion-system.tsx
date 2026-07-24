"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";

export function AnimatedShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.2 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 900);
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <AnimatedBackground />
      <CustomCursor x={mouseX} y={mouseY} />
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] grid place-items-center bg-slate-950"
        animate={{ opacity: loaded ? 0 : 1, pointerEvents: loaded ? "none" : "auto" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="text-center">
          <div className="loading-logo gradient-text text-4xl font-black">MahakTech</div>
          <div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-cyan-300" initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, filter: "blur(18px)", scale: 0.985 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        {children}
      </motion.div>
    </>
  );
}

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="animated-bg">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="mesh-gradient" />
      <div className="stars" />
      <div className="particle-field" />
      <div className="mouse-glow" />
      <div className="animated-noise" />
    </div>
  );
}

function CustomCursor({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const springX = useSpring(x, { stiffness: 500, damping: 42 });
  const springY = useSpring(y, { stiffness: 500, damping: 42 });
  return <motion.div aria-hidden="true" className="custom-cursor" style={{ x: springX, y: springY }} />;
}

export function Reveal({ children, variant = "up", delay = 0 }: { children: React.ReactNode; variant?: "up" | "left" | "right" | "scale" | "rotate" | "blur"; delay?: number }) {
  const variants = {
    up: { y: 42, opacity: 0 },
    left: { x: -48, opacity: 0 },
    right: { x: 48, opacity: 0 },
    scale: { scale: 0.92, opacity: 0 },
    rotate: { rotateX: 12, y: 40, opacity: 0 },
    blur: { filter: "blur(18px)", y: 24, opacity: 0 }
  };
  return <motion.div initial={variants[variant]} whileInView={{ x: 0, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function SplitReveal({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{text.split(" ").map((word, index) => <motion.span className="inline-block overflow-hidden pr-3" key={`${word}-${index}`}><motion.span className="inline-block" initial={{ y: "110%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.75, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}>{word}</motion.span></motion.span>)}</span>;
}

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  useEffect(() => {
    if (!ref.current || Number.isNaN(numeric)) return;
    let frame = 0;
    const total = 70;
    const tick = () => {
      frame += 1;
      if (ref.current) ref.current.textContent = `${Math.round((numeric * frame) / total)}${suffix}`;
      if (frame < total) requestAnimationFrame(tick);
    };
    tick();
  }, [numeric, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function ParallaxHeroArt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-240, 240], [-9, 9]);
  const rotateX = useTransform(y, [-240, 240], [9, -9]);
  return <motion.div onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); x.set(event.clientX - rect.left - rect.width / 2); y.set(event.clientY - rect.top - rect.height / 2); }} className="relative h-[520px] perspective-hero"><motion.div style={{ rotateX, rotateY }} className="absolute inset-8 animate-float rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-glow preserve-3d"><div className="hero-spotlight grid h-full place-items-center rounded-[2.8rem] bg-slate-950/90 p-8 text-center"><div className="floating-card rounded-full border border-cyan-300/30 px-4 py-2 text-cyan-200">AI • Cloud • Cybersecurity • IoT</div><h2 className="mt-8 text-5xl font-black">Future-ready marketplace architecture</h2><p className="mt-4 text-slate-300">Built for services today, SaaS and hardware commerce tomorrow.</p><div className="sphere sphere-one" /><div className="sphere sphere-two" /><div className="cube cube-one" /><div className="cube cube-two" /></div></motion.div></motion.div>;
}
