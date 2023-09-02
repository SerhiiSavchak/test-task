import css from './LeadStepTwo.module.css';
import { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

export const LeadStepTwo = ({ step, setStep, stepInfo, setStepInfo }) => {
  const [kwhValue, setKwhValue] = useState(10);

  const onFormSubmit = evt => {
    evt.preventDefault();
    setStep(step + 1);
    setStepInfo({
      ...stepInfo,
      stepTwo: Number(evt.target.elements.kwh.value),
    });
  };

  return (
    <>
      <h2 className={css.stepTwoTitle}>
        Dein geschätzter Jahresstromverbrauch?
      </h2>
      <form onSubmit={onFormSubmit} className={css.stepTwoForm}>
        <div className={css.stepTwoTopWrap}>
          <p className={css.stepTwoText}> kWh:</p>
          <p className={css.stepTwoTextValue}>{kwhValue}</p>
        </div>

        <Slider
          name="kwh"
          aria-label="slider-ex-4"
          min={10}
          max={15000}
          step={10}
          value={kwhValue}
          onChange={val => {
            setKwhValue(val);
          }}
        >
          <SliderTrack bg="#DEDFE3">
            <SliderFilledTrack bg="#D92134" />
          </SliderTrack>

          <SliderThumb bg="#D92134" />
        </Slider>

        {/* <input
          type="range"
          value={kwhValue}
          name="kwh"
          min="10"
          max="15000"
          step="10"
          onChange={onInputChange}
          className={css.stepTwoInput}
        ></input> */}
        <div className={css.stepTwoBottomWrap}>
          <p className={css.stepTwoText}>1.000</p>
          <p className={css.stepTwoText}>15.000</p>
        </div>

        <button className={css.stepTwoBtn} type="submit">
          Weiter
        </button>
      </form>
    </>
  );
};
