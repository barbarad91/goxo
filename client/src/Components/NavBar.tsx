import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@mdi/react'
import { mdiAccount, mdiLogoutVariant } from '@mdi/js'
import { Link } from 'react-router-dom'
import { useLoggedUserContext } from 'src/pages/LoggedUserContext'
import AuthService from '../services/auth.service'
import { Button, IconButton } from '@material-ui/core'

const NavBar = () => {
  const classes = useStyles()

  const { user, setUser } = useLoggedUserContext()

  const authService = new AuthService()

  const signOut = async () => {
    await authService.signOut()
    setUser(undefined)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoLink}>
            <img src="/logo.png" alt="logo" className={classes.logoImage} />
          </Link>
          {user ? (
            <>
              <Link to="/profile" className={classes.linkIcon}>
                <Icon path={mdiAccount} size={1}></Icon>
              </Link>
              <IconButton onClick={signOut} className={classes.linkIcon}>
                <Icon path={mdiLogoutVariant} size={1} />
              </IconButton>
            </>
          ) : (
            <Button component={Link} to="/signin" variant="contained" color="primary">
              Sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: spacing(3),
    },
    appBar: {
      position: 'fixed',
      backgroundColor: palette.secondary.main,
    },
    logoLink: {
      flexGrow: 1,
    },
    logoImage: { width: spacing(5) },
    linkIcon: {
      color: 'inherit',
    },
  })
)

export default NavBar
