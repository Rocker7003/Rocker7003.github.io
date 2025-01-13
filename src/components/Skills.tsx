import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface SkillsProps {
  language: 'en' | 'ru';
}

const Skills = ({ language }: SkillsProps) => {
  const content = {
    en: {
      title: "What I Know",
      skills: [
        {
          icon: faPython,
          title: "Python",
          description: "Building small projects and learning more every day"
        },
        {
          icon: faGlobe,
          title: "Web Development",
          description: "Learning the basics of modern web development"
        }
      ]
    },
    ru: {
      title: "Мои навыки",
      skills: [
        {
          icon: faPython,
          title: "Python",
          description: "Создаю небольшие проекты и учусь новому каждый день"
        },
        {
          icon: faGlobe,
          title: "Web Development",
          description: "Изучаю основы современной веб-разработки"
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="skills">
      <h2>{text.title}</h2>
      <div className="skills-grid">
        {text.skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <FontAwesomeIcon icon={skill.icon} />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 