import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Research from './components/Research.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main className="u-container">
        <About />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
