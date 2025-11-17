interface OpenCameraButtonProps {
  onClick: () => void
}

const OpenCameraButton = ({ onClick }: OpenCameraButtonProps) => {
  return (
    <div className="mb-2 text-center">
      <button
        onClick={onClick}
        className="mx-auto flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold text-white"
        style={{ backgroundColor: '#BF9A6F' }}
      >
        Open Camera
      </button>
    </div>
  )
}

export default OpenCameraButton
