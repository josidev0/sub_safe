import { Text, VStack, useColorModeValue } from "@chakra-ui/react";

export const DescriptionWrapper = ({
  description = "Product description - Whatever",
}) => {
  return (
    <VStack spacing={{ base: 4, sm: 6 }}>
      <Text
        color={useColorModeValue("gray.500", "gray.400")}
        fontSize={"2xl"}
        fontWeight={"300"}
      >
        {description}
      </Text>
    </VStack>
  );
};