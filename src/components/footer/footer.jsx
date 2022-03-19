import { Link } from 'react-scroll'
import { constants } from '../../utils/constants'
import Button from '../button/button'
import style from './footer.module.scss'
import { navLinks as links } from '../../utils/nav-links'

const Footer = () => {
  const { footer } = constants
  return (
    <footer className={style.footer} id={'contacts'}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <p className={style.slogan}>{footer.slogan}</p>
          <h2 className={style.title}>{footer.title}</h2>
          <p className={style.subtitle}>{footer.subtitle}</p>
          <div className={style.buttons}>
            <Button icon={'telegram'} text={'Telegram'} />
            <Button icon={'whatsapp'} text={'WhatsApp'} />
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
          <Button text={'Регистрация'} />
          <p className={style.privacy}>
            <a href="#main" className={style.link}>Пользовательское соглашение</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer