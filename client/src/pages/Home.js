import { useRef } from 'react';
import Scroll, { Element } from 'react-scroll';
import { useScrollToListener } from '../tools/CustomHooks';

import Hero from '../components/page-sections/home/Hero';
import CompanyTrust from '../components/page-sections/home/CompanyTrust';
import HotDeals from '../components/page-sections/home/HotDeals';
import AboutUs from '../components/page-sections/home/AboutUs';
import Products from '../components/page-sections/home/Products';
import Reviews from '../components/page-sections/home/Reviews';
import Footer from '../components/page-sections/home/Footer';

import classes from './Home.module.scss';


function Home (props) {
  const homeRef = useRef(null);
  const handleSetActive = (e) => {
    console.log(e)
  }


  useScrollToListener(Scroll, homeRef, {
    defaultOptions: {
      spy: true,
      smooth: true,
      duration: 1000,
      offset: 0,
      onSetActive: handleSetActive,
    },
    customOptions: {
      'hero': { offset: 0, dontScrollIfShown: true},
      'products': { offset: 0, dontScrollIfShown: true},
      'reviews': { offset: 0},
    }
  });
  

  return (
    <div className={classes.Home} ref={homeRef}>
      <Element name='hero'><Hero/></Element>
      <Element name='companytrust'><CompanyTrust/></Element>
      <Element name='hotdeals'><HotDeals/></Element>
      <Element name='aboutus'><AboutUs/></Element>
      <Element name='products'><Products/></Element>
      <Element name='reviews'><Reviews/></Element>
      <Element name='footer'><Footer/></Element>
    </div>
  );
}

export default Home;
