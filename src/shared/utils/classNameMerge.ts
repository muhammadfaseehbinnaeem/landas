import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export default function classNameMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
