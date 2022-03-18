import Wrapper from '../../../components/wrapper/wrapper'
import { constants } from '../../../utils/constants'
import style from './pay-systems.module.scss'


const PaySystems = () => {
  const { about } = constants
  return (
    <section className={style.paySystems}>
      <Wrapper>
        <div className={style.wrapper}>
          <p className={style.caption}>{about.caption}</p>
          <ul className={style.list}>
            <li className={style.item}>{about.qiwi}</li>
            <li className={style.item}>{about.bitcoin}</li>
            <li className={style.item}>{about.etherium}</li>
            <li className={style.item}>{about.litecoin}</li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default PaySystems