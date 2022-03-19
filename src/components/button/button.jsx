import style from './button.module.scss'

const Button = ({ text, icon, className, onClick, color }) => {

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
    <button className={classNames} onClick={onClick}>{text}</button>
  )
}

export default Button