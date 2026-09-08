import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Research from './components/Research.jsx'
import Background from './components/Background.jsx'
import OtherWork from './components/OtherWork.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Research />
        <Background />
        <OtherWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
