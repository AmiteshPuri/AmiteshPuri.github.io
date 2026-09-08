import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Reports from './components/Reports.jsx'
import Code from './components/Code.jsx'
import Background from './components/Background.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main className="u-container">
        <About />
        <Reports />
        <Code />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
