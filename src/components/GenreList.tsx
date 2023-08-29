import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useData<Genre>("/genres");

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  if (error) {
    return (
      <>
        <h1>Error...</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <HStack paddingY={"5px"} width="300px">
            <Skeleton boxSize={"32px"} marginX={2} />
            <Box width="25%">
              <SkeletonText noOfLines={1} />
            </Box>
          </HStack>
        ))}
      <List>
        {genres.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                overflow={"hidden"}
              />
              <Button fontSize="lg" variant={"link"}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
