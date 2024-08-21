interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: number
  title: string
  overview: string
  release_date: string
  poster_path: string
  genres?: Genre[]
  cast?: { id: number; name: string; character: string }[]
}
