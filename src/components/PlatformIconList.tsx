import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { Platform } from "../hooks/useGames";

interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    web: BsGlobe,
  };

  return (
    <HStack color={"gray.500"} marginY={1}>
      {platform.map((p) => (
        <Icon key={Math.random()} as={iconMap[p.slug]}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
