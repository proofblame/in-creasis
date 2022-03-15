import style from './logo.module.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link className={style.link} to={'/'}>
      InCreasis
    </Link>
  )
}

export default Logo