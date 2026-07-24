import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function readingTime(markdown: string) { return `${Math.max(1, Math.ceil(markdown.split(/\s+/).length / 220))} min read`; }
