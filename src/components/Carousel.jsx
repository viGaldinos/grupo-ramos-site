import { useState, useEffect, useCallback, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Carousel.module.css';

export const parceirosData = [
  { id: 1, nome: 'Parceiro 1' },
  { id: 2, nome: 'Parceiro 2' },
  { id: 3, nome: 'Parceiro 3' },
  { id: 4, nome: 'Parceiro 4' },
  { id: 5, nome: 'Parceiro 5' },
  { id: 6, nome: 'Parceiro 6' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const viewportRef = useRef(null);

  const getVisible = () =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  const updateLayout = useCallback(() => {
    if (viewportRef.current) {
      setItemWidth(viewportRef.current.offsetWidth / getVisible());
    }
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  const max = Math.max(0, parceirosData.length - getVisible());

  const next = useCallback(
    () => setIndex((i) => (i >= max ? 0 : i + 1)),
    [max]
  );
  const prev = () => setIndex((i) => (i <= 0 ? max : i - 1));

  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prev}
        aria-label="Anterior"
      >
        <FiChevronLeft />
      </button>

      <div className={styles.viewport} ref={viewportRef}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * itemWidth}px)` }}
        >
          {parceirosData.map((p) => (
            <div
              key={p.id}
              className={styles.slide}
              style={{ minWidth: itemWidth > 0 ? itemWidth : undefined }}
            >
              <div className={styles.card}>
                <span className={styles.partnerName}>{p.nome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={next}
        aria-label="Próximo"
      >
        <FiChevronRight />
      </button>

      <div className={styles.dots}>
        {parceirosData.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Parceiro ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
