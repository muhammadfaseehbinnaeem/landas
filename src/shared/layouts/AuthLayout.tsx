import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-4 py-10">{children}</div>
  );
}
