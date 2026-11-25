import './App.css'

// no react, componentes são FUNÇÕES

function Input(props) {
  return <input {...props}/>
}

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function Fieldset({ children }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

// props é um OBJETO
// props.children
function FormTitle({ children }) {
  return (
    <h2>
      {children}
    </h2>
  )
}

function EventForm() {
  return (
    <form className="event_form">
      <FormTitle>Preencha para criar um evento:</FormTitle>
      <Fieldset>
        <Label htmlFor="name">
          Qual o nome do evento?
        </Label>
        <Input
          type="text" 
          id="name" 
          placeholder="Summer dev hits"
          name="eventName"
        />
      </Fieldset>
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
