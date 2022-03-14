import Button from '../components/button/button'
import Wrapper from '../components/wrapper/wrapper'
import style from './main.module.scss'

const Main = () => {
  return (
    <section className={style.main}>
      <Wrapper>
        <Button text={'Регистрация'} icon={'register'} />
      </Wrapper>
    </section>
  )
}

export default Main