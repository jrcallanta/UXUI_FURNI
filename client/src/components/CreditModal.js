import { useState, useEffect } from 'react';
import classes from './CreditModal.module.scss';

function CreditModal(props) {
  const hide = (props.useStorage)
    ? localStorage.getItem('hide')
    : false;

  const [showModal, setShowModal] = useState(!hide);

  const hideModal = () => {
    setShowModal(false);
    const body = document.body;
    body.style.height = 'revert';
    body.style.overflowY = 'revert';
    if (props.useStorage) localStorage.setItem('hide', true);
  }


  useEffect(() => {
    if(!hide) {
      const body = document.body;
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    }
  }, [hide])


  return (!showModal)
    ? ''
    : (
    <div className={classes.CreditModal}>
      <div className={classes.modal}>
        <div className={classes.disclaimer}>
          <h2 className={classes.title}>
            Thanks for viewing!
          </h2>

          <h3 className={classes.subtitle}>
            This is not my design.
          </h3>

          <p className={classes.desc}>
            Before showing the site, I'd first like to give credit to the individual who created/inspired this beaufiful design.
          </p>
        </div>

        <div className={classes.credits}>
          <span>
            <p className={classes.designer}>owner:</p>
            <a href={'https://dribbble.com/arshakir'} target={'_blank'} rel={'noreferrer'}>
              @ARShakir
            </a>
          </span>

          <span>
            <p className={classes.design}>link:</p>
            <a href={'https://dribbble.com/shots/16169012-website-landing-page-design'} target={'_blank'} rel={'noreferrer'}>
              https://dribbble.com/shots/16169012-website-landing-page-design
            </a>
          </span>
        </div>

        <div className={classes.acknowledge} onClick={hideModal}>
          continue to site
        </div>
      </div>
    </div>
  )
}

export default CreditModal;
