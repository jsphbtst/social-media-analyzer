import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const initialState = { windowHeight: 0, windowWidth: 0 }
  const [windowSize, setWindowSize] = useState(initialState)

  const handleResize = () => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    setWindowSize({ windowHeight, windowWidth })
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    windowHeight: windowSize.windowHeight,
    windowWidth: windowSize.windowWidth
  }
}

export default useWindowSize
