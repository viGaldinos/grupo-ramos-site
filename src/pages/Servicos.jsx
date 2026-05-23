import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import {
  FiShield,
  FiMonitor,
  FiUsers,
  FiBook,
  FiLock,
  FiAlertTriangle,
  FiCrosshair,
  FiAward,
  FiBriefcase,
  FiFileText,
} from 'react-icons/fi';
import styles from './Servicos.module.css';

const services = [
  {
    icon: <FiShield />,
    title: 'Vigilância Patrimonial',
    description:
      'Serviço terceirizado de vigilância com profissionais treinados para proteção patrimonial. Certificação reconhecida pela Polícia Federal.',
  },
  {
    icon: <FiAward />,
    title: 'Capacitação de Vigilantes',
    description:
      'Formação completa de vigilantes com certificação nacional. Programas teóricos e práticos conforme normas regulamentadoras.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Consultoria em Segurança',
    description:
      'Análise de vulnerabilidades, planejamento estratégico e consultoria especializada para empresas, condomínios e eventos.',
  },
  {
    icon: <FiMonitor />,
    title: 'Monitoramento, Sistemas Integrados CFTV, Alarmes',
    description:
      'Soluções integradas em CFTV, sistemas de alarme, controle de acesso e centrais de monitoramento 24 horas.',
  },
  {
    icon: <FiUsers />,
    title: 'Segurança Pessoal',
    description:
      'Formação de profissionais para segurança executiva, proteção de autoridades e dignitários.',
  },
  {
    icon: <FiBook />,
    title: 'Treinamento para Profissionais de Portaria',
    description:
      'Capacitação especializada para porteiros e recepcionistas, com foco em atendimento, controle de acesso e protocolos de segurança.',
  },
  {
    icon: <FiFileText />,
    title: 'Serviço de AVCB e Laudos',
    description:
      'Assessoria completa para obtenção do Auto de Vistoria do Corpo de Bombeiros (AVCB) e elaboração de laudos técnicos de segurança.',
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
  {
    icon: <FiAlertTriangle />,
    title: 'Postes de Vigilância',
    description:
      'Fornecimento e instalação de postes de vigilância para monitoramento perimetral de condomínios, empresas e espaços públicos.',
  },
  {
    icon: <FiUsers />,
    title: 'Palestra de Conscientização',
    description:
      'Palestras especializadas de conscientização em segurança para condôminos e conselheiros, promovendo cultura de prevenção.',
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
              Conheça toda a nossa gama de serviços especializados em
              monitoramento, segurança integrada e capacitação profissional.
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
