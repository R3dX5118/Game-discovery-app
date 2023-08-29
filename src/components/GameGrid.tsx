import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  if (error) {
    return (
      <Box paddingTop={5} paddingLeft={5}>
        <Heading>Oops...</Heading>
        <Box paddingY={3}>
          <Text>An error happened while trying to fetch the games...</Text>
          <Text color="red" paddingY={1}>
            {error}
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={10}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
