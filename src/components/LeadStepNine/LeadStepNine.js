import css from './LeadStepNine.module.css';
import sprite from '../../images/icons/sprite.svg';

export const LeadStepNine = ({ step, setStep, stepInfo, setStepInfo }) => {
  const onInputChange = evt => {
    setStep(1);
    setStepInfo({
      stepOne: null,
      stepTwo: null,
      stepThree: null,
      stepFour: null,
      stepFive: null,
      stepSix: null,
      stepSeven: {
        postleitzahl: null,
        ort: null,
        straße: null,
        housnummer: null,
      },
      stepEight: {
        vorname: null,
        nachname: null,
        emailAddresse: null,
        telefonnummer: null,
      },
    });
  };

  return (
    <>
      <svg className={css.stepNineIcon}>
        <use href={sprite + '#icon-finally'}></use>
      </svg>
      <h2 className={css.stepNineTitle}>Das Team der WorkSET dankt!</h2>
      <p className={css.stepNineText}>In Kürze werden Sie kontaktiert</p>
      <button onClick={onInputChange} className={css.stepNineBtn} type="button">
        Weiter
      </button>
    </>
  );
};
