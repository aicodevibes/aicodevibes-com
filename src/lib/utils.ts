import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility for conditionally merging Tailwind CSS classes.
 * Combines `clsx` for conditional logic and `tailwind-merge` to handle 
 * CSS specificity and conflict resolution.
 * 
 * @param inputs - A variadic list of class names, objects, or arrays to merge.
 * @returns A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a given date or date string into a human-readable format.
 * Utilizes the native `Intl.DateTimeFormat` API for localized formatting.
 * 
 * @example
 * ```ts
 * formatDate("2024-01-01") // returns "January 1, 2024"
 * ```
 * 
 * @param date - The date object or ISO string to format.
 * @returns A string representing the formatted date (e.g., "January 1, 2024").
 */
export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
