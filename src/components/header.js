import { NavLink } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import styles from '../styles/header.module.css';

const Header = () => (
  <div className={styles.display__flex}>
    <NavLink to="/">
      <MdChevronLeft size={45} />
      {' '}
    </NavLink>

    <div className={styles.header}>
      <h1 className={styles.page__header}>Country Statistics</h1>
    </div>
    <div className={styles.icons}>
      <FaMicrophone size={20} />
      <FaCog size={20} />
    </div>
  </div>
);

export default Header;
