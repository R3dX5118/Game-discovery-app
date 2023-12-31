import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  background_image: string;
  id: number;
  metacritic: number
  name: string;
  parent_platforms: {platform: Platform}[]
  rating_top: number
  }

const useGames = (gameQuery: GameQuery | null) => (
  useData<Game>('/games', 
  {params: {
    genres: gameQuery?.genre?.id,
    platforms: gameQuery?.platform?.id, 
    ordering: gameQuery?.sortOrder, 
    search: gameQuery?.searchText}}, [gameQuery])
)

export default useGames