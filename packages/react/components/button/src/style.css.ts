import { recipe } from "@vanilla-extract/recipes";
import { createVar } from "@vanilla-extract/css";
import { vars } from "@gongmo/themes";
import { classes } from "@gongmo/themes";
export const enableColorVariant = createVar();
export const hoverColorVariant = createVar();
export const activeColorVariant = createVar();

//버튼에 입혀진 최소한의 스타일 리셋
export const buttonStyle = recipe({
  base: {
    margin: 0,
    padding: 0,
    border: 0,

    borderRadius: vars.box.radi.sm,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
    // @ts-ignore
    "&[disabled]": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
  variants: {
    size: {
      xs: {
        ...classes.typography.text.xs,
        fontWeight: vars.typography.fontWeight[500],
        padding: "0 0.5rem",
        gap: "0.5rem",
        height: "1.5rem",
      },
      sm: {
        ...classes.typography.text.sm,
        fontWeight: vars.typography.fontWeight[500],
        padding: "0 0.75rem",
        gap: "0.5rem ",
        height: "2rem",
      },
      md: {
        ...classes.typography.text.md,
        fontWeight: vars.typography.fontWeight[500],
        padding: "0 1rem",
        gap: "0.5rem",
        height: "2.5rem",
      },
      lg: {
        ...classes.typography.text.lg,
        fontWeight: vars.typography.fontWeight[700],
        padding: "0 1.5rem",
        gap: "0.5rem",
        height: "3rem",
      },
      xl: {
        ...classes.typography.text["md-700"],
        padding: "1.6rem 2.8rem",
        gap: "0.5rem",
        height: "3rem",
      },
    },
    variant: {
      solid: {
        backgroundColor: enableColorVariant,
        color: vars.colors.$scale.gray[2],

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
      outline: {
        border: `1px solid ${enableColorVariant}`,
        color: enableColorVariant,

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
      ghost: {
        color: enableColorVariant,

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
    },
  },
});
