
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { useParallax } from '../../../tools/CustomHooks.js';

import classes from './AboutUs.module.scss';

function AboutUs() {
  const facts = [
    {
      title: 'Who We Are',
      desc: 'You get a 2-week free trial to kick the Smarty tries. We want you to.'
    },
    {
      title: 'What Do We Do',
      desc: 'We give you a free course that guides you through the process'
    },
    {
      title: 'How Do We Help',
      desc: 'Use our multimedia lecturers, videos, and coaching sessions.'
    },
    {
      title: 'Create Success Story',
      desc: 'With access to online learning resources, anyone can transform.'
    },
  ]

  const imagesRef = useRef(null);
  const sectionRef = useRef(null);
  useParallax(imagesRef, sectionRef, .5);

  return (
      <section className={classes.AboutUs} ref={sectionRef}>
        <div className={classes.heading}>
          <h2 className={classes.heading__title}>About Us</h2>

          <p className={classes.heading__desc}>
            <span>At Furni, we take pride in our values </span>
            <span>- service, integrity, and excellence</span>
          </p>

          <div className={classes.heading__button}>
            <NavLink to={'../hero'}>Learn more</NavLink>
          </div>
        </div>

        <div className={classes.facts}>
          {
            facts.map((fact, i) => (
              <div className={classes.facts__fact} key={i}>
                <h5 className={classes.facts__fact__num}>{i+1}.</h5>
                <p className={classes.facts__fact__title}>{fact.title}</p>
                <p className={classes.facts__fact__desc}>{fact.desc}</p>
              </div>
            ))
          }
        </div>

        <div className={classes.images} ref={imagesRef}>
          <div>
            <div className={classes.images__image} num={'1'}>
              <img src={'/images/aboutus4.png'} alt={' '}></img>
            </div>
            <div className={classes.images__image} num={'2'}>
              <img src={'/images/aboutus3.png'} alt={' '}></img>
            </div>
          </div>
          <div >
            <div className={classes.images__image} num={'3'}>
              <img src={'/images/aboutus2.png'} alt={' '}></img>
            </div>
            <div className={classes.images__image} num={'4'}>
              <img src={'/images/aboutus1.png'} alt={' '}></img>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs;
