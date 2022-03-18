import Wrapper from '../../../components/wrapper/wrapper'
import img from './images/work-scheme-img.svg'
import imgCertificate from './images/sertificate.svg'
import { constants } from '../../../utils/constants'
import style from './work-scheme.module.scss'

export const WorkScheme = () => {
  const { workScheme } = constants
  return (
    <section className={style.workScheme} id={'about'}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{workScheme.slogan}</p>
            <h2 className={style.title}>{workScheme.title}</h2>
            <p className={style.subtitle}>{workScheme.subtitle}</p>
          </div>
          <div className={style.imgWrapper}>
            <img src={img} alt={workScheme.title} className={style.img} />
          </div>
        </div>
        <img src={imgCertificate} alt={workScheme.title} className={style.img2} />
      </Wrapper>
    </section>
  )
}
