const colorMap: Record<string, string> = {
  slate: 'from-slate-500 to-slate-600',
  gray: 'from-gray-500 to-gray-600',
  zinc: 'from-zinc-500 to-zinc-600',
  neutral: 'from-neutral-500 to-neutral-600',
  stone: 'from-stone-500 to-stone-600',
  red: 'from-red-500 to-red-600',
  orange: 'from-orange-500 to-orange-600',
  amber: 'from-amber-500 to-amber-600',
  yellow: 'from-yellow-500 to-yellow-600',
  lime: 'from-lime-500 to-lime-600',
  green: 'from-green-500 to-green-600',
  emerald: 'from-emerald-500 to-emerald-600',
  teal: 'from-teal-500 to-teal-600',
  cyan: 'from-cyan-500 to-cyan-600',
  sky: 'from-sky-500 to-sky-600',
  blue: 'from-blue-500 to-blue-600',
  indigo: 'from-indigo-500 to-indigo-600',
  violet: 'from-violet-500 to-violet-600',
  purple: 'from-purple-500 to-purple-600',
  fuchsia: 'from-fuchsia-500 to-fuchsia-600',
  pink: 'from-pink-500 to-pink-600',
  rose: 'from-rose-500 to-rose-600',
};

export const getGradientClass = (color: string): string => {
  return colorMap[color] || 'from-gray-500 to-gray-600';
};
