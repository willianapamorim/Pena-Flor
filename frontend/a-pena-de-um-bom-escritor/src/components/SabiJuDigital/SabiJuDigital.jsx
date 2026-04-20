import styles from './SabiJuDigital.module.css';
import imgSabiJuDigital from '../../assets/images/imagens sabiju/Livro sabiju digital.webp';

export default function SabiJuDigital() {
  const digitalItems = [
    {
      icon: '📸',
      title: 'E-book Com Sua Foto na Capa',
      desc: 'Sua imagem eternizada na capa da sua própria obra'
    },
    {
      icon: '📜',
      title: 'Estilo Romance Clássico',
      desc: 'Narrado com a elegância e profundidade da grande literatura'
    },
    {
      icon: '🔒',
      title: 'Totalmente Confidencial',
      desc: 'Sigilo absoluto. Sua história pertence apenas a você.'
    },
    {
      icon: '🪶',
      title: 'Seu Relato Eternizado',
      desc: 'O seu relato eternizado em um E-Book único e irrepetível'
    }
  ];

  return (
    <section className={styles.section} id="sabiju-digital">
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={`${styles.visual} reveal reveal-delay-1`}>
            <img src={imgSabiJuDigital} alt="SABIJU Digital - E-book exclusivo" className={styles.bookImage} />
          </div>

          <div className={`${styles.content} reveal reveal-delay-2`}>
            <div className={styles.label}>Versão Digital</div>
            <h2 className={styles.title}>SABIJU <em>Digital</em></h2>
            <p className={styles.subtitle}>Transformamos sua história em um e-book exclusivo</p>

            <div className={styles.ornament}><span>✦</span></div>

            <div className={styles.includes}>
              {digitalItems.map((item, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemText}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemDesc}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className={styles.btnPrimary}>Quero meu SABIJU Digital</a>
          </div>
        </div>
      </div>
    </section>
  );
}
