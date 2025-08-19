type Props = {
  name: "eye" | "eye-off";
  className?: string;
};

export default function Icon({ name, className }: Props) {
  if (name === "eye")
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="1.5"
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    );
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeWidth="1.5"
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
      />
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      <path strokeWidth="1.5" d="M3 21L21 3" />
    </svg>
  );
}
