import Button from '../button/button'
import style from './card.module.scss'

const Card = ({ title, percent, img, children }) => {
  return (
    <section className={style.card}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.subtitle}>{percent}</p>
      <img src={img} alt={title} className={style.img} />
      <p className={style.caption}>{children}</p>
      <Button text={'Регистрация'} />
    </section>
  )
}

export default Card