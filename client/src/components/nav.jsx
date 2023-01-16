import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {
  return (
    <div className="nav_menu">
      <NavLink className='nav_link' to={'/about'}>ABOUT</NavLink>
      <NavLink className='nav_link' to={'/gallery'}>GALLERY</NavLink>
      <NavLink className='nav_link' to={'/contact'}>CONTACT</NavLink>
</div>
  )
}

export default Nav