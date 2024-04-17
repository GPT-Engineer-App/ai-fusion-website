import { Box, Container, Flex, Heading, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const AiNewsGenerators = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading as="h1" size="2xl" mb={4}>
          AI News Generators: Revolutionizing Content Creation
        </Heading>
        <Text fontSize="xl" mb={6}>
          Introduction: Briefly introduce the concept and benefits of AI News Generators.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" mt={6}>
          <Heading fontSize="xl">Elai.io</Heading>
          <Text mt={4}>Highlight its capability to turn text into captivating videos while ensuring data security and ethical AI usage.</Text>
          <Image mb={4} src="path_to_elai_io_demo.jpg" alt="Elai.io Demo" />
          <Heading fontSize="xl">WriteCream’s Instant News Article Generator</Heading>
          <Text mt={4}>Emphasize its efficiency in creating engaging articles instantly.</Text>
          <Heading fontSize="xl">miniapps.ai’s AI News Article Generator</Heading>
          <Text mt={4}>Discuss how it can generate news articles, headlines, subtitles, and excerpts as per user requirements.</Text>
          <Heading fontSize="xl">DeepBrain AI</Heading>
          <Text mt={4}>Explain its unique feature of creating virtual human avatars for news and media.</Text>
          <Image mb={4} src="path_to_deepbrain_ai_demo.jpg" alt="DeepBrain AI Demo" />
          <Heading fontSize="xl">Hour One</Heading>
          <Text mt={4}>Highlight its AI news anchor generator with templates and a smooth video wizard for easy video production.</Text>
          <Heading fontSize="xl">ASKtoAI’s News Article Generator</Heading>
          <Text mt={4}>Emphasize its capability to generate professional news articles quickly and effectively.</Text>
          <Heading fontSize="xl">Simplified’s AI Article Writer</Heading>
          <Text mt={4}>Discuss how it enables users to generate an entire article in seconds via a simple 4-step workflow.</Text>
          <Text fontSize="xl" mt={6}>
            Conclusion: Summarize the benefits of using AI News Generators, reinforcing their ability to streamline the content creation process, enhance efficiency, and maintain high-quality output.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default AiNewsGenerators;
