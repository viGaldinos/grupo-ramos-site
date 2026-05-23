import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Carousel from '../components/Carousel';
import {
  FiShield,
  FiMonitor,
  FiUsers,
  FiAward,
  FiBriefcase,
  FiFileText,
} from 'react-icons/fi';
import styles from './Home.module.css';

const services = [
  {
    icon: <FiShield />,
    title: 'Vigilância Patrimonial',
    description:
      'Serviço terceirizado de vigilância com profissionais treinados e certificados para proteção do seu patrimônio.',
  },
  {
    icon: <FiAward />,
    title: 'Capacitação de Vigilantes',
    description:
      'Formação completa de vigilantes com certificação reconhecida nacionalmente pela Polícia Federal.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Consultoria em Segurança',
    description:
      'Análise de vulnerabilidades, planejamento estratégico e consultoria especializada para empresas.',
  },
  {
    icon: <FiMonitor />,
    title: 'Monitoramento, Sistemas Integrados CFTV e Alarmes',
    description:
      'Soluções completas em CFTV, alarmes, controle de acesso e centrais de monitoramento 24 horas.',
  },
  {
    icon: <FiUsers />,
    title: 'Treinamento para Profissionais de Portaria',
    description:
      'Capacitação especializada para porteiros com foco em atendimento, controle de acesso e protocolos de segurança.',
  },
  {
    icon: <FiFileText />,
    title: 'Serviço de AVCB e Laudos',
    description:
      'Assessoria completa para obtenção do Auto de Vistoria do Corpo de Bombeiros e elaboração de laudos técnicos.',
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
            Oferecemos soluções completas em segurança, monitoramento e capacitação
            profissional para o setor de segurança privada.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.partnersSection}`}>
        <div className="container">
          <h2 className="section-title">
            Nossos <span>Parceiros</span>
          </h2>
          <p className="section-subtitle">
            Empresas e organizações que confiam nas nossas soluções de segurança.
          </p>
          <Carousel />
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
