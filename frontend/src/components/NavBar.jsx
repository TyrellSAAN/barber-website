import { Box, Button, Flex, HStack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
    // ✅ Function to Handle Smooth Scroll
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box w="100%" px={6} py={3} bg="#4d4d5e">
            <Flex
                h={16}
                alignItems="center"
                justify="space-between"
                position="sticky"
                top="0"
                zIndex="10"
            >
                {/* ✅ Left Side: Logo */}
                <Box as={RouterLink} to="/">
                    <Image 
                        src="/logo2.png" 
                        alt="Michelle Cuts Logo" 
                        maxW={{ base: "90px", sm: "110px", md: "140px" }} 
                        height="auto"
                        objectFit="contain" 
                    />
                </Box>

                {/* ✅ Right Side: Navigation Links & "BOOK NOW" Button */}
                <HStack spacing={5}>
                    <HStack display={{ base: "none", md: "flex" }}>
                        <Text
                            as="a"
                            onClick={() => scrollToSection("contact")}
                            p={3}
                            borderRadius="md"
                            color="white"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            cursor="pointer"
                            _hover={{ bg: "#e0c1d2", color: "black", transition: "all 0.3s ease" }}
                        >
                            Contact
                        </Text>
                        <Text
                            as="a"
                            onClick={() => scrollToSection("services")}
                            p={3}
                            borderRadius="md"
                            color="white"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            cursor="pointer"
                            _hover={{ bg: "#e0c1d2", color: "black", transition: "all 0.3s ease" }}
                        >
                            Services
                        </Text>
                    </HStack>

                    <Button
                        as={RouterLink}
                        to="/book-now"
                        colorScheme="pink"
                        bg="#db4675"
                        color="white"
                        borderRadius="md"
                        size="md"
                        _hover={{ transform: "scale(1.05)", transition: "all 0.2s ease-in-out" }}
                    >
                        BOOK NOW
                    </Button>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Navbar
