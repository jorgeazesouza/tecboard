import './index.css'

// props é um OBJETO
// props.children

export function FormTitle({ children }) {
  return (
    <h2>
      {children}
    </h2>
  )
}