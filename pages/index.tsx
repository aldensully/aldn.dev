import {SlideFade,Box,Button,Text, useColorModeValue,Flex,SimpleGrid} from '@chakra-ui/react'
import { NextPage } from 'next'
import BlogPreviewBox from '../components/blog/blogPreviewBox'
import SearchBar from '../components/searchBar'
import Snowfall from '../components/snowfall'

const Home: NextPage = () => {
  return (
    <Flex align='center' minH='90vh' justify='center' direction='column' w='full'>
      <Snowfall/>
        <SimpleGrid h='full' w='full' mt={10} spacing={8} columns={{base:1,sm:1,md:2}}>
          <BlogPreviewBox title={"Title"} desc={"Description"} date={"4.20.2022"} path={'/blog/1'} id={1}/>
          <BlogPreviewBox title={"Title"} desc={"Description"} date={"4.20.2022"} path={'/blog/2'} id={2}/>
        </SimpleGrid>
    </Flex>

  )
}

export default Home
