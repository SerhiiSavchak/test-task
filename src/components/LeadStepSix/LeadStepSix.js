import css from './LeadStepSix.module.css';
import sprite from '../../images/icons/sprite.svg';

export const LeadStepSix = ({ step, setStep, stepInfo, setStepInfo }) => {
  const onItemClick = evt => {
    setStep(step + 1);
    setStepInfo({ ...stepInfo, stepSix: evt.currentTarget.id });
  };

  return (
    <>
      <h2 className={css.stepSixTitle}>
        Wäre ein Speicher für dich interessant?
      </h2>
      <ul className={css.stepSixList}>
        <li className={css.stepSixItem} onClick={onItemClick} id="Ja">
          <svg className={css.stepSixIcon}>
            <use href={sprite + '#icon-house-16'}></use>
          </svg>

          <p className={css.stepSixText}>Ja</p>
        </li>

        <li className={css.stepSixItem} onClick={onItemClick} id="Nein">
          <svg className={css.stepSixIcon}>
            <use href={sprite + '#icon-house-17'}></use>
          </svg>

          <p className={css.stepSixText}>Nein</p>
        </li>

        <li
          className={css.stepSixItem}
          onClick={onItemClick}
          id="Weiß ich nicht"
        >
          <svg className={css.stepSixIcon}>
            <use href={sprite + '#icon-house-18'}></use>
          </svg>

          <p className={css.stepSixText}>Weiß ich nicht</p>
        </li>
      </ul>
    </>
  );
};
