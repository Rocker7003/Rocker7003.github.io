import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

interface HeroProps {
  language: 'en' | 'ru'
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      greeting: "Hey there! I'm",
      name: "Rocker",
      role: "A Young Developer from Kazakhstan"
    },
    ru: {
      greeting: "Привет!",
      name: "Я Рокер",
      role: "Начинающий разработчик из Казахстана"
    }
  }

  const text = content[language]

  return (
    <section className="hero">
      <p className="greeting">{text.greeting}</p>
      <h1>{text.name}</h1>
      <h2 className="subtitle">{text.role}</h2>
      
      <div className="social-links">
        <a href="https://github.com/Rocker7003" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://discordapp.com/users/1023270857495281827" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </section>
  )
}

export default Hero 