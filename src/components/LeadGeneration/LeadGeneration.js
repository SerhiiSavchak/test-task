import css from './LeadGeneration.module.css';
import sprite from '../../images/icons/sprite.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LeadStartMessage } from 'components/LeadStartMessage/LeadStartMessage';
import { LeadStepNotification } from 'components/LeadStepNotification/LeadStepNotification';
import { LeadStepTwo } from 'components/LeadStepTwo/LeadStepTwo';
import { LeadStepOne } from 'components/LeadStepOne/LeadStepOne';
import { LeadStepThree } from 'components/LeadStepThree/LeadStepThree';
import { LeadStepFour } from 'components/LeadStepFour/LeadStepFour';
import { LeadStepFive } from 'components/LeadStepFive/LeadStepFive';
import { LeadStepSix } from 'components/LeadStepSix/LeadStepSix';
import { LeadStepSeven } from 'components/LeadStepSeven/LeadStepSeven';
import { LeadStepEight } from 'components/LeadStepEight/LeadStepEight';
import { LeadStepNine } from 'components/LeadStepNine/LeadStepNine';

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
      PLZ: null,
      ort: null,
      straße: null,
      housnummer: null,
    },
    stepEight: {
      vorname: null,
      nachname: null,
      email: null,
      telefonnummer: null,
    },
  });
  console.log(stepInfo);

  return (
    <section className={css.leadSection}>
      <div className={css.container}>
        {step === 1 && <LeadStartMessage />}
        {step < 8 && (
          <ul className={css.leadList}>
            <li className={css.leadItem}>
              <svg className={css.leadIcon}>
                <use href={sprite + '#icon-step-1'}></use>
              </svg>
              <p className={css.leadText}>Analyse</p>
            </li>
            <li className={css.leadItem}>
              {step !== 7 ? (
                <svg className={css.leadIcon}>
                  <use href={sprite + '#icon-step-2'}></use>
                </svg>
              ) : (
                <svg className={css.leadIcon}>
                  <use href={sprite + '#icon-step-2-red'}></use>
                </svg>
              )}
              <p className={css.leadText}>Kontaktdaten</p>
            </li>
            <li className={css.leadItem}>
              <svg className={css.leadIcon}>
                <use href={sprite + '#icon-step-3'}></use>
              </svg>
              <p className={css.leadText}>Angebot</p>
            </li>
          </ul>
        )}
        {step === 1 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepOne
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepTwo
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepThree
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepFour
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 5 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepFive
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 6 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepSix
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 7 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepSeven
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 8 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepEight
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
        {step === 9 && (
          <motion.div
            className={css.stepOneWrap}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadStepNine
              step={step}
              setStep={setStep}
              stepInfo={stepInfo}
              setStepInfo={setStepInfo}
            />
          </motion.div>
        )}
      </div>

      {step === 7 && (
        <motion.div
          className={css.stepOneWrap}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LeadStepNotification />
        </motion.div>
      )}
      {step === 8 && (
        <motion.div
          className={css.stepOneWrap}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LeadStepNotification />
        </motion.div>
      )}
    </section>
  );
};
