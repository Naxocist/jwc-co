import Banner from './components/Banner/Banner'
import Brands from './components/Banner/Brands'
import Section from './components/Content/Section'

import Dropdown from './components/Navbar/Dropdown'
import Navbar from './components/Navbar/Navbar'

import Offer from './components/Offer'

function App() {
  return (
    <>
      <Offer/>
      <Navbar/>
      <Dropdown/>
      <Banner/>
      <Brands/>
      <Section/>
    </>
  )
}

export default App
