import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <h3>Ramos Treinamentos</h3>
          <p>
            Excelência em treinamentos e capacitação profissional. Formando
            profissionais preparados para os desafios do mercado de segurança.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className={styles.socialLink} aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h3>Links Rápidos</h3>
          <p><Link to="/">Início</Link></p>
          <p><Link to="/sobre">Sobre Nós</Link></p>
          <p><Link to="/servicos">Serviços</Link></p>
          <p><Link to="/treinamentos">Treinamentos</Link></p>
          <p><Link to="/contato">Contato</Link></p>
        </div>

        <div className={styles.footerCol}>
          <h3>Contato</h3>
          <div className={styles.contactItem}>
            <FiPhone />
            <span>(11) 4220-3055 | (11) 9.1006-6342</span>
          </div>
          <div className={styles.contactItem}>
            <FiMail />
            <span>contato@ramostreinamentos.com.br</span>
          </div>
          <div className={styles.contactItem}>
            <FiMapPin />
            <span>Rua Amazonas, 792 - Centro, São Caetano do Sul - SP</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} <span>Ramos Treinamentos</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
}
