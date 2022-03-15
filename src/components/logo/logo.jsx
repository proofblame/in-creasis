import style from './logo.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../services/actions/navbar'

const Logo = () => {
  const dispatch = useDispatch()

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  return (
    <Link className={style.link} to={'/'} onClick={handleCloseMenu}>
      InCreasis
    </Link>
  )
}

export default Logo