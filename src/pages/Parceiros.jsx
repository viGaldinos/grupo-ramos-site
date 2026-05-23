import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import styles from './Parceiros.module.css';

export default function Parceiros() {
  return (
    <div className={styles.parceirosPage}>
      <section className="section">
        <div className="container">
          <div className={styles.pageHeader}>
            <h1>
              Nossos <span>Parceiros</span>
            </h1>
            <p>
              Trabalhamos lado a lado com empresas e organizações que compartilham
              nossos valores de excelência e comprometimento com a segurança.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">
            Empresas <span>Parceiras</span>
          </h2>
          <p className="section-subtitle">
            Conheça algumas das empresas que confiam nos nossos serviços.
          </p>
          <Carousel />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Seja um Parceiro</h2>
          <p>
            Quer integrar nossa rede de parceiros? Entre em contato e descubra
            as vantagens de trabalhar conosco.
          </p>
          <Link to="/contato" className="btn btn-primary">
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}
