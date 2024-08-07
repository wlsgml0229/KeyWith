import { Box as _Box } from "@gongmo/react-components-layout";
import "@gongmo/react-components-layout/style.css";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
  },
};
