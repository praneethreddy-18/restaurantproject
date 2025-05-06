
/*import React, { useState } from 'react';
import "../../styles/HeaderStyles.css";
import Logo from "../../mythris/mythris-logo.png";
import { Collections, ContactSupport, DeliveryDining, Home, Info, RestaurantMenu, ShoppingCartCheckout } from '@mui/icons-material';


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div >
      <header>
        <nav className='navbar' >
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar-toggle" onClick={toggleNavbar}>
            &#9776; 
          </div>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>

            <li className='Nav-item'><a href="/"><Home /> Home</a></li>
            <li className='Nav-item'><a href="/about"><Info /> About</a></li>
            <li className='Nav-item '  ><a href="/menu"><RestaurantMenu /> Menu</a></li>
            <li className='Nav-item'><a href="/gallery"><Collections /> Gallery</a></li>
            <li className='Nav-item'><a href="/contact"><ContactSupport /> Contact</a></li>
            <li className='Nav-item'><a href="https://mythris.smartonlineorder.com/"><ShoppingCartCheckout /> Order</a></li>
            <li className='Nav-item'><a href="https://www.doordash.com/store/mythri-s-indian-cuisine-irving-1340878/en-US"><DeliveryDining /> Delivery</a></li>
          </ul>
        </nav>
      </header>


    </div>
  )
} */

  /*import React, { useState, useEffect } from 'react';
  import "../../styles/HeaderStyles.css";
  import Logo from "../../mythris/mythris-logo.png";
  import { Collections, ContactSupport, DeliveryDining, Home, Info, RestaurantMenu, ShoppingCartCheckout } from '@mui/icons-material';
  
  export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div>
        <header className={isScrolled ? 'header-scrolled' : ''}>
          <nav className='navbar'>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
              &#9776; }
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li className='Nav-item'><a href="/"><Home /> Home</a></li>
              <li className='Nav-item'><a href="/about"><Info /> About</a></li>
              <li className='Nav-item'><a href="/menu"><RestaurantMenu /> Menu</a></li>
              <li className='Nav-item'><a href="/gallery"><Collections /> Gallery</a></li>
              <li className='Nav-item'><a href="/contact"><ContactSupport /> Contact</a></li>
              <li className='Nav-item'><a href="https://mythris.smartonlineorder.com/"><ShoppingCartCheckout /> Order</a></li>
              <li className='Nav-item'><a href="https://www.doordash.com/store/mythri-s-indian-cuisine-irving-1340878/en-US"><DeliveryDining /> Delivery</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  } */

    import React, { useState, useEffect } from 'react';
    import "../../styles/HeaderStyles.css";
    import Logo from "../../mythris/mythris-logo.png";
    import { Collections, ContactSupport, DeliveryDining, Home, Info, RestaurantMenu, ShoppingCartCheckout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
    
    export default function Header() {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    
      const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <div>
          <header className={isScrolled ? 'header-scrolled' : ''}>
            <nav className='navbar'>
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="navbar-toggle" onClick={toggleNavbar}>
                &#9776; {/* Hamburger icon */}
              </div>
              <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li className='Nav-item'><Link to="/"><Home />Home</Link></li>
                <li className='Nav-item'><Link to="/about"><Info /> About</Link></li>
                <li className='Nav-item'><Link to="/menu"><RestaurantMenu /> Menu</Link></li>
                <li className='Nav-item'><Link to="/gallery"><Collections /> Gallery</Link></li>
                <li className='Nav-item'><Link to="/contact"><ContactSupport /> Contact</Link></li>
                <li className='Nav-item'><Link to="https://mythris.smartonlineorder.com/"><ShoppingCartCheckout /> Order</Link></li>
                <li className='Nav-item'><Link to="https://www.doordash.com/store/mythri-s-indian-cuisine-irving-1340878/en-US"><DeliveryDining /> Delivery</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      );
    }
