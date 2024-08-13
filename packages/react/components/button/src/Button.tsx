import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { vars } from "@gongmo/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
} from "./style.css";
type Color = keyof typeof vars.colors.$scale;
type SolidColor = Extract<Color, "green" | "gray">; // Solid일 때 허용되는 색상만 추출
type Variant = "solid" | "outline";

// 타입에 따라 적절한 컬러 타입을 선택하는 유틸리티 타입
type VariantColor<T extends Variant> = T extends "solid" ? SolidColor : Color;

function getColorScale<T extends Variant>(
  variant: T,
  color: VariantColor<T>,
): string {
  const scaleIndex = variant === "solid" ? 1 : 2;
  return vars.colors.$scale[color][1];
}

// 사용 예시

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = "solid",
    size = "md",
    color = "gray",

    isDisabled = false,
    children,
    style,
  } = props;

  const endableColor = vars.colors.$scale[color][1];

  const hoverColor = getColorScale("solid", "green"); // OK
  const activeColor = getColorScale("outline", "red"); // OK

  const disabled = isDisabled;

  return (
    <button
      {...props}
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      disabled={disabled}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: endableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
    >
      {children}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
