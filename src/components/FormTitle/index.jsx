import './form_title.style.css'

// props é um OBJETO
// props.children
export function FormTitle({ children }) {
  return (
    <h2 className="form_title">
      {children}
    </h2>
  )
}