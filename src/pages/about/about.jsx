import style from './about.module.scss'
import GetProfit from './get-profit/get-profit'
import Invest from './invest/invest'
import PaySystems from './pay-systems/pay-systems'
import StableSystem from './stable-system/stable-system'
import Stages from './stages/stages'
import Strategy from './strategy/strategy'
import Tarifs from './tarifs/tarifs'

const About = () => {
  return (
    <section className={style.about}>
      <PaySystems />
      <GetProfit />
      <StableSystem />
      <Invest />
      <Strategy />
      <Tarifs />
      <Stages />
    </section>
  )
}

export default About