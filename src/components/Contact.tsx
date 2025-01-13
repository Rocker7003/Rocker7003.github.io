import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

interface ContactProps {
  language: 'en' | 'ru';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Let's Connect!",
      discord: "Discord: rocker7003",
      github: "Check out my GitHub"
    },
    ru: {
      title: "Давайте общаться!",
      discord: "Discord: rocker7003",
      github: "Посмотрите мой GitHub"
    }
  };

  const text = content[language];

  return (
    <section className="contact">
      <h2>{text.title}</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faDiscord} />
          <span>{text.discord}</span>
        </div>
        <a href="https://github.com/Rocker7003" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FontAwesomeIcon icon={faGithub} />
          <span>{text.github}</span>
        </a>
      </div>
    </section>
  );
};

export default Contact; 