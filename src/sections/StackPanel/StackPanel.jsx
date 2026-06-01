import './StackPanel.css'
import { motion } from 'framer-motion'
import globe from '../../assets/images/globe.png'

function StackPanel() {

  const stacks = [
    'React',
    'JavaScript',
    'Framer Motion',
    'CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'Figma',
    'Vite',
    'Blender',
    'Responsive UI' ]

  return (
    <section  id="stack" className="stack-panel">

      <div className="stack-globe-wrapper">

        <motion.img
          src={globe}
          alt=""
          className="stack-globe"

          animate={{
            rotate: [0, 360],
            scale: [1, 1.03, 1]
          }}

          transition={{
            rotate: {
              duration: 90,
              repeat: Infinity,
              ease: "linear"
            },

            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />

      </div>
      
      {/* ========================= Heading ========================= */}
      <motion.div className="stack-heading-wrapper"
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
        
        <div className="stack-line"></div>
        <span className="stack-label"> STACK </span>
        <h2 className="stack-heading">
          MY DIGITAL
          ECOSYSTEM
        </h2>
      </motion.div>
      
      {/* ========================= Core Box ========================= */}
      <div className="stack-core-wrapper">
        <motion.div className="stack-core"
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          
          viewport={{ once: true }}
        >
          CORE
        </motion.div>
        
        {/* ========================= Stack Items ========================= */}
        <div className="stack-grid">
          {
            stacks.map((item, index) => (
              <motion.div key={index} className="stack-item"
                initial={{ 
                  opacity: 0, 
                  y: 80,
                  scale: 0.8
                }}
                
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                
                viewport={{ once: true }}
              >
                {item}
              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  )

}

export default StackPanel