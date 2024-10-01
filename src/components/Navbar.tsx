import {
  Box,
  HStack,
  Image,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useLocation } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const { pathname } = useLocation();

  return (
    <HStack padding="10px" gap={{ base: 2, lg: 6 }}>
      <Link to="/">
        <Image
          onClick={() => {
            if (pathname === "/" && isMobile) onOpen();
          }}
          src={logo}
          boxSize={"60px"}
          alt="Gaymz Logo"
          cursor="pointer"
        />
      </Link>
      <Box flex="1">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} />
    </HStack>
  );
};

export default Navbar;
