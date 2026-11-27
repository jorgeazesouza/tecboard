import './event_form.style.css'

import { FormTitle } from '../FormTitle'
import { Fieldset } from '../Fieldset'
import { Label } from '../Label'
import { InputForm } from '../InputForm'
import { Select } from '../Select'
import { Button } from '../Button'


export function EventForm() {
  return (
    <form className="event_form">
      <FormTitle>Preencha para criar um evento:</FormTitle>
      <div className="field">
        <Fieldset>
          <Label htmlFor="eventName">
            Qual o nome do evento?
          </Label>
          <InputForm
            type="text"
            id="eventName"
            placeholder="Summer dev hits"
            name="eventName"
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="eventDate">
            Data do evento
          </Label>
          <InputForm
            type="date"
            id="eventDate"
            name="eventDate"
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="eventTheme">
            Tema do evento
          </Label>
          <Select 
            id="eventTheme" 
            name="eventTheme"
          >
          </Select>
        </Fieldset>
      </div>
      <div className="actions">
        <Button>Criar evento</Button>
      </div>
    </form>
  )
}