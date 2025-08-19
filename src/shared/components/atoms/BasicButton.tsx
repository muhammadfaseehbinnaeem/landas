import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classNameMerge from "@/shared/utils/classNameMerge";

export type BasicButtonProps = {
  variant?: "primary" | "outline" | "ghost" | "disabled";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BasicButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  title,
  ...rest
}: PropsWithChildren<BasicButtonProps>) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-11 px-4",
    lg: "h-12 px-5 text-lg",
  }[size];

  const variants = {
    primary:
      "bg-yellow-500 text-white hover:opacity-90 focus:ring-yellow-300 disabled:opacity-50",
    outline:
      "border border-neutral-300 text-neutral-800 hover:bg-neutral-50 disabled:opacity-50",
    ghost:
      "border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50",
    disabled:
      "bg-neutral-200 text-neutral-500 cursor-not-allowed hover:opacity-100",
  }[variant];

  return (
    <button
      type="button"
      title={title}
      className={classNameMerge(
        base,
        sizes,
        variants,
        fullWidth ? "w-full" : "",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
