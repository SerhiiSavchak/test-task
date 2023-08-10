import css from './LeadStepSeven.module.css';
import { BallTriangle } from 'react-loader-spinner';
import { useState } from 'react';

export const LeadStepSeven = ({ step, setStep, stepInfo, setStepInfo }) => {
  const [loading, setLoading] = useState(false);
  const [postIndex, setPostIndex] = useState('');
  const [location, setLocation] = useState('');
  const [street, setStreet] = useState('');
  const [houseNum, setHouseNum] = useState('');

  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    switch (name) {
      case 'PLZ':
        setPostIndex(value);
        break;
      case 'Ort':
        setLocation(value);
        break;
      case 'Straße':
        setStreet(value);
        break;
      case 'Housnummer':
        setHouseNum(value);
        break;

      default:
        return;
    }
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
      setStepInfo({
        ...stepInfo,
        stepSeven: {
          PLZ: postIndex,
          ort: location,
          straße: street,
          housnummer: houseNum,
        },
      });
    }, 2000);
  };

  return (
    <>
      <h2 className={css.stepSevenTitle}>Wo ist das PV-Project geplant?</h2>

      <form onSubmit={onFormSubmit} className={css.stepSevenForm}>
        <ul className={css.stepSevenList}>
          <li className={css.stepSevenItem}>
            <label htmlFor="PLZ" className={css.stepSevenLabel}>
              PLZ
            </label>
            <input
              name="PLZ"
              required
              onChange={onInputChange}
              value={postIndex}
              className={css.stepSevenInput}
              placeholder="PLZ"
              type="text"
            ></input>
          </li>
          <li className={css.stepSevenItem}>
            <label htmlFor="Ort" className={css.stepSevenLabel}>
              Ort
            </label>
            <input
              name="Ort"
              required
              onChange={onInputChange}
              value={location}
              className={css.stepSevenInput}
              placeholder="Ort"
              type="text"
            ></input>
          </li>
          <li className={css.stepSevenItem}>
            <label htmlFor="Straße" className={css.stepSevenLabel}>
              Straße
            </label>
            <input
              name="Straße"
              value={street}
              onChange={onInputChange}
              className={css.stepSevenInput}
              placeholder="Straße"
              type="text"
            ></input>
          </li>
          <li className={css.stepSevenItem}>
            <label htmlFor="Housnummer" className={css.stepSevenLabel}>
              Housnummer
            </label>
            <input
              name="Housnummer"
              required
              value={houseNum}
              onChange={onInputChange}
              className={css.stepSevenInput}
              placeholder="Housnummer"
              type="text"
            ></input>
          </li>
        </ul>
        <button className={css.stepSevenBtn} type="submit">
          Weiter
        </button>
      </form>
      {loading && (
        <div className={css.stepSevenLoader}>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#E52F42"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};
