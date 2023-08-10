import css from './Header.module.css';
import logo from '../../images/logo/logo.png';
import sprite from '../../images/icons/sprite.svg';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.headerNav}>
          <img className={css.headerLogoIcon} src={logo} alt="logo" />
          <ul className={css.headerNavList}>
            <li className={css.headerNavItem}>
              <p className={css.headerNavText}>Schrägdach</p>
            </li>
            <li className={css.headerNavItem}>
              <p className={css.headerNavText}>Flachdach</p>
            </li>
            <li className={css.headerNavItem}>
              <p className={css.headerNavText}>EEG-Umlage</p>
            </li>
            <li className={css.headerNavItem}>
              <p className={css.headerNavText}>Über uns</p>
            </li>
          </ul>
          <ul className={css.headerContactList}>
            <li className={css.headerContactItem}>
              <p className={css.headerContactText}>Kontakt</p>
            </li>
            <li className={css.headerContactItem}>
              <p className={css.headerContactText}>Material</p>
            </li>
          </ul>
          <button className={css.headerBtn} type="button">
            <svg className={css.headerIcon}>
              <use href={sprite + '#icon-burger'}></use>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
