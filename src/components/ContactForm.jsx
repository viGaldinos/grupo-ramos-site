import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <FiCheckCircle />
        </div>
        <h3>Mensagem Enviada!</h3>
        <p>
          Obrigado pelo contato. Retornaremos em breve.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome completo"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="tel"
          name="telefone"
          placeholder="Seu telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Enviar Mensagem
      </button>
    </form>
  );
}
