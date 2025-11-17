import request from 'superagent'
import { SpotifyUser, SpotifyTrack } from '../../models/spotify'

const BASE_URL = 'https://api.spotify.com/v1'

const logError = (error: unknown) => {
  console.error('Spotify API Error:', error)
}

export const getMe = async (token: string): Promise<SpotifyUser> => {
  try {
    const response = await request
      .get(`${BASE_URL}/me`)
      .set('Authorization', `Bearer ${token}`)
    console.log(response.body)
    return response.body
  } catch (error) {
    logError(error)
    throw error
  }
}

export const getRecommendations = async (
  token: string,
  seedGenres: string[],
): Promise<SpotifyTrack[]> => {
  try {
    const response = await request
      .get(`${BASE_URL}/recommendations`)
      .query({ seed_genres: seedGenres.join(','), limit: 20 })
      .set('Authorization', `Bearer ${token}`)
    return response.body.tracks
  } catch (error) {
    logError(error)
    throw error
  }
}

export const createPlaylist = async (
  token: string,
  userId: string,
  name: string,
): Promise<{ id: string }> => {
  try {
    const response = await request
      .post(`${BASE_URL}/users/${userId}/playlists`)
      .send({ name, public: false })
      .set('Authorization', `Bearer ${token}`)
    return response.body
  } catch (error) {
    logError(error)
    throw error
  }
}

export const addTracksToPlaylist = async (
  token: string,
  playlistId: string,
  trackUris: string[],
): Promise<void> => {
  try {
    await request
      .post(`${BASE_URL}/playlists/${playlistId}/tracks`)
      .send({ uris: trackUris })
      .set('Authorization', `Bearer ${token}`)
  } catch (error) {
    logError(error)
    throw error
  }
}
