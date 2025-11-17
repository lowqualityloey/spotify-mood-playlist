import SpotifyWebApi from 'spotify-web-api-js'
import { SpotifyUser, SpotifyTrack } from '../../models/spotify'
const spotifyApi = new SpotifyWebApi()

const logError = (error: unknown) => {
  console.error('Spotify API Error:', error)
}

export const initializeApi = (token: string) => {
  spotifyApi.setAccessToken(token)
}

export const getMe = async (): Promise<SpotifyUser> => {
  try {
    const user = await spotifyApi.getMe()
    console.log(user)
    return user as SpotifyUser
  } catch (error) {
    logError(error)
    throw error
  }
}

export const getRecommendations = async (seedGenres: string[]): Promise<SpotifyTrack[]> => {
  try {
    const response = await spotifyApi.getRecommendations({
      seed_genres: seedGenres.join(','),
      limit: 20,
    })
    return response.tracks as SpotifyTrack[]
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
