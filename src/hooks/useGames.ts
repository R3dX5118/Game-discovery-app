import useData from "./useData";

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

const useGames = () => useData<Game>('/games')

export default useGames