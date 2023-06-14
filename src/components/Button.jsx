import './button.css'

export const Button = ({children, color, link, target = false}) => {
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
