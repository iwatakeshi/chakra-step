import { Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { StepContent, StepContentProps } from "./step-content";
import { StepLine } from "./step-line";

export interface StepItemProps extends Omit<FlexProps, "children"> {
  step: number | string;
  children: [ReactNode, ReactNode] | ReactNode;
  reverse?: boolean | boolean[];
  line?: ReactNode;
  leftProps: StepContentProps;
  rightProps: StepContentProps;
}

export function StepItem({ reverse, line, step = 1, ...props }: StepItemProps) {
  const isReversed = useBreakpointValue(
    Array.isArray(reverse) ? reverse : { base: reverse }
  );
  const children = isReversed
    ? React.Children.toArray(props.children).reverse()
    : props.children;

  if (React.Children.count(children) === 1) {
    return (
      <Flex {...props} direction="row">
        {line ?? <StepLine step={step} />}
        <StepContent>{children}</StepContent>
      </Flex>
    );
  }
  const [left, right] = React.Children.toArray(children);
  return (
    <Flex {...props} direction="row">
      <StepContent
        w={[null, null, null, "50vw"]}
        {...props.leftProps}
        display={["none", null, null, "flex"]}
      >
        {left}
      </StepContent>
      {line ?? <StepLine step={step} />}
      <Flex direction="column">
        <StepContent w={[null, null, null, "50vw"]} {...props.rightProps}>
          {right}
        </StepContent>
        <StepContent display={["flex", null, null, "none"]}>{left}</StepContent>
      </Flex>
    </Flex>
  );
}
