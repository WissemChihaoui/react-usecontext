import React, { useContext } from 'react'
import { LanguageContext } from './LanguageProvider';

const Greeting = () => {
    const {language} = useContext(LanguageContext);

    const greetings = {
        en: 'Hello!',
        fr: 'Bonjour!',
        es: 'Holà!'
    };

  return (
    <div>
        <h1>{greetings[language]}</h1>
    </div>
  )
}

export default Greeting