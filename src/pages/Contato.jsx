import ContactForm from '../components/ContactForm';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import styles from './Contato.module.css';

export default function Contato() {
  return (
    <div className={styles.contatoPage}>
      <section className="section">
        <div className="container">
          <div className={styles.pageHeader}>
            <h1>
              Entre em <span>Contato</span>
            </h1>
            <p>
              Estamos prontos para atender você. Preencha o formulário ou entre em
              contato diretamente pelos nossos canais.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.contatoGrid}>
            <div className={styles.infoSection}>
              <h2>
                Informações de <span>Contato</span>
              </h2>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiPhone />
                </div>
                <div className={styles.infoContent}>
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiMail />
                </div>
                <div className={styles.infoContent}>
                  <h4>E-mail</h4>
                  <p>contato@ramostreinamentos.com.br</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiMapPin />
                </div>
                <div className={styles.infoContent}>
                  <h4>Endereço</h4>
                  <p>Av. Exemplo, 1234 - Centro</p>
                  <p>São Paulo, SP - CEP 01000-000</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiClock />
                </div>
                <div className={styles.infoContent}>
                  <h4>Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 08h - 18h</p>
                  <p>Sábado: 08h - 12h</p>
                </div>
              </div>

              <div className={styles.mapPlaceholder}>
                📍 Mapa será integrado aqui (Google Maps)
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
