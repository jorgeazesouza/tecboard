import './App.css'
import { EventForm } from './components/EventForm'
import { FormTheme } from './components/FormTheme'

// no react, componentes são FUNÇÕES

function App() {
  const themes = [
    {
      id: 1,
      name: 'front-end'
    },
    {
      id: 2,
      name: 'back-end'
    },
    {
      id: 3,
      name: 'devops'
    },
    {
      id: 4,
      name: 'inteligência artificial'
    },
    {
      id: 5,
      name: 'data science'
    },
    {
      id: 6,
      name: 'cloud'
    }
  ]
  
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <EventForm/>
      <section>
        <FormTheme theme={themes[0]} />
      </section>
      <section>
        <FormTheme theme={themes[1]} />
      </section>
      <section>
        <FormTheme theme={themes[2]} />
      </section>
      <section>
        <FormTheme theme={themes[3]} />
      </section>
      <section>
        <FormTheme theme={themes[4]} />
      </section>
      <section>
        <FormTheme theme={themes[5]} />
      </section>
    </main>
  )
}

export default App
