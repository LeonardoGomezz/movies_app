export interface SearchBarProps{
  onSearch: (query: string) => void
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export interface TrailerButtonProps {
  TrailerKey: string
}