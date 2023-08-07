import css from './LeadGeneration.module.css';
import sprite from '../../images/icons/sprite.svg';
import { useState } from 'react';
import { LeadStartMessage } from 'components/LeadStartMessage/LeadStartMessage';
import { LeadStepTwo } from 'components/LeadStepTwo/LeadStepTwo';
import { LeadStepOne } from 'components/LeadStepOne/LeadStepOne';
import { LeadStepThree } from 'components/LeadStepThree/LeadStepThree';
import { LeadStepFour } from 'components/LeadStepFour/LeadStepFour';

export const LeadGeneration = () => {
  const [step, setStep] = useState(1);
  const [stepInfo, setStepInfo] = useState({
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
  console.log(stepInfo);

  return (
    <section className={css.sectionLead}>
      <div className={css.container}>
        {step === 1 && <LeadStartMessage />}
        <ul className={css.leadList}>
          <li className={css.leadItem}>
            <svg className={css.leadIcon}>
              <use href={sprite + '#icon-step-1'}></use>
            </svg>
            <p className={css.leadText}>Analyse</p>
          </li>
          <li className={css.leadItem}>
            <svg className={css.leadIcon}>
              <use href={sprite + '#icon-step-2'}></use>
            </svg>
            <p className={css.leadText}>Kontaktdaten</p>
          </li>
          <li className={css.leadItem}>
            <svg className={css.leadIcon}>
              <use href={sprite + '#icon-step-3'}></use>
            </svg>
            <p className={css.leadText}>Angebot</p>
          </li>
        </ul>
        {step === 1 && (
          <LeadStepOne
            step={step}
            setStep={setStep}
            stepInfo={stepInfo}
            setStepInfo={setStepInfo}
          />
        )}
        {step === 2 && (
          <LeadStepTwo
            step={step}
            setStep={setStep}
            stepInfo={stepInfo}
            setStepInfo={setStepInfo}
          />
        )}
        {step === 3 && (
          <LeadStepThree
            step={step}
            setStep={setStep}
            stepInfo={stepInfo}
            setStepInfo={setStepInfo}
          />
        )}
        {step === 4 && (
          <LeadStepFour
            step={step}
            setStep={setStep}
            stepInfo={stepInfo}
            setStepInfo={setStepInfo}
          />
        )}
      </div>
    </section>
  );
};
