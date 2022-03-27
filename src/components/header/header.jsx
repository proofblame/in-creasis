import { useLocation } from 'react-router-dom'
import Button from '../button/button'
import Logo from '../logo/logo'
import MenuButton from '../menu-button/menu-button'
import Nav from '../nav/nav'
import style from './header.module.scss'

const Header = () => {
  const { pathname } = useLocation()

  return (
    pathname === '/' &&
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <Nav />
        <Button text={'Регистрация'} className={style.button} href={'https://t.me/increasis_bot'} />
        <MenuButton />
      </div>
    </header>
  )
}

export default Header