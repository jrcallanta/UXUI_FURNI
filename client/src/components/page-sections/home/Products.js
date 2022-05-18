import { ReactComponent as Arrow } from '../../../assets/svgs/arrow_dark.svg';

import ProductsTable from '../../ProductsTable';

import classes from './Products.module.scss';

function Products() {
  const productsTablePath = `/home/products`
  return (
    <section className={classes.Products}>
      <div className={classes.heading}>
        <h2 className={classes.heading__title}>
          Products
        </h2>

        <div className={classes.heading__button}>
          <p className={classes.heading__button__text}>See All</p>
          <div className={classes.heading__button__icon}>
            <Arrow/>
          </div>
        </div>
      </div>

      <div className={classes.table}>
        <ProductsTable currentPath={productsTablePath}/>
      </div>
    </section>
  );
}

export default Products;
