import style from './stage-card.module.scss'

const StageCard = ({ title, type, img, children }) => {

  return (
    <section className={`${style.stageCard} ${type && style.reverse}`}>
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.caption}>{children}</p>
      </div>
      <img src={img} alt={title} className={style.img} />
    </section>
  )
}

export default StageCard