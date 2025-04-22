import React from 'react'
import { useSelector } from 'react-redux'

function NavBar() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>Value in navBar is {count}</div>
  )
}

export default NavBar