import SpotifyWebApi from 'spotify-web-api-js'
import { SpotifyUser, SpotifyTrack } from '../../models/spotify'
import { refreshSpotifyToken } from '../utils/spotify'
const spotifyApi = new SpotifyWebApi()

const logError = (error: unknown) => {
  console.error('Spotify API Error:', error)
}

export const initializeApi = (token: string) => {
  spotifyApi.setAccessToken(token)
}

const handleTokenError = async () => {
  try {
    const newToken = await refreshSpotifyToken()
    if (newToken) {
      spotifyApi.setAccessToken(newToken)
      return true
    }
  } catch (error) {
    console.error('Token refresh failed:', error)
  }
  return false
}

export const getMe = async (): Promise<SpotifyUser> => {
  try {
    const user = await spotifyApi.getMe()
    return user as SpotifyUser
  } catch (error: any) {
    if (error?.status === 401) {
      const refreshed = await handleTokenError()
      if (refreshed) {
        const user = await spotifyApi.getMe()
        return user as SpotifyUser
      }
      throw new Error('Spotify session expired. Please login again.')
    }
    logError(error)
    throw error
  }
}

export const searchTracks = async (query: string): Promise<SpotifyTrack[]> => {
  try {
    const response = await spotifyApi.searchTracks(query, { limit: 20 })
    return response.tracks.items as SpotifyTrack[]
  } catch (error) {
    logError(error)
    throw error
  }
}

export const createPlaylist = async (
  userId: string,
  name: string,
): Promise<{ id: string }> => {
  try {
    const playlist = await spotifyApi.createPlaylist(userId, {
      name,
      public: false,
    })
    return playlist
  } catch (error) {
    logError(error)
    throw error
  }
}

export const addTracksToPlaylist = async (
  playlistId: string,
  trackUris: string[],
): Promise<void> => {
  try {
    await spotifyApi.addTracksToPlaylist(playlistId, trackUris)
  } catch (error) {
    logError(error)
    throw error
  }
}
