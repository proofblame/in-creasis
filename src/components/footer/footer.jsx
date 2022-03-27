import { Link } from 'react-scroll'
import { constants } from '../../utils/constants'
import Button from '../button/button'
import style from './footer.module.scss'
import { navLinks as links } from '../../utils/nav-links'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const { footer } = constants
  const { pathname } = useLocation()
  return (
    pathname === '/' &&
    <footer className={style.footer} id={'contacts'}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <p className={style.slogan}>{footer.slogan}</p>
          <h2 className={style.title}>{footer.title}</h2>
          <p className={style.subtitle}>{footer.subtitle}</p>
          <div className={style.buttons}>
            <Button icon={'telegram'} text={'Telegram'} href={'https://t.me/increasis_bot'} className={style.button} />
            <Button icon={'whatsapp'} text={'WhatsApp'} href={'https://t.me/increasis_bot'} className={style.button} />
          </div>
        </div>
        <nav className={style.nav}>
          <ul className={style.list}>
            {links.map((link) => (
              <li className={style.item} key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={1000}
                  className={style.link}
                >
                  {link.name}
                </Link>
              </li>
            ))
            }
          </ul>
        </nav>
        <div className={style.group}>

          <Button text={'Регистрация'} href={'https://t.me/increasis_bot'} className={style.button} />
          <p className={style.privacy}>
            <a href="./policy.pdf" className={style.link} target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a> <br />
            <a href="./privacy.pdf" className={style.link} target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer