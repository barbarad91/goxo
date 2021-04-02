import { CircularProgress, makeStyles, Theme } from '@material-ui/core'

const LoadingScreen = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    height: `calc(100vh - ${spacing(8)}px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default LoadingScreen
