import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import {
  FiShield,
  FiTruck,
  FiMonitor,
  FiUsers,
  FiBook,
  FiTarget,
} from 'react-icons/fi';
import styles from './Home.module.css';

const services = [
  {
    icon: <FiShield />,
    title: 'Vigilância Patrimonial',
    description:
      'Treinamento completo para formação de vigilantes com certificação reconhecida nacionalmente.',
  },
  {
    icon: <FiTruck />,
    title: 'Escolta Armada',
    description:
      'Capacitação especializada em técnicas de escolta e proteção de cargas e pessoas.',
  },
  {
    icon: <FiMonitor />,
    title: 'Monitoramento Eletrônico',
    description:
      'Formação em sistemas de CFTV, alarmes e centrais de monitoramento 24h.',
  },
  {
    icon: <FiUsers />,
    title: 'Segurança Pessoal',
    description:
      'Treinamento para profissionais de proteção pessoal e segurança executiva.',
  },
  {
    icon: <FiBook />,
    title: 'Cursos de Reciclagem',
    description:
      'Atualização profissional obrigatória para renovação de certificados.',
  },
  {
    icon: <FiTarget />,
    title: 'Tiro Defensivo',
    description:
      'Treinamento prático de armamento e tiro com instrutores qualificados.',
  },
];

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />

      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">
          <h2 className="section-title">
            Nossos <span>Serviços</span>
          </h2>
          <p className="section-subtitle">
            Oferecemos uma gama completa de treinamentos e serviços para o setor
            de segurança privada.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Pronto para Capacitar sua Equipe?</h2>
        <p>
          Entre em contato conosco e descubra como podemos ajudar no
          desenvolvimento profissional da sua equipe.
        </p>
        <Link to="/contato" className={styles.ctaBtn}>
          Solicite um Orçamento
        </Link>
      </section>
    </div>
  );
}
