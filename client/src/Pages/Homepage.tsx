import { CircularProgress, Grid, makeStyles, Theme } from '@material-ui/core'
import { useEffect, useState } from 'react'
import DishCard from 'src/Components/DishCard'
import DishService from 'src/Services/dishes.service'

const Homepage = () => {
  const classes = useStyles()

  const [dishes, setDishes] = useState<any[]>([])

  const dishService = new DishService()

  const fetchDishes = async () => {
    const fetchedDishes = await dishService.getDishes()
    fetchedDishes?.data.length && setDishes(fetchedDishes.data)
  }

  useEffect(() => {
    fetchDishes()
  })

  return (
    <Grid container className={classes.rootContainer}>
      {dishes?.length ? (
        dishes.map((dish) => (
          <Grid item xs={12} sm={6} lg={3} className={classes.gridItem} key={dish._id}>
            <DishCard className={classes.card} name={dish.name} imageUrl={dish.imageUrl} />
          </Grid>
        ))
      ) : (
        <CircularProgress />
      )}
    </Grid>
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
