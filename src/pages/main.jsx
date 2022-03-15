import About from './about/about'
import Banner from './banner'
import style from './main.module.scss'

const Main = () => {
  return (
    <main className={style.main}>
      <Banner />
      <About />
    </main>
  )
}

export default Main