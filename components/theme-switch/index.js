'use client'
import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import s from './theme-switch.module.scss'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <i
      onClick={changeTheme}
      className={cn(
        'bx',
        { 'bx-moon': theme === 'light' },
        { 'bx-sun': theme === 'dark' },
        s['change-theme'],
      )}
      title="Theme"
      id="theme-button"
      data-html2canvas-ignore
    ></i>
  )
}

export default ThemeSwitch
