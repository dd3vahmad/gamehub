import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon
        marginRight={2}
        as={colorMode === "dark" ? BsMoonFill : BsSun}
        size={32}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
