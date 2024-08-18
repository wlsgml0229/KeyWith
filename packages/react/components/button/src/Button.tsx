import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
} from "./style.css";
import { vars } from "@gongmo/themes";

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
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][1]
      : vars.colors.$scale[color][2];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][1]
      : vars.colors.$scale[color][2];

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
