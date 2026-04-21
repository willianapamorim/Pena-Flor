import BookCard from '../BookCard/BookCard';
import CommentsSection from '../CommentsSection/CommentsSection';
import styles from './Obras.module.css';

// Imagens das capas
import imgEntrega from '../../assets/images/img atelie/A entrega e a descoberta.webp';
import imgReencontro from '../../assets/images/img atelie/O Reencontro.webp';
import imgRebecamir from '../../assets/images/img atelie/Rebecamir.webp';
import imgNaoQuero from '../../assets/images/img atelie/nao quero ser seu amigo.webp';
import imgEspaco from '../../assets/images/img atelie/espaço vazio.webp';
import img31Dias from '../../assets/images/img atelie/31 dias sob o poder dela.webp';

const serie1 = [
  {
    coverClass: 'coverC1', icon: '🌹',
    coverTitle: 'A Entrega e a Descoberta', coverSubtitle: 'Parte I',
    coverImage: imgEntrega,
    part: 'Série · Parte I', title: 'A Entrega e a Descoberta',
    desc: 'Uma história envolvente sobre reencontros e segundas chances que transformam para sempre.',
    badge: 'Em Breve', emBreve: true,
  },
  {
    coverClass: 'coverC2', icon: '🌊',
    coverTitle: 'O Reencontro', coverSubtitle: 'Parte II',
    coverImage: imgReencontro,
    part: 'Série · Parte II', title: 'O Reencontro',
    desc: 'Acompanhe a jornada de dois corações que aprendem a superar o passado e reconhecer o amor.',
    badge: 'Em Breve', emBreve: true,
  },
  {
    coverClass: 'coverC3', icon: '👑',
    coverTitle: 'Rebecamir', coverSubtitle: 'A Redenção do Sultão',
    coverImage: imgRebecamir,
    part: 'Série · Parte III', title: 'Rebecamir: A Redenção do Sultão',
    desc: 'O capítulo final de uma saga épica de amor, poder e redenção.',
    badge: 'Em Breve', emBreve: true,
  },
];

const serie2 = [
  {
    coverClass: 'coverC4', icon: '🤝',
    coverTitle: 'Não Quero Ser Seu Amigo', coverSubtitle: 'Parte I',
    coverImage: imgNaoQuero,
    part: 'Série · Parte I', title: 'Não Quero Ser Seu Amigo',
    desc: 'Quando a amizade se torna o caminho mais corajoso para o amor.',
    href: 'https://www.amazon.com.br/dp/B0GTXHR61C',
  },
  {
    coverClass: 'coverC5', icon: '🕯️',
    coverTitle: 'O Espaço Vazio Ainda te Espera', coverSubtitle: 'Parte II',
    coverImage: imgEspaco,
    part: 'Série · Parte II', title: 'O Espaço Vazio Ainda te Espera',
    desc: 'A saudade que não cabe em palavras e o silêncio que fala por dois.',
    href: 'https://www.amazon.com.br/dp/B0FGB3C9V5?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_F77KTAM45XRXM9939RGQ&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_F77KTAM45XRXM9939RGQ&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_F77KTAM45XRXM9939RGQ&bestFormat=true',
  },
];

const obraIndividual = [
  {
    coverClass: 'coverC6', icon: '🔥',
    coverTitle: '31 Dias Sob o Poder Dela', coverSubtitle: 'Sem controle, sem volta',
    coverImage: img31Dias,
    part: 'Obra Individual', title: '31 Dias Sob o Poder Dela',
    desc: 'Sem controle, sem volta. Uma história intensa sobre atração, perda e as forças que nos dominam.',
    badge: 'Destaque',
  },
];

const delays = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

const commentsIniciais = [
  { 
    author: 'Ju Gonçalves', 
    text: "O livro 'Entre o Amor e a Amizade: 4 Semanas' entrega uma narrativa que nos prende do início ao fim, despertando aquela vontade irresistível de ler o próximo capítulo imediatamente. O grande diferencial é como as 'temidas' regras gramaticais são apresentadas: de forma simples, leve e surpreendentemente fácil de compreender."
  },
  { 
    author: 'Nana e Juninho', 
    text: "Sabe aquele livro que você não consegue largar? 'Entre o Amor e a Amizade: 4 Semanas' é exatamente assim! Além de uma história envolvente, tem uma escrita clara e acessível. Uma leitura fluida que ensina enquanto encanta."
  },
  { 
    author: 'Rosemary', 
    text: "Impossível ler apenas um capítulo de 'Entre o Amor e a Amizade: 4 Semanas'. A história te segura do começo ao fim! E o melhor: a autora consegue explicar as complexas de um jeito tão simples que qualquer um entende. É técnica e emoção no lugar certo."
  },
  { 
    author: 'Ana Júlia', 
    text: "A narrativa do livro é tão envolvente que você se sente transportado para a história como se ela se passasse com você! A habilidade da autora em criar atmosferas e personagens complexos é simplesmente impressionante, cada detalhe da escrita permite que você visualize cada cena como se estivesse lá. Uma leitura que ficou marcada."
  },
];

export default function Obras() {
  return (
    <section className={`${styles.section} dark-theme`} id="obras">
      <div className={styles.wrap}>
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div className={styles.label}>Criação Literária</div>
          <h2 className={styles.sectionTitle}>
            Minhas <em>Obras</em>
          </h2>
        </div>

        {/* Série 1 */}
        <div className={`${styles.serieBlock} reveal`}>
          <div className={styles.serieHeader}>
            <div className={styles.serieLabel}>Série</div>
            <h3 className={styles.serieTitle}>Quatro Semanas e Meia de Amor</h3>
          </div>
          <div className={styles.grid}>
            {serie1.map((book, i) => (
              <BookCard key={book.title} book={book} delay={delays[i]} />
            ))}
          </div>
        </div>

        <div className={`${styles.ornament} reveal`}><span>✦</span></div>

        {/* Série 2 */}
        <div className={`${styles.serieBlock} reveal`}>
          <div className={styles.serieHeader}>
            <div className={styles.serieLabel}>Série</div>
            <h3 className={styles.serieTitle}>Amigos para Sempre</h3>
          </div>
          <div className={`${styles.grid} ${styles.grid2}`}>
            {serie2.map((book, i) => (
              <BookCard key={book.title} book={book} delay={delays[i]} />
            ))}
          </div>
        </div>

        <div className={`${styles.ornament} reveal`}><span>✦</span></div>

        {/* Obra individual */}
        <div className={`${styles.serieBlock} reveal`}>
          <div className={styles.serieHeader}>
            <div className={styles.serieLabel}>Obra Individual</div>
            <h3 className={styles.serieTitle}>31 Dias Sob o Poder Dela</h3>
          </div>
          <div className={`${styles.grid} ${styles.grid1}`}>
            {obraIndividual.map(book => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </div>
      </div>

      <CommentsSection
        id="comentarios-obras"
        initialComments={commentsIniciais}
        dark
        pagina="minhas-obras"
      />
    </section>
  );
}
