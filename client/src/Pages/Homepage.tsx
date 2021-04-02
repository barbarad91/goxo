import { CircularProgress, Grid, makeStyles, Theme } from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import DishCard from 'src/components/DishCard'
import DishService, { DishData } from 'src/services/dishes.service'
import LoadingScreen from 'src/shared/LoadingScreen'

const Homepage = () => {
  const classes = useStyles()

  const [dishes, setDishes] = useState<DishData[]>([])
  const [loading, setLoading] = useState(true)

  const dishService = useMemo(() => new DishService(), [])

  const fetchDishes = useCallback(async () => {
    try {
      const fetchedDishes = await dishService.getDishes()
      fetchedDishes?.data.length && setDishes(fetchedDishes.data)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }, [dishService])

  useEffect(() => {
    fetchDishes()
  }, [fetchDishes])

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Grid container className={classes.rootContainer}>
          {dishes.map((dish) => (
            <Grid item xs={12} sm={6} lg={3} className={classes.gridItem} key={dish._id}>
              <DishCard className={classes.card} name={dish.name} imageUrl={dish.imageUrl} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  rootContainer: {
    marginTop: spacing(15),
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: spacing(30),
    marginTop: spacing(3),
  },
}))

export default Homepage
