import VideoGallery from '../components/VideoGallery';
import styles from './Treinamentos.module.css';

export default function Treinamentos() {
  return (
    <div className={styles.treinamentosPage}>
      <section className="section">
        <div className="container">
          <div className={styles.pageHeader}>
            <h1>
              Treinamentos e <span>Vídeos</span>
            </h1>
            <p>
              Confira nossa galeria de vídeos com demonstrações de treinamentos,
              depoimentos e conteúdo educacional.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <VideoGallery />
        </div>
      </section>
    </div>
  );
}
