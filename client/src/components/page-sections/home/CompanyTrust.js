
import classes from './CompanyTrust.module.scss'
import { ReactComponent as Microsoft } from '../../../assets/svgs/trusted_companies/Microsoft.svg';
import { ReactComponent as Entrepreneur } from '../../../assets/svgs/trusted_companies/Entrepreneur.svg';
import { ReactComponent as Fortune } from '../../../assets/svgs/trusted_companies/Fortune.svg';
import { ReactComponent as BusinessWeb } from '../../../assets/svgs/trusted_companies/BusinessWeb.svg';
import { ReactComponent as Mashable } from '../../../assets/svgs/trusted_companies/Mashable.svg';

function CompanyTrust() {

  return (
    <section className={classes.CompanyTrust}>
      <p className={classes.label}>
        <span>TRUSTED BY OVER </span>
        <span>1K+ COMPANIES</span>
      </p>

      <ul className={classes.companyList}>
        <li className={classes.companyList__company}><Microsoft/></li>
        <li className={classes.companyList__company}><Entrepreneur/></li>
        <li className={classes.companyList__company}><Fortune/></li>
        <li className={classes.companyList__company}><BusinessWeb/></li>
        <li className={classes.companyList__company}><Mashable/></li>
      </ul>
    </section>
  );
}

export default CompanyTrust;
