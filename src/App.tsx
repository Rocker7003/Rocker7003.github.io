import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import './App.css'

function App() {
  const [language, setLanguage] = useState<'en' | 'ru'>('en')

  return (
    <div className="app">
      <nav>
        <div className="language-switch">
          <button 
            onClick={() => setLanguage('en')} 
            className={language === 'en' ? 'active' : ''}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('ru')} 
            className={language === 'ru' ? 'active' : ''}
          >
            RU
          </button>
        </div>
      </nav>

      <main>
        <div className="content-wrapper">
          <Hero language={language} />
          <About language={language} />
          <Skills language={language} />
        </div>
      </main>
    </div>
  )
}

export default App
