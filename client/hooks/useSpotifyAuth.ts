import { useState, useEffect } from 'react'
import {
  getTokenFromUrl,
  saveToken,
  getStoredToken,
  clearToken,
  getSpotifyAuthUrl,
  exchangeCodeForToken,
} from '../utils/spotify'
import { initializeSpotifyApi } from '../utils/spotifyApi'

export const useSpotifyAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    if (hasChecked) return

    const checkAuth = async () => {
      const code = getTokenFromUrl()
      const storedToken = getStoredToken()

      if (code) {
        try {
          const accessToken = await exchangeCodeForToken(code)
          if (accessToken) {
            saveToken(accessToken)
            setToken(accessToken)
            setIsAuthenticated(true)
            initializeSpotifyApi(accessToken)

            window.history.replaceState(
              {},
              document.title,
              window.location.pathname,
            )
            window.location.reload()
          }
        } catch (error) {
          console.error('Error exchanging code for token:', error)
        }
      } else if (storedToken) {
        setToken(storedToken)
        setIsAuthenticated(true)
        initializeSpotifyApi(storedToken)
      } else {
        setToken(null)
        setIsAuthenticated(false)
      }

      setHasChecked(true)
    }

    checkAuth()
  }, [hasChecked])

  const login = async () => {
    const authUrl = await getSpotifyAuthUrl()
    window.location.href = authUrl
  }

  const logoutSpotify = () => {
    clearToken()
    setToken(null)
    setIsAuthenticated(false)
  }

  return {
    token,
    isAuthenticated,
    login,
    logoutSpotify,
  }
}
