import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
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

export default function CommentsSection({ id, initialComments = [], dark = false, pagina = 'minhas-obras' }) {
  const [comments, setComments] = useState(initialComments);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('');
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const supabaseConfigurado = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;

  // Carregar comentários aprovados do Supabase
  useEffect(() => {
    if (supabaseConfigurado) {
      carregarComentarios();
    } else {
      setLoading(false);
    }
  }, [pagina, supabaseConfigurado]);

  async function carregarComentarios() {
    try {
      const { data, error } = await supabase
        .from('comentarios')
        .select('*')
        .eq('pagina', pagina)
        .eq('status', 'aprovado')
        .order('criado_em', { ascending: false });

      if (error) throw error;
      
      // Converter formato do banco para formato do componente
      const comentariosFormatados = (data || []).map(c => ({
        author: c.nome,
        text: c.texto,
        date: formatarData(c.criado_em)
      }));
      
      setComments([...initialComments, ...comentariosFormatados]);
    } catch (error) {
      console.error('Erro ao carregar comentários:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatarData(data) {
    const d = new Date(data);
    return `${d.getDate()} de ${meses[d.getMonth()]}, ${d.getFullYear()}`;
  }

  function traduzirErro(error) {
    const errorMsg = error.message?.toLowerCase() || '';
    const errorCode = error.code || '';
    
    // Erros de validação do banco
    if (errorMsg.includes('texto_valido') || errorMsg.includes('check constraint')) {
      return 'Por favor, escreva um comentário com pelo menos 10 caracteres.';
    }
    
    if (errorMsg.includes('email') && (errorMsg.includes('invalid') || errorMsg.includes('format'))) {
      return 'Por favor, insira um e-mail válido ou deixe o campo em branco.';
    }
    
    if (errorMsg.includes('nome') && errorMsg.includes('not null')) {
      return 'Por favor, preencha seu nome.';
    }
    
    // Erros de rede
    if (errorMsg.includes('network') || errorMsg.includes('fetch')) {
      return 'Erro de conexão. Verifique sua internet e tente novamente.';
    }
    
    // Erro genérico
    return 'Erro ao enviar comentário. Tente novamente em instantes.';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Validações no cliente ANTES de enviar
    if (!nome.trim()) {
      setMensagem('❌ Por favor, preencha seu nome.');
      return;
    }
    
    if (!texto.trim()) {
      setMensagem('❌ Por favor, escreva um comentário.');
      return;
    }
    
    if (texto.trim().length < 10) {
      setMensagem('❌ Seu comentário precisa ter pelo menos 10 caracteres.');
      return;
    }
    
    if (texto.trim().length > 1000) {
      setMensagem('❌ Seu comentário não pode ter mais de 1000 caracteres.');
      return;
    }
    
    if (email.trim() && !email.includes('@')) {
      setMensagem('❌ Por favor, insira um e-mail válido ou deixe o campo em branco.');
      return;
    }

    if (!supabaseConfigurado) {
      // Fallback para modo local
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
      setMensagem('✅ Comentário adicionado!');
      setTimeout(() => setMensagem(''), 5000);
      return;
    }

    setEnviando(true);
    setMensagem('');

    try {
      const { error } = await supabase
        .from('comentarios')
        .insert([{
          nome: nome.trim(),
          email: email.trim() || null,
          texto: texto.trim(),
          pagina: pagina,
          status: 'pendente'
        }]);

      if (error) throw error;

      setMensagem('✅ Comentário enviado! Será publicado após análise.');
      setNome('');
      setEmail('');
      setTexto('');

      setTimeout(() => setMensagem(''), 5000);
    } catch (error) {
      console.error('Erro ao enviar comentário:', error);
      setMensagem(`❌ ${traduzirErro(error)}`);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className={`${styles.section} ${dark ? styles.dark : ''}`} id={id}>
      <div className={styles.inner}>
        <h3 className={styles.title}>Comentários</h3>

        <div className={styles.list}>
          {loading ? (
            <p style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.6 }}>Carregando comentários...</p>
          ) : comments.length === 0 ? (
            <p style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.6 }}>Seja o primeiro a comentar! ✨</p>
          ) : (
            comments.map((c, i) => (
              <CommentItem key={i} comment={c} />
            ))
          )}
        </div>

        {mensagem && (
          <div style={{ 
            padding: '12px 20px', 
            background: mensagem.includes('✅') ? 'rgba(46, 125, 50, 0.1)' : 'rgba(211, 47, 47, 0.1)',
            border: `1px solid ${mensagem.includes('✅') ? 'rgba(46, 125, 50, 0.3)' : 'rgba(211, 47, 47, 0.3)'}`,
            marginBottom: '16px',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            {mensagem}
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formTitle}>Deixe seu comentário</div>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label>Seu Nome *</label>
              <input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Como posso te chamar?"
                required
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label>Seu Comentário</label>
                <span style={{ 
                  fontSize: '12px', 
                  opacity: 0.6,
                  color: texto.length < 10 ? '#ff6b6b' : texto.length > 1000 ? '#ff6b6b' : 'inherit'
                }}>
                  {texto.length}/1000 {texto.length < 10 && '(mínimo: 10)'}
                </span>
              </div>
              <textarea
                rows="4"
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="Escreva aqui seu comentário... (mínimo 10 caracteres)"
              />
            </div>
          </div>
          <button type="submit" className={styles.submit} disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar Comentário'}
          </button>
        </form>
      </div>
    </div>
  );
}
