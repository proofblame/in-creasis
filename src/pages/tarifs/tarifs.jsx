import alligatorImg from './images/alligator-img.svg'
import clerkImg from './images/clerk-img.svg'
import bumImg from './images/bum-img.svg'
import Wrapper from '../../components/wrapper/wrapper'
import { constants } from '../../utils/constants'
import style from './tarifs.module.scss'
import Card from '../../components/card/card'

export const Tarifs = () => {
  const { tarifs } = constants
  return (
    <section className={style.tarifs} id={'tarifs'}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{tarifs.slogan}</p>
            <h2 className={style.title}>{tarifs.title}</h2>
          </div>
        </div>
        <div className={style.cards}>
          <Card
            title={'Бомж'}
            percent={'10%'}
            img={bumImg}
            border={'border1'}
            btnClass={'card1'}
          >
            От 10$ <br />
            до 2000$
          </Card>
          <Card
            title={'Клерк'}
            percent={'15%'}
            img={clerkImg}
            border={'border2'}
            btnClass={'card2'}
          >
            От 2000$ <br />
            до 5000$
          </Card>
          <Card
            title={'Олигатор'}
            percent={'10000%'}
            img={alligatorImg}
            border={'border3'}
            btnClass={'card3'}
          >
            От 5000$ <br />
            до 5000000$
          </Card>
        </div>
      </Wrapper>
    </section>
  )
}
