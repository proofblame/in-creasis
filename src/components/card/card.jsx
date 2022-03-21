import Button from '../button/button'
import style from './card.module.scss'

const Card = ({ title, percent, img, border, btnClass, children }) => {
  const borderClass = (border) => {
    return style[`${border}`]
    // border1
    // border2
    // border3
  }

  const classNames = `${style.card} ${borderClass(border)}`

  return (
    <section className={classNames}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.subtitle}>{percent}</p>
      <img src={img} alt={title} className={style.img} />
      <p className={style.caption}>{children}</p>
      <Button text={'Регистрация'} className={btnClass} />
    </section>
  )
}

export default Card