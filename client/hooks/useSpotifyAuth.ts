import { useState, useEffect } from 'react'
import { getTokenFromUrl, saveToken, getStoredToken, clearToken, getSpotifyAuthUrl, exchangeCodeForToken } from '../utils/spotify'

export const useSpotifyAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const code = getTokenFromUrl()
      const storedToken = getStoredToken()
      
      if (code) {
        try {
          const accessToken = await exchangeCodeForToken(code)
          saveToken(accessToken)
          setToken(accessToken)
          setIsAuthenticated(true)
          window.history.replaceState({}, document.title, window.location.pathname)
        } catch (error) {
          console.error('Error exchanging code for token:', error)
        }
      } else if (storedToken) {
        setToken(storedToken)
        setIsAuthenticated(true)
      }
    }
    
    checkAuth()
  }, [])

  const login = async () => {
    const authUrl = await getSpotifyAuthUrl()
    window.location.href = authUrl
  }

  const logout = () => {
    clearToken()
    setToken(null)
    setIsAuthenticated(false)
  }

  return {
    token,
    isAuthenticated,
    login,
    logout
  }
}