import './About.css'
import rose from '../../assets/images/rose.png'

import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'

import { useRef } from 'react'

function About() {

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      'start end',
      'end start'
    ]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [240, -240]
  )

  return (

    <section
      id="about"
      className="about-section"
      ref={sectionRef}
    >

      {/* Background Rose */}

      <motion.div

        className="about-rose-wrapper"

        animate={{
          y: [0, -15, 0]
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >

        <img
          src={rose}
          alt=""
          className="about-rose"
        />

      </motion.div>

      {/* Left Side */}

      <motion.div
        className="about-left"
        style={{ y }}

        initial={{
          opacity: 0,
          y: 40
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1]
        }}

        viewport={{ once: true }}
      >

        <div className="about-line"></div>

        <span className="about-label">
          ABOUT
        </span>

        <h2 className="about-heading">
          I BUILD EXPERIENCES,
          NOT JUST INTERFACES.
        </h2>

      </motion.div>

      {/* Right Side */}

      <motion.div
        className="about-right"
        style={{ y }}
      >

        <div className="about-text-block">

          <p>
            I focus on crafting cinematic
            frontend experiences that feel immersive,
            responsive, and emotionally engaging.
          </p>

          <p>
            My approach combines modern interaction
            design, storytelling-driven layouts,
            and clean scalable systems that elevate
            how digital products feel.
          </p>

          <p>
            I enjoy building interfaces that create
            atmosphere — where motion, typography,
            spacing, and visual rhythm work together
            to create memorable experiences.
          </p>

        </div>

        <motion.button
          className="about-button"

          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=duyashp@gmail.com&su=Let's%20Build%20Something%20Together",
              "_blank"
            )
          }
        >
          LET'S BUILD SOMETHING
        </motion.button>

      </motion.div>

    </section>

  )

}

export default About