import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Stack } from '@chakra-ui/react'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth'

import LoginAuth from './LoginAuth.tsx'
import LoginSpotify from './LoginSpotify.tsx'
import Loading from './Loading.tsx'
import MoodButtons from './Mood/MoodButtons.tsx'
import MoodCamera from './Mood/MoodCamera.tsx'
import OpenCameraButton from './OpenCameraButton.tsx'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()
  const { isAuthenticated: spotifyAuth } = useSpotifyAuth()
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  if (isLoading) return <Loading />
  if (!isAuthenticated) return <LoginAuth />

  return (
    <Stack direction="column">
      <LoginSpotify />
      {spotifyAuth ? (
        <>
          <h1 className="text-3xl text-center mb-4">
            Take a Photo
          </h1>
          <OpenCameraButton onClick={onOpen} />
          <h2 className="text-2xl text-center mb-2 text-gray-600">
            or
          </h2>
          <MoodCamera isOpen={isOpen} onClose={onClose} />
          <MoodButtons />
        </>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </Stack>
  )
}

export default App
