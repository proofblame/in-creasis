import style from './logo.module.scss'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../../services/actions/navbar'
import { Link } from 'react-scroll'

const Logo = () => {
  const dispatch = useDispatch()

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  return (
    <Link className={style.link} to={'banner'} onClick={handleCloseMenu}
      smooth={true}
      duration={1000}

    >
      InCreasis
    </Link >
  )
}

export default Logo