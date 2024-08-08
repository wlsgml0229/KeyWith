import { classes } from "@gongmo/themes";
import { recipe } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  variants: {
    fontSize: {
      ...classes.typography.text,
    },
    defaultVariants: {
      fontSize: "md",
    },
  },
});

export const headingStyle = recipe({
  variants: {
    fontSize: {
      ...classes.typography.heading,
    },
  },
  defaultVariants: {
    fontSize: "3xl",
  },
});
