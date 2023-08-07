import css from './LeadStepFour.module.css';
import sprite from '../../images/icons/sprite.svg';

export const LeadStepFour = ({ step, setStep, stepInfo, setStepInfo }) => {
  const onItemClick = evt => {
    setStep(step + 1);
    setStepInfo({ ...stepInfo, stepFour: evt.currentTarget.id });
  };

  return (
    <div className={css.stepFourWrap}>
      <h2 className={css.stepFourTitle}>
        Wie viel Fläche steht für eine Solaranlage ca. zur Verfügung?
      </h2>
      <ul className={css.stepFourList}>
        <li className={css.stepFourItem} onClick={onItemClick} id="Bis 30 m²">
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-8'}></use>
          </svg>

          <p className={css.stepFourText}>Bis 30 m²</p>
        </li>

        <li
          className={css.stepFourItem}
          onClick={onItemClick}
          id="30 - 100 m² min"
        >
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-9'}></use>
          </svg>

          <p className={css.stepFourText}>30 - 100 m²</p>
        </li>

        <li className={css.stepFourItem} onClick={onItemClick} id="30 - 100 m²">
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-10'}></use>
          </svg>

          <p className={css.stepFourText}>30 - 100 m²</p>
        </li>

        <li
          className={css.stepFourItem}
          onClick={onItemClick}
          id="100 - 200 m²"
        >
          <svg className={css.stepFourIcon}>
            <use href={sprite + '#icon-house-11'}></use>
          </svg>

          <p className={css.stepFourText}>100 - 200 m²</p>
        </li>
      </ul>
    </div>
  );
};
