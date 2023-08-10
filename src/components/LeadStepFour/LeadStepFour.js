import css from './LeadStepFour.module.css';
import sprite from '../../images/icons/sprite.svg';

export const LeadStepFour = ({ step, setStep, stepInfo, setStepInfo }) => {
  const onItemClick = evt => {
    setStep(step + 1);
    setStepInfo({ ...stepInfo, stepFour: evt.currentTarget.id });
  };

  return (
    <>
      <h2 className={css.stepFourTitle}>
        Wann wurde dein Dach gebaut/saniert?
      </h2>
      <ul className={css.stepFourList}>
        <li
          className={css.stepFourItem}
          onClick={onItemClick}
          id="Vor dem Jahr 2000"
        >
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-12'}></use>
          </svg>

          <p className={css.stepFourText}>Vor dem Jahr 2000</p>
        </li>

        <li
          className={css.stepFourItem}
          onClick={onItemClick}
          id="Nach dem Jahr  2000"
        >
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-13'}></use>
          </svg>

          <p className={css.stepFourText}>Nach dem Jahr  2000</p>
        </li>

        <li className={css.stepFourItem} onClick={onItemClick} id="Vor Kurzem">
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-14'}></use>
          </svg>

          <p className={css.stepFourText}>Vor Kurzem</p>
        </li>

        <li className={css.stepFourItem} onClick={onItemClick} id="In Planung">
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-15'}></use>
          </svg>

          <p className={css.stepFourText}>In Planung</p>
        </li>
      </ul>
    </>
  );
};
