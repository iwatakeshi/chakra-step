import {
  Box,
  Button,
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Step } from "../components/step";
import { StepItem } from "../components/step-item";
import { components } from "../theme/components";
import "./page.css";

const theme = extendTheme({
  components,
});

interface IStep {
  label: string;
  title: string;
  description: string;
  image: string;
}

const steps: IStep[] = [
  {
    label: "Register",
    title: "Thousands of classes to choose from!",
    description:
      "Elit commodo aute labore excepteur ex reprehenderit ullamco tempor incididunt. Ad quis commodo veniam minim magna commodo in ad mollit id dolore. Eu reprehenderit reprehenderit eu officia aute aute do. Qui tempor non laboris eu velit labore cillum sunt.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Watch",
    title: "Start learning from the course!",
    description:
      "Irure est cillum consequat cupidatat aute ex aute anim eu. Tempor proident adipisicing proident reprehenderit. Ipsum anim mollit exercitation mollit commodo exercitation proident officia nulla est laboris enim. Enim reprehenderit cillum voluptate qui ut tempor anim.",
    image:
      "https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    label: "Share",
    title: "Share the course with others!",
    description:
      "Ipsum incididunt eiusmod irure ullamco ea quis laborum sunt anim elit. Occaecat irure officia veniam duis ad. Adipisicing in nisi commodo aliquip.",
    image:
      "https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

export const Page: React.FunctionComponent = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth={"container.lg"}>
        <Step>
          {steps.map((s, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <StepItem
                step={index + 1}
                reverse={[false, false, false, isOdd]}
                key={`step-item-${index}`}
                leftProps={{
                  w: [null, null, null, "30vw"],
                }}
                rightProps={{
                  w: [null, null, null, "30vw"],
                }}
              >
                <Flex
                  p={[null, null, 5]}
                  py={5}
                  justify={["flex-start", null, "center"]}
                  align="center"
                  w="full"
                >
                  <Image
                    alt="Register online"
                    src={s.image}
                    shadow="xl"
                    rounded="sm"
                    maxH={"sm"}
                  />
                </Flex>
                <Flex>
                  <Box>
                    <Text
                      pt={1}
                      mb={16}
                      textTransform="uppercase"
                      fontWeight="bold"
                      color={"gray.500"}
                      textAlign={[null, null, null, isOdd ? "right" : "left"]}
                    >
                      {s.label}
                    </Text>
                    <Heading
                      as="h4"
                      mb={2}
                      textAlign={[null, null, null, isOdd ? "right" : "left"]}
                    >
                      {s.title}
                    </Heading>
                    <Text
                      mb={5}
                      textAlign={[null, null, null, isOdd ? "right" : "left"]}
                    >
                      {s.description}
                    </Text>
                    {s.label.toLowerCase() === "register" && (
                      <Button
                        bg="black"
                        color="white"
                        borderColor="black"
                        borderStyle={"solid"}
                        borderWidth="1px"
                        _hover={{ bg: "white", color: "black" }}
                      >
                        Register
                      </Button>
                    )}
                  </Box>
                </Flex>
              </StepItem>
            );
          })}
        </Step>
      </Container>
    </ChakraProvider>
  );
};
