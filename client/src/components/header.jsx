
import { HashLink } from 'react-router-hash-link'
import underline from '../assets/underline.png'

function Header() {
  return <div className="Header" id="top">
    <img src={underline} alt="" className='overline'/>
    <h1>Savannah & Jeremiah</h1>
    <h2>⸺ May 23, 2024 ⸺</h2>
    <img src={underline} alt="" className='underline'/><br/>
    <HashLink to={'/#welcome'} className='enter'>Enter</HashLink>

  </div>
}

export default Header