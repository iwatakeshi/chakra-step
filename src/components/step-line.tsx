import { Box, Flex, FlexProps, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";
import { StepIndicator } from "./step-indicator";

export interface StepLineProps extends FlexProps {
  step: number | string;
  indicator?: ReactNode;
  bar?: ReactNode;
}

function Bar() {
  const styles = useStyleConfig("StepLine");
  return <Box sx={styles} />;
}

export function StepLine({ indicator, bar, step, ...props }: StepLineProps) {
  return (
    <Flex justify="center" align="center" direction="column" px={5} {...props}>
      {indicator ?? <StepIndicator step={step} />} {bar ?? <Bar />}
    </Flex>
  );
}
