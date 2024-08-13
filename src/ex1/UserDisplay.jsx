import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

const UserDisplay = () => {
    const {firstName, lastName} = useContext(UserContext)
  return (
    <div>First Name: {firstName}, LAst Name : {lastName}</div>
  )
}

export default UserDisplay