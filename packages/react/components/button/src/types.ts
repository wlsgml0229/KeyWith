import { vars } from "@gongmo/themes";

type Color = keyof typeof vars.colors.$scale;
type ButtonColor = Extract<Color, "green" | "gray">;

export type ButtonProps = {
  color?: ButtonColor;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
