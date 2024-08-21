// src/core/store/favoritesStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Movie } from '../model'

interface FavoritesStore {
  favorites: Movie[]
  addFavorite: (movie: Movie) => void
  removeFavorite: (id: number) => void
  listFavorites: () => Movie[]
  clearFavorites: () => void
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (movie) =>
        set((state) => ({
          favorites: [...state.favorites, movie],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== id),
        })),
      listFavorites: () => get().favorites,
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'favorites-storage',
    },
  ),
)
