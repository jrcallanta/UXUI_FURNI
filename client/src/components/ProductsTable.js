import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParamListener } from '../tools/CustomHooks';
import { items } from '../store/DummyDatabase';
import ItemCard from './ItemCard';
import classes from './ProductsTable.module.scss';

const NAV_ITEMS = ['all', 'bed', 'sofa', 'chair', 'light'];

function ProductsTable(props) {
  const category = useSearchParamListener({searchParam: 'category', defaultParam: 'all'});
  const displayedItems = useProcessItemsByCategory(items, category);
  const tableNavItems = getNavItemObjects()


  function getNavItemObjects() {
    return NAV_ITEMS.map((item) => {
      item = item.toLowerCase();
      return {
        key: item,
        absolutePath: `${props.currentPath}?category=${item}`
      };
    });
  }


  return (
    <div className={classes.ProductTable}>
    <div className={classes.nav}>
      <ul className={classes.nav__items}>
        {
          tableNavItems.map((navItem,i) => {
            return <li className={classes.nav__items__item} key={navItem.key}>
              <Link to={navItem.absolutePath} className={navItem.key === category ? `${classes.active}` : ''} >
                {navItem.key}
              </Link>
            </li>
          })
        }
      </ul>
    </div>

    <div className={classes.display}>
      {
        displayedItems.map((item) => (
          <div className={classes.display__item} key={item._id}>
            <ItemCard
              name={item.name}
              discount_price={item.discount_price}
              price={item.price}
              imageURL={item.imageURL}
            />
          </div>
        ))
      }
      {
        displayedItems.length === 0 &&
        <p className={classes.display__empty}>
          <span>Our <span className={classes.category}>{category?.toLowerCase()}</span> inventory has been sold out!</span>
          <span>We hope to stock up soon.</span>
        </p>
      }
    </div>
  </div>
  )
}

export default ProductsTable;




/*** Custom Hooks Specific To This Component *********************************/


// Listens to location to extract category being searched
//  RETURNS: dynamic category variable of string type
// const useCategoryListener = () => {
//   const location = useLocation();
//   const [category, setCategory] = useState(null);
//
//   useEffect(() => {
//     const { search } = location;
//     let ind = search.indexOf('=');
//     const category = (ind < 0) ? 'all' : search.substring(ind+1);
//     setCategory(category)
//   }, [location])
//
//   return category;
// }

// Listens to changes in category paramater, updates items accordingly
//  RETURNS: dynamic item list variable of [object] type
const useProcessItemsByCategory = (items, category) => {
  const [displayedItems, setDisplayedItems] = useState([])

  useEffect(() => {
    const filteredItems = category === "all"
      ? items
      : items.filter((item) => item.category === category);

    setDisplayedItems(filteredItems);
  }, [items, category])

  return displayedItems;
}
