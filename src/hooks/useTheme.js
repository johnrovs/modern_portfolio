import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme' // 'light' | 'dark'

function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark'
  // The inline script in index.html already set the class before React
  // mounted (avoids a flash of the wrong theme) — just read it back here
  // so React state matches what's actually on screen.
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage can throw in private-browsing/blocked-storage contexts —
      // theme still works for the current page load, it just won't persist.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme, isLight: theme === 'light' }
}
