import { Grid, makeStyles, Paper, Theme } from '@material-ui/core'
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
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6} lg={3} className={classes.gridItem}>
            <Paper className={classes.paperCard}>
              <Typography variant="h5" component="h2" gutterBottom>
                Email: {user?.username}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                Name: {user?.name}
              </Typography>
              <img src={user?.imageUrl} alt={user?.name} className={classes.image}></img>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    marginTop: spacing(20),
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
  },
  paperCard: {
    height: spacing(50),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: spacing(30),
    height: spacing(30),
    objectFit: 'cover',
    borderRadius: '50%',
  },
}))
export default Profile
