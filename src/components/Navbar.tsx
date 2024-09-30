import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex p="10px" alignItems="center" gap={5}>
      <Image
        onClick={() => navigate("/")}
        src={logo}
        boxSize={"60px"}
        alt="Gaymz Logo"
        cursor="pointer"
      />
      <Box flex="1">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </Flex>
  );
};

export default Navbar;
