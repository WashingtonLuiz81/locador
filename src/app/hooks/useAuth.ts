import { User } from '@/types/auth'
import { useState } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  const login = async (username: string, password: string) => {
    try {
      const url = `${process.env.API_BASE_URL}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`

      const response = await fetch(url, {
        method: 'GET', // Ou 'POST', dependendo do que a API espera
      })

      if (!response.ok) {
        throw new Error('Failed to fetch')
      }

      const data = await response.json() // Convertendo a resposta para JSON
      const userData = data[0] // Assumindo que o usuário será o primeiro item do array

      if (userData) {
        setUser(userData)
        setError(null)
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('Login failed')
    }
  }

  const logout = () => {
    setUser(null)
  }

  return {
    user,
    login,
    logout,
    error,
  }
}
