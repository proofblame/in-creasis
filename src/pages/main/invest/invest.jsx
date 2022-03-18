import Wrapper from '../../../components/wrapper/wrapper'
import img from './images/invest-img.svg'
import { constants } from '../../../utils/constants'
import style from './invest.module.scss'
import Button from '../../../components/button/button'

const Invest = () => {
  const { invest } = constants
  return (
    <section className={style.invest}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{invest.slogan}</p>
            <h2 className={style.title}>{invest.title}</h2>
            <p className={style.subtitle}>{invest.subtitle}</p>
            <ul className={style.list}>
              <li className={style.item}>{invest.itemCaption1}</li>
              <li className={style.item}>{invest.itemCaption2}</li>
              <li className={style.item}>{invest.itemCaption3}</li>
              <li className={style.item}>{invest.itemCaption4}</li>
            </ul>

          </div>
          <div className={style.imgWrapper}>
            <img src={img} alt={invest.title} className={style.img} />
          </div>
        </div>
        <Button text={'Регистрация'} icon={'register'} />
      </Wrapper>
    </section>
  )
}

export default Invest