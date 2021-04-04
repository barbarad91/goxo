import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Homepage from '../pages/Homepage'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import Copyright from './Copyright'
import { useLoggedUserContext } from '../pages/LoggedUserContext'
import SignUp from '../pages/SignUp'
import LoggedInRoute from './LoggedInRoute'
import LoggedOutRoute from './LoggedOutRoute'
import LoadingScreen from 'src/shared/LoadingScreen'

function App() {
  const { user, loading } = useLoggedUserContext()
  return (
    <BrowserRouter>
      <NavBar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Switch>
          <Route path="/" exact>
            {user ? <Homepage /> : <Redirect to="signin" />}
          </Route>
          <LoggedOutRoute path="/signin" component={SignIn} />
          <LoggedOutRoute path="/signup" component={SignUp} />
          <LoggedInRoute path="/profile" component={Profile} />
        </Switch>
      )}
      <Copyright />
    </BrowserRouter>
  )
}

export default App
