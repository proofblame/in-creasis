import Wrapper from '../../components/wrapper/wrapper'
import imgQua from './images/faq-questions-img.svg'
import imgThemes from './images/faq-themes-img.svg'
import { constants } from '../../utils/constants'
import style from './faq.module.scss'

export const Faq = () => {
  const { faq } = constants
  return (
    <section className={style.faq} id={'questions'}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{faq.slogan}</p>
            <h2 className={style.title}>{faq.title}</h2>
            <p className={style.subtitle}>{faq.subtitle}</p>
            <img src={imgThemes} alt={faq.title} className={style.img} />
          </div>
          <div className={style.imgWrapper}>
            <img src={imgQua} alt={faq.title} className={style.img} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
