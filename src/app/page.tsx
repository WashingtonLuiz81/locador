'use client'

import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { MovieDetailModal } from './components/Modal'
import { Movie } from '@/core/model'
import { useFavoritesStore } from '@/core/store/favoritesStore'
import { MovieList } from './components/Movie'

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY_MOVIES}&language=pt-BR&page=1`

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { favorites, addFavorite, removeFavorite } = useFavoritesStore()

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Erro ao buscar filmes:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const fetchMovieDetails = async (movieId: number) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY_MOVIES}&language=pt-BR&append_to_response=credits`,
      )
      const data = await response.json()
      const selectedMovieWithDetails = {
        ...data,
        genres: data.genres,
        cast: data.credits.cast.slice(0, 5),
      }
      setSelectedMovie(selectedMovieWithDetails)
    } catch (error) {
      console.error('Erro ao buscar detalhes do filme:', error)
    }
  }

  const isFavorite = (movie: Movie) => {
    return favorites.some((fav) => fav.id === movie.id)
  }

  const toggleFavorite = (movie: Movie) => {
    if (isFavorite(movie)) {
      removeFavorite(movie.id)
    } else {
      addFavorite(movie)
    }
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-4">
        <div className="flex items-center bg-white rounded-md shadow-md p-2">
          <Search className="text-gray-400 text-xl mx-2" />
          <input
            type="text"
            className="flex-grow outline-none text-gray-600"
            placeholder="Buscar filme..."
            aria-label="Buscar filme"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <MovieList
        movies={filteredMovies}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        fetchMovieDetails={fetchMovieDetails}
        isLoading={isLoading}
      />

      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  )
}

export default Home
