import styles from './KitReliquia.module.css';
import imgKitReliquia from '../../assets/images/imagens sabiju/Livro Kit Reliquia.webp';

export default function KitReliquia() {
  const kitItems = [
    'Livro impresso personalizado',
    'Pena simbólica',
    'Marca-página exclusivo',
    'Embalagem especial'
  ];

  return (
    <section className={styles.section} id="sabiju-kit">
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={`${styles.content} reveal reveal-delay-1`}>
            <div className={styles.badgePremium}>✦ Premium</div>
            <h2 className={styles.title}>Kit Relíquia <em>PREMIUM</em></h2>
            <p className={styles.tagline}>Para quem deseja tocar sua história com as próprias mãos</p>
            <div className={styles.experienceLine}>A experiência que atravessa o tempo</div>

            <div className={styles.includesTitle}>O Kit Inclui:</div>
            <ul className={styles.includes}>
              {kitItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <a href="#" className={styles.btnPrimary}>Quero meu KIT Relíquia</a>
          </div>

          <div className={`${styles.visual} reveal reveal-delay-2`}>
            <img src={imgKitReliquia} alt="Kit Relíquia Premium" className={styles.kitImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
