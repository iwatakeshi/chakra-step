import { FlexProps, Flex } from "@chakra-ui/react";
export interface StepContentProps extends FlexProps {}

export function StepContent(props: StepContentProps) {
  return <Flex grow={1} basis={0} {...props} />;
}
