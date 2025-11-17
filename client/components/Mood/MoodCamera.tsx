import { Button } from '@chakra-ui/react'
import React from 'react'
import Webcam from 'react-webcam'

interface MoodCameraProps {
  isOpen: boolean
  onClose: () => void
}

const MoodCamera: React.FC<MoodCameraProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          maxWidth: '500px',
          width: '90%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mood Camera</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Webcam
            audio={false}
            width={400}
            height={300}
            screenshotFormat="image/jpeg"
            style={{ borderRadius: '8px', width: '100%' }}
          />
        </div>
        <div style={{ textAlign: 'right' }}>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MoodCamera
