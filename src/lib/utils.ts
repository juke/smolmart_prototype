import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string) {
  // Handle GitHub Pages base path
  const basePath = '/smolmart_prototype';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return basePath + cleanPath;
}
