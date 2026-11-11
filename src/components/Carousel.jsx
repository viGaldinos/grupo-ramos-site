import { useState, useEffect, useCallback, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import texturaSaoCaetano from '../assets/parceiros/textura-sao-caetano.png';
import novaBrasilQuimica from '../assets/parceiros/nova-brasil-quimica.png';
import prettyWork from '../assets/parceiros/pretty-work.png';
import styles from './Carousel.module.css';

export const parceirosData = [
  { id: 1, nome: 'Textura São Caetano', logo: texturaSaoCaetano },
  { id: 2, nome: 'Nova Brasil Química', logo: novaBrasilQuimica },
  { id: 3, nome: 'Pretty Work by Cássia Cozalin', logo: prettyWork },
];

const TRANSITION_MS = 400;
const AUTOPLAY_MS = 3500;

const getVisible = () =>
  typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

export default function Carousel() {
  const [visible, setVisible] = useState(getVisible);
  const [itemWidth, setItemWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef(null);
  const busyRef = useRef(false);

  const total = parceirosData.length;

  // Repeat the list until it fills the viewport, then append clones of the
  // first `visible` items so the track can slide past the end and snap back
  // to the start without a visible jump (infinite loop).
  const base = [];
  while (base.length < Math.max(total, visible)) {
    base.push(...parceirosData);
  }
  const loopLen = base.length;
  const slides = [...base, ...base.slice(0, visible)];

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      const v = getVisible();
      setVisible(v);
      setItemWidth(entry.contentRect.width / v);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // After a silent snap (animation off), turn the animation back on.
  useEffect(() => {
    if (animate) return undefined;
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [animate]);

  const goTo = useCallback(
    (target) => {
      if (busyRef.current) return;
      busyRef.current = true;
      setAnimate(true);
      setIndex(target);
      setTimeout(() => {
        busyRef.current = false;
        if (target >= loopLen) {
          setAnimate(false);
          setIndex(target - loopLen);
        }
      }, TRANSITION_MS);
    },
    [loopLen]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const prev = () => {
    if (busyRef.current) return;
    if (index === 0) {
      // Jump silently to the cloned copy at the end, then slide back one.
      setAnimate(false);
      setIndex(loopLen);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => goTo(loopLen - 1))
      );
    } else {
      goTo(index - 1);
    }
  };

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, paused]);

  const activeDot = index % total;

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
          style={{
            transform: `translateX(-${index * itemWidth}px)`,
            transition: animate ? `transform ${TRANSITION_MS}ms ease` : 'none',
          }}
        >
          {slides.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className={styles.slide}
              style={{ width: itemWidth > 0 ? itemWidth : undefined }}
              aria-hidden={i < index || i >= index + visible}
            >
              <div className={styles.card}>
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.nome}
                    title={p.nome}
                    className={styles.logo}
                  />
                ) : (
                  <span className={styles.partnerName}>{p.nome}</span>
                )}
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
        {parceirosData.map((p, i) => (
          <button
            key={p.id}
            className={`${styles.dot} ${i === activeDot ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para ${p.nome}`}
          />
        ))}
      </div>
    </div>
  );
}
