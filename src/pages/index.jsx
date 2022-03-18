import { MainPage } from './main'
import { TarifsPage } from './tarifs'
import { AboutCompanyPage } from './about-company'
import { FaqPage } from './faq'
import style from './index.module.scss'

export const Main = () => {
  return (
    <main className={style.main}>
      <MainPage />
      <TarifsPage />
      <AboutCompanyPage />
      <FaqPage />
    </main>
  )
}
