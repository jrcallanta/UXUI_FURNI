import { ReactComponent as CartIcon } from '../assets/svgs/shopping_cart.svg';

import classes from './ItemCard.module.scss';

function ItemCard(props) {


  const retailPriceClass = (props.discount_price)
    ? `${classes.ItemCard__prices__retail} ${classes.crossed}`
    :`${classes.ItemCard__prices__retail}`

  return (
    <div className={classes.ItemCard}>
      <div className={classes.ItemCard__button}>
        <CartIcon/>
      </div>

      <p className={classes.ItemCard__name}>{props.name}</p>

      <div className={classes.ItemCard__prices}>
        {props.discount_price && <p className={classes.ItemCard__prices__discount}>${props.discount_price}</p>}
        <p className={retailPriceClass}>${props.price}</p>
      </div>

      <div className={classes.ItemCard__image}>
        <img src={props.imageURL} alt={props.imageURL}/>
      </div>
    </div>
  );
}

export default ItemCard;
