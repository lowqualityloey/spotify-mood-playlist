import { useAuth0 } from '@auth0/auth0-react'
import LoginAuth from './LoginAuth.tsx'
import LoginSpotify from './LoginSpotify.tsx'
import Loading from './Loading.tsx'
import MoodButtons from './Mood/MoodButtons.tsx'
import { Stack } from '@chakra-ui/react'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()
  const { isAuthenticated: spotifyAuth } = useSpotifyAuth()



  if (isLoading) return <Loading />
  if (!isAuthenticated) return <LoginAuth />

  return (
    <Stack direction="column">
      <LoginSpotify />
      {spotifyAuth && <MoodButtons />}
    </Stack>
  )
}

export default App
