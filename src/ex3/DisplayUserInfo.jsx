import React, { useContext } from 'react'
import { userContext } from './UserProvider'

const DisplayUserInfo = () => {
    const {name, age, email} = useContext(userContext)
  return (
    <div>
        <h2>User Info</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default DisplayUserInfo