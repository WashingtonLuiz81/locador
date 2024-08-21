import React from 'react'
import { Movie } from '@/core/model'
import { MovieCard } from '.'
import { Frown } from 'lucide-react'

interface MovieListProps {
  movies: Movie[]
  isFavorite: (movie: Movie) => boolean
  toggleFavorite: (movie: Movie) => void
  fetchMovieDetails: (movieId: number) => void
  isLoading: boolean
}

export const MovieList = ({
  movies,
  isFavorite,
  toggleFavorite,
  fetchMovieDetails,
  isLoading,
}: MovieListProps) => {
  if (isLoading) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[...Array(20)].map((_, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            <div className="w-full h-48 bg-gray-300" />
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-full" />
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {movies.length === 0 ? (
        <li className="col-span-full flex flex-col items-center justify-center text-center p-6 bg-gray-100 rounded-lg">
          <span className="text-4xl font-bold mb-6 text-gray-400">OOOPS!</span>
          <p className="text-gray-600 text-lg font-semibold mb-4">
            Me desculpe, nenhum filme foi encontrado com o nome buscado.
          </p>
          <Frown className="w-12 h-12 text-gray-400" aria-hidden="true" />
        </li>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            onClick={() => fetchMovieDetails(movie.id)}
          />
        ))
      )}
    </ul>
  )
}
