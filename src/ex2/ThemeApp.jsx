import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import ToggleThemeButton from './ToggleThemeButton';

const ThemeApp = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px', minHeight: '100vh' }}>
        <h1>{theme} Mode</h1>
        <ToggleThemeButton />
    </div>
  )
}

export default ThemeApp