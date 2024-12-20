export interface MovieCardProps {
  poster_path: string
  title: string
  release_date: string
  vote_average: number
}

export interface SearchBarProps{
  onSearch: (query: string) => void
}