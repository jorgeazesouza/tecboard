import './App.css'

// no react, componentes são FUNÇÕES

function EventForm() {
  return(
    <form className="event_form">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="name">
          Qual o nome do evento?
        </label>
        <input type="text" name="name" id="name" />
      </fieldset>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <EventForm/>
    </main>
  )
}

export default App
