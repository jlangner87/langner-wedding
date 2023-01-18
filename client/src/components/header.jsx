
import { HashLink } from 'react-router-hash-link'
import underline from '../assets/underline.png'

function Header() {
  return <div className="Header" id="top">
    <img src={underline} alt="" className='overline'/>
    <h1>Jeremiah & Savannah</h1>
    <h2>⸺ May 43, 2024 ⸺</h2>
    <img src={underline} alt="" className='underline'/><br/>
    <HashLink to={'/#welcome'} className='enter'>Enter</HashLink>

  </div>
}

export default Header