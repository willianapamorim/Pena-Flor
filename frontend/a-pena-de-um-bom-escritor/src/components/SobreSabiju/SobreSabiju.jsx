import styles from './SobreSabiju.module.css';

export default function SobreSabiju() {
  return (
    <section className={styles.section} id="sabiju-sobre">
      <div className={styles.wrap}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 0 }}>
          <div className={styles.label}>O Que é o SABIJU</div>
          <h2 className={styles.title}>Sobre o <em>SABIJU</em></h2>
        </div>

        <div className={styles.cards}>
          <div className={`${styles.card} reveal reveal-delay-1`}>
            <span className={styles.cardIcon}>📖</span>
            <div className={styles.cardLabel}>O que é?</div>
            <p className={styles.cardText}>Um livro personalizado escrito a partir da sua própria história</p>
          </div>

          <div className={`${styles.card} reveal reveal-delay-2`}>
            <span className={styles.cardIcon}>👤</span>
            <div className={styles.cardLabel}>Para quem é?</div>
            <p className={styles.cardText}>Para quem deseja eternizar sua memória, sua família ou sua jornada.</p>
          </div>

          <div className={`${styles.card} reveal reveal-delay-3`}>
            <span className={styles.cardIcon}>🎁</span>
            <div className={styles.cardLabel}>O que você recebe?</div>
            <ul className={styles.receberList}>
              <li>Livro exclusivo</li>
              <li>Texto personalizado</li>
              <li>Sigilo absoluto</li>
              <li>Direito integral da obra</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.cta} reveal`}>
          <a href="#sabiju-digital" className={styles.btnPrimary}>Ver Pacotes Disponíveis</a>
        </div>
      </div>
    </section>
  );
}
