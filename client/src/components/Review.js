import classes from './Review.module.scss';

function Review(props) {

  return (
    <div className={classes.Review}>
      <div className={classes.leftSide}>
        <div className={classes.Review__image}>
          <img src={props.imageURL} alt={props.imageURL}/>
        </div>
      </div>

      <div className={classes.rightSide}>
        <div className={classes.Review__text}>
          <p className={classes.Review__title}>{props.title}</p>
          <p className={classes.Review__desc}>{props.desc}</p>
          <div className={classes.Review__reviewer}>
            <p className={classes.Review__reviewer__name}>
              {props.reviewer.name}
            </p>
            {props.reviewer.title &&
              <p className={classes.Review__reviewer__title}>
                {props.reviewer.title}
              </p>
            }
          </div>
          <div className={classes.spacer}></div>
        </div>
      </div>
    </div>
  )
}

export default Review;
