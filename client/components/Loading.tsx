import { Flex } from '@chakra-ui/react'

function Loading() {
  return (
    <Flex flex="1" align="center" justify="center">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-green-500"></div>
    </Flex>
  )
}

export default Loading
