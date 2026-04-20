import { useParticles } from '../../hooks/useParticles';
import styles from './SobreEscritor.module.css';

export default function SobreEscritor() {
  useParticles('particlesEscritor', 15);

  return (
    <section className={styles.sobre} id="escritor">
      <div className={styles.bg} />
      <div className="particles" id="particlesEscritor" />

      <div className={styles.inner}>
        <div className="reveal">
          <div className="section-label">Sobre o Escritor</div>
          <h2 className={`section-title ${styles.sectionTitle}`}>
            A alma por trás<br /><em>da pena</em>
          </h2>
          <p className={styles.desc}>
            Escrever é um ato de coragem. Cada palavra nasce da vivência, da
            observação e de uma vontade profunda de dar voz àquilo que muitos
            sentem, mas poucos ousam dizer.
          </p>
          <p className={styles.desc}>
            Minha jornada com a escrita começou como um refúgio e se transformou
            em missão: honrar histórias reais, dar dignidade à memória e mostrar
            que toda vida merece ser contada.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;Não escrevo apenas para ser lido. Escrevo para que alguém, em algum
            lugar, se sinta menos sozinho.&rdquo;
          </blockquote>
        </div>
        <div className={`${styles.visual} reveal reveal-delay-2`}>
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.frame}>
            <div className={styles.icon}>🪶</div>
          </div>
        </div>
      </div>
    </section>
  );
}
