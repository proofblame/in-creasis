import arrow from './images/arrow.svg'
import profitImg from './images/profit-img.svg'
import investImg from './images/invest-img.svg'
import registerImg from './images/register-img.svg'
import Wrapper from '../../../components/wrapper/wrapper'
import { constants } from '../../../utils/constants'
import style from './stages.module.scss'
import StageCard from '../../../components/stage-card/stage-card'

export const Stages = () => {
  const { stages } = constants
  return (
    <section className={style.stages}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{stages.slogan}</p>
            <h2 className={style.title}>{stages.title}</h2>
          </div>
        </div>
        <div className={style.cards}>
          <StageCard
            title={'Регистрируйтесь'}
            img={registerImg}
            type={'reverse'}
          >
            Для этого необходимо сделать буквально несколько кликов
          </StageCard>
          <img src={arrow} alt={arrow} className={style.arrow} />
          <StageCard
            title={'Вкладывайте'}
            img={investImg}
          >
            Минимальные вложения от 10$
          </StageCard>
          <img src={arrow} alt={arrow} className={style.reverseArrow} />
          <StageCard
            title={'Зарабатывайте'}
            img={profitImg}
            type={'reverse'}
          >
            Быстрый вывод средств на платёжные системы
          </StageCard>
        </div>
      </Wrapper>
    </section>
  )
}
