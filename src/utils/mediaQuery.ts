import { useEffect, useState } from 'react'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

const MediaQuery = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)')
  const isBigScreen = useMediaQuery('(min-width: 1824px)')
  const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  const isRetina = useMediaQuery('(min-resolution: 2dppx)')

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  }
}

export default MediaQuery
