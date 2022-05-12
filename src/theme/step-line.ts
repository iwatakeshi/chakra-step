import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const StepLine: ComponentStyleConfig = {
  baseStyle: (props) => ({
    width: "1px",
    height: "full",
    bgColor: mode("gray.300", "gray.100")(props),
  }),
};
