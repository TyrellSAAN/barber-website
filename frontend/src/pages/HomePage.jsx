import React from 'react'
import { Box, Button, Flex, Text, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

const HomePage = () => {
  return (
    <Box position="relative">
      {/* ✅ Video Section */}
      <Box as="section" w="100%" h="80vh" overflow="hidden" position="relative">
        <video
          src="/videos/haircut.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />

        {/* ✅ Tint Overlay for Better Text Visibility */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.4)" // ✅ Keeps the video slightly darker
          zIndex="1"
        />

        {/* ✅ Extended Gradient Overlay for a Softer Transition */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          h="80px" // ✅ Increased height for a much smoother fade
          bgImage="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #26262e 95%)" // ✅ Extended fade effect
          zIndex="1"
        />

        {/* ✅ Centered Text Overlay */}
        <Flex
          position="absolute"
          top="50%"
          left="5%"
          transform="translateY(-50%)"
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          color="white"
          zIndex="2"
          maxW="500px"
        >
          <Text fontSize="4xl" fontWeight="bold" mb={4} style={{ fontFamily: "Poppins, sans-serif" }}>
            Welcome to Michelle Cuts!
          </Text>
          <Text fontSize="lg" mb={0} style={{ fontFamily: "Poppins, sans-serif" }}>
            Get the perfect haircut with Michelle.
          </Text>
          <Text fontSize="lg" mb={6} style={{ fontFamily: "Poppins, sans-serif" }}>
            Book an appointment now!
          </Text>
          <Button 
            as="a"
            href="https://www.vagaro.com/michellecuts/book-now"
            colorScheme="pink" 
            size="sm" // ✅ Makes it smaller
            bg="#029685"
            color="white"
            w="fit-content"
            px={3}   // ✅ Reduces left & right padding
            py={2}   // ✅ Keeps height small
            fontSize="sm" // ✅ Makes text smaller
            >
            Book Appointment
          </Button>
        </Flex>
      </Box>

      {/* ✅ Information Section */}
      <Box w="100%" bg="#26262e" color="white" py={12} px={6}>
        <Flex 
          maxW="1200px"
          mx="auto"
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={8}
        >
          {/* 📞 Phone Number */}
          <Flex align="center">
            <Icon as={FaPhoneAlt} color="#029685" boxSize={5} mr={3} />
            <Box>
              <Text fontWeight="bold" fontSize="xl" color="gray.200" style={{ fontFamily: "Poppins, sans-serif" }}>(669) 302-2018</Text>
              <Text fontSize="md" color="gray.300" >Willow Glen</Text>
            </Box>
          </Flex>

          {/* 📍 Location */}
          <Flex align="center">
            <Icon as={FaMapMarkerAlt} color="#029685" boxSize={5} mr={3} />
            <Box>
              <Text fontWeight="bold" fontSize="xl" color="gray.200" style={{ fontFamily: "Poppins, sans-serif" }}>1082 Lincoln Ave Studio 10</Text>
              <Text fontSize="md" color="gray.300">San Jose, CA 95125</Text>
            </Box>
          </Flex>

          {/* ⏳ Hours */}
          <Flex align="center">
            <Icon as={FaClock} color="#029685" boxSize={5} mr={3} />
            <Box>
              <Text fontWeight="bold" fontSize="xl" color="gray.200" style={{ fontFamily: "Poppins, sans-serif" }}>Open 5 Days</Text>
              <Text fontSize="md" color="gray.300" lineHeight="shorter">Thurs: 3:00pm - 7:00pm</Text>
              <Text fontSize="md" color="gray.300" lineHeight="shorter">Fri: 2:00pm - 7:00pm</Text>
              <Text fontSize="md" color="gray.300" lineHeight="shorter">Sat: 9:00am - 5:30pm</Text>
              <Text fontSize="md" color="gray.300" lineHeight="shorter">Sun: 10:00am - 6:30pm</Text>
              <Text fontSize="md" color="gray.300" lineHeight="shorter">Mon: 2:00pm - 7:00pm</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      

      {/* ✅ Our Services Section */}
      <Box id="services" w="100%" bg="#41414f" color="white" py={16} px={6}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={4} style={{ fontFamily: "Poppins, sans-serif" }}>
          Michelle's Featured Services
        </Text>
        <Text fontSize="lg" textAlign="center" color="gray.300" mb={10} style={{ fontFamily: "Poppins, sans-serif" }}>
          Precision. Style. Confidence – Your Perfect Cut Awaits!
        </Text>

        <Flex 
          maxW="1200px"
          mx="auto"
          justify="center"
          gap={8}
          flexWrap="wrap"
        >
          {/* ✅ Service 1 */}
          <Box 
            w={{ base: "100%", md: "45%", lg: "22%" }} 
            bg="gray.800" 
            p={4} 
            borderRadius="lg"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            <Box 
              bgImage="url('/haircut1.jpg')" 
              bgSize="cover" 
              bgPosition="center" 
              h="200px" 
              borderRadius="lg"
            />
            <Text fontSize="lg" fontWeight="bold" mt={4}>
              Men's Haircut
            </Text>
            <Text fontSize="sm" color="gray.300">
              Signature haircut with professional styling by Michelle.
            </Text>
          </Box>

          {/* ✅ Service 2 */}
          <Box 
            w={{ base: "100%", md: "45%", lg: "22%" }} 
            bg="gray.800" 
            p={4} 
            borderRadius="lg"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            <Box 
              bgImage="url('/shave1.png')" 
              bgSize="cover" 
              bgPosition="center" 
              h="200px" 
              borderRadius="lg"
            />
            <Text fontSize="lg" fontWeight="bold" mt={4}>
              Straight Razor Shave
            </Text>
            <Text fontSize="sm" color="gray.300">
              A hot towel, precision blade, and the smoothest finish
            </Text>
          </Box>

          {/* ✅ Service 3 */}
          <Box 
            w={{ base: "100%", md: "45%", lg: "22%" }} 
            bg="gray.800" 
            p={4} 
            borderRadius="lg"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            <Box 
              bgImage="url('/color1.jpg')" 
              bgSize="cover" 
              bgPosition="center" 
              h="200px" 
              borderRadius="lg"
            />
            <Text fontSize="lg" fontWeight="bold" mt={4}>
              Grey Camouflaging
            </Text>
            <Text fontSize="sm" color="gray.300">
              Cover grey hair with natural-looking colors.
            </Text>
          </Box>

          {/* ✅ Service 4 */}
          <Box 
            w={{ base: "100%", md: "45%", lg: "22%" }} 
            bg="gray.800" 
            p={4} 
            borderRadius="lg"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            <Box 
              bgImage="url('/kidscut.jpg')" 
              bgSize="cover" 
              bgPosition="center" 
              h="200px" 
              borderRadius="lg"
            />
            <Text fontSize="lg" fontWeight="bold" mt={4}>
              Kids Haircuts
            </Text>
            <Text fontSize="sm" color="gray.300">
              Styled haircuts for kids 12 and under.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* ✅ Smooth Wavy Divider - Full Width */}
      <Box w="100%" overflow="hidden" lineHeight="0" bg="#41414f">
        <svg
          viewBox="0 0 1200 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100"
          style={{ display: "block" }}
        >
          <path
            d="M0,100 C250,200 450,50 700,150 C950,250 1200,50 1200,100 L1200,250 L0,250 Z"
            fill="#26262e"
          />
        </svg>
      </Box>

      {/* ✅ Contact Section */}
      <Box id="contact" w="100%" bg="#26262e" color="white" py={16} px={6}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={4} style={{ fontFamily: "Poppins, sans-serif" }}>
          Get in Touch with Michelle
        </Text>
        <Text fontSize="lg" textAlign="center" color="gray.300" mb={10} style={{ fontFamily: "Poppins, sans-serif" }}>
          Have questions? Want to book an appointment? We're here to help!
        </Text>

        <Flex 
          maxW="1200px"
          mx="auto"
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={8}
        >
          {/* 📞 Phone Number */}
          <Flex align="center">
            <Icon as={FaPhoneAlt} color="#029685" boxSize={5} mr={3} />
            <Box>
              <Text fontWeight="bold" fontSize="lg" color="gray.200" style={{ fontFamily: "Poppins, sans-serif" }}>(669) 302-2018</Text>
              <Text fontSize="md" color="gray.300">Message for inquiries</Text>
            </Box>
          </Flex>

          {/* 📧 Email */}
          <Flex align="center">
            <Icon as={FaEnvelope} color="#029685" boxSize={5} mr={3} />
            <Box>
              <Text fontWeight="bold" fontSize="lg" color="gray.200" style={{ fontFamily: "Poppins, sans-serif" }}>michelle.p.salonstudio@gmail.com</Text>
              <Text fontSize="md" color="gray.300">Send me an email</Text>
            </Box>
          </Flex>

          {/* 🏠 Business Location */}
          <Flex align="center">
            <Icon as={FaMapMarkerAlt} color="#029685" boxSize={5} mr={3} />
            <Box>
              <Text fontWeight="bold" fontSize="lg" color="gray.200" style={{ fontFamily: "Poppins, sans-serif" }}>1082 Lincoln Ave Studio 10</Text>
              <Text fontSize="md" color="gray.300">San Jose, CA 95125</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
