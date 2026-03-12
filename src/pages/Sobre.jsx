import { FiTarget, FiEye, FiHeart, FiAward, FiCheckCircle, FiStar, FiShield } from 'react-icons/fi';
import styles from './Sobre.module.css';

export default function Sobre() {
  return (
    <div className={styles.sobrePage}>
      {/* --- Introdução --- */}
      <section className="section">
        <div className="container">
          <div className={styles.intro}>
            <div className={styles.introText}>
              <h2>
                Sobre a <span>Ramos Treinamentos</span>
              </h2>
              <p>
                A Ramos Treinamentos é uma empresa especializada em formação e
                capacitação de profissionais na área de segurança privada. Com
                mais de 10 anos de atuação no mercado, nos consolidamos como
                referência em treinamentos de excelência.
              </p>
              <p>
                Nossa equipe de instrutores altamente qualificados utiliza
                metodologias modernas e práticas, garantindo que cada aluno esteja
                preparado para enfrentar os desafios reais do mercado de trabalho.
              </p>
              <p>
                Trabalhamos com compromisso, responsabilidade e dedicação para
                formar profissionais que fazem a diferença no setor de segurança.
              </p>
            </div>
            <div className={styles.introImage}>
              <div className={styles.placeholder}>
                <FiShield />
              </div>
              <div className={styles.introImageBorder} />
            </div>
          </div>
        </div>
      </section>

      {/* --- Missão, Visão e Valores --- */}
      <section className={`section ${styles.mvv}`}>
        <div className="container">
          <h2 className="section-title">
            Missão, Visão e <span>Valores</span>
          </h2>
          <p className="section-subtitle">
            Os pilares que guiam nossa atuação e compromisso com a excelência.
          </p>
          <div className={styles.mvvGrid}>
            <div className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <FiTarget />
              </div>
              <h3>Missão</h3>
              <p>
                Capacitar profissionais de segurança com excelência, promovendo
                treinamentos de alto nível que contribuam para a proteção de
                pessoas e patrimônios.
              </p>
            </div>
            <div className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <FiEye />
              </div>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como a principal referência nacional em
                treinamento e capacitação de profissionais de segurança privada.
              </p>
            </div>
            <div className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <FiHeart />
              </div>
              <h3>Valores</h3>
              <p>
                Ética, comprometimento, inovação, respeito ao próximo e busca
                constante pela excelência em tudo que fazemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Certificações --- */}
      <section className={`section ${styles.certifications}`}>
        <div className="container">
          <h2 className="section-title">
            Certificações e <span>Credibilidade</span>
          </h2>
          <p className="section-subtitle">
            Reconhecimentos que atestam a qualidade e seriedade dos nossos
            serviços.
          </p>
          <div className={styles.certGrid}>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><FiAward /></div>
              <h4>Autorização PF</h4>
              <p>Empresa autorizada pela Polícia Federal para formação de vigilantes.</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><FiCheckCircle /></div>
              <h4>ISO 9001</h4>
              <p>Certificação em sistema de gestão da qualidade.</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><FiStar /></div>
              <h4>Instrutores Certificados</h4>
              <p>Corpo docente com certificações nacionais e internacionais.</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><FiShield /></div>
              <h4>Credenciamento SESEG</h4>
              <p>Credenciada junto à Secretaria de Segurança.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
