import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Stores from './components/Stores'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Stores />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
