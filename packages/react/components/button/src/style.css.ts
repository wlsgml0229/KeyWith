import { recipe } from "@vanilla-extract/recipes";
import { createVar } from "@vanilla-extract/css";
export const enableColorVariant = createVar();
export const hoverColorVariant = createVar();
export const activeColorVariant = createVar();

//버튼에 입혀진 최소한의 스타일 리셋
export const buttonStyle = recipe({
  base: {
    margin: 0,
    padding: 0,
    border: 0,
  },
});
