import { useState, useEffect } from 'react';
import styles from './SeboDaFlor.module.css';
import imgNaoQuero from '../../assets/images/imagens sabiju/nao quero ser seu amigo.webp';
import imgQuatroSemanas from '../../assets/images/imagens sabiju/quatro semanas e meia de amor.webp';
import imgRapto from '../../assets/images/imagens sabiju/O Rapto da Liberdade.webp';

export default function SeboDaFlor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const books = [
    {
      coverImage: imgNaoQuero,
      title: 'Entre o Amor e a Amizade',
      author: 'Penna Flor',
      desc: 'Onde termina a amizade e começa o que não conseguimos nomear?',
      badge: 'Estoque Limitado'
    },
    {
      coverImage: imgQuatroSemanas,
      title: 'Quatro Semanas e Meia de Amor',
      author: 'Penna Flor',
      desc: 'Um romance épico ambientado na Andaluzia Moura do século XIII.',
      badge: 'Estoque Limitado'
    },
    {
      coverImage: imgRapto,
      title: 'O Rapto de Liberdade',
      author: 'Penna Flor',
      desc: 'Conheça a jornada de Sophie na época da Revolução Francesa.',
      badge: 'Estoque Limitado'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, books.length - visibleCards);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className={styles.section} id="sebo">
      <div className={styles.wrap}>
        <div className="reveal" style={{ marginBottom: 0 }}>
          <div className={styles.label}>Obras à Venda</div>
          <h2 className={styles.title}>Sebo <em>da Flor</em></h2>
          <p className={styles.subtitle}>Magias literárias prontas para encontrar um novo lar.</p>
        </div>

        <div className={`${styles.carouselWrap} reveal`}>
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={handlePrev}
            aria-label="Anterior"
            style={{
              opacity: currentIndex === 0 ? '0.3' : '1',
              pointerEvents: currentIndex === 0 ? 'none' : 'auto'
            }}
          >
            ‹
          </button>

          <div className={styles.trackOuter}>
            <div
              className={styles.track}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards + (24 / visibleCards))}%)`
              }}
            >
              {books.map((book, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cover}>
                    {book.coverImage && (
                      <img src={book.coverImage} alt={book.title} className={styles.coverImg} />
                    )}
                    <span className={styles.stockBadge}>{book.badge}</span>
                  </div>
                  <div className={styles.info}>
                    <p className={styles.desc}>{book.desc}</p>
                    <a href="#" className={styles.btnSebo}>Comprar →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={handleNext}
            aria-label="Próximo"
            style={{
              opacity: currentIndex >= maxIndex ? '0.3' : '1',
              pointerEvents: currentIndex >= maxIndex ? 'none' : 'auto'
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
