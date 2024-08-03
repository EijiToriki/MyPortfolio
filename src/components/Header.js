import React from 'react'
import '../css/header.css'

const Header = () => {
  return (
    <header className='header-root'>
      <h1 className='header-title'>
        <a href="/" className='header-a'>
          Eiji Toriki's Portfolio
        </a>
       </h1>
      <nav className="header-nav">
          <ul className='header-contents'>
              <li className='header-content'><a href="#introduction" className='header-a'>introduction</a></li>
              <li className='header-content'><a href="#carrer" className='header-a'>Career</a></li>
              <li className='header-content'><a href="#skill" className='header-a'>Skill</a></li>
              <li className='header-content'><a href="#contact" className='header-a'>Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header