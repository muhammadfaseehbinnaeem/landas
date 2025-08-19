import { useState } from "react";
import BasicButton from "../shared/components/atoms/BasicButton";
import TextInput from "../shared/components/atoms/TextInput";
import PasswordField from "../shared/components/molecules/PasswordField";
import Checkbox from "../shared/components/atoms/Checkbox";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/route";

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [saveId, setSaveId] = useState(false);
  const [touched, setTouched] = useState({ id: false, pw: false });

  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const idError =
    touched.id && userId.trim().length === 0 ? "아이디를 입력해주세요." : "";
  const pwError =
    touched.pw && pw.trim().length < 8
      ? "비밀번호는 8자 이상이어야 합니다."
      : "";

  const canSubmit = userId && pw.length >= 8;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ id: true, pw: true });
    if (!canSubmit) return;

    login(userId, saveId);
    navigate(ROUTE.HOME, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <label className="text-xs text-neutral-500">아이디</label>
        <TextInput
          placeholder="아이디를 입력해주세요."
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, id: true }))}
          isError={!!idError}
          errorText={idError}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-neutral-500">비밀번호</label>
        <PasswordField
          placeholder="비밀번호를 입력해주세요."
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, pw: true }))}
          isError={!!pwError}
          errorText={pwError}
          hint="영문, 숫자, 특수문자 조합 8~16자"
        />
      </div>

      <div className="flex items-center justify-between text-xs">
        <Checkbox
          checked={saveId}
          onChange={(c) => setSaveId(c)}
          label="아이디 저장"
        />
        <div className="text-neutral-400">
          <button type="button" className="hover:underline">
            아이디찾기
          </button>
          <span className="mx-2">|</span>
          <button type="button" className="hover:underline">
            비밀번호 찾기
          </button>
        </div>
      </div>

      <BasicButton
        type="submit"
        variant={canSubmit ? "primary" : "disabled"}
        fullWidth
        title="로그인"
      >
        로그인
      </BasicButton>

      <BasicButton
        type="button"
        variant="ghost"
        fullWidth
        title="회원가입"
        onClick={() => alert("정적 데모: 회원가입 화면은 생략되었습니다.")}
      >
        회원가입
      </BasicButton>
    </form>
  );
}
