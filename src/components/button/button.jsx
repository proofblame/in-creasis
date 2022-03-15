import style from './button.module.scss'

const Button = ({ text, icon, className, onClick }) => {

  const iconClass = (icon) => {
    switch (icon) {
      case 'register':
        return style.register
      case 'chat':
        return style.chat
      default:
        return '';
    }
  }
  const classNames = `${style.button} ${iconClass(icon)} ${className}`

  return (
    <button className={classNames} onClick={onClick}>{text}</button>
  )
}

export default Button