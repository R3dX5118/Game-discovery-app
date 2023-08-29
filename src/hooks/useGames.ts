import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  background_image: string;
  id: number;
  metacritic: number
  name: string;
  parent_platforms: {platform: Platform}[]
  }

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre])

export default useGames