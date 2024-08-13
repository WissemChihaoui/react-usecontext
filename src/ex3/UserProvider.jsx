import React, {createContext} from 'react'

export const userContext = createContext();

const UserProvider = ({children}) => {
    const userData = {
        name: 'Jon Doe',
        age: 18,
        email: 'example@gmail.com'
    }; 
  return (
    <userContext.Provider value={userData}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider