import bgImage from '../../assets/images/img atelie/backgroundhomeatelie.webp';
import styles from './AtelieHero.module.css';

export default function AtelieHero() {
  return (
    <section className={styles.hero} id="topo">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className={styles.content}>
        <div className={styles.eyebrow}>Ateliê Literário</div>
        <h1 className={styles.title}>
          Penna<em>Flor</em>
        </h1>
        <p className={styles.quote}>
          &ldquo;Se até a inteligência artificial precisou ler romances para aprender a sentir,
          <br />
          imagine o que as histórias do Ateliê Penna Flor podem fazer por você.&rdquo;
        </p>
        <p className={styles.sub}>
          Bem-vindo ao meu ateliê, onde as histórias são lapidadas com amor e verdade
        </p>
      </div>
      <div className={styles.scroll}>
        <span>Rolar</span>
      </div>
    </section>
  );
}
