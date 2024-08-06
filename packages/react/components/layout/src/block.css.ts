import { style } from "@vanilla-extract/css";
import { vars } from "@gongmo/themes";

export const blockStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$static.light.green[4],
});
