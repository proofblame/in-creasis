import Button from '../button/button'
import Logo from '../logo/logo'
import MenuButton from '../menu-button/menu-button'
import Nav from '../nav/nav'
import style from './header.module.scss'

const Header = () => {

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <Nav />
        <Button text={'регистрация'} className={style.button} />
        <MenuButton />
      </div>
    </header>
  )
}

export default Header