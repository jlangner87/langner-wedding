import About from "./about"
import Contact from "./contact"
import Gallery from "./gallery"
import { HashLink } from "react-router-hash-link"

function Home() {
  return (
    <div className="page">
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default Home