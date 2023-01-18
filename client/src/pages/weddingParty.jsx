import { HashLink } from 'react-router-hash-link'
import Footer from '../components/footer'
import flourish from '../assets/flourish.png'
import maidOfHonor from '../assets/allison.png'
import bridesmaid1 from '../assets/bethany.png'
import bridesmaid2 from '../assets/hannah.png'
import bestMan from '../assets/mark.png'
import groomsman1 from '../assets/thomas.png'
import groomsman2 from '../assets/eric.png'
import ringBearer from '../assets/judah.png'
import flowerGirl from '../assets/anna.png'
import headUsher from '../assets/david.png'

function WeddingParty() {
  return (
    <div className="Content" id="wedding-party">
      <h1>Wedding Party</h1>
      <img src={flourish} className='flourish'/>
      <div className='party_container'>
      <div className="person_container">
        <img src={maidOfHonor} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Maid of Honor</p>
        <p className="person">Allison Johnson <br/><span className="italic">Sister of the Bride</span></p>
      </div>
      <div className="person_container">
      <img src={bridesmaid1} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Bridesmaid</p>
        <p className="person">Bethany Johnson <br/><span className="italic">Sister of the Bride</span></p>
      </div>
      <div className="person_container">
        <img src={bridesmaid2} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Bridesmaid</p>
        <p className="person">Hannah Smith <br/><span className="italic">Friend of the Bride</span></p>
      </div>
      <div className="person_container">
        <img src={bestMan} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Best Man</p>
        <p className="person">Mark Williams <br/><span className="italic">Brother of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={groomsman1} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Groomsman</p>
        <p className="person">Thomas Clark <br/><span className="italic">Friend of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={groomsman2} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Groomsman</p>
        <p className="person">Eric Smith <br/><span className="italic">Friend of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={ringBearer} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Ring Bearer</p>
        <p className="person">Judah Johnson <br/><span className="italic">Nephew of the Bride</span></p>
      </div>
      <div className="person_container">
        <img src={flowerGirl} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Flower Girl</p>
        <p className="person">Anna Williams <br/><span className="italic">Niece of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={headUsher} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Head Usher</p>
        <p className="person">David Jones <br/><span className="italic">Cousin of the Groom</span></p>
      </div>
      </div>
      <div className='nav_container'>
        <HashLink to={'/#welcome'} className='enter'>Back</HashLink>
        <HashLink to={'/#venue'} className='enter'>Next</HashLink>   
      </div>
      <Footer/>
    </div>
  )
}

export default WeddingParty