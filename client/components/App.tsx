import { useAuth0 } from '@auth0/auth0-react'
import LoginAuth from './LoginAuth.tsx'
import LoginSpotify from './LoginSpotify.tsx'
import Loading from './Loading.tsx'
import { Button, VStack } from '@chakra-ui/react'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth'
import { getStoredToken } from '../utils/spotify'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()
  const { isAuthenticated: spotifyAuth } = useSpotifyAuth()

  const testSpotifyAPI = async () => {
    const token = getStoredToken()
    if (!token) {
      console.log('No Spotify token found')
      return
    }

    try {
      const profileResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const profile = await profileResponse.json()
      console.log('User Profile:', profile)

      const playlistsResponse = await fetch(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      const playlists = await playlistsResponse.json()
      console.log('User Playlists:', playlists)

      const topTracksResponse = await fetch(
        'https://api.spotify.com/v1/me/top/tracks?limit=5',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      const topTracks = await topTracksResponse.json()
      console.log('Top Tracks:', topTracks)
    } catch (error) {
      console.error('Spotify API Error:', error)
    }
  }

  if (isLoading) return <Loading />
  if (!isAuthenticated) return <LoginAuth />

  return (
    <VStack spacing={4}>
      <LoginSpotify />
      {spotifyAuth && (
        <Button colorScheme="blue" onClick={testSpotifyAPI}>
          Test Spotify API
        </Button>
      )}
    </VStack>
  )
}

export default App
