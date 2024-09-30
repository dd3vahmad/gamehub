import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isMobileAndHome = true;

  const onClose = () => {
    return setIsOpen(false);
  };

  return (
    <Flex p="10px" alignItems="center" gap={5}>
      <Image
        onClick={() => {
          if (isMobileAndHome) {
            return setIsOpen(true);
          }
          navigate("/");
        }}
        src={logo}
        boxSize={"60px"}
        alt="Gaymz Logo"
        cursor="pointer"
      />
      <Box flex="1">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
      {isOpen && <Drawer isOpen={isOpen} placement="left" onClose={onClose} />}
    </Flex>
  );
};

export default Navbar;
