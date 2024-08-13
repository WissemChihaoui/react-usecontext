import React, {createContext} from 'react'

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const user = {
      firstName: 'Jon',
      lastName: 'Doe'
    }
   
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider