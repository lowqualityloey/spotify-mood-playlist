interface OpenCameraButtonProps {
  onClick: () => void
}

const OpenCameraButton = ({ onClick }: OpenCameraButtonProps) => {
  return (
    <div className="mb-6 text-center">
      <button
        onClick={onClick}
        className="mx-auto flex items-center gap-2 rounded-lg bg-purple-600 px-8 py-4 text-lg font-bold text-white transition-all "
      >
        Open Camera
      </button>
    </div>
  )
}

export default OpenCameraButton
