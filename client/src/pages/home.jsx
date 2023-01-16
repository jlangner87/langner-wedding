import Header from "../components/header"
import Welcome from "./welcome"
import WeddingParty from "./weddingParty"
import Venue from "./venue"
import Lodging from "./travelLodging"
import Registry from "./giftRegistry"
import RSVP from "./rsvp"
import ContactUs from "./contactUs"

function Home() {
  return (
    <div className="Home">
      <Header/>
      <Welcome/>
      <WeddingParty/>
      <Venue/>
      <Lodging/>
      <Registry/>
      <RSVP/>
      <ContactUs/>
    </div>
  )
}

export default Home