export type BasicButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "disabled";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  id?: string;
  title?: string;
};
