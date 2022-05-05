import React from 'react'
import {Box,Input} from '@chakra-ui/react'

type Props = {}

function SearchBar({}: Props) {
  return (
    <Input 
    variant='outline' 
    borderRadius="0" 
    borderColor='accent' 
    placeholder="Search" 
    _placeholder={{color:"secondaryText"}} 
    w={{base:'full',sm:'full',md:'md',lg:'lg'}}
    color='primaryText'
    ></Input>
  )
}

export default SearchBar