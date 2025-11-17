const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
const SCOPES = 'user-read-private user-read-email playlist-modify-public playlist-modify-private user-top-read'

function generateRandomString(length: number) {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier)
  const digest = await window.crypto.subtle.digest('SHA-256', data)
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export const getSpotifyAuthUrl = async () => {
  const codeVerifier = generateRandomString(128)
  const codeChallenge = await generateCodeChallenge(codeVerifier)
  
  localStorage.setItem('code_verifier', codeVerifier)
  
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
  })
  return `https://accounts.spotify.com/authorize?${params.toString()}`
}

export const getTokenFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('code')
}

export const exchangeCodeForToken = async (code: string) => {
  const codeVerifier = localStorage.getItem('code_verifier')
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier!,
    }),
  })
  
  const data = await response.json()
  return data.access_token
}

export const clearToken = () => {
  localStorage.removeItem('spotify_token')
  localStorage.removeItem('code_verifier')
  window.history.replaceState({}, document.title, window.location.pathname)
}

export const saveToken = (token: string) => {
  localStorage.setItem('spotify_token', token)
}

export const getStoredToken = () => {
  return localStorage.getItem('spotify_token')
}

export const refreshSpotifyToken = async (): Promise<string | null> => {
  // Spotify PKCE flow doesn't support refresh tokens
  // User needs to re-authenticate
  clearToken()
  return null
}
