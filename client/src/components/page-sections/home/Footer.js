
import { NavLink } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../../assets/svgs/resources_icons/Facebook.svg';
import { ReactComponent as Twitter } from '../../../assets/svgs/resources_icons/Twitter.svg';
import { ReactComponent as LinkedIn } from '../../../assets/svgs/resources_icons/LinkedIn.svg';
import { ReactComponent as Pinterest } from '../../../assets/svgs/resources_icons/Pinterest.svg';
import classes from './Footer.module.scss';

function Footer() {
  const siteMap = [
    {
      subject: 'Entity Types',
      links: [
        'Knowledge Base',
        'Security',
        'Privacy Policy',
        'Partners',
        'About Us',
        'FAQs'
      ]
    },
    {
      subject: 'Services',
      links: [
        'Contact Us',
        'Press',
        'Payrool',
        'Library',
        'Blog',
        'Help Center'
      ]
    },
    {
      subject: 'Resources',
      links: [
        'Pricing',
        'FAQs',
        'Contact Support',
        'Privacy Policy',
        'Terms'
      ]
    },
    {
      subject: 'Support',
      links: [
        'Contact',
        'Affiliates',
        'Sitemap',
        'Cancelation Policy',
        'Pricing'
      ]
    }
  ]


  return (
    <section className={classes.Footer}>
      <div className={classes.heading}>
        <div className={classes.heading__text}>
          Start your business today for $0+ state fees.
        </div>
        <div className={classes.heading__actions}>
          <div className={classes.heading__actions__action} type={'light'}>Get Started</div>
          <div className={classes.heading__actions__action}>Contact Sales</div>
        </div>
      </div>

      <div className={classes.sitemap}>
        <div className={classes.sitemap__brand}>
          <p className={classes.title}>furni.shop</p>
          <p className={classes.desc}>Optix seamlessly connects your members with the community, resources.</p>
          <div className={classes.socials}>
            <ul className={classes.socials__list}>
              <li className={classes.socials__list__item}>
                <Facebook/>
              </li>
              <li className={classes.socials__list__item}>
                <Twitter/>
              </li>
              <li className={classes.socials__list__item}>
                <LinkedIn/>
              </li>
              <li className={classes.socials__list__item}>
                <Pinterest/>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.sitemap__map}>
          <ul className={classes.lists}>
            {
              siteMap.map((subject) => (
                <li className={classes.lists__list} key={subject.subject}>
                  <p className={classes.subject}>
                    {subject.subject}
                  </p>
                  <ul className={classes.links}>
                    {
                      subject.links.map((link) => (
                        <li className={classes.links__link} key={link}>
                          <NavLink to={'../footer'}>
                            {link}
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>

                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer;
