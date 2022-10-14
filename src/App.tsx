import { AboutMe } from './components/AboutMe'
import { Banner } from './components/Banner'
import { Comments } from './components/Comments'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import './styles/global.css'

export function App() {

  return (
    <>
      <div id="noise" className="fixed inset-0 z-50 pointer-events-none opacity-20"></div>
      <Header />
      <Banner />
      <Projects />
      <AboutMe />
      <Comments />
      <Contact />
      <Footer />
    </>
  )
}