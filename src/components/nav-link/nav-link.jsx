import style from './nav-link.module.scss'
import { navLinks as links } from '../../utils/nav-links'
import { Link } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../services/actions/navbar';
import { useEffect } from 'react';

const NavLink = () => {
  const dispatch = useDispatch()

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    }

  }, [])

  const handleEscapePress = (e) => {
    if (e.key === 'Escape') {

      handleCloseMenu()
    }
  };

  return (
    links.map((link) => (
      <li className={style.item} key={link.id}>
        <Link
          to={link.id}
          smooth={true}
          duration={1000}
          className={style.link}
          onClick={handleCloseMenu}
        >
          {link.name}
        </Link>
      </li>
    ))
  )
}

export default NavLink