import css from './LeadStepTwo.module.css';
import { useState } from 'react';

export const LeadStepTwo = ({ step, setStep, stepInfo, setStepInfo }) => {
  const [kwhValue, setKwhValue] = useState(1000);

  let khwInterfaceValue =
    kwhValue === '10000' || kwhValue > 10000
      ? kwhValue[0] + kwhValue[1]
      : kwhValue[0];

  const onInputChange = evt => {
    setKwhValue(evt.target.value);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    setStep(step + 1);
    setStepInfo({
      ...stepInfo,
      stepTwo: Number(evt.target.elements.kwh.value),
    });
  };

  return (
    <div className={css.stepTwoWrap}>
      <h2 className={css.stepTwoTitle}>
        Wie hoch ist dein Jahresstromverbrauch ca.?
      </h2>
      <form onSubmit={onFormSubmit} className={css.stepTwoForm}>
        <div className={css.stepTwoTopWrap}>
          <p className={css.stepTwoText}> kWh:</p>
          <p className={css.stepTwoTextValue}>
            {khwInterfaceValue ? `${khwInterfaceValue}.000` : `1.000`}
          </p>
        </div>
        <input
          type="range"
          value={kwhValue}
          name="kwh"
          min="1000"
          max="15000"
          step="1000"
          onChange={onInputChange}
          className={css.stepTwoInput}
        ></input>
        <div className={css.stepTwoBottomWrap}>
          <p className={css.stepTwoText}>1.000</p>
          <p className={css.stepTwoText}>15.000</p>
        </div>

        <button className={css.stepTwoBtn} type="submit">
          Weiter
        </button>
      </form>
    </div>
  );
};
