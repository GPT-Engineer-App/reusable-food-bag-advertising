import { Box, Button, Container, Heading, Text, Stack, Image, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaLeaf, FaShoppingBag, FaRecycle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h1" size="2xl" fontWeight="bold">
          Sustainable Eating Starts with Reusable Bags
        </Heading>
        <Text fontSize="xl">Join the movement to reduce plastic waste and keep our planet clean.</Text>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMGZvb2QlMjBiYWd8ZW58MHx8fHwxNzA4NTUzNTAzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Reusable Food Bag" boxSize="full" objectFit="cover" />
        <Stack direction={{ base: "column", md: "row" }} spacing={4} width="full">
          <Feature icon={<FaLeaf />} title="Eco-Friendly Material" description="Our bags are made with 100% organic materials that are biodegradable and kind to Earth." />
          <Feature icon={<FaShoppingBag />} title="Versatile and Durable" description="Perfect for grocery shopping, storing produce, or carrying your daily essentials." />
          <Feature icon={<FaRecycle />} title="Easy to Clean" description="Simply wash them in your regular laundry to keep them clean and ready for reuse." />
        </Stack>
        <Box>
          <Button size="lg" leftIcon={<FaShoppingBag />} colorScheme="green" variant="solid">
            Order Yours Today
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

const Feature = ({ icon, title, description }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <VStack p={5} bg={bg} boxShadow="md" borderRadius="md" alignItems="flex-start" spacing={3}>
      <Icon as={icon} w={10} h={10} color="green.500" />
      <VStack spacing={1} alignItems="flex-start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
    </VStack>
  );
};

export default Index;
