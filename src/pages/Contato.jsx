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
                  <p>(11) 4220-3055</p>
                  <p>(11) 9.1006-6342 (WhatsApp)</p>
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
                  <p>Rua Amazonas, 792 - Centro</p>
                  <p>São Caetano do Sul - SP</p>
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

              <div className={styles.mapContainer}>
                <iframe
                  title="Localização Ramos Treinamentos"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.5547!3d-23.6217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b2c1b7e9b1d%3A0x0!2sRua%20Amazonas%2C%20792%20-%20Centro%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
