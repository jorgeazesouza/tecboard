import './event_form.style.css'

import { FormTitle } from '../FormTitle'
import { Fieldset } from '../Fieldset'
import { Label } from '../Label'
import { InputForm } from '../InputForm'


export function EventForm() {
  return (
    <form className="event_form">
      <FormTitle>Preencha para criar um evento:</FormTitle>
      <Fieldset>
        <Label htmlFor="name">
          Qual o nome do evento?
        </Label>
        <InputForm
          type="text" 
          id="name" 
          placeholder="Summer dev hits"
          name="eventName"
        />
      </Fieldset>
    </form>
  )
}