import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" p="10px">
      <Image src={logo} boxSize={"60px"} alt="Gaymz Logo" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
