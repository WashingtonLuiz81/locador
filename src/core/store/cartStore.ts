import { create } from 'zustand'
import { Movie } from '../model/Movie'

interface CartState {
  cart: Movie[]
  addToCart: (movie: Movie) => void
  removeFromCart: (movieId: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (movie: Movie) =>
    set((state) => ({
      cart: [...state.cart, movie],
    })),

  removeFromCart: (movieId: number) =>
    set((state) => ({
      cart: state.cart.filter((movie) => movie.id !== movieId),
    })),

  clearCart: () =>
    set(() => ({
      cart: [],
    })),
}))
