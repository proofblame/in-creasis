import Wrapper from '../../../components/wrapper/wrapper'
import img from './images/get-profit-img.svg'
import { constants } from '../../../utils/constants'
import style from './get-profit.module.scss'

const GetProfit = () => {
  const { getProfit } = constants
  return (
    <section className={style.getProfit}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{getProfit.slogan}</p>
            <h2 className={style.title}>{getProfit.title}</h2>
            <p className={style.subtitle}>{getProfit.subtitle}</p>
          </div>
          <div className={style.imgWrapper}>
            <img src={img} alt={getProfit.title} className={style.img} />
          </div>
        </div>
        <ul className={style.list}>
          <li className={style.item}>
            <h3 className={style.itemTitle}>{getProfit.itemTitle1}</h3>
            <p className={style.caption}>{getProfit.itemCaption1}</p>
          </li>
          <li className={style.item}>
            <h3 className={style.itemTitle}>{getProfit.itemTitle2}</h3>
            <p className={style.caption}>{getProfit.itemCaption2}</p>
          </li>
          <li className={style.item}>
            <h3 className={style.itemTitle}>{getProfit.itemTitle3}</h3>
            <p className={style.caption}>{getProfit.itemCaption3}</p>
          </li>
          <li className={style.item}>
            <h3 className={style.itemTitle}>{getProfit.itemTitle4}</h3>
            <p className={style.caption}>{getProfit.itemCaption4}</p>
          </li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default GetProfit