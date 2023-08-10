import css from './LeadStepFive.module.css';
import sprite from '../../images/icons/sprite.svg';

export const LeadStepFive = ({ step, setStep, stepInfo, setStepInfo }) => {
  const onItemClick = evt => {
    console.log(evt.nodeList);

    setStep(step + 1);
    setStepInfo({ ...stepInfo, stepFive: evt.currentTarget.id });
  };

  return (
    <>
      <h2 className={css.stepFiveTitle}>
        Wie viel Fläche ist für das PV-Projekt geplant?
      </h2>
      <ul className={css.stepFiveList}>
        <li
          className={css.stepFiveItem}
          onClick={onItemClick}
          id={stepInfo.stepOne === 'Gewerbe' ? '0-60 m²' : '0-20 m²'}
        >
          <svg className={css.stepFiveIcon}>
            <use href={sprite + '#icon-house-8'}></use>
          </svg>

          <p className={css.stepFiveText}>
            {stepInfo.stepOne === 'Gewerbe' ? '0-60 m²' : '0-20 m²'}
          </p>
        </li>

        <li
          className={css.stepFiveItem}
          onClick={onItemClick}
          id={stepInfo.stepOne === 'Gewerbe' ? '60-200 m²' : '20-40 m²'}
        >
          <svg className={css.stepFiveIcon}>
            <use href={sprite + '#icon-house-9'}></use>
          </svg>

          <p className={css.stepFiveText}>
            {stepInfo.stepOne === 'Gewerbe' ? '60-200 m²' : '20-40 m²'}
          </p>
        </li>

        <li
          className={css.stepFiveItem}
          onClick={onItemClick}
          id={stepInfo.stepOne === 'Gewerbe' ? '200-800 m²' : '40-100 m²'}
        >
          <svg className={css.stepFiveIcon}>
            <use href={sprite + '#icon-house-10'}></use>
          </svg>

          <p className={css.stepFiveText}>
            {stepInfo.stepOne === 'Gewerbe' ? '200-800 m²' : '40-100 m²'}
          </p>
        </li>

        <li
          className={css.stepFiveItem}
          onClick={onItemClick}
          id={stepInfo.stepOne === 'Gewerbe' ? '800+ m²' : '100+ m²'}
        >
          <svg className={css.stepFiveIcon}>
            <use href={sprite + '#icon-house-11'}></use>
          </svg>

          <p className={css.stepFiveText}>
            {stepInfo.stepOne === 'Gewerbe' ? '800+ m²' : '100+ m²'}
          </p>
        </li>
      </ul>
    </>
  );
};
