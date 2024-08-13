import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const ToggleThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}

export default ToggleThemeButton