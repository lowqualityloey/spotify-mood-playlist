import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <ChakraProvider value={defaultSystem}>
      <Auth0Provider
        domain="dev-7wxu11u3.au.auth0.com"
        clientId="HwnGDfAfFMx1LrdeHaRFBGHXOrLJ2XtX"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: 'https://mood/api',
        }}
        cacheLocation="localstorage"
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Auth0Provider>
    </ChakraProvider>,
  )
})
