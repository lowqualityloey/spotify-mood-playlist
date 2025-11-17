import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const Callback: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 1000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="callback-container">
      <div className="callback-content">
        <h2>Connecting to Spotify...</h2>
        <Loading />
      </div>
    </div>
  )
}

export default Callback
