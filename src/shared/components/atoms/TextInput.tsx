import type { InputHTMLAttributes } from "react";
import classNameMerge from "../shared/utils/classNameMerge";
import { clsx } from "clsx";

type Props = {
  isError?: boolean;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({
  className,
  isError,
  errorText,
  ...rest
}: Props) {
  return (
    <div className="space-y-1">
      <input
        {...rest}
        className={classNameMerge(
          "h-11 w-full rounded-md border bg-white px-3 text-sm placeholder:text-neutral-400 outline-none transition-shadow",
          "focus:ring-2 focus:ring-yellow-300",
          clsx(isError ? "border-red-300 bg-red-50" : "border-neutral-200"),
          className
        )}
      />
      {isError && !!errorText && (
        <p className="text-xs text-red-500">{errorText}</p>
      )}
    </div>
  );
}
