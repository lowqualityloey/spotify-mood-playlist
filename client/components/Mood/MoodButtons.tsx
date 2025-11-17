import { useMoodPlaylist } from '../../hooks/useMoodPlaylist'
import { MoodType, moodTypes } from '../../../models/spotify'
import Loading from '../Loading'

const moodEmojis = {
  happy: '😊',
  sad: '😢',
  relaxed: '😌',
  energetic: '⚡',
  angry: '😠',
  dreamy: '💭',
  romantic: '💕',
  party: '🎉',
  focused: '🎯',
  chill: '😎',
}

const MoodButtons = () => {
  const {
    mood,
    playlistUrl,
    isLoading,
    error,
    createMoodPlaylist,
    resetPlaylist,
  } = useMoodPlaylist()

  if (mood && playlistUrl) {
    return (
      <div style={{ textAlign: 'center', padding: '24px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>
          Playlist Created!
        </h2>

        <p style={{ marginBottom: '16px' }}>
          {moodTypes[mood as MoodType]}
          {moodEmojis[mood]}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '16px',
          }}
        >
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlistUrl.split('/').pop()}`}
            width="300"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px' }}
          ></iframe>
        </div>

        <div style={{ marginTop: '16px' }}>
          <button
            onClick={resetPlaylist}
            style={{
              backgroundColor: '#3182CE',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Create Another Playlist
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1
        style={{ fontSize: '32px', textAlign: 'center', marginBottom: '24px' }}
      >
        Choose Your Mood
      </h1>

      {error && (
        <div
          style={{
            backgroundColor: '#FED7D7',
            color: '#C53030',
            padding: '12px',
            marginBottom: '16px',
            borderRadius: '4px',
          }}
        >
          {error}
        </div>
      )}

      <p
        style={{ textAlign: 'center', marginBottom: '16px', color: '#718096' }}
      >
        Select a mood to create your playlist:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
        }}
      >
        {Object.keys(moodTypes).map((moodKey) => {
          const moodType = moodKey as MoodType
          return (
            <button
              key={moodType}
              onClick={() => createMoodPlaylist(moodType)}
              disabled={isLoading}
              style={{
                border: '2px solid #38A169',
                backgroundColor: 'transparent',
                color: '#38A169',
                padding: '16px',
                height: '80px',
                borderRadius: '8px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: isLoading ? 0.6 : 1,
              }}
            >
              <div>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>
                  {moodEmojis[moodType]}
                </div>
                <div style={{ fontSize: '14px', textTransform: 'capitalize' }}>
                  {isLoading && mood === moodType ? 'Creating...' : moodType}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {isLoading && <Loading />}
    </div>
  )
}

export default MoodButtons
