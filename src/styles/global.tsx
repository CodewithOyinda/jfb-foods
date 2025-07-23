// styles/global.tsx

export const bg = (color: string) => `bg-${color}`;
export const text = (color: string) => `text-${color}`;
export const flex = (value: number | string = 1) => `flex-${value}`;
export const flexD = (dir: "row" | "col") => `flex flex-${dir}`;
export const justify = (val: string) => `justify-${val}`;
export const items = (val: string) => `items-${val}`;
export const px = (val: number) => `px-${val}`;
export const py = (val: number) => `py-${val}`;
export const pt = (val: number) => `pt-${val}`;
export const pb = (val: number) => `pb-${val}`;
export const pl = (val: number) => `pl-${val}`;
export const pr = (val: number) => `pr-${val}`;
export const mt = (val: number) => `mt-${val}`;
export const mb = (val: number) => `mb-${val}`;
export const rounded = (val: number | string) => `rounded-${val}`;
export const w = (val: string | number) => `w-${val}`;
export const h = (val: string | number) => `h-${val}`;
export const color = (val: string) => `text-${val}`;

export const COLORS = {
  primary: "blue-600",
  secondary: "purple-500",
  muted: "gray-500",
};
