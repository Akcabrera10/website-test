import React, { useState, useEffect } from 'react';
import './App.css';
import Popup from "./popup";

function App() {
    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };
    const homeRef = React.useRef(null);
    const workRef = React.useRef(null);
    const aboutRef = React.useRef(null);
    const [activeSection, setActiveSection] = React.useState("home");
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showP, setShowP] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const [displayList, setDisplayList] = useState(false);
    const [showFooterNavbar, setShowFooterNavbar] = useState(false); // Added state variable for footer navbar
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [showAbout, setShowAbout] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("none");

    useEffect(() => {
      let prevScrollPos = window.pageYOffset;
    
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
    
        if (prevScrollPos > currentScrollPos) {
          setScrollDirection("up");
        } else if (prevScrollPos < currentScrollPos) {
          setScrollDirection("down");
        }
    
        prevScrollPos = currentScrollPos;
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    


    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
    }
  
    const workItems = [
        { src: '/images/glove.png', label: 'Sign-to-Speech Glove' },
        { src: '/images/inventory.png', label: 'Inventory System Application' },
        { src: '/images/sensor.png', label: 'IoT Weathering System' },
        { src: '/images/psupply.png', label: 'Variable Power Supply' },
        { src: '/images/portfolio.png', label: 'Personal Website'},
      ];

    React.useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
      
          const homeTop = homeRef.current.offsetTop;
          const homeHeight = homeRef.current.offsetHeight;
          const homeBottom = homeTop + homeHeight;
      
          const workTop = workRef.current.offsetTop;
          const workHeight = workRef.current.offsetHeight;
          const workBottom = workTop + workHeight;
      
          const aboutTop = aboutRef.current.offsetTop;
          const aboutHeight = aboutRef.current.offsetHeight;
          const aboutBottom = aboutTop + aboutHeight;
      
          if (
            scrollY >= homeTop - windowHeight / 2 &&
            scrollY < homeBottom - windowHeight / 2
          ) {
            setActiveSection("home");
            setShowFooterNavbar(true);
          } else if (
            scrollY >= workTop - windowHeight / 2 &&
            scrollY < workBottom - windowHeight / 2
          ) {
            setActiveSection("work");
            setShowFooterNavbar(false);
          } else if (
            scrollY >= aboutTop - windowHeight / 2 &&
            scrollY < aboutBottom - windowHeight / 2
          ) {
            setActiveSection("about");
            setShowFooterNavbar(true);
          } else {
            setActiveSection(null);

          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      

    useEffect(() => {
        const text = "Hello.  My name is Arvyn.";
        const timer = setInterval(() => {
            setCurrentText(text.slice(0, currentIndex + 1));
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100);

        return () => clearInterval(timer);
    }, [currentIndex]);


    useEffect(() => {
        if (currentIndex === text.length) {
            setTimeout(() => {
                setShowP(true);
                setShowFooterNavbar(true);

            }, 1000); // set the delay for 1 second
        }
    }, [currentIndex]);

    useEffect(() => {
      const handleScroll = () => {
        const workTop = workRef.current.offsetTop;
        const workHeight = workRef.current.offsetHeight;
        const aboutTop = aboutRef.current.offsetTop;
        const aboutHeight = aboutRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
    
        if (scrollTop >= workTop - windowHeight + workHeight / 2) {
          setShowWork(true);
        }
    
        if (scrollTop >= aboutTop - windowHeight + aboutHeight / 2) {
          setShowAbout(true);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    const text = "ARVYN CABRERA";

    useEffect(() => {
        if (showWork) {
          setTimeout(() => {
            const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
            let i = 0;
            const timer = setInterval(() => {
              setDisplayList((prevDisplay) => {
                const newText = prevDisplay + listItems[i] + ' ';
                if (i >= listItems.length - 1) clearInterval(timer);
                i++;
                return newText;
              });
            }, 50);
          }, 100);
        }
      }, [showWork]);


      useEffect(() => {
        if (popupOpen) {
          // prevent scrolling
          document.body.style.overflow = 'hidden';
        } else {
          // enable scrolling
          document.body.style.overflow = 'auto';
        }
      }, [popupOpen]);
      
    return (
        <><div className="App"> 
        <nav className={`navbar ${scrollDirection === "down" ? "hidden" : "visible"}`}>
        <div className="navbar-left">
          <span className="logo" onClick={() => window.location.href = '/'}></span>
        </div>
        <div className="navbar-right">
          {window.innerWidth > 1080 ? (
            <ul>
              <li className={activeSection === "home" ? "active" : ""} onClick={() => scrollToRef(homeRef)}>Home</li>
              <li className={activeSection === "work" ? "active" : ""} onClick={() => scrollToRef(workRef)}>About</li>
              <li className={activeSection === "about" ? "active" : ""} onClick={() => scrollToRef(aboutRef)}>Projects</li>
            </ul>
          ) : (
            <div className="hamburger-menu" onClick={handleMenuToggle}>
              <div className={`hamburger-menu-icon ${showMenu ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {showMenu && (
                <div className="hamburger-menu-dropdown">
                  <ul>
                    <li onClick={() => scrollToRef(homeRef)}>Home</li>
                    <li onClick={() => scrollToRef(workRef)}>About</li>
                    <li onClick={() => scrollToRef(aboutRef)}>Projects</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
            <div ref={homeRef} className="section1">
                <h2>{currentText}</h2>
                {showP && (<p className="float-text">i like creating things. </p>)}
                
            </div>
            <div ref={workRef} className="section">
            {showWork && (<h2 className="float-text2 sech2">About Me.</h2>)}
            {showWork && (<p className="float-text2 secp2">I'm a recent graduate of computer engineering technology from Conestoga College. I'm a self-taught person and I love learning new technologies as soon as I hear about them! I have great interest in embedded systems and web development. </p>)}
            <br></br>
            {showWork && (<p className="float-text2 secp3">Technologies I've been working with:</p>)}
            <br></br>
            <div className="icon-list-container">
            {displayList && (
              <ul className="icon-list">
                <li className = "secp4">Front-end Development</li>
                <li><span className="icon icon-html"></span> HTML</li>
                <li><span className="icon icon-css"></span> CSS</li>
                <li><span className="icon icon-js"></span> JavaScript</li>
                <li><span className="icon icon-react"></span> React</li>
              </ul>
            )}
            {displayList && (
              <ul className="icon-list">
                <li className = "secp4"> Back-end Development</li>
                <li><span className="icon icon-node"></span> Node.js</li>
                <li><span className="icon icon-php"></span> PHP</li>
                <li><span className="icon icon-git"></span> Git/GitHub</li>
                <li><span className="icon icon-mysql"></span> MySQL</li>
              </ul>
            )}
            {displayList && (
              <ul className="icon-list">
                <li className = "secp4">Firmware & Others</li>

                <li><span className="icon icon-c"></span> C</li>
                <li><span className="icon icon-csharp"></span> C#</li>
                <li><span className="icon icon-python"></span> Python</li>
              </ul>
            )}
          </div>
            </div>
            <div ref={aboutRef} className="section3">
              {showAbout &&( 
            <><div className="work-images" style={{ width: "60%" }}>
              {activeImage && <img className="float-text2" src={process.env.PUBLIC_URL + activeImage.src} alt={activeImage.label} key={activeImage.src} />}
            </div><div className="work-list">
                <h2 className="sech3">My Projects.</h2>
                <ol>
                  {workItems.map((item, index) => (
                    <li key={index} onMouseOver={() => setActiveImage(item)} onClick={() => {
                      setSelectedItem(item.label);
                      setPopupOpen(true);
                    } }>
                      {item.label}
                    </li>
                  ))}
                </ol>
              </div></>
          )}
            </div>

            {popupOpen && <Popup onClose={() => setPopupOpen(false)} label={selectedItem} />}
            {showFooterNavbar && (<nav className="footer-navbar">
            <div className="footer-navbar-left">
                    <span className="logo2">&copy; 2023 Arvyn Cabrera</span>
                </div>
                <div className="footer-navbar-right">
                <ul class="social-links">
                  <li><a href="https://www.instagram.com/arvynkristian"><i class="fab icon-instagram"></i><span>Instagram</span></a></li>
                  <li><a href="https://www.linkedin.com/in/akcabrera/"><i class="fab icon-linkedin"></i><span>LinkedIn</span></a></li>
                  <li><a href="https://www.github.com/akcabrera10"><i class="fab icon-github"></i><span>GitHub</span></a></li>
                </ul>

            </div>
          </nav> )}
        </div></>
    );
}

export default App;

