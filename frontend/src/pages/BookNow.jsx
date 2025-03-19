import React from 'react';
import { Box } from '@chakra-ui/react';

const BookNow = () => {
  return (
    <Box w="100%" minH="100vh" bg="#26262e" py={10} px={4} textAlign="center">
      <iframe
        src="https://www.vagaro.com/michellecuts/book-now" // Example - replace with your Vagaro booking link
        style={{ width: '100%', height: '800px', border: 'none' }}
        title="Vagaro Booking"
      />
    </Box>
  );
};

export default BookNow;