import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string) {
  const baseUrl = import.meta.env.MODE === 'production' ? '/smolmart_prototype' : ''
  return `${baseUrl}${path}`
}
