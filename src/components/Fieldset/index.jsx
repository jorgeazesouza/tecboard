import './fieldset.style.css'

export function Fieldset({ children }) {
  return (
    <fieldset className="fieldset">
      {children}
    </fieldset>
  )
}