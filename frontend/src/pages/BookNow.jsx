import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const BookNow = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      bg="#26262e"
      py={10}
      px={4}
      textAlign="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb={6}
        color="white"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Book Your Appointment with Michelle
      </Text>

      <iframe
        src="https://www.vagaro.com/michellecuts"
        width="100%"
        height="800px"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        allowFullScreen
      />
    </Box>

  );
};

export default BookNow;