import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@mdi/react'
import { mdiAccount, mdiLogoutVariant } from '@mdi/js'
import { Link } from 'react-router-dom'
import { useLoggedUserContext } from 'src/pages/LoggedUserContext'
import AuthService from '../services/auth.service'
import { IconButton } from '@material-ui/core'

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
          <Typography variant="h6" className={classes.title} component={Link} to="/">
            Goxo
          </Typography>
          {user && (
            <>
              <Link to="/profile" className={classes.linkIcon}>
                <Icon path={mdiAccount} size={1}></Icon>
              </Link>
              <IconButton onClick={signOut} className={classes.linkIcon}>
                <Icon path={mdiLogoutVariant} size={1} />
              </IconButton>
            </>
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
    title: {
      flexGrow: 1,
      textDecoration: 'none',
      color: 'inherit',
    },
    linkIcon: {
      color: 'inherit',
    },
  })
)

export default NavBar
