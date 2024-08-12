export const extractSprinkleProps = <T extends Object>(
  props: T,
  keys: (keyof T)[],
) => {
  const result: any = {};

  keys.forEach((key) => {
    if (props?.[key]) {
      result[key] = props[key];
    }
  });
  console.log("result", result);
  return result;
};
