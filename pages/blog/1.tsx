import * as React from 'react';
import {Box, SimpleGrid, Flex, SlideFade} from '@chakra-ui/react'
import { AnimatePresence,motion } from 'framer-motion';
import BlogPreviewBox from '../../components/blog/blogPreviewBox';

export default function Blog () {
  return(
    <Flex direction='column' w='full' minH='100vh'>
      <SlideFade in={true} offsetY="20px">
      </SlideFade>
    </Flex>
  )
}