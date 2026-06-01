import './Projects.css'
import { useState, useEffect } from 'react'
import projectsData from '../../data/projectsData'

function Projects() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideDirection, setSlideDirection] = useState('next')
    const activeProject = projectsData[activeIndex]
    const slideDuration = 7000

    useEffect(() => {
        
        setCurrentSlide(0)

    }, [activeIndex])

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide((prev) =>

                prev ===
                activeProject.screenshots.length - 1

                    ? 0

                    : prev + 1

            )

        }, slideDuration)

        return () => clearInterval(interval)

    }, [activeProject, currentSlide])

    return (

        <section id="projects" className="projects-section">

            <div className="projects-header">

                <span className="projects-label">
                    SELECTED WORK
                </span>

                <h2 className="projects-heading">
                    PROJECTS
                </h2>

            </div>

            <div className="projects-showcase">

                {/* ========================= LEFT ========================= */}

                <div className="project-content">

                    <span className="project-category">
                        {activeProject.category}
                    </span>

                    <h3
                        key={activeProject.id}
                        className="project-title"
                    >
                        {activeProject.title}
                    </h3>

                    <p
                        key={`${activeProject.id}-desc`}
                        className="project-description"
                    >
                        {activeProject.description}
                    </p>

                    <div className="project-tech">

                        {activeProject.tech.map((item) => (

                            <span
                                key={item}
                                className="tech-pill"
                            >
                                {item}
                            </span>

                        ))}

                    </div>

                    <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="github-button"
                    >
                        VIEW GITHUB
                    </a>

                </div>

                {/* ========================= RIGHT ========================= */}
                
                <div className="project-right">

                    <div className="project-preview">

                        <div className="story-progress">

                            {activeProject.screenshots.map((_, index) => (

                                <div key={index} className="progress-line">

                                    <div
                                        className={

                                            index < currentSlide
                                                ? 'progress-fill completed'

                                                : index === currentSlide
                                                ? 'progress-fill active'

                                                : 'progress-fill'

                                        }
                                        style={{
                                            animationDuration:
                                                `${slideDuration}ms`
                                        }}
                                    />

                                </div>

                            ))}

                        </div>

                        <button
                            className="preview-arrow left"
                            onClick={() => {

                                setSlideDirection('prev')

                                setCurrentSlide(

                                    currentSlide === 0
                                        ? activeProject.screenshots.length - 1
                                        : currentSlide - 1
                                
                                )
                            }}
                        >
                            ←
                        </button>

                        <div
                            className="image-track"
                            style={{
                                transform:
                                    `translateX(-${currentSlide * 100}%)`
                            }}
                        >

                            {activeProject.screenshots.map((image, index) => (

                                <img
                                    key={index}
                                    src={image}
                                    alt=""
                                />

                            ))}

                        </div>

                        <button
                            className="preview-arrow right"
                            onClick={() => {

                                setSlideDirection('next')

                                setCurrentSlide(

                                    currentSlide ===
                                    activeProject.screenshots.length - 1
                                        ? 0
                                        : currentSlide + 1

                                )
                            }}> →
                        </button>
                    </div>

                    {/* ========================= PROJECT SWITCHER ========================= */}

                    <div className="project-selector">

                        {projectsData.map((project, index) => (

                            <button
                                key={project.id}
                                className={
                                    activeIndex === index
                                        ? 'selector-card active'
                                        : 'selector-card'
                                }
                                onClick={() =>
                                    setActiveIndex(index)
                                }
                            >

                                {project.title}

                            </button>

                        ))}

                    </div>

                </div>
            </div>

        </section>

    )

}

export default Projects