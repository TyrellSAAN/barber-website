import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import VagaroWidget from '../components/VagaroWidget';

const BookNow = () => {
  return (
    <Box w="100%" minH="100vh" bg="#26262e" py={10} px={4} textAlign="center">
      <Text fontSize="2xl" color="white" mb={6}>
        Book Your Appointment
      </Text>
      <VagaroWidget />
    </Box>
  );
};

export default BookNow;