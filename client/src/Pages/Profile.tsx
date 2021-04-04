import { Container, makeStyles, Theme } from '@material-ui/core'
import LoadingScreen from 'src/shared/LoadingScreen'
import { useLoggedUserContext } from './LoggedUserContext'

const Profile = () => {
  const { user, loading } = useLoggedUserContext()

  const classes = useStyles()

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Container className={classes.root}>
          <div>{user?.username}</div>
          <div>{user?.name}</div>
          <img src={user?.imageUrl} alt={user?.name}></img>
        </Container>
      )}
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    marginTop: spacing(10),
  },
}))
export default Profile
