import { Container, Text, VStack, Heading, Box, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to the World of Dolphins
        </Heading>
        <Image src="/images/dolphin.jpg" alt="Dolphin" borderRadius="md" />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Introduction to Dolphins
          </Heading>
          <Text fontSize="md">
            Dolphins are highly intelligent marine mammals that are part of the toothed whales family. They are known for their agility and playful behavior, making them a favorite of wildlife watchers.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Habitat
          </Heading>
          <Text fontSize="md">
            Dolphins are found all over the world, mostly in shallow seas of the continental shelves. They are carnivores, mostly eating fish and squid.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Interesting Facts
          </Heading>
          <Text fontSize="md">
            Did you know that dolphins have their own signature whistle which acts like a name? They use this unique whistle to identify themselves to others.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;