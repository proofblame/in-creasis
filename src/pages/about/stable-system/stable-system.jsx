import Wrapper from '../../../components/wrapper/wrapper'
import img from './images/stable-system-img.svg'
import { constants } from '../../../utils/constants'
import style from './stable-system.module.scss'

const Invest = () => {
  const { stableSystem } = constants
  return (
    <section className={style.stableSystem} id={'banner'}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{stableSystem.slogan}</p>
            <h2 className={style.title}>{stableSystem.title}</h2>
            <p className={style.subtitle}>{stableSystem.subtitle}</p>
            <ul className={style.list}>
              <li className={style.item}>{stableSystem.itemCaption1}</li>
              <li className={style.item}>{stableSystem.itemCaption2}</li>
              <li className={style.item}>{stableSystem.itemCaption3}</li>
              <li className={style.item}>{stableSystem.itemCaption4}</li>
            </ul>
          </div>
          <div className={style.imgWrapper}>
            <img src={img} alt={stableSystem.title} className={style.img} />
          </div>
        </div>

      </Wrapper>
    </section>
  )
}

export default Invest