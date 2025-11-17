import { useState } from 'react'
import {
  searchTracks,
  createPlaylist,
  addTracksToPlaylist,
  getMe,
  initializeApi,
} from '../apis/spotify'
import { getStoredToken } from '../utils/spotify'
import { MoodType, SpotifyTrack } from '../../models/spotify'
import { moodQueries } from '../components/Mood/MoodFeatureMap'

export const useMoodPlaylist = () => {
  const [mood, setMood] = useState<MoodType | null>(null)
  const [playlistUrl, setPlaylistUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createMoodPlaylist = async (selectedMood: MoodType) => {
    setIsLoading(true)
    setError(null)

    try {
      const token = getStoredToken()
      if (!token) {
        throw new Error('No Spotify token found')
      }

      initializeApi(token)
      setMood(selectedMood)

      const userData = await getMe()
      const userId = userData.id

      const queries = moodQueries[selectedMood] || ['popular music']
      let allTracks: SpotifyTrack[] = []

      for (const query of queries) {
        try {
          const tracks = await searchTracks(query)
          allTracks = [...allTracks, ...tracks]
          if (allTracks.length >= 22) break
        } catch (err) {
          // Query failed silently
        }
      }

      const uniqueTracks = allTracks.filter(
        (track, index, self) =>
          index === self.findIndex((t) => t.id === track.id),
      )
      const tracks = uniqueTracks.sort(() => Math.random() - 0.5)

      if (tracks.length === 0) {
        throw new Error('No tracks found')
      }

      const trackUris = tracks
        .slice(0, 12)
        .map((track) => `spotify:track:${track.id}`)
      const playlist = await createPlaylist(
        userId,
        `${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Mood Playlist`,
      )
      await addTracksToPlaylist(playlist.id, trackUris)

      setPlaylistUrl(`https://open.spotify.com/playlist/${playlist.id}`)
    } catch (error: any) {
      if (
        error?.message?.includes('expired') ||
        error?.message?.includes('login')
      ) {
        setError('Spotify session expired. Please login again.')
      } else {
        setError(
          error instanceof Error ? error.message : 'Failed to create playlist',
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  const resetPlaylist = () => {
    setMood(null)
    setPlaylistUrl(null)
    setError(null)
  }

  return {
    mood,
    playlistUrl,
    isLoading,
    error,
    createMoodPlaylist,
    resetPlaylist,
  }
}
