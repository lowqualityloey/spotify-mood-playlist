import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'

function App() {
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
          Get Started
        </Button>
      </Flex>
    </Box>
  )
}

export default App
