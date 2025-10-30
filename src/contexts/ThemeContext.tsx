'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default theme by local time: 8:00–17:59 light, otherwise dark
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const now = new Date()
      const hour = now.getHours()
      // 8am to 6pm (exclusive of 6pm end minute): use light mode by default
      const isDaytime = hour >= 8 && hour < 18
      return !isDaytime
    } catch {
      // Fallback to dark if Date fails for any reason
      return true
    }
  })

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
