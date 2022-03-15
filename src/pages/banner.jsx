import Wrapper from '../components/wrapper/wrapper'
import img from '../images/banner-img.svg'
import Button from '../components/button/button'
import { constants } from '../utils/constants'
import style from './banner.module.scss'

const Banner = () => {
  const { banner } = constants
  return (
    <section className={style.banner} id={'banner'}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{banner.slogan}</p>
            <h1 className={style.title}>Инвестиции <br />  в мир NFT</h1>
            <p className={style.subtitle}>
              Не знаете с чего начать? <br />
              Инвестиции в NFT - выгодное предложение
            </p>
            <div className={style.buttons}>
              <Button icon={'register'} text={'регистрация'} />
              <Button icon={'chat'} text={'чат в телеграмм'} />
            </div>
          </div>
          <div className={style.imgWrapper}>
            <img src={img} alt={banner.title} className={style.img} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Banner