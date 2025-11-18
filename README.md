# Spotify Mood Playlist

A React application that creates personalized Spotify playlists based on your mood. Users can authenticate with Spotify, select their current mood, and instantly generate a custom playlist tailored to their emotional state.

## 🎯 Features

### ✅ Implemented Features
- **Spotify OAuth Authentication** - Secure login and token management
- **Mood Selection Interface** - 10 different mood options with emojis
- **Dynamic Playlist Creation** - Automatically generates playlists based on selected mood
- **Real-time Spotify Integration** - Search tracks and create playlists via Spotify API
- **Responsive UI** - Built with Chakra UI and Tailwind CSS
- **Confetti Celebration** - Visual feedback when playlist is created
- **Basic Camera Interface** - Webcam integration for future mood detection

### Mood Options
- 😊 Happy - Uplifting pop and dance tracks
- 😢 Sad - Melancholy indie and heartbreak songs
- 😌 Relaxed - Peaceful acoustic and ambient music
- ⚡ Energetic - High-energy workout and dance tracks
- 😠 Angry - Aggressive rock and metal
- 💭 Dreamy - Ethereal soundscapes and dream pop
- 💕 Romantic - Love ballads and soulful R&B
- 🎉 Party - Dance floor hits and club bangers
- 🎯 Focused - Study music and concentration playlists
- 😎 Chill - Lo-fi beats and coffee shop vibes

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Chakra UI** - Component library for styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express** - Web server framework
- **TypeScript** - Server-side type safety

### Authentication & APIs
- **Auth0** - User authentication
- **Spotify Web API** - Music data and playlist management
- **OAuth 2.0** - Secure token exchange

### Additional Libraries
- **TensorFlow.js** - Machine learning (for future mood detection)
- **React Webcam** - Camera integration
- **Canvas Confetti** - Celebration effects
- **Spotify Web API JS** - Spotify SDK wrapper

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Spotify Developer Account
- Auth0 Account (optional, for user authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd spotify-mood-playlist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with:
   ```env
   # Spotify API Configuration
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173
   
   # Auth0 Configuration (optional)
   VITE_AUTH0_DOMAIN=your_auth0_domain
   VITE_AUTH0_CLIENT_ID=your_auth0_client_id
   VITE_AUTH0_REDIRECT_URI=http://localhost:5173
   ```

4. **Spotify Developer Setup**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app
   - Add `http://localhost:5173` to your app's redirect URIs
   - Copy your Client ID to the environment variables

5. **Run the application**
   ```bash
   npm run dev
   ```

The application will be available at:
- **Client**: http://localhost:5173
- **Server**: http://localhost:3000

## 📁 Project Structure

```
spotify-mood-playlist/
├── client/                 # React frontend
│   ├── components/         # React components
│   │   ├── Mood/          # Mood-related components
│   │   │   ├── MoodButtons.tsx      # Mood selection interface
│   │   │   ├── MoodCamera.tsx       # Camera component
│   │   │   └── MoodFeatureMap.tsx   # Mood-to-music mapping
│   │   ├── LoginSpotify.tsx         # Spotify auth component
│   │   └── App.tsx                  # Main app component
│   ├── hooks/             # Custom React hooks
│   │   ├── useSpotifyAuth.ts       # Spotify authentication
│   │   └── useMoodPlaylist.ts      # Playlist creation logic
│   ├── apis/              # API clients
│   │   └── spotify.ts              # Spotify API wrapper
│   └── utils/             # Utility functions
│       └── spotify.ts              # Spotify auth utilities
├── server/                # Express backend
│   ├── routes/            # API routes
│   └── db/                # Database configuration
├── models/                # TypeScript type definitions
│   ├── spotify.ts         # Spotify API types
│   └── fruit.ts           # Legacy types (to be removed)
└── public/                # Static assets
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development servers (client + server)
npm run dev:client   # Start only client development server
npm run dev:server   # Start only server development server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run test suite
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🎵 How It Works

1. **Authentication**: Users authenticate with Spotify OAuth
2. **Mood Selection**: Choose from 10 different mood options
3. **Music Search**: System searches Spotify using mood-specific queries
4. **Playlist Creation**: Creates a private playlist with 12 curated tracks
5. **Embedded Player**: Displays the playlist in an embedded Spotify player

### Mood-to-Music Mapping
Each mood has specific search queries that target appropriate genres and moods:
- **Happy**: "feel good hits", "uplifting pop", "good vibes"
- **Sad**: "sad songs", "heartbreak playlist", "melancholy indie"
- **Relaxed**: "peaceful music", "calm acoustic", "meditation sounds"
- ...and more for each mood type

## 🔮 Future Enhancements

### 🎯 Planned Features
- [ ] **AI Mood Detection** - Use TensorFlow.js for facial expression analysis
- [ ] **Camera Mood Capture** - Take photos to automatically detect mood
- [ ] **Playlist Customization** - Adjust playlist length and genre preferences
- [ ] **Mood History** - Track mood patterns over time
- [ ] **Social Features** - Share playlists with friends
- [ ] **Offline Mode** - Cache playlists for offline access
- [ ] **Mobile App** - React Native version

### 🛠️ Technical Improvements
- [ ] **Database Integration** - Store user preferences and history
- [ ] **Performance Optimization** - Implement caching and lazy loading
- [ ] **Error Handling** - Enhanced error recovery and user feedback
- [ ] **Testing Suite** - Comprehensive unit and integration tests
- [ ] **Accessibility** - WCAG compliance and screen reader support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Spotify Web API for music data
- Chakra UI for beautiful components
- TensorFlow.js team for ML capabilities
- Dev Academy for the boilerplate foundation
