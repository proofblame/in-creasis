import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../../pages/main'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact patch='/' component={Main} />
      </Switch>
    </Router>
  )
}

export default App