import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const StepIndicator: ComponentStyleConfig = {
  baseStyle: (props) => ({
    justifyContent: "center",
    alignItems: "center",
    direction: "row",
    shadow: "md",
    width: 8,
    height: 8,
    rounded: "full",
    borderColor: mode("gray.200", "gray.100")(props),
    borderWidth: "1px",
    borderStyle: "solid",
    fontWeight: 700,
  }),
};
