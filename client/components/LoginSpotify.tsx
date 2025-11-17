import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth'

function LoginSpotify() {
  const { isAuthenticated, login, logout } = useSpotifyAuth()

  return (
    <Box p={8} textAlign="center" maxW="600px" mx="auto" bg={'green.300'}>
      <Flex direction="column" gap={6}>
        <Heading size="2xl" fontWeight="bold">
          Welcome to Spotify Mood Generator
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Log in with your Spotify account, take a photo to detect your mood,
          and get a playlist tailored just for you!
        </Text>
        {!isAuthenticated ? (
          <Button size="lg" colorScheme="green" onClick={login}>
            Connect with Spotify
          </Button>
        ) : (
          <Flex direction="column" gap={4}>
            <Text color="green.700" fontWeight="bold">
              Spotify Connected
            </Text>
            <Button size="sm" colorScheme="red" onClick={logout}>
              Disconnect Spotify
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  )
}
export default LoginSpotify
