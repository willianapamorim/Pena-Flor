import { useParticles } from '../../hooks/useParticles';
import fundoHome from '../../assets/images/Fundo home.webp';
import styles from './Hero.module.css';

export default function Hero() {
  useParticles('particles', 20);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />
      <div
        className={styles.bgImg}
        style={{ backgroundImage: `url(${fundoHome})` }}
      />
      <div className={styles.lines}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <div className="particles" id="particles" />

      <div className={styles.content}>
        <div className={styles.eyebrow}>Literatura &amp; Memória</div>
        <h1 className={styles.title}>
          Bem vindo à<br />
          <em>Pena de um</em><br />
          Bom Escritor
        </h1>
        <p className={styles.subtitle}>
          Sinta-se em casa. Aqui, sua história tem valor.
        </p>
        <blockquote className={styles.quote}>
          &ldquo;Se até a inteligência artificial precisou ler romances para aprender
          a sentir, imagine o que as histórias do Ateliê Penna Flor podem fazer
          por você.&rdquo;
        </blockquote>
        <div className={styles.ctaGroup}>
          <a href="#gavetas" className={styles.cta}>
            <span className={styles.ctaText}>Explorar as Gavetas</span>
          </a>
          <a href="#" className={styles.cta}>
            <span className={styles.ctaText}>Conte sua História</span>
          </a>
        </div>
      </div>
    </section>
  );
}
