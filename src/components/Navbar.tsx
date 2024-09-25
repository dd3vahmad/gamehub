import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  handleSearch: (text: string) => void;
}

const Navbar = ({ handleSearch }: Props) => {
  return (
    <HStack p="10px">
      <Image src={logo} boxSize={"60px"} alt="Gaymz Logo" />
      <SearchInput onSearch={handleSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
