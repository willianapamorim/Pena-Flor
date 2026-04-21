import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import styles from './AdminModeracao.module.css';

export default function AdminModeracao() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [comentarios, setComentarios] = useState([]);
  const [filtro, setFiltro] = useState('pendente'); // pendente, aprovado, todos
  const [paginaFiltro, setPaginaFiltro] = useState('todas'); // todas, home, atelie, sabiju
  const [processando, setProcessando] = useState(null);

  useEffect(() => {
    verificarAutenticacao();
  }, []);

  useEffect(() => {
    if (!loading) {
      carregarComentarios();
    }
  }, [filtro, paginaFiltro, loading]);

  const verificarAutenticacao = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate('/admin/login');
    } else {
      setLoading(false);
    }
  };

  const carregarComentarios = async () => {
    try {
      let query = supabase
        .from('comentarios')
        .select('*')
        .order('criado_em', { ascending: false });

      // Filtrar por status
      if (filtro !== 'todos') {
        query = query.eq('status', filtro);
      }

      // Filtrar por página
      if (paginaFiltro !== 'todas') {
        query = query.eq('pagina', paginaFiltro);
      }

      const { data, error } = await query;

      if (error) throw error;
      setComentarios(data || []);
    } catch (error) {
      console.error('Erro ao carregar comentários:', error);
    }
  };

  const atualizarStatus = async (id, novoStatus) => {
    setProcessando(id);
    try {
      const { error } = await supabase
        .from('comentarios')
        .update({ status: novoStatus })
        .eq('id', id);

      if (error) throw error;

      // Recarregar lista
      await carregarComentarios();
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar comentário');
    } finally {
      setProcessando(null);
    }
  };

  const deletarComentario = async (id) => {
    if (!confirm('Tem certeza que deseja deletar este comentário?')) return;

    setProcessando(id);
    try {
      const { error } = await supabase
        .from('comentarios')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Recarregar lista
      await carregarComentarios();
    } catch (error) {
      console.error('Erro ao deletar comentário:', error);
      alert('Erro ao deletar comentário');
    } finally {
      setProcessando(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status) => {
    const badges = {
      pendente: { label: 'Pendente', class: styles.badgePendente },
      aprovado: { label: 'Aprovado', class: styles.badgeAprovado },
      rejeitado: { label: 'Rejeitado', class: styles.badgeRejeitado },
    };
    return badges[status] || badges.pendente;
  };

  const getPaginaBadge = (pagina) => {
    const badges = {
      home: '🏠 Home',
      atelie: '🎨 Ateliê',
      sabiju: '📖 SABIJU',
    };
    return badges[pagina] || pagina;
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>Carregando...</div>
      </div>
    );
  }

  const pendentes = comentarios.filter(c => c.status === 'pendente').length;
  const aprovados = comentarios.filter(c => c.status === 'aprovado').length;
  const rejeitados = comentarios.filter(c => c.status === 'rejeitado').length;

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.icon}>🛡️</span>
              Moderação de Comentários
            </h1>
            <p className={styles.subtitle}>A Pena de um Bom Escritor</p>
          </div>
          <div className={styles.headerActions}>
            <button onClick={() => navigate('/')} className={styles.btnSecundario}>
              Ver Site
            </button>
            <button onClick={handleLogout} className={styles.btnSair}>
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Estatísticas */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Pendentes</span>
          <span className={styles.statValue}>{pendentes}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Aprovados</span>
          <span className={styles.statValue}>{aprovados}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Rejeitados</span>
          <span className={styles.statValue}>{rejeitados}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total</span>
          <span className={styles.statValue}>{comentarios.length}</span>
        </div>
      </div>

      {/* Filtros */}
      <div className={styles.filtros}>
        <div className={styles.filtroGroup}>
          <label className={styles.filtroLabel}>Status:</label>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className={styles.filtroSelect}
          >
            <option value="pendente">Pendentes</option>
            <option value="aprovado">Aprovados</option>
            <option value="rejeitado">Rejeitados</option>
            <option value="todos">Todos</option>
          </select>
        </div>

        <div className={styles.filtroGroup}>
          <label className={styles.filtroLabel}>Página:</label>
          <select
            value={paginaFiltro}
            onChange={(e) => setPaginaFiltro(e.target.value)}
            className={styles.filtroSelect}
          >
            <option value="todas">Todas</option>
            <option value="home">Home</option>
            <option value="atelie">Ateliê</option>
            <option value="sabiju">SABIJU</option>
          </select>
        </div>

        <button onClick={carregarComentarios} className={styles.btnAtualizar}>
          🔄 Atualizar
        </button>
      </div>

      {/* Lista de Comentários */}
      <div className={styles.comentariosList}>
        {comentarios.length === 0 ? (
          <div className={styles.vazio}>
            <span className={styles.vazioIcon}>📭</span>
            <p>Nenhum comentário encontrado</p>
          </div>
        ) : (
          comentarios.map((comentario) => {
            const badge = getStatusBadge(comentario.status);
            const isProcessando = processando === comentario.id;

            return (
              <div key={comentario.id} className={styles.comentarioCard}>
                <div className={styles.comentarioHeader}>
                  <div className={styles.comentarioInfo}>
                    <div className={styles.comentarioNome}>
                      {comentario.nome}
                    </div>
                    <div className={styles.comentarioMeta}>
                      <span>{comentario.email}</span>
                      <span>•</span>
                      <span>{getPaginaBadge(comentario.pagina)}</span>
                      <span>•</span>
                      <span>{formatarData(comentario.criado_em)}</span>
                    </div>
                  </div>
                  <span className={badge.class}>{badge.label}</span>
                </div>

                <div className={styles.comentarioTexto}>
                  {comentario.texto}
                </div>

                <div className={styles.comentarioAcoes}>
                  {comentario.status !== 'aprovado' && (
                    <button
                      onClick={() => atualizarStatus(comentario.id, 'aprovado')}
                      className={styles.btnAprovar}
                      disabled={isProcessando}
                    >
                      ✅ Aprovar
                    </button>
                  )}
                  {comentario.status !== 'rejeitado' && (
                    <button
                      onClick={() => atualizarStatus(comentario.id, 'rejeitado')}
                      className={styles.btnRejeitar}
                      disabled={isProcessando}
                    >
                      ❌ Rejeitar
                    </button>
                  )}
                  {comentario.status !== 'pendente' && (
                    <button
                      onClick={() => atualizarStatus(comentario.id, 'pendente')}
                      className={styles.btnPendente}
                      disabled={isProcessando}
                    >
                      ⏳ Marcar Pendente
                    </button>
                  )}
                  <button
                    onClick={() => deletarComentario(comentario.id)}
                    className={styles.btnDeletar}
                    disabled={isProcessando}
                  >
                    🗑️ Deletar
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
