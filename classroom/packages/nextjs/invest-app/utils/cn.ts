/**
 * Utility function to merge Tailwind CSS classes safely
 * Handles dynamic classes that Tailwind can't detect
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((cls) => typeof cls === 'string' && cls.length > 0)
    .join(' ');
}
