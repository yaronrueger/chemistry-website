'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemeWrapperProps {
  children: React.ReactNode
  lightClasses: string
  darkClasses: string
  className?: string
}

export function ThemeWrapper({ children, lightClasses, darkClasses, className = '' }: ThemeWrapperProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return with dark theme classes as default during hydration
    return (
      <div className={`${darkClasses} ${className}`}>
        {children}
      </div>
    )
  }

  const themeClasses = resolvedTheme === 'light' ? lightClasses : darkClasses

  return (
    <div className={`${themeClasses} ${className}`}>
      {children}
    </div>
  )
}
