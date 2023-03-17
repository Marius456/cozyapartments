import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Gallery } from "./components/Gallery"
import { Navbar } from "./components/Navbar"
import { NearbyPlaces } from "./components/NearbyPlaces"
import { Testimonials } from "./components/Testimonials"

function App() {

  return (
    <>
      <Navbar />
      <Gallery />
      <About/>
      <Banner/>
      <NearbyPlaces/>
      <Testimonials/>
    </>
  )
}

export default App
