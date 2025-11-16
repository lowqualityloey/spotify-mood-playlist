import { IfAuthenticated } from './Authenticated.tsx'
import { Box, Button, Text, Heading, Flex } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const { user, logout } = useAuth0()

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  return (
    <Box>
      <Flex justify="space-between" align="center" p={4}>
        <Heading size="md">Spotify Mood Generator</Heading>
        <Flex align="center" gap={4}>
          <IfAuthenticated>
            <Text>Signed in as: {user?.nickname}</Text>
            <Button onClick={handleSignOut} colorScheme="red" size="sm">
              Sign out
            </Button>
          </IfAuthenticated>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Nav
