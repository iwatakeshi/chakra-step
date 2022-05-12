import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

export interface StepProps extends FlexProps {}

export function Step(props: StepProps) {
  return (
    <Flex
      overflowX="hidden"
      {...props}
      direction={"column"}
      justify={"center"}
      align={"center"}
    />
  );
}
