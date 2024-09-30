import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import GenreList from "./GenreList";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  placement: "right" | "left";
}

const DrawerComponent = ({ onClose, isOpen, placement }: Props) => {
  return (
    <Drawer size="xs" isOpen={isOpen} placement={placement} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <GenreList onClose={onClose} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
