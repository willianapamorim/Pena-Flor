import styles from './SabiJuHero.module.css';
import bgImage from '../../assets/images/imagens sabiju/backgroundhomesabiju.webp';

export default function SabiJuHero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.bg} style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className={styles.content}>
        <div className={styles.eyebrow}>Sua História Merece</div>
        <h1 className={styles.title}>SABIJU</h1>
        <p className={styles.subtitle}>
          Transformamos sua história em uma obra exclusiva
        </p>
        <div className={styles.btns}>
          <a href="#sabiju-sobre" className={styles.btnPrimary}>Quero Transformar Minha História</a>
          <a href="#sabiju-digital" className={styles.btnSecondary}>Ver Pacotes Disponíveis</a>
        </div>
      </div>
      <div className={styles.scrollHint}>Rolar</div>
    </section>
  );
}
