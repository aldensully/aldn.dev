import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
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
  FiStar,
  FiSettings,
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

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg='backgroundDark'>
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
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg='backgroundDark'
      borderRight="1px"
      borderRightColor={'accentDark'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="100vh"
      color='primaryTextDark'
      {...rest}>
      <Flex mt="20" h="20" alignItems="center" mx="8" justifyContent="center">
        {/* <Image w='20' src='/randomLogo.png'/> */}
        <CloseButton fontSize={48} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box w='full' h='full' display='flex' flexDir='column' >
        {LinkItems.map((link) => (
          <NavItem path={link.path} key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
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
          color: 'white',
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
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg='backgroundDark'
      borderBottomWidth="1px"
      borderBottomColor={'accentDark'}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        color='white'
      />

      <Text ml="20" fontWeight="light" color='primaryTextDark'>
        aldn.dev
      </Text>
    </Flex>
  );
};