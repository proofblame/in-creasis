import { openMenu, closeMenu } from '../../services/actions/navbar'
import { useDispatch, useSelector } from 'react-redux'
import styles from './menu-button.module.scss'


const MenuButton = () => {
  const { navbar } = useSelector(store => store.nav)
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    if (!navbar) {
      dispatch(openMenu())
    } else {
      dispatch(closeMenu())
    }
  }



  return (
    <button
      className={`${styles.burger} ${navbar && styles.active}`}
      onClick={handleToggleMenu}
      id='burger'
      aria-label="Open menu">
      <span></span>
    </button>
  )
}

export default MenuButton