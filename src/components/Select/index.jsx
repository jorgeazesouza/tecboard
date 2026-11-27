import './select.style.css'

export function Select(props) {
   return (
      <select className="select" {...props}>
         <option value=""></option>
      </select>
   )
}