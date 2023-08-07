import css from './LeadStepOne.module.css';
import sprite from '../../images/icons/sprite.svg';

export const LeadStepOne = ({ step, setStep, stepInfo, setStepInfo }) => {
  const onItemClick = evt => {
    setStep(step + 1);
    setStepInfo({ ...stepInfo, stepOne: evt.currentTarget.id });
  };

  return (
    <div className={css.stepOneWrap}>
      <h2 className={css.stepOneTitle}>Wofür ist die Solaranlage bestimmt?</h2>
      <ul className={css.stepOneList}>
        <li
          className={css.stepOneItem}
          onClick={onItemClick}
          id="Privathaushalt"
        >
          <div className={css.stepOneIconWrap}>
            <svg className={css.stepOneIcon}>
              <use href={sprite + '#icon-house-1'}></use>
            </svg>
          </div>
          <p className={css.stepOneText}>Privathaushalt</p>
        </li>
        <li className={css.stepOneItem} onClick={onItemClick} id="Gewerbe">
          <div className={css.stepOneIconWrap}>
            <svg className={css.stepOneIconSecond}>
              <use href={sprite + '#icon-house-2'}></use>
            </svg>
          </div>
          <p className={css.stepOneText}>Gewerbe</p>
        </li>
      </ul>
    </div>
  );
};
