import './styles/global.css'
import { useState } from 'react'

import NavigationOverlay from './components/NavigationOverlay/NavigationOverlay'

import IntroPanel from './sections/IntroPanel/IntroPanel'
import About from './sections/AboutSection/About'
import StackPanel from './sections/StackPanel/StackPanel'
import Projects from './sections/ProjectsSection/Projects'
import Footer from './sections/FooterSection/Footer'
import { Helmet } from 'react-helmet-async'

function App() {

  const [isNavOpen, setIsNavOpen] =
    useState(false)

  const [isHeroVisible, setIsHeroVisible] =
    useState(true)

  return (

    <main className="main-wrapper">

      <Helmet>

        <title>
          Duyesh | Frontend Developer
        </title>

        <meta
          name="description"
          content="Portfolio of Duyesh showcasing React development, cybersecurity projects, Excel analytics platforms, and modern frontend experiences."
        />

        <meta
          name="keywords"
          content="Duyesh, React Developer, Frontend Developer, Cybersecurity, DNS Spoofing Detection, Email Spoofing Detection, Excel Analytics Platform, Portfolio"
        />

        <meta
          property="og:title"
          content="Duyesh Portfolio"
        />

        <meta
          property="og:description"
          content="Frontend development, cybersecurity projects, data analytics platforms, and modern digital experiences."
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>

      <NavigationOverlay
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
      />

      <IntroPanel
        setIsHeroVisible={
          setIsHeroVisible
        }
      />

      {!isHeroVisible && !isNavOpen && (

        <button
          className="floating-nav-trigger"
          onClick={() =>
            setIsNavOpen(true)
          }
        >
          ◉
        </button>

      )}

      <About />
      <StackPanel />
      <Projects />
      <Footer />

    </main>

  )

}

export default App