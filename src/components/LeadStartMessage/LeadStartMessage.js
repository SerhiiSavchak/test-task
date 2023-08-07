import css from './LeadStartMessage.module.css';

export const LeadStartMessage = () => {
  return (
    <>
      <h1 className={css.startMessageTitle}>
        Wie viel Stromkosten sparst du durch eine Solaranlage?
      </h1>
      <p className={css.startMessageText}>
        Prüfe es jetzt und erhalte zusätzlich ein kostenloses Angebot für deine
        Solaranlage
      </p>
    </>
  );
};
