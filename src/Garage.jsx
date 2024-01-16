import React from 'react'
import useAuthentication from './Components/Hook/useAuthenticate'

export default function Garage() {
    const { authenticated, loading, userObj } = useAuthentication()
  return (
    <div>
    hello
    </div>
  )
}
