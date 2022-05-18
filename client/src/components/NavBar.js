import classes from './NavBar.module.scss';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg';
import { ReactComponent as MenuIcon } from '../assets/svgs/menu.svg';
import { ReactComponent as DropIcon } from '../assets/svgs/carrot_arrow.svg';

function NavBar(props) {
  const tabs = [
    {to: '/home', display: 'Home'},
    {to: '/about', display: 'About'},
    {to: '/features', display: 'Features'},
    {to: '/contact', display: 'Contact'},
  ]
  const navbarRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    if(!props.fixed) return;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if(currentScrollPos === 0 && navbarRef.current) {
        navbarRef.current.style.display = 'none';
      }

      const scrollUp = prevScrollPos > currentScrollPos;
      const atTop = currentScrollPos < 80;

      setIsVisible((scrollUp && !atTop) || (atTop && isVisible));
      if(!isVisible && !atTop && navbarRef.current) {
        navbarRef.current.style.display = 'flex'
      }

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); }
  }, [prevScrollPos, isVisible, props])


  function activeClass({isActive}) {
    return isActive
      ? `${classes.active}`
      : null;
  }


  const navbarStyle = isVisible
    ? `${classes.NavBar}`
    : `${classes.NavBar} ${classes.hidden}`


  return (
      <div className={navbarStyle} ref={navbarRef} type={props.fixed ? 'fixed' : 'default'}>
        <h1 className={classes.NavBar__brand}>furni.shop</h1>

        <ul className={classes.NavBar__links}>
          {
            tabs.map((tab) => (
              <li className={classes.NavBar__links__link} key={tab.display}>
                <NavLink to={tab.to} className={activeClass}>{tab.display}</NavLink>
              </li>
            ))
          }
          <div className={classes.dropdownButton}>
            <DropIcon/>
          </div>
        </ul>


        <div className={classes.NavBar__actions}>
          <div className={classes.searchButton}>
            <SearchIcon />
          </div>
          <div className={classes.menuButton}>
            <MenuIcon />
          </div>
        </div>

      </div>
  );
}

export default NavBar;
