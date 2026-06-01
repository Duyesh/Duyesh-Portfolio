import './NavigationOverlay.css'

function NavigationOverlay({
    isOpen,
    setIsOpen
}) {

    return (

        <div
            className={
                isOpen
                    ? 'nav-overlay active'
                    : 'nav-overlay'
            }
        >

            <button
                className="nav-close"
                onClick={() =>
                    setIsOpen(false)
                }
            >
                ×
            </button>

            <div className="nav-content">

                <a
                    href="#hero"
                    onClick={() =>
                        setIsOpen(false)
                    }
                >
                    Home
                </a>

                <a
                    href="#about"
                    onClick={() =>
                        setIsOpen(false)
                    }
                >
                    About
                </a>

                <a
                    href="#stack"
                    onClick={() =>
                        setIsOpen(false)
                    }
                >
                    Stack
                </a>

                <a
                    href="#projects"
                    onClick={() =>
                        setIsOpen(false)
                    }
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    onClick={() =>
                        setIsOpen(false)
                    }
                >
                    Contact
                </a>

            </div>

        </div>

    )

}

export default NavigationOverlay