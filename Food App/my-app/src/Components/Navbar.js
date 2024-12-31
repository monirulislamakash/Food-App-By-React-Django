import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <nav className="navmenu">
        <ul>
          <Link className='navLink' to="/shop">
            <li><ion-icon name="fast-food"></ion-icon><span>shop</span></li>
          </Link>
          <Link className='navLink' to="#">
            <li><ion-icon name="ticket"></ion-icon><span>offer</span></li>
          </Link>
          <Link className='navLink' to="/">
            <li><ion-icon name="home"></ion-icon><span>home</span></li>
          </Link>
          <Link className='navLink' to="#">
            <li><ion-icon name="mail"></ion-icon><span>inbox</span></li>
          </Link>
          <Link className='navLink' to="#">
            <li><ion-icon name="person-circle"></ion-icon><span>Profile</span></li>
          </Link>
        </ul>
    </nav>
  )
}
