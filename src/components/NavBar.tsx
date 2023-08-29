import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image boxSize="60px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
