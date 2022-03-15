import style from './nav.module.scss'
import React from 'react'
import NavLink from '../nav-link/nav-link'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../button/button'
import { closeMenu } from '../../services/actions/navbar'

const Nav = () => {
  const { navbar } = useSelector(store => store.nav)
  const dispatch = useDispatch()

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  return (
    <nav className={`${style.nav} ${navbar && style.active}`}>
      <ol className={style.list}>
        <NavLink />
      </ol>
      <Button text={'Регистрация'} className={style.button} onClick={handleCloseMenu} />
    </nav>
  )
}

export default Nav