import LoginForm from "../features/auth/components/organisms/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid place-items-center min-h-[calc(100dvh-0px)] login-bg">
      <div className="w-full max-w-[520px] rounded-2xl bg-white/90 shadow-lg p-8 md:p-10">
        <h1 className="text-3xl font-extrabold text-yellow-500 tracking-wide text-center mb-8">
          LANDAS
        </h1>
        <LoginForm />
      </div>
      <p className="text-center text-xs text-neutral-400 -mt-35">
        Copyright ⓒ <span>WWW.lbs2mall.com</span> All rights reserved
      </p>
    </div>
  );
}
