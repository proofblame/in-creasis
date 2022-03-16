import Wrapper from '../../../components/wrapper/wrapper'
import img from './images/strategy-img.svg'
import { constants } from '../../../utils/constants'
import style from './strategy.module.scss'

const Strategy = () => {
  const { strategy } = constants
  return (
    <section className={style.strategy} id={'banner'}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{strategy.slogan}</p>
            <h2 className={style.title}>{strategy.title}</h2>
            <p className={style.subtitle}>{strategy.subtitle}</p>
          </div>
          <div className={style.imgWrapper}>
            <img src={img} alt={strategy.title} className={style.img} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Strategy