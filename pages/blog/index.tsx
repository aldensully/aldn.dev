import * as React from 'react';
import {Box, SimpleGrid, Flex, SlideFade} from '@chakra-ui/react'
import { AnimatePresence,motion } from 'framer-motion';
import BlogPreviewBox from '../../components/blog/blogPreviewBox';

export default function Blog () {
  return(
    <Flex direction='column' w='full' minH='100vh'>
      <SlideFade in={true} offsetY="20px">
        <SimpleGrid mt={10} spacing={8} columns={{base:1,sm:1,md:2}}>
          <BlogPreviewBox title={"Title"} desc={"Description"} date={"4.20.2022"} path={'/blog/1'} id={1}/>
          <BlogPreviewBox title={"Title"} desc={"Description"} date={"4.20.2022"} path={'/blog/2'} id={2}/>
        </SimpleGrid>
      </SlideFade>
    </Flex>
  )
}