import style from './button.module.scss'

const Button = ({ text, icon }) => {

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
  const className = `${style.button} ${iconClass(icon)}`

  return (
    <button className={className}>{text}</button>
  )
}

export default Button