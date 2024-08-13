import React, {createContext, useState} from 'react'

export const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('fr');

    const changeLanguage = (lang) => {
        setLanguage(lang)
    }

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider