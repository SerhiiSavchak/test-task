import css from './Header.module.css';
import logo from '../../images/logo/logo.png';
import sprite from '../../images/icons/sprite.svg';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.headerNav}>
          <img className={css.headerLogoIcon} src={logo} alt="logo" />
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
