import { HashLink } from 'react-router-hash-link'
import flourish from '../assets/flourish.png'
import venuemap from '../assets/venuemap.png'

function Venue() {
  return (
    <div className="Content" id="venue">
      <h1>The Venue</h1>
      <img src={flourish} className='flourish'/><br/>
      <p className='content_text'>
        Both the ceremony and the reception will be held at Oneota Park in Spencer, Iowa.
        The ceremony will be held outdoors in the south garden, and the reception will be held in the cabin and on the terrace.<br/>
        Free parking is available onsite.<br/>
        Restrooms are available in the cabin.
      </p>
      <div className='map_container'>
        <h3 className='venue'>Oneota Park</h3>
        <p className='address'>420 10th Ave SE</p>
        <p className='address'>Spencer, IA 51301</p>
        <a href='https://goo.gl/maps/AX86oDHtyqmxcWWq5' target="_blank" rel="noopener noreferrer"><img src={venuemap} alt="map to wedding venue" className='map'/></a>
        <p className='notation'>Click the map to open GPS</p>
      </div>
      <div className='nav_container'>
        <HashLink to={'/#wedding-party'} className='enter'>Back</HashLink>
        <HashLink to={'/#travel-and-lodging'} className='enter'>Next</HashLink>   
      </div>
 
    </div>
  )
}

export default Venue