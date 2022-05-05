import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'aldn.dev', icon: FiHome, path:'/' },
  { name: 'Blog', icon: FiTrendingUp , path:'/blog'},
  { name: 'Contact', icon: FiCompass , path:'/contact'},
];

export default function Sidebar({children}:{children:ReactNode}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" w='full' bg='background' >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Flex  w='full' justify='center'>
        <Flex direction='column' minH='100vh' align='center' w={{base:'full',sm:'full',md:'2xl',lg:'3xl',xl:'5xl'}} ml={{base:0,md:32,lg:60}} py={8} px={{base:4,sm:16}}  >
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Flex
      bg='background'
      // borderRight="1px"
      // borderRightColor={'accent'}
      w={{ base: 'full', md:32, lg: 60 }}
      pos="fixed"
      h="100vh"
      align='center'
      justify='center'
      color='primaryText'
      direction='column'
      {...rest}>
      <Flex mt="20" h="20" align="center" mx="8" justify="center">
        {/* <Image display={{base:'none',md:'flex'}} w='20' src='/randomLogo.png'/> */}
        <CloseButton fontSize={48} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex w='full' mt={'50%'} h='full' direction='column' >
        {LinkItems.map((link) => (
          <NavItem path={link.path} key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  path: string;
}
const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
  return (
    <Link href={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        // w='full'
        alignItems='center'
        justifyContent={'center'}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          fontWeight:'bold',
          color: 'primaryText',
        }}
        {...rest}>
        {/* {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )} */}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md:32, lg: 60 }}
      px={{ base: 4, lg: 24 }}
      height="20"
      alignItems="center"
      bg='backgroundDark'
      borderBottomWidth="1px"
      borderBottomColor={'accent'}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        color='white'
      />
      <Text ml="20" fontWeight="light" color='primaryText'>
        aldn.dev
      </Text>
    </Flex>
  );
};