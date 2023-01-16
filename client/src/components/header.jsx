import logo1 from '../assets/logo1.png'
import { HashLink } from 'react-router-hash-link'

function Header() {
  return (
    <div className="Header">
      <img src={logo1} className="hero_image" />
      <h1 className="name">Amy Ross</h1>
      <h1 className="job"> tattoo artist</h1>
      <div className="line"></div>
      <HashLink className='enter_link' to='/#top' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}>ENTER</HashLink>
    </div>
  )
}

export default Header
