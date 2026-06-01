import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import { motion } from 'framer-motion'

function Footer() {

    return (

        <footer id="contact" className="footer-section">

            <motion.h2 className="footer-heading hero-heading"

                initial={{
                    opacity: 0,
                    y: 40
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                }}

                viewport={{ once: true }}
            >
                LET&apos;S CREATE
            </motion.h2>



            <motion.p className="footer-text"

                initial={{
                    opacity: 0,
                    y: 30
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                }}

                viewport={{ once: true }}
            >
                Building immersive digital experiences
                through motion, interaction, and cinematic
                visual storytelling.
            </motion.p>

            <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=duyashp@gmail.com"
                target="_blank"
                rel="noreferrer"

                className="footer-contact"

                initial={{
                    opacity: 0,
                    y: 30
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                }}

                viewport={{ once: true }}
            >
                CONTACT ME
            </motion.a>



            <div className="footer-bottom">

                <span>
                    © 2026 DUYESH
                </span>

                <div className="footer-links">

                    <a
                        href="https://www.instagram.com/duyeshp_03?igsh=ajI1ZHN5cmh0NG11"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                        <span>INSTAGRAM</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/duyesh-p-3636792a3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                        <span>LINKEDIN</span>
                    </a>

                    <a
                        href="https://github.com/Duyesh"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                        <span>GITHUB</span>
                    </a>

                </div>

            </div>

        </footer>

    )

}

export default Footer