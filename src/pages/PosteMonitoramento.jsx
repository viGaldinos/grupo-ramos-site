import { Link } from 'react-router-dom';
import {
  FiShield,
  FiBarChart2,
  FiZap,
  FiTrendingUp,
  FiVideo,
  FiCheckCircle,
  FiSmartphone,
  FiCloud,
  FiMapPin,
  FiGrid,
  FiAward,
  FiMonitor,
} from 'react-icons/fi';
import posteImg4cam from '../assets/poste-monitoramento-4cam.jpeg';
import posteImg3cam from '../assets/poste-monitoramento-3cam.jpeg';
import styles from './PosteMonitoramento.module.css';

const beneficios = [
  {
    icon: <FiShield />,
    title: 'Aumento da segurança pública',
    description:
      'Câmeras de vigilância ajudam a inibir atividades criminosas. A simples presença de um sistema de monitoramento reduz furtos e vandalismo, trazendo sensação real de segurança para quem circula pelo local.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Coleta de dados',
    description:
      'As torres coletam dados sobre tráfego e comportamento, fornecendo informações valiosas para análise de segurança e planejamento urbano, e ajudando a identificar áreas que precisam de mais atenção.',
  },
  {
    icon: <FiZap />,
    title: 'Resposta rápida a incidentes',
    description:
      'Sensores de movimento e alarmes integrados alertam a central sobre atividades suspeitas em tempo real, permitindo uma resposta rápida — muitas vezes antes de a ocorrência se agravar.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Valorização do espaço',
    description:
      'Torres bem projetadas e funcionais valorizam áreas urbanas e comerciais, tornando-as mais atraentes. Espaços seguros e bem monitorados são, comprovadamente, mais utilizados e mais bem cuidados.',
  },
];

const servicosInclusos = [
  {
    title: 'Monitoramento 24h',
    description:
      'Monitoramento contínuo de áreas públicas e privadas, garantindo segurança em tempo integral e inibindo comportamentos criminosos.',
  },
  {
    title: 'Gravação e armazenamento de imagens',
    description:
      'Captura e armazenamento de vídeos para revisão posterior, útil para investigação de incidentes e identificação de suspeitos.',
  },
  {
    title: 'Ação preventiva',
    description:
      'A padronização e a presença uniforme e visível das torres causam efeito inibidor e afastam a criminalidade antes mesmo de qualquer ocorrência.',
  },
  {
    title: 'Ação reativa',
    description:
      'Caso aconteça alguma ação suspeita, a central reúne as informações de várias câmeras para efeito investigativo e de rastreabilidade.',
  },
  {
    title: 'Ação imediata',
    description:
      'Com a ocorrência avisada em tempo real, é possível acompanhar ativamente o deslocamento dos suspeitos, evitar um novo caso ou apoiar a polícia na captura.',
  },
  {
    title: 'QR Code de contato',
    description:
      'Todas as torres possuem um QR Code para que qualquer pessoa possa reportar um incidente diretamente no local.',
  },
];

const appFeatures = [
  {
    icon: <FiVideo />,
    title: 'Ao vivo',
    description: 'Imagens em tempo real, direto do celular.',
  },
  {
    icon: <FiCloud />,
    title: 'Nuvem',
    description: 'Gravações armazenadas e disponíveis a qualquer hora.',
  },
  {
    icon: <FiMapPin />,
    title: 'De onde estiver',
    description: 'Acesso remoto, sem depender de estar no local.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Simples de usar',
    description: 'Interface direta, sem necessidade de treinamento técnico.',
  },
];

const diferenciais = [
  {
    title: 'Experiência comprovada',
    description:
      'Anos de atuação em segurança eletrônica, com sistemas instalados e operando em diferentes tipos de estabelecimento.',
  },
  {
    title: 'Comprometimento total',
    description:
      'Acompanhamento próximo do cliente, do projeto à instalação e manutenção contínua do sistema.',
  },
  {
    title: 'Monitoramento 24h',
    description:
      'Central própria, com equipe acompanhando as imagens em tempo integral, todos os dias da semana.',
  },
  {
    title: 'Integração Smart Sampa',
    description:
      'Compatibilidade com o programa da Prefeitura de São Paulo, ampliando o alcance da segurança monitorada.',
  },
];

const pacotes = [
  {
    nome: 'Essencial',
    itens: [
      'Torre de monitoramento',
      '3 câmeras IP',
      'QR Code de contato',
      'Gravação das imagens',
      'Configuração das câmeras',
      'Monitoramento pelo Grupo Ramos',
    ],
  },
  {
    nome: 'Smart Sampa',
    destaque: true,
    itens: [
      'Torre de monitoramento',
      '3 câmeras',
      'QR Code de contato',
      'Gravação das imagens',
      'Configuração das câmeras',
      'Monitoramento pelo Grupo Ramos',
      'Integração com o Smart Sampa',
    ],
  },
];

export default function PosteMonitoramento() {
  return (
    <div className={styles.postePage}>
      <section className="section">
        <div className="container">
          <div className={styles.pageHeader}>
            <h1>
              Poste de <span>Monitoramento</span>
            </h1>
            <p>
              Torres de monitoramento, central 24 horas e tecnologia
              integrada à segurança da sua cidade ou empresa.
            </p>
          </div>
        </div>
      </section>

      {/* --- Apresentação --- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.intro}>
            <div className={styles.introText}>
              <h2>
                Vigilância que vira <span>resposta real</span>
              </h2>
              <p>
                As torres de monitoramento têm se tornado uma ferramenta
                essencial nas estratégias de segurança e gestão urbana.
                Equipadas com tecnologia avançada — câmeras de vigilância,
                sensores e sistemas de comunicação — desempenham um papel
                crucial na melhoria da segurança pública e na eficiência da
                gestão de espaços.
              </p>
              <p>
                O Grupo Ramos reúne, em uma única estrutura, o equipamento, a
                central de monitoramento e a equipe capacitada para
                transformar vigilância em resposta real — antes, durante e
                depois de qualquer ocorrência.
              </p>
              <div className={styles.introBoxes}>
                <div className={styles.introBox}>
                  <h4>Estrutura própria</h4>
                  <p>Torre, câmeras e central operando como um sistema único.</p>
                </div>
                <div className={styles.introBox}>
                  <h4>Presença visível</h4>
                  <p>Identidade clara que já funciona como efeito inibidor.</p>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img
                src={posteImg4cam}
                alt="Poste de monitoramento 24 horas do Grupo Ramos"
                className={styles.introImg}
              />
              <div className={styles.introImageBorder} />
              <p className={styles.imageCaption}>
                Torre de monitoramento 24 horas — câmeras, identidade visual
                e QR code de contato integrados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Benefícios --- */}
      <section className={`section ${styles.beneficios}`}>
        <div className="container">
          <h2 className="section-title">
            Vantagens da <span>Solução</span>
          </h2>
          <p className="section-subtitle">
            As torres de monitoramento desempenham um papel vital na
            proteção de espaços públicos e privados.
          </p>
          <div className={styles.beneficiosGrid}>
            {beneficios.map((b, index) => (
              <div key={index} className={styles.beneficioCard}>
                <div className={styles.beneficioIcon}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.conclusao}>
            <h3>Conclusão</h3>
            <p>
              As torres de monitoramento são uma solução abrangente para a
              proteção de comunidades e negócios. Investir nessa tecnologia é
              investir no futuro do espaço e no bem-estar de quem o utiliza.
            </p>
          </div>
        </div>
      </section>

      {/* --- Serviços inclusos --- */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            O que está <span>incluso</span>
          </h2>
          <p className="section-subtitle">
            Cada ponto de serviço funciona de forma integrada — a força da
            solução está em operar todos simultaneamente, não isoladamente.
          </p>
          <div className={styles.servicosList}>
            {servicosInclusos.map((s, index) => (
              <div key={index} className={styles.servicoItem}>
                <div className={styles.servicoNumber}>{index + 1}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Aplicativo --- */}
      <section className={`section ${styles.appSection}`}>
        <div className="container">
          <div className={styles.appHeader}>
            <h2 className="section-title">
              Acesso ao vivo, de <span>qualquer lugar</span>
            </h2>
            <p className="section-subtitle">
              Com o aplicativo VIGEO você visualiza as imagens das suas
              câmeras online, de onde estiver — e acessa gravações em nuvem
              direto do celular.
            </p>
          </div>
          <div className={styles.appGrid}>
            {appFeatures.map((f, index) => (
              <div key={index} className={styles.appCard}>
                <div className={styles.appIcon}>{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Diferenciais --- */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Por que escolher a <span>gente?</span>
          </h2>
          <div className={styles.diferenciaisGrid}>
            {diferenciais.map((d, index) => (
              <div key={index} className={styles.diferencialCard}>
                <div className={styles.diferencialIcon}>
                  <FiCheckCircle />
                </div>
                <div>
                  <h4>{d.title}</h4>
                  <p>{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Smart Sampa --- */}
      <section className={`section ${styles.smartSampa}`}>
        <div className="container">
          <div className={styles.smartSampaGrid}>
            <div className={styles.introImage}>
              <img
                src={posteImg3cam}
                alt="Poste de monitoramento com integração Smart Sampa"
                className={styles.introImg}
              />
              <div className={styles.introImageBorder} />
            </div>
            <div>
              <h2>
                Integração oficial <span>Smart Sampa</span>
              </h2>
              <p>
                O Smart Sampa é um programa da Prefeitura de São Paulo
                voltado para segurança pública, que utiliza tecnologia de
                monitoramento inteligente para ajudar na prevenção e no
                combate a crimes na cidade.
              </p>
              <div className={styles.smartSampaLists}>
                <div>
                  <h4><FiGrid /> O programa</h4>
                  <ul>
                    <li>Integra câmeras públicas e privadas em uma única plataforma</li>
                    <li>Usa inteligência artificial para análise de imagens</li>
                    <li>Auxilia a polícia na identificação de suspeitos, veículos e ocorrências</li>
                    <li>Permite resposta mais rápida das forças de segurança</li>
                  </ul>
                </div>
                <div>
                  <h4><FiAward /> Para que serve</h4>
                  <ul>
                    <li>Aumentar a segurança urbana</li>
                    <li>Monitorar áreas estratégicas da cidade</li>
                    <li>Apoiar investigações e ações policiais</li>
                    <li>Prevenir crimes e identificar situações suspeitas em tempo real</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Opções de pacote --- */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Soluções sob <span>medida</span>
          </h2>
          <p className="section-subtitle">
            A estrutura se adapta ao tamanho e à necessidade do local. Confira
            o que compõe cada opção.
          </p>
          <div className={styles.pacotesGrid}>
            {pacotes.map((p, index) => (
              <div
                key={index}
                className={`${styles.pacoteCard} ${p.destaque ? styles.pacoteDestaque : ''}`}
              >
                <div className={styles.pacoteHeader}>
                  <span>Opção {index + 1}</span>
                  <h3>{p.nome}</h3>
                </div>
                <ul>
                  {p.itens.map((item, i) => (
                    <li key={i}>
                      <FiMonitor /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={styles.pacotesNota}>
            Condições comerciais e valores de implantação são definidos
            conforme o escopo de cada projeto — fale com nosso time para
            receber uma proposta personalizada.
          </p>
        </div>
      </section>

      {/* --- CTA final --- */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaGrid}>
            <div>
              <h2>Vamos conversar?</h2>
              <p>
                Cada projeto tem um ponto de partida diferente. Fale com
                nosso time e monte, junto com a gente, a estrutura de
                monitoramento ideal para o seu espaço.
              </p>
              <Link to="/contato" className="btn btn-primary">
                Solicite um Orçamento
              </Link>
            </div>
            <blockquote className={styles.ctaQuote}>
              "Segurança que se enxerga, confiança que se sente."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
