// Components/Navbar.tsx

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed w-screen bg-black text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar