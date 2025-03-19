import React from "react";
import { Box, Text, Flex, Image, Card, CardBody } from "@chakra-ui/react";

// Import images (Update paths if needed)
import haircut1 from "/haircut1.jpg";

const services = [
  {
    title: "Men's Haircut",
    description: "Signature haircut with professional styling by Michelle.",
    image: haircut1,
  },
  {
    title: "Straight Razor Shave",
    description: "A hot towel, precision blade, and the smoothest finish.",
    image: haircut1,
  },
  {
    title: "Grey Camouflaging",
    description: "Cover grey hair with natural-looking colors.",
    image: haircut1,
  },
  {
    title: "Kids Haircuts",
    description: "Styled haircuts for kids 12 and under.",
    image: haircut1,
  },
];

const ServicesSection = () => {
  return (
    <Box w="100%" bg="#41414f" color="white" py={12} px={4}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        Our Services
      </Text>

      {/* ✅ Cards in a single row with wrapping */}
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between" // ✅ Ensures equal spacing
        align="center"
        gap={6}
        flexWrap="nowrap" // ✅ Forces single row
        overflowX="auto" // ✅ Scrollable on small screens if needed
        px={4} // ✅ Keeps spacing clean
      >
        {services.map((service, index) => (
          <Card
            key={index}
            w="250px" // ✅ Ensures uniform size
            bg="gray.900" // ✅ Matches your screenshot background
            borderRadius="lg"
            boxShadow="md"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          >
            {/* ✅ Image - Correct size & aspect ratio */}
            <Image 
              src={service.image} 
              alt={service.title} 
              w="100%" 
              h="180px" 
              objectFit="cover" 
              borderTopRadius="lg"
            />

            {/* ✅ Text Section - Matches reference */}
            <CardBody textAlign="left" p={4}>
              <Text fontSize="md" fontWeight="bold" mb={1}>
                {service.title}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {service.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default ServicesSection;
