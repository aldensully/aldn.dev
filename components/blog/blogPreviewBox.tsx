import {Flex,Text,Button,Stack,Box} from '@chakra-ui/react'
import {useRouter} from 'next/router'

const data = {
  id:1,
  title:"This is the first title about something",
  desc:"How to create custom pipeline resolvers for your graphql api.",
  date:"4.20.2022"
}
type BlogProps = {
  id:number;
  title:string;
  desc:string;
  date:string;
  path:string;
}
export default function BlogPreviewBox({id,title,desc,date,path}:BlogProps){
  const router = useRouter()

  return(
    <Box onClick={()=>router.push(path)} position='relative' h='60'>
        <Box position='absolute' w='full' h={60} top={2} left={2} border="1px solid" borderColor="teal" zIndex={1}/>
      <Stack 
      mr={2} 
      mb={4} 
      position='absolute' 
      zIndex={2} 
      bg='background' 
      direction='column' 
      w='full' 
      border='1px solid' 
      borderColor='accent' 
      h={60}
      p={4}
      cursor='pointer'
      justify='space-evenly'
      >
        <Text fontSize={20} color='primaryText'>
          {title}
        </Text>
        <Text fontSize={16} color='secondaryText'>
          {desc}
        </Text>
        <Text fontSize={14} color='teal' >
          {date}
        </Text>
      </Stack>
    </Box>
  )
}