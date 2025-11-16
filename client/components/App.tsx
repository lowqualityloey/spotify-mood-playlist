import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login.tsx'
import Loading from './Loading.tsx'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()
  if (isLoading) return <Loading />
  if (!isAuthenticated) return <Login />

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
        <Button size="lg" onClick={() => alert('Login flow coming soon!')}>
          Login with Spotify
        </Button>
      </Flex>
    </Box>
  )
}

export default App
