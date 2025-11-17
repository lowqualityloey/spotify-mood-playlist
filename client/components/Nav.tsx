import { IfAuthenticated } from './Authenticated.tsx'
import { Box, Button, Text, Heading, Flex } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth'

function Nav() {
  const { user, logout } = useAuth0()
  const { logoutSpotify } = useSpotifyAuth()

  const handleSignOut = () => {
    logout()
    logoutSpotify()
    console.log('sign out')
  }

  return (
    <Box>
      <Flex justify="space-between" align="center" p={4}>
        <Heading size="md">Spotify Mood Generator</Heading>
        <Flex align="center" gap={4}>
          <IfAuthenticated>
            <Text>Hello! {user?.nickname}</Text>
            <Button onClick={handleSignOut} size="sm">
              Sign out
            </Button>
          </IfAuthenticated>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Nav
