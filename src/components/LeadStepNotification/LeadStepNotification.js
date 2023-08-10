import css from './LeadStepNotification.module.css';

export const LeadStepNotification = () => {
  return (
    <div className={css.stepNotificationWrap}>
      <div className={css.stepNotificationContainer}>
        <ul className={css.stepNotificationList}>
          <li className={css.stepNotificationItem}>
            <h3 className={css.stepNotificationTitle}>Sichere Übertragung</h3>
            <p className={css.stepNotificationText}>
              Deine Daten werden per TSL verschlüsselt an uns übermittelt und
              nicht an andere weitergegeben.
            </p>
          </li>
          <li className={css.stepNotificationItem}>
            <h3 className={css.stepNotificationTitle}>100% Kostenfrei</h3>
            <p className={css.stepNotificationText}>
              Deine persönliche Stromkostenersparnis und dein individuelles
              Angebot sind völlig kostenlos und unverbindlich.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
