import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const BookNow = () => {
  return (
    <Box w="100%" minH="100vh" bg="black" py={10} px={4} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="white" style={{ fontFamily: "Poppins, sans-serif" }}>
        Book Your Appointment with Michelle
      </Text>

      {/* ✅ Inject Vagaro HTML Widget */}
      <Box
        dangerouslySetInnerHTML={{
          __html: `
          <div id='frameTitle' class='embedded-widget-title' style='font-size: 23px; color: #333;font-family:Arial, Helvetica, sans-serif; line-height:24px; padding: 18px 10px 8px; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;'></div>
          <div class="vagaro" style="width:250px; padding:0; border:0; margin:0 auto; text-align:center;">
            <style>.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}</style>
            <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
            <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
            <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
            <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
            <script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpDZWqCp8cT3qmV35y6RuRFXoSlXYO61Cq7fYO61WO4pkUcvCu7gevEhAJDXwOapcUbfY?v=OGOze9Wy9pLRNbApfJ3ufGnFpZX1Zr2okoKBI9kd8S0"></script>
          </div>
          `,
        }}
      />
    </Box>
  );
};

export default BookNow;