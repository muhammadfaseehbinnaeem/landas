import { useState, useCallback } from "react";

export default function useToggle(initial = false) {
  const [value, set] = useState<boolean>(initial);
  const toggle = useCallback(() => set((v) => !v), []);
  const setOn = useCallback(() => set(true), []);
  const setOff = useCallback(() => set(false), []);
  return { value, toggle, setOn, setOff };
}
