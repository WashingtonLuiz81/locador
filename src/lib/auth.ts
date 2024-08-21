import { useState } from 'react'
import { User } from '../core/model/User'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  const login = async (username: string, password: string) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/users?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`

      const response = await fetch(url, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error('Failed to fetch')
      }

      const data = await response.json()

      const userData = data[0]

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
