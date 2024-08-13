import * as React from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    // variant = "solid",
    // size = "md",
    // color = "gray",
    children,
    ...rest
  } = props;

  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
