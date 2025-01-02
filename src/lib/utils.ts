import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string) {
  // Remove leading slash if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return new URL(`../assets/${cleanPath}`, import.meta.url).href
}
