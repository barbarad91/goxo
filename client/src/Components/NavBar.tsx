import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import IconButton from '@material-ui/core/IconButton'
import Icon from '@mdi/react'
import { mdiAccount, mdiLogoutVariant } from '@mdi/js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoggedUserContext } from 'src/Pages/LoggedUserContext'
import clsx from 'clsx'
import AuthService from 'src/Services/auth.service'
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
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title} component={Link} to="/">
            Goxo
          </Typography>
          {user && (
            <>
              <Link to="/profile" className={classes.linkIcon}>
                <Icon path={mdiAccount} size={1}></Icon>
              </Link>
              <IconButton onClick={signOut}>
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
      // backgroundColor: palette.secondary.main,
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
