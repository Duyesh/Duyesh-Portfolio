import './IntroPanel.css'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import portrait from '../../assets/images/portrait.png'

function IntroPanel({ setIsHeroVisible }) {

  const heroRef = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        setIsHeroVisible(
          entry.isIntersecting
        )

      },

      {
        threshold: 0.3
      }

    )

    if (heroRef.current) {

      observer.observe(
        heroRef.current
      )

    }

    return () => {

      if (heroRef.current) {

        observer.unobserve(
          heroRef.current
        )

      }

    }

  }, [setIsHeroVisible])

  return (

    <section
      id="hero"
      ref={heroRef}
      className="intro-panel"
    >

      {/* ========================= Navbar ========================= */}

      <motion.nav
        className="intro-navbar"

        initial={{
          opacity: 0,
          y: -30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <a href="#about"> ABOUT </a>
        <a href="#stack"> STACK </a>
        <a href="#projects"> PROJECTS </a>
        <a href="#contact"> CONTACT </a>

      </motion.nav>

      {/* ========================= Main Layout ========================= */}

      <div className="intro-layout">

        <motion.div
          className="intro-content"

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >

          <div className="intro-line"></div>

          <span className="intro-role">
            CINEMATIC FRONTEND DEVELOPER
          </span>

          <h1 className="intro-heading">
            DUYESH
          </h1>

          <p className="intro-description">

            Building immersive digital experiences
            through cinematic frontend systems,
            modern interaction design,
            and storytelling-driven interfaces.

          </p>

          <motion.button
            className="intro-button"

            whileHover={{
              y: -2
            }}

            whileTap={{
              scale: 0.98
            }}
          >
            CONTACT ME
          </motion.button>

        </motion.div>

        {/* ========================= Portrait ========================= */}

        <motion.div
          className="intro-image-area"

          initial={{
            opacity: 0,
            x: 40
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >

          <div className="intro-image-overlay"></div>

          <img
            src={portrait}
            alt="Duyesh Portrait"
            className="intro-image"
          />

        </motion.div>

      </div>

    </section>

  )

}

export default IntroPanel