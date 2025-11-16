import { Outlet } from 'react-router'
import { Box, Text } from '@chakra-ui/react'
import Nav from './Nav.tsx'

export default function Layout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box as="header" bg="gray.100">
        <Nav />
      </Box>
      <Box as="main" flex="1" p={4}>
        <Outlet />
      </Box>
      <Box as="footer" p={4} bg="gray.100" textAlign="center">
        <Text fontSize="sm" color="gray.600">© 2025 Jonell Balanay</Text>
      </Box>
    </Box>
  )
}
