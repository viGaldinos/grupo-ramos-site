import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import {
  FiShield,
  FiTruck,
  FiMonitor,
  FiUsers,
  FiBook,
  FiTarget,
  FiLock,
  FiAlertTriangle,
  FiCrosshair,
} from 'react-icons/fi';
import styles from './Servicos.module.css';

const services = [
  {
    icon: <FiShield />,
    title: 'Vigilância Patrimonial',
    description:
      'Formação completa de vigilantes com certificação reconhecida pela Polícia Federal. Módulos teóricos e práticos.',
  },
  {
    icon: <FiTruck />,
    title: 'Escolta Armada',
    description:
      'Capacitação especializada em escolta armada, transporte de valores e proteção de cargas de alto risco.',
  },
  {
    icon: <FiMonitor />,
    title: 'Monitoramento Eletrônico',
    description:
      'Treinamento em CFTV, sistemas de alarme, controle de acesso e centrais de monitoramento 24 horas.',
  },
  {
    icon: <FiUsers />,
    title: 'Segurança Pessoal',
    description:
      'Formação de profissionais para segurança executiva, proteção de autoridades e dignitários.',
  },
  {
    icon: <FiBook />,
    title: 'Cursos de Reciclagem',
    description:
      'Atualização profissional obrigatória para renovação de certificados de vigilante e extensões.',
  },
  {
    icon: <FiTarget />,
    title: 'Tiro Defensivo',
    description:
      'Treinamento prático de armamento e tiro em estande credenciado, com instrutores certificados.',
  },
  {
    icon: <FiLock />,
    title: 'Segurança Eletrônica',
    description:
      'Instalação e manutenção de sistemas de segurança eletrônica, integração de dispositivos IoT.',
  },
  {
    icon: <FiAlertTriangle />,
    title: 'Gestão de Riscos',
    description:
      'Análise de vulnerabilidades, elaboração de planos de segurança e consultoria especializada.',
  },
  {
    icon: <FiCrosshair />,
    title: 'Supervisão de Segurança',
    description:
      'Formação de supervisores e gestores de equipes de segurança com foco em liderança operacional.',
  },
];

export default function Servicos() {
  return (
    <div className={styles.servicosPage}>
      <section className="section">
        <div className="container">
          <div className={styles.pageHeader}>
            <h1>
              Nossos <span>Serviços</span>
            </h1>
            <p>
              Conheça toda a nossa gama de treinamentos e serviços especializados
              para o setor de segurança privada.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className={styles.ctaBanner}>
            <h3>Precisa de um treinamento personalizado?</h3>
            <p>
              Desenvolvemos programas sob medida para as necessidades da sua
              empresa.
            </p>
            <Link to="/contato">Fale Conosco</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
