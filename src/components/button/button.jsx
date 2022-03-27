import { Link } from 'react-router-dom'
import style from './button.module.scss'

const Button = ({ text, icon, className, onClick, color, to, href }) => {

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
  const bgColorClass = (className) => {
    return style[`${className}`]
    // dark
  }

  const classNames = `${style.button} ${iconClass(icon)} ${colorClass(color)} ${bgColorClass(className)} ${className}`

  return (
    to ?
      <Link
        className={classNames}
        to={to}
      >
        {text}
      </Link>
      :
      href ?
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
        >
          {text}
        </a>
        :
        <button className={classNames} onClick={onClick}>{text}</button>
  )
}

export default Button