import { useState } from 'react';
import styles from './CommentsSection.module.css';

function CommentItem({ comment }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.item} onClick={() => setExpanded(!expanded)}>
      <div className={styles.author}>{comment.author}</div>
      <div className={`${styles.text} ${expanded ? styles.expanded : ''}`}>
        &ldquo;{comment.text}&rdquo;
      </div>
      {comment.date && <div className={styles.date}>{comment.date}</div>}
    </div>
  );
}

export default function CommentsSection({ id, initialComments = [], dark = false }) {
  const [comments, setComments] = useState(initialComments);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('');

  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim() || !texto.trim()) return;

    const now = new Date();
    const dataStr = `${now.getDate()} de ${meses[now.getMonth()]}, ${now.getFullYear()}`;

    setComments(prev => [...prev, {
      author: nome.trim(),
      text: texto.trim(),
      date: dataStr,
    }]);

    setNome('');
    setEmail('');
    setTexto('');
  }

  return (
    <div className={`${styles.section} ${dark ? styles.dark : ''}`} id={id}>
      <div className={styles.inner}>
        <h3 className={styles.title}>Comentários</h3>

        <div className={styles.list}>
          {comments.map((c, i) => (
            <CommentItem key={i} comment={c} />
          ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formTitle}>Deixe seu comentário</div>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label>Seu Nome</label>
              <input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Como posso te chamar?"
              />
            </div>
            <div className={styles.field}>
              <label>E-mail (opcional)</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={`${styles.field} ${styles.full}`}>
              <label>Seu Comentário</label>
              <textarea
                rows="4"
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="Escreva aqui..."
              />
            </div>
          </div>
          <button type="submit" className={styles.submit}>Enviar Comentário</button>
        </form>
      </div>
    </div>
  );
}
