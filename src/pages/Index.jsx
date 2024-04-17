// Complete the Index page component here
// Use chakra-ui and react-icons for UI and icons
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaBrain, FaCartPlus, FaNewspaper, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to AI Nexus
        </Heading>
        <Text fontSize="xl" mb={6}>
          Explore the future of Artificial Intelligence tools, software, and education.
        </Text>
        <Image src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGZ1dHVyaXN0aWMlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTcxMzM5MzQwN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology" borderRadius="lg" mb={6} />
        <Stack direction="row" spacing={4} align="center">
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid">
            Sign Up
          </Button>
          <Button leftIcon={<FaSignInAlt />} colorScheme="gray" variant="outline">
            Login
          </Button>
        </Stack>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" mt={6}>
          <Heading fontSize="xl">Featured AI Tools</Heading>
          <Text mt={4}>Discover our top AI tools and software designed to enhance productivity and innovation.</Text>
        </Box>
        <Flex wrap="wrap" justifyContent="center" mt={6}>
          <ProductCard title="AI Course" icon={<FaBrain />} />
          <ProductCard title="AI Workshop" icon={<FaCartPlus />} />
          <ProductCard title="AI News" icon={<FaNewspaper />} />
        </Flex>
      </Flex>
    </Container>
  );
};

const ProductCard = ({ title, icon }) => {
  return (
    <Box w="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={4} shadow="base" bg={useColorModeValue("white", "gray.800")}>
      <Flex direction="column" align="center" justify="center">
        {icon}
        <Heading fontSize="xl" mt={2}>
          {title}
        </Heading>
        <Text mt={2}>Learn more about our {title.toLowerCase()} designed to help you leverage AI in your daily life.</Text>
        <Link color="teal.500" mt={2}>
          Read More
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
