import { useState } from 'react';
import styles from './VideoGallery.module.css';

const videos = [
  {
    id: 1,
    title: 'Projetos 3',
    category: 'Projetos',
    youtubeId: 'DZ2SJdiqYFg',
  },
  {
    id: 2,
    title: 'Projetos 2',
    category: 'Projetos',
    youtubeId: 'F77jUmtG8-k',
  },
  {
    id: 3,
    title: 'Projetos 1',
    category: 'Projetos',
    youtubeId: 'VfUMZUnu_qY',
  },
  {
    id: 4,
    title: 'Workshop: O Avanço das Tecnologias',
    category: 'Workshops',
    youtubeId: 'dFh2To45Njk',
  },
  {
    id: 5,
    title: 'Workshop: Introdução',
    category: 'Workshops',
    youtubeId: '1E0c4MkQb5g',
  },
  {
    id: 6,
    title: 'Secretário de Segurança de São Caetano - Dr. Marco Antônio',
    category: 'Palestras',
    youtubeId: 'TSOTOGDkmCc',
  },
  {
    id: 7,
    title: 'Integração dos Equipamentos Eletrônicos',
    category: 'Segurança',
    youtubeId: 'l0uACXpRsYo',
  },
  {
    id: 8,
    title: 'Visão do Perfil de um Zelador',
    category: 'Palestras',
    youtubeId: 'wY-9yWTx6mY',
  },
  {
    id: 9,
    title: 'Tipos de Porteiros',
    category: 'Treinamentos',
    youtubeId: '8TBt_Oq0HFk',
  },
  {
    id: 10,
    title: 'Teste de Segurança em Condomínios',
    category: 'Segurança',
    youtubeId: 'klMTwxgTCcQ',
  },
  {
    id: 11,
    title: 'Arrastão a Condomínios',
    category: 'Segurança',
    youtubeId: 'MVMVzv-dM9s',
  },
  {
    id: 12,
    title: 'Um Pouco de Nossa História',
    category: 'Institucional',
    youtubeId: 'YkBaK5Kr7zE',
  },
];

const categories = ['Todos', ...new Set(videos.map((v) => v.category))];

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredVideos =
    activeCategory === 'Todos'
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <div className={styles.gallery}>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${
              activeCategory === cat ? styles.active : ''
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredVideos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.videoInfo}>
              <h3 className={styles.videoTitle}>{video.title}</h3>
              <span className={styles.videoCategory}>{video.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
