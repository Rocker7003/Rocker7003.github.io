interface AboutProps {
  language: 'en' | 'ru'
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      description: "I'm a 16-year-old student from Kazakhstan who loves coding. I enjoy working with Python and web development, and I'm constantly learning new things in programming. While I'm still at the beginning of my journey, I'm excited to grow and improve my skills!",
      languages: {
        title: "Languages I speak:",
        list: [
          "Kazakh (Native)",
          "Russian (Fluent)",
          "English (Intermediate)"
        ]
      }
    },
    ru: {
      title: "Обо мне",
      description: "Мне 16 лет, я учусь и увлекаюсь программированием. Работаю с Python и веб-разработкой, постоянно изучаю что-то новое в этой сфере. Хотя я ещё в начале своего пути, мне очень нравится учиться и развивать свои навыки!",
      languages: {
        title: "Языки, которыми я владею:",
        list: [
          "Казахский (Родной)",
          "Русский (Свободно)",
          "Английский (Средний)"
        ]
      }
    }
  }

  const text = content[language]

  return (
    <section className="about">
      <h2>{text.title}</h2>
      <div className="about-content">
        <p>{text.description}</p>
        <h3>{text.languages.title}</h3>
        <ul>
          {text.languages.list.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About 