import styles from './Gavetas.module.css';

const DELAY_CLASSES = ['', 'reveal-delay-1', 'reveal-delay-2'];

export default function GavetaCard({ gaveta, index }) {
  const delay = DELAY_CLASSES[index % 3];

  return (
    <div className={`${styles.card} reveal ${delay}`}>
      <div className={styles.cardBg}>
        <div
          className={styles.cardBgInner}
          style={{ backgroundImage: `url(${gaveta.image})` }}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardNumber}>{gaveta.number}</div>
        <h3 className={styles.cardTitle}>{gaveta.title}</h3>
        <p className={styles.cardDesc}>{gaveta.desc}</p>
        <a href="#" className={styles.cardBtn}>Abrir Gaveta</a>
      </div>
    </div>
  );
}
