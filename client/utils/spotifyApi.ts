import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const initializeSpotifyApi = (token: string) => {
  spotifyApi.setAccessToken(token)
}

export const getUserProfile = async () => {
  try {
    return await spotifyApi.getMe()
  } catch (error) {
    console.error('Error getting user profile:', error)
    throw error
  }
}

export const getUserPlaylists = async () => {
  try {
    return await spotifyApi.getUserPlaylists()
  } catch (error) {
    console.error('Error getting user playlists:', error)
    throw error
  }
}

export const getUserTopTracks = async (limit = 5) => {
  try {
    return await spotifyApi.getMyTopTracks({ limit })
  } catch (error) {
    console.error('Error getting top tracks:', error)
    throw error
  }
}

export const createPlaylist = async (userId: string, name: string, description?: string) => {
  try {
    return await spotifyApi.createPlaylist(userId, {
      name,
      description,
      public: false
    })
  } catch (error) {
    console.error('Error creating playlist:', error)
    throw error
  }
}

export const addTracksToPlaylist = async (playlistId: string, trackUris: string[]) => {
  try {
    return await spotifyApi.addTracksToPlaylist(playlistId, trackUris)
  } catch (error) {
    console.error('Error adding tracks to playlist:', error)
    throw error
  }
}

export const searchTracks = async (query: string, limit = 20) => {
  try {
    return await spotifyApi.searchTracks(query, { limit })
  } catch (error) {
    console.error('Error searching tracks:', error)
    throw error
  }
}

export default spotifyApi