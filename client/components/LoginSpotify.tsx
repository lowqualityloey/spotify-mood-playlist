import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth'

function LoginSpotify() {
  const { isAuthenticated, login, logoutSpotify } = useSpotifyAuth()

  return (
    <Box
      p={23}
      textAlign="center"
      maxW="700px"
      mx="auto"
      bg="black"
      borderRadius="xl"
      shadow="lg"
      border="1px"
      borderColor="gray.200"
      mb={10}
      mt={4}
    >
      <Flex direction="column" gap={8}>
        <Heading size="2xl" fontWeight="bold" color="gray.200">
          Spotify Mood Playlist
        </Heading>
        <Text fontSize="xl" color="gray.300" maxW="500px" mx="auto">
          Connect your Spotify account, capture your mood through photos, and
          discover personalized playlists crafted just for you.
        </Text>
        {!isAuthenticated ? (
          <Button
            size="lg"
            px={8}
            py={6}
            fontSize="lg"
            borderRadius="full"
            style={{ backgroundColor: '#1DB954' }}
            color="white"
            transition="all 0.2s"
            onClick={login}
          >
            Connect with Spotify
          </Button>
        ) : (
          <Flex direction="column" gap={4}>
            <Text color="green.300" fontWeight="bold">
              ✅ Spotify Connected
            </Text>
            <Button size="sm" bg="red" onClick={logoutSpotify}>
              Disconnect Spotify
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  )
}
export default LoginSpotify
