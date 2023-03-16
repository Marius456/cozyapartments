import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Gallery } from "./components/Gallery"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Gallery />
      <About/>
      <Banner/>
    </>
  )
}

export default App
