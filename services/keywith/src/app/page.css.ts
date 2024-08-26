import { style } from "@vanilla-extract/css";
import { f } from "../shared/styles/functions";

export const main = style([
  f.flexCenterBox,
  {
    background: "pink",
    height: "100vh",
  },
]);

export const typo = style({
  color: "var(--gray-3)",
});
