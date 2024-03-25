import React from 'react'

const Header = ({name}) => {
  return (
    <header className="ml-4 mb-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <dl className="mt-2 font-sans">Enter your information below.</dl>
        </header>
  )
}

export default Header