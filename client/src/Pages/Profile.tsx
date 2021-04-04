import { Container, makeStyles, Theme } from '@material-ui/core'
import LoadingScreen from 'src/shared/LoadingScreen'
import { useLoggedUserContext } from './LoggedUserContext'
import Typography from '@material-ui/core/Typography'

const Profile = () => {
  const { user, loading } = useLoggedUserContext()

  const classes = useStyles()

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Container className={classes.root}>
          <Typography>Email: {user?.username}</Typography>
          <Typography>Name: {user?.name}</Typography>
          <img src={user?.imageUrl} alt={user?.name} className={classes.image}></img>
        </Container>
      )}
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    marginTop: spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    width: spacing(30),
    height: spacing(30),
    backgroundColor: 'black',
    borderRadius: '50%',
  },
  image: {
    width: spacing(30),
    height: spacing(30),
    objectFit: 'cover',
    borderRadius: '50%',
  },
}))
export default Profile
