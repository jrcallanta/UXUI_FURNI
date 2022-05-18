
import classes from './HotDeals.module.scss';
import { ReactComponent as DealIconThingy } from '../../../assets/svgs/evolve.svg';

function HotDeals() {
  const deals = [
    {
      title: '1.5% Cashback',
      desc: 'Online shopping for retail sales direct to consumers'
    },
    {
      title: '30-Day Terms',
      desc: 'Online shopping for retail sales direct to consumers. Online shopping for retail sales.'
    },
    {
      title: 'Save Money',
      desc: 'Online shopping for retail sales.'
    }
  ]

  return (
    <section className={classes.HotDeals}>
      <div className={classes.heading}>
        <h2 className={classes.heading__title}>
          <span>Hot </span>
          <span>deals for you</span>
        </h2>
        <p className={classes.heading__desc}>Online shoping for retail sales direct to consumers</p>
      </div>

      <div className={classes.deals}>
        {
          deals.map((deal, i) => (
            <div className={classes.deals__deal} key={i}>
              <DealIconThingy/>
              <p className={classes.deals__deal__title}>{deal.title}</p>
              <p className={classes.deals__deal__desc}>{deal.desc}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default HotDeals;
