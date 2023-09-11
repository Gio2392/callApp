import './button.css'

export const ButtonLink = ({children, color, link, target = false}) => {
  return (
    <a 
    href={link} 
    className={`btn ${color}`} 
    target={target ? '_blank' : '_self'} 
    rel={target ? 'noopener noreferrer' : ''}>
        {children}
    </a>
  )
}
export const Button = ({children, color, onClick, disabled = false}) => {
  return (
    <button 
    className={`btn ${color}`} 
    onClick={onClick}
    disabled={disabled}
    >
        {children}
    </button>
  )
}
