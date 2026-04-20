import styles from './BookCard.module.css';

export default function BookCard({ book, delay = '' }) {
  return (
    <div className={`${styles.card} reveal ${delay}`}>
      <div className={`${styles.cover} ${styles[book.coverClass] || ''}`}>
        {book.badge && (
          <span className={`${styles.badge} ${book.badge === 'Em Breve' ? styles.emBreve : ''}`}>
            {book.badge}
          </span>
        )}
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.coverTitle}
            className={styles.coverImg}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.coverIcon}>{book.icon}</div>
            <div className={styles.coverTitle}>{book.coverTitle}</div>
            {book.coverSubtitle && (
              <div className={styles.coverSubtitle}>{book.coverSubtitle}</div>
            )}
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.part}>{book.part}</div>
        <h4 className={styles.title}>{book.title}</h4>
        <p className={styles.desc}>{book.desc}</p>
        {book.emBreve ? (
          <button className={`${styles.btn} ${styles.emBreveBtn}`}>Em breve · · ·</button>
        ) : (
          <a href={book.href || '#'} className={styles.btn}>Saiba mais →</a>
        )}
      </div>
    </div>
  );
}
