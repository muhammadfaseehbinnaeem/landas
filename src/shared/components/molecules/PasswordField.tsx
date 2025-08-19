import { useState, InputHTMLAttributes } from "react";
import classNameMerge from "@/shared/utils/classNameMerge";
import Icon from "@/shared/components/atoms/Icon";
import { clsx } from "clsx";

type Props = {
  isError?: boolean;
  errorText?: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function PasswordField({
  className,
  isError,
  errorText,
  hint,
  ...rest
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-1">
      <div
        className={classNameMerge(
          "h-11 w-full rounded-md border bg-white px-3 text-sm flex items-center gap-2",
          "focus-within:ring-2 focus-within:ring-yellow-300",
          clsx(isError ? "border-red-300 bg-red-50" : "border-neutral-200"),
          className
        )}
      >
        <input
          {...rest}
          type={show ? "text" : "password"}
          className="w-full bg-transparent outline-none"
        />
        <button
          type="button"
          aria-label={show ? "비밀번호 숨기기" : "비밀번호 표시"}
          className="text-neutral-500 hover:text-neutral-700"
          onClick={() => setShow((s) => !s)}
        >
          <Icon name={show ? "eye-off" : "eye"} className="size-4" />
        </button>
      </div>
      {isError ? (
        <p className="text-xs text-red-500">{errorText}</p>
      ) : hint ? (
        <p className="text-[11px] text-neutral-400">{hint}</p>
      ) : null}
    </div>
  );
}
