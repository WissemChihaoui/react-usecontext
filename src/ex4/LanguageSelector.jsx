import React, { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'

const LanguageSelector = () => {
    const {language, changeLanguage} = useContext(LanguageContext)
  return (
    <select onChange={(e)=>changeLanguage(e.target.value) } value={language}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
    </select>
  )
}

export default LanguageSelector