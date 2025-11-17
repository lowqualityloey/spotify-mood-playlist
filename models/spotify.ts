export interface SpotifyUser {
  display_name: string
  email: string
  id: string
  images?: Array<{
    url: string
    height: number | null
    width: number | null
  }>
  country: string
  product: string
}

export interface SpotifyTrack {
  id: string
  name: string
  artists: Array<{
    id: string
    name: string
  }>
  album?: {
    id: string
    name: string
    images: Array<{
      url: string
      height: number | null
      width: number | null
    }>
  }
  duration_ms: number
  popularity?: number
}

export interface SpotifyAuthContextType {
  token: string | null
  user: SpotifyUser | null
  loading: boolean
  login: () => void
  logout: () => void
  isAuthenticated: boolean
}

export interface LoginProps {
  onLogin: () => void
}

export const moodTypes = {
  happy: 'happy',
  sad: 'sad',
  relaxed: 'relaxed',
  energetic: 'energetic',
  angry: 'angry',
  dreamy: 'dreamy',
  romantic: 'romantic',
  party: 'party',
  focused: 'focused',
  chill: 'chill'
} as const

export type MoodType = keyof typeof moodTypes
