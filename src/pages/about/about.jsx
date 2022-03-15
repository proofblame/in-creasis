import style from './about.module.scss'
import PaySystems from './pay-systems/pay-systems'

const About = () => {
  return (
    <section className={style.about}>
      <PaySystems />
    </section>
  )
}

export default About