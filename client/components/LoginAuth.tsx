import { useAuth0 } from '@auth0/auth0-react'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'

function Login() {
  const { loginWithRedirect } = useAuth0()
  
  return (
    <Flex minH="80vh" align="center" justify="center">
      <Box
        bg="green.200"
        p={20}
        textAlign="center"
        color="black"
        borderRadius="lg"
      >
        <Box maxW="4xl" mx={20}>
          <Heading size="4xl" mb={4} fontWeight="bold">
            Spotify Mood Playlist
          </Heading>
          <Text fontSize="2xl" mb={8}>
            Capture your mood, get the perfect playlist.
          </Text>
          <Button
            onClick={() => loginWithRedirect()}
            bg="black"
            color="white"
            px={8}
            py={3}
            borderRadius="full"
            fontWeight="semibold"
            _hover={{ bg: 'gray.800' }}
            size="lg"
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default Login
