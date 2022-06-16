import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, _id  } }) => (
  <Link href={`/property/${_id}`} passHref>
    <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
      <Box>
        <Image src={coverPhoto ? coverPhoto : DefaultImage} width={400} height={260} />
      </Box>
      <Box w='full'>
      <Flex alignItems='center' p='1' justifyContent='space-between' w='260px'>
      <Text fontSize='lg'>
          {title.length > 10 ? title.substring(0, 10) + '...' : title} 
        </Text>
        <Text fontWeight='bold' fontSize='lg'>  € {price}{rentFrequency && `/${rentFrequency}`}</Text>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='260px' >
          {rooms}
          <FaBed  color='#ff9999' /> | {baths} <FaBath color='#ff9999' /> | {millify(area)} m2 <BsGridFill color='#ff9999' />
        </Flex>
        
      </Box>
    </Flex>
  </Link>
);

export default Property;