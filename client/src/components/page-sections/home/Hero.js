import { useRef } from 'react';
import { useParallax } from '../../../tools/CustomHooks.js';

import NavBar from '../../../components/NavBar';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Dots } from '../../../assets/svgs/dots.svg';
import { ReactComponent as DownArrow } from '../../../assets/svgs/arrow.svg';
import { ReactComponent as CarouselArrow } from '../../../assets/svgs/carrot_arrow.svg';
import classes from './Hero.module.scss';

function Hero(props) {
  const containerRef = useRef(null);
  const glassBoxRef = useRef(null);
  const dotsRef = useRef(null);
  const miniGlassBoxRef = useRef(null);
  const carouselControlRef = useRef(null);

  useParallax(glassBoxRef, containerRef, .45);
  useParallax(miniGlassBoxRef, containerRef, .15);
  useParallax(dotsRef, containerRef, .85);
  useParallax(carouselControlRef, containerRef, .25);

  const clickChild = (elem) => {
    elem.target.querySelector('a')?.click();
  }

  return (
    <div ref={containerRef}>
      <NavBar fixed={false}/>

      <section className={classes.Hero}>
        <div className={classes.clipper}>
          <div></div>
        </div>

        <div className={classes.glassBox} ref={glassBoxRef}>
          <h1>We Help You Make Modern Interior</h1>
          <p>We will help you to make an elgant and luxurious interior designed by professional interior designers.</p>
        </div>

        <div className={classes.dots} ref={dotsRef}>
          <Dots/>
        </div>

        <div className={classes.miniGlassBox} onClick={clickChild} ref={miniGlassBoxRef}>
          <NavLink to={'../aboutus'}>
            <DownArrow/>
          </NavLink>
        </div>


        <div className={classes.carouselControl} ref={carouselControlRef}>
          <div className={classes.carouselControl__buttons}>
            <div className={classes.button}>
              <CarouselArrow/>
            </div>
            <div className={classes.button}>
              <CarouselArrow/>
            </div>
          </div>

          <div className={classes.carouselControl__indicator}>
            <p className={classes.carouselControl__indicator__number}>{'01'}</p>
            <div></div>
            <p className={classes.carouselControl__indicator__number}>{'06'}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
