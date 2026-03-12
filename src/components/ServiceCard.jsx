import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link to="/contato" className={styles.cardBtn}>
        Solicitar Orçamento
      </Link>
    </div>
  );
}
