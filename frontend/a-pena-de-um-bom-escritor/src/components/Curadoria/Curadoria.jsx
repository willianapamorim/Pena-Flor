import BookCard from '../BookCard/BookCard';
import CommentsSection from '../CommentsSection/CommentsSection';
import styles from './Curadoria.module.css';
import imgDivinaComedia from '../../assets/images/img atelie/a divina comedia.webp';
import imgOProfeta from '../../assets/images/img atelie/o profeta.webp';
import imgVictorHugo from '../../assets/images/img atelie/victor hugo.webp';

const livros = [
  {
    coverImage: imgDivinaComedia,
    coverTitle: 'A Divina Comédia', coverSubtitle: 'Dante Alighieri',
    part: 'Adaptação & Reflexão', title: 'Adaptação da Obra de Dante',
    desc: 'Uma viagem pela obra mais épica da literatura ocidental, adaptada com sensibilidade e novo olhar.',
  },
  {
    coverImage: imgOProfeta,
    coverTitle: 'O Profeta', coverSubtitle: 'Khalil Gibran',
    part: 'Análise & Curadoria', title: 'O Profeta de Khalil Gibran',
    desc: 'Reflexões sobre a sabedoria atemporal de Gibran — amor, liberdade e a essência do ser humano.',
  },
  {
    coverImage: imgVictorHugo,
    coverTitle: 'Os Miseráveis', coverSubtitle: 'Victor Hugo',
    part: 'Reflexões Literárias', title: 'Reflexões da Obra de Victor Hugo',
    desc: 'Da miséria humana à redenção — como Hugo transformou a dor em compaixão e beleza literária.',
  },
];

const delays = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

const commentsIniciais = [
  { author: 'Maria Clara', text: 'A análise de Dante abriu meus olhos para dimensões da obra que eu nunca havia percebido.', date: '12 de abril, 2026' },
];

export default function Curadoria() {
  return (
    <section className={styles.section} id="curadoria">
      <div className={styles.wrap}>
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div className={styles.label}>Análise &amp; Reflexão</div>
          <h2 className={styles.sectionTitle}>
            Curadoria <em>Intelectual</em>
          </h2>
          <p className={styles.subtitle}>
            Minhas análises, reflexões e adaptações de obras e artistas renomados
          </p>
        </div>

        <div className={`${styles.grid} reveal`}>
          {livros.map((book, i) => (
            <BookCard key={book.title} book={book} delay={delays[i]} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 0, paddingTop: 0 }}>
        <CommentsSection
          id="comentarios-curadoria"
          initialComments={commentsIniciais}
          pagina="atelie-literario"
        />
      </div>
    </section>
  );
}
