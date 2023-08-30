import { Image, ImageProps } from "@chakra-ui/react";

import bullsEye from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Not bad...", boxSize: "25" },
    4: { src: thumbsUp, alt: "Recomended", boxSize: "25" },
    5: { src: bullsEye, alt: "Exceptional!", boxSize: 41 },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
