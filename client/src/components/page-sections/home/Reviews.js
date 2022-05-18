import { useState, useEffect } from 'react';
import { ReactComponent as Rings } from '../../../assets/svgs/rings.svg';
import { ReactComponent as Arrow } from '../../../assets/svgs/arrow_short_dark.svg';
import Review from '../../Review';

import { reviews } from '../../../store/DummyDatabase';
import classes from './Reviews.module.scss';

function Reviews() {
  const [index, setIndex] = useState(reviews?.length > 0 ? 0 : -1);

  useEffect(() => {
    const reviewsSlider = document.querySelector(`.${classes.reviews}`);
    const size = document.querySelector(`.${classes.reviewContainer}`).clientWidth;;

    reviewsSlider.style.transition = '1s transform ease-in-out';
    reviewsSlider.style.transform = 'translateX(' + (-size * index) + 'px)';

  }, [index])


  const incIndex = () => setIndex((prev) => {
    return (prev + 1 >= reviews.length) ? 0 : prev + 1;
  });


  const decIndex = () => setIndex((prev) => {
    return (prev - 1 < 0) ? reviews.length - 1 : prev - 1;
  });


  return (
    <section className={classes.Reviews}>
      <div className={classes.container}>
        <div className={classes.rings}>
          <Rings/>
        </div>

        <div className={classes.heading}>
          <h2 className={classes.heading__title}>
            What Our Happy Clients Say
          </h2>

          <p className={classes.heading__desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt repudiandae culpa laborum voluptates, asperiores ipsa fugiat aut sapiente facilis assumenda. Dolor minus aliquid doloribus, labore repudiandae. Autem temporibus, eum tempora.
          </p>
        </div>


        <div className={classes.display}>
          <div className={classes.window}>
            <div className={classes.reviews}>
              {
                reviews.map((review) => (
                  <div className={classes.reviewContainer} key={review._id} >
                    <Review
                      imageURL={review.imageURL}
                      title={review.title}
                      desc={review.desc}
                      reviewer={review.reviewer}
                    />
                  </div>
                ))
              }
            </div>
            <div className={classes.control}>
              <div className={classes.control__button} onClick={decIndex}><Arrow/></div>
              <div className={classes.control__button} onClick={incIndex}><Arrow/></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Reviews;
