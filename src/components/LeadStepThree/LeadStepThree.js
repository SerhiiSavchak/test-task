import css from './LeadStepThree.module.css';
import sprite from '../../images/icons/sprite.svg';

export const LeadStepThree = ({ step, setStep, stepInfo, setStepInfo }) => {
  const onItemClick = evt => {
    setStep(step + 1);
    setStepInfo({ ...stepInfo, stepThree: evt.currentTarget.id });
  };

  return (
    <div className={css.stepThreeWrap}>
      <h2 className={css.stepThreeTitle}>
        Um welche Dachform handelt es sich?
      </h2>
      <ul className={css.stepThreeList}>
        <li className={css.stepThreeItem} onClick={onItemClick} id="Flachdach">
          <svg className={css.stepThreeIcon}>
            <use href={sprite + '#icon-house-3'}></use>
          </svg>

          <p className={css.stepThreeText}>Flachdach</p>
        </li>

        <li className={css.stepThreeItem} onClick={onItemClick} id="Pultdach">
          <svg className={css.stepThreeIcon}>
            <use href={sprite + '#icon-house-4'}></use>
          </svg>

          <p className={css.stepThreeText}>Pultdach</p>
        </li>

        <li className={css.stepThreeItem} onClick={onItemClick} id="Satteldach">
          <svg className={css.stepThreeIcon}>
            <use href={sprite + '#icon-house-5'}></use>
          </svg>

          <p className={css.stepThreeText}>Satteldach</p>
        </li>

        <li className={css.stepThreeItem} onClick={onItemClick} id="Zeltdach">
          <svg className={css.stepThreeIcon}>
            <use href={sprite + '#icon-house-6'}></use>
          </svg>

          <p className={css.stepThreeText}>Zeltdach</p>
        </li>

        <li
          className={css.stepThreeItem}
          onClick={onItemClick}
          id="Sonstiges Dach"
        >
          <svg className={css.stepThreeIcon}>
            <use href={sprite + '#icon-house-7'}></use>
          </svg>

          <p className={css.stepThreeText}>Sonstiges Dach</p>
        </li>
      </ul>
    </div>
  );
};
