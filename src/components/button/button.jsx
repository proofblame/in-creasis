import { Link } from 'react-router-dom'
import style from './button.module.scss'

const Button = ({ text, icon, className, onClick, color, to }) => {

  const iconClass = (icon) => {
    return style[`${icon}`]
    // register
    // chat
    // telegram
    // whatsapp
  }

  const colorClass = (color) => {
    return style[`${color}`]
    // dark
  }

  const classNames = `${style.button} ${iconClass(icon)} ${colorClass(color)} ${className}`

  return (
    to ?
      <Link
        className={classNames}
        to={to}
      >
        {text}
      </Link>
      :
      <button className={classNames} onClick={onClick}>{text}</button>
  )
}

export default Button