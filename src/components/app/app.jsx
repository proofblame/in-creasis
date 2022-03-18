import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Main } from '../../pages'
import Footer from '../footer/footer'
import Header from '../header/header'

const App = () => {
  const dispatch = useDispatch()
  const { navbar } = useSelector(store => store.nav)
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = navbar ? 'hidden' : 'auto'
  }, [navbar, dispatch])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact patch='/' component={Main} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App