export interface MovieCardProps {
  id: number
  poster_path: string
  title: string
  release_date: string
  vote_average: number
}

export interface SearchBarProps{
  onSearch: (query: string) => void
}

export interface TrailerButtonProps {
  TrailerKey: string
}