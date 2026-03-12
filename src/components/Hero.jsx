import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroContent}>
        <span className={styles.heroTag}>Treinamento & Capacitação</span>
        <h1 className={styles.heroTitle}>
          Formando Profissionais <span>de Excelência</span>
        </h1>
        <p className={styles.heroDescription}>
          A Ramos Treinamentos é referência em capacitação profissional na área
          de segurança. Oferecemos cursos, treinamentos e consultoria com os
          mais altos padrões de qualidade.
        </p>
        <div className={styles.heroButtons}>
          <Link to="/contato" className="btn btn-primary">
            Solicite um Orçamento
          </Link>
          <Link to="/servicos" className="btn btn-outline">
            Nossos Serviços
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Profissionais Formados</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Anos de Experiência</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Empresas Atendidas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
