import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games...
  // Action Games...
  // Playstation Action Games...
  // Roblox Playstation Action Games...
  const headingText = `${gameQuery.searchText || ""} ${
    gameQuery.platform?.name || ""
  } ${gameQuery.genre?.name || ""} Games...`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
