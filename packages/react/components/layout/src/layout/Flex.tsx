import * as React from "react";
import { FlexProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@gongmo/themes";

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    align,
    basis,
    direction,
    grow,
    justify,
    shrink,
    wrap,
    gap,
    children,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap,
        color: color && vars.colors.$scale?.[color]?.[1],
        background: background && vars.colors.$scale?.[background]?.[1],
        ...props.style,
      },
    },
    children,
  );
};

const _Flex = React.forwardRef(Flex);
export { _Flex as Flex };
