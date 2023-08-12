import css from './LeadStepEight.module.css';
import { useState } from 'react';

export const LeadStepEight = ({ step, setStep, stepInfo, setStepInfo }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    switch (name) {
      case 'Vorname':
        setName(value);
        break;
      case 'Nachname':
        setLastName(value);
        break;
      case 'E-Mail':
        setEmail(value);
        break;
      case 'Telefonnummer':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    setStep(step + 1);
    setStepInfo({
      ...stepInfo,
      stepEight: {
        vorname: name,
        nachname: lastName,
        email: email,
        telefonnummer: number,
      },
    });
  };

  return (
    <>
      <h2 className={css.stepEightTopTitle}>Glückwunsh!</h2>
      <h3 className={css.stepEightTitle}>
        Wir künen dir eine kostenfreie Wirtschaftlichkeitsanalyse für dich
        PV-Projekt erstellen!
      </h3>
      <p className={css.stepEightText}>Wen soll unser Berater kontaktieren?</p>
      <form onSubmit={onFormSubmit} className={css.stepEightForm}>
        <ul className={css.stepEightList}>
          <li className={css.stepEightItem}>
            <label htmlFor="Vorname" className={css.stepEightLabel}>
              Vorname
            </label>
            <input
              name="Vorname"
              required
              onChange={onInputChange}
              value={name}
              className={css.stepEightInput}
              placeholder="Vorname"
              type="text"
            ></input>
          </li>
          <li className={css.stepEightItem}>
            <label htmlFor="Nachname" className={css.stepEightLabel}>
              Nachname
            </label>
            <input
              name="Nachname"
              required
              onChange={onInputChange}
              value={lastName}
              className={css.stepEightInput}
              placeholder="Nachname"
              type="text"
            ></input>
          </li>
          <li className={css.stepEightItem}>
            <label htmlFor="E-Mail" className={css.stepEightLabel}>
              E-Mail
            </label>
            <input
              name="E-Mail"
              value={email}
              onChange={onInputChange}
              className={css.stepEightInput}
              placeholder="E-Mail"
              type="email"
            ></input>
          </li>
          <li className={css.stepEightItem}>
            <label htmlFor="Telefonnummer" className={css.stepEightLabel}>
              Telefonnummer
            </label>
            <input
              name="Telefonnummer"
              required
              value={number}
              onChange={onInputChange}
              className={css.stepEightInput}
              placeholder="Telefonnummer"
              type="text"
            ></input>
          </li>
        </ul>
        <button className={css.stepEightBtn} type="submit">
          Weiter
        </button>
      </form>
    </>
  );
};
