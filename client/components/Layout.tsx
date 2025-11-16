import { Outlet } from 'react-router'
import { Box, Heading } from '@chakra-ui/react'

export default function Layout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box as="header" p={4} bg="gray.100">
        <Heading size="lg">Spotify Mood Playlist</Heading>
      </Box>
      <Box as="main" flex="1" p={4}>
        <Outlet />
      </Box>
      <Box as="footer" padding={8} bg="gray.100">
        © 2025 Jonell Balanay
      </Box>
    </Box>
  )
}
