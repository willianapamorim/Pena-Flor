import styles from './Gavetas.module.css';
import GavetaCard from './GavetaCard';
import gavetas from './gavetasData';

export default function Gavetas() {
  return (
    <section className={styles.gavetas} id="gavetas">
      <div className={`${styles.intro} reveal`}>
        <div className={styles.label}>As Gavetas</div>
        <h2 className={styles.title}>
          Onde cada<br /><em>história encontra</em><br />seu lar
        </h2>
        <p className={styles.introText}>
          Cada gaveta guarda um universo. Escolha a sua e abra as portas da
          memória e da imaginação.
        </p>
      </div>
      <div className={styles.grid}>
        {gavetas.map((gaveta, i) => (
          <GavetaCard key={gaveta.number} gaveta={gaveta} index={i} />
        ))}
      </div>
    </section>
  );
}
