import css from './LeadStartMessage.module.css';

export const LeadStartMessage = () => {
  return (
    <>
      <h1 className={css.startMessageTitle}>
        Was kostet dich dein PV-Project?
      </h1>
      <p className={css.startMessageText}>
        Fülle folgende aus und erhalte ein kostenloses Angebot
      </p>
    </>
  );
};
