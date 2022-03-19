import Wrapper from '../../components/wrapper/wrapper'
import { constants } from '../../utils/constants'
import notFoundImg from './images/404.svg'
import style from './not-found.module.scss'
import Button from '../../components/button/button'

const NotFound = () => {
  const { notFound } = constants

  return (

    <section className={style.notFound}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{notFound.slogan}</p>
            <h1 className={style.title}>{notFound.title}</h1>
            <p className={style.subtitle}>
              {notFound.subtitle}
            </p>
            <div className={style.buttons}>
              <Button text={'На главную'} to={'/'} />
            </div>
          </div>
          <div className={style.imgWrapper}>
            <img src={notFoundImg} alt={notFound.title} className={style.img} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default NotFound