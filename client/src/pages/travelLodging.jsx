import { HashLink } from 'react-router-hash-link'
import Footer from '../components/footer'
import flourish from '../assets/flourish.png'
import Minneapolis from '../assets/Minneapolis.png'
import Omaha from '../assets/Omaha.png'
import DesMoines from '../assets/DesMoines.png'
import lodging from '../assets/lodging.png'
import airbnb from '../assets/airbnb.png'
import hotels from '../assets/hotels.png'

function Lodging() {
  return (
    <div className="Content" id="travel-and-lodging">
      <h1>Travel & Lodging</h1>
      <img src={flourish} className='flourish'/>
      <div className='travel'>
        <h3 className='venue'>Lodging</h3>
        <p className='lodging_text'>We are so thrilled that you have chosen to join us for our wedding! If your travels bring you from afar, we've arranged a nice block of pet-friendly rooms at the Holiday Inn Express in Spencer, Iowa. Get all the deetails on this option by clicking below.</p>
        <a href='https://www.ihg.com/holidayinnexpress/hotels/us/en/spencer/spwes/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-SPWES' target="_blank" rel="noopener noreferrer">
          <img src={lodging} alt='hotel block link' className='flights_icon'/>
          <p className='address'>916 13th St SW</p>
          <p className='address'>Spencer, IA 51301</p>
          <p className='address'>712-580-2200</p>
        </a>
        <p className='lodging_text'>No more rooms left? Don't worry. Here are some more options in the area.</p>
        <div className='lodging_container'>
        <a href='https://www.tripadvisor.com/Hotels-g38410-Spencer_Iowa-Hotels.html' target="_blank" rel="noopener noreferrer">
          <img src={hotels} alt='search hotels link' className='options'/>
        </a>
        <a href='https://www.airbnb.com/spencer-ia/stays' target="_blank" rel="noopener noreferrer">
          <img src={airbnb} alt='search airbnb link' className='options'/>
        </a>
        </div>
      </div>
      <div className='travel'>
        <h3 className='venue'>Flights</h3>
        <p className='lodging_text'>Flying in for the wedding? Check out convenient flight options to either Minneapolis, Omaha or DesMoines airports by clicking on the provided links. Happy travels!</p>
        <div className='flights_container'>
          <a href='https://www.expedia.com/Cheap-Flights-To-Omaha.d2670.Travel-Guide-Flights' target="_blank" rel="noopener noreferrer">
            <img src={Omaha} alt='flights to Omaha link' className='flights_icon'/>
          </a>
          <a href='https://www.expedia.com/Cheap-Flights-To-Des-Moines.d601690.Travel-Guide-Flights' target="_blank" rel="noopener noreferrer">
            <img src={DesMoines} alt='flights to Minneapolis link' className='flights_icon'/>
          </a>
          <a href='https://www.expedia.com/Cheap-Flights-To-Minneapolis.d2426.Travel-Guide-Flights' target="_blank" rel="noopener noreferrer">
            <img src={Minneapolis} alt='flights to Minneapolis link' className='flights_icon'/>
          </a>
        </div> 
      </div>
      <div className='nav_container'>
        <HashLink to={'/#venue'} className='enter'>Back</HashLink>
        <HashLink to={'/#wedding-registry'} className='enter'>Next</HashLink>   
      </div>
      <Footer/>
    </div>
  )
}

export default Lodging