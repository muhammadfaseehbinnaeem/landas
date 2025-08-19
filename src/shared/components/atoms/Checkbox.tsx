type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export default function Checkbox({ checked, onChange, label }: Props) {
  return (
    <label className="inline-flex items-center gap-2 select-none cursor-pointer">
      <input
        type="checkbox"
        className="size-4 accent-yellow-500"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label && <span className="text-xs text-neutral-700">{label}</span>}
    </label>
  );
}
