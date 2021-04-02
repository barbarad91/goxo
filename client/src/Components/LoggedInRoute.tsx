import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router'
import { useLoggedUserContext } from 'src/pages/LoggedUserContext'

const LoggedInRoute = ({ component: Component, ...otherProps }: RouteProps) => {
  const { user } = useLoggedUserContext()

  return (
    <Route
      {...otherProps}
      render={(routeProps: RouteComponentProps) =>
        user && Component ? <Component {...routeProps} /> : <Redirect to="/signin" />
      }
    ></Route>
  )
}

export default LoggedInRoute
