import { useAuth0 } from '@auth0/auth0-react'
import LoginAuth from './LoginAuth.tsx'
import LoginSpotify from './LoginSpotify.tsx'
import Loading from './Loading.tsx'
import { Button, Stack } from '@chakra-ui/react'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth'
import { getStoredToken } from '../utils/spotify'
import { getUserProfile, getUserPlaylists, getUserTopTracks } from '../utils/spotifyApi'

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
      const profile = await getUserProfile()
      console.log('User Profile:', profile)

      const playlists = await getUserPlaylists()
      console.log('User Playlists:', playlists)

      const topTracks = await getUserTopTracks(5)
      console.log('Top Tracks:', topTracks)
    } catch (error) {
      console.error('Spotify API Error:', error)
    }
  }

  if (isLoading) return <Loading />
  if (!isAuthenticated) return <LoginAuth />

  return (
    <Stack direction="column" spacing={4}>
      <LoginSpotify />
      {spotifyAuth && (
        <Button colorScheme="blue" onClick={testSpotifyAPI}>
          Test Spotify API
        </Button>
      )}
    </Stack>
  )
}

export default App
