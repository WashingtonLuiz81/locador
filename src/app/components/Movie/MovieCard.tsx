import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Movie } from '@/core/model'
import { Button } from '../ui/button'

interface MovieCardProps {
  movie: Movie
  isFavorite: (movie: Movie) => boolean
  toggleFavorite: (movie: Movie) => void
  onClick: () => void
}

export const MovieCard = ({
  movie,
  isFavorite,
  toggleFavorite,
  onClick,
}: MovieCardProps) => {
  return (
    <li
      className="bg-white rounded-lg shadow-md overflow-hidden group transform transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer relative"
      onClick={onClick}
    >
      <figure className="w-full h-auto max-h-[200px] overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_URL_IMAGES}${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full h-auto object-cover group-hover:opacity-75"
          priority
        />
      </figure>

      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-gray-900 truncate group-hover:text-blue-500">
          {movie.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {new Date(movie.release_date).getFullYear()}
        </p>

        <p className="text-gray-600 text-sm line-clamp-3">{movie.overview}</p>

        <Button
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite(movie)
          }}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
        >
          <Heart
            className={`text-xl hover:animate-heartBeat ${
              isFavorite(movie) ? 'text-red-500 fill-red-500' : 'text-gray-400'
            }`}
            aria-label="Favoritar filme"
          />
        </Button>
      </div>
    </li>
  )
}
