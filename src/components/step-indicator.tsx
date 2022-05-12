import { Flex, FlexProps, useStyleConfig } from "@chakra-ui/react";

export interface StepIndicatorProps extends FlexProps {
  step: number | string;
}

export function StepIndicator({ step, ...props }: StepIndicatorProps) {
  const styles = useStyleConfig("StepIndicator");
  return (
    <Flex sx={styles} {...props}>
      {step}
    </Flex>
  );
}
