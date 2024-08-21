import React from 'react'
import Image from 'next/image'
import { X, Heart, ShoppingCart } from 'lucide-react'
import { Movie } from '@/core/model'
import { useCartStore } from '@/core/store/cartStore'
import { useFavoritesStore } from '@/core/store/favoritesStore'
import { Button } from '../ui/button'

const genreColors: Record<string, string> = {
  Action: 'bg-red-500 text-white',
  Comedy: 'bg-yellow-400 text-gray-900',
  Drama: 'bg-blue-500 text-white',
  Horror: 'bg-purple-600 text-white',
  Romance: 'bg-pink-400 text-white',
  'Science Fiction': 'bg-green-500 text-white',
  Fantasy: 'bg-indigo-500 text-white',
  Thriller: 'bg-orange-500 text-white',
  Adventure: 'bg-teal-500 text-white',
}

interface MovieDetailModalProps {
  movie: Movie | null
  onClose: () => void
}

export const MovieDetailModal = ({ movie, onClose }: MovieDetailModalProps) => {
  const { cart, addToCart, removeFromCart } = useCartStore()
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore()

  if (!movie) return null

  const isInCart = cart.some((item) => item.id === movie.id)
  const isFavorite = favorites.some((item) => item.id === movie.id)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl max-h-screen sm:max-h-[100vh] sm:w-full">
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_IMAGES}${movie.poster_path}`}
            alt={movie.title}
            width={768}
            height={120}
            className="object-cover aspect-auto"
          />
          <Button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
          >
            <X className="text-2xl text-gray-900" />
          </Button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-24rem)] scrollbar">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {movie.title}
          </h2>

          <div className="flex flex-wrap mb-4">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className={`mr-2 mb-2 px-3 py-1 rounded-md text-sm ${
                  genreColors[genre.name] || 'bg-gray-300 text-gray-900'
                }`}
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-gray-700 mb-4">{movie.overview}</p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={() => {
                isInCart ? removeFromCart(movie.id) : addToCart(movie)
              }}
              className={`bg-blue-500 text-white hover:bg-blue-600 flex-1 ${
                isInCart ? 'bg-red-500' : 'bg-blue-600'
              }`}
            >
              {isInCart ? 'Remover do Carrinho' : 'Adicionar ao Carrinho'}
              <ShoppingCart className="ml-2" />
            </Button>
            <Button
              onClick={() => {
                isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
              }}
              className={`text-gray-100 flex-1 ${
                isFavorite ? 'bg-red-500' : 'bg-gray-500'
              } hover:${isFavorite ? 'bg-red-600' : 'bg-gray-600'}`}
            >
              {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
              <Heart className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
