import { extendTheme } from "@chakra-ui/react";
import { theme, config } from "./FoundationTheme/globalStyles";

const defaultTheme = {
  theme,
  config,
};

export default extendTheme(defaultTheme);
