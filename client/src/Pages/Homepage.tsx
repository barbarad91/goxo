import { Grid, makeStyles, Theme } from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import DishCard from 'src/components/DishCard'
import DishService from 'src/services/dishes.service'
import LoadingScreen from 'src/shared/LoadingScreen'
import { Dish, Fav } from 'src/types'
import { useLoggedUserContext } from './LoggedUserContext'
import FavService from 'src/services/favs.service'

const Homepage = () => {
  const classes = useStyles()

  const { user } = useLoggedUserContext()

  const [favs, setFavs] = useState<Fav[]>([])
  const [dishes, setDishes] = useState<Dish[]>([])
  const [loading, setLoading] = useState(true)

  const dishService = useMemo(() => new DishService(), [])
  const favService = useMemo(() => new FavService(), [])

  const fetchDishes = useCallback(async () => {
    try {
      const fetchedDishes = await dishService.getDishes()
      fetchedDishes?.data.length && setDishes(fetchedDishes.data)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }, [dishService])

  const fetchFavs = useCallback(async () => {
    if (user) {
      try {
        const userFavs = await favService.getUserFavs(user._id)
        setFavs(userFavs.data)
      } catch (error) {
        console.log(error)
      }
    }
  }, [favService, user])

  const isFav = (dishId: string) => !!favs.find((fav) => fav.dish === dishId)

  const handleFav = async (dishId: string) => {
    if (user) {
      try {
        if (isFav(dishId)) {
          await favService.deleteFav({ dishId, userId: user._id })
        } else {
          await favService.newFav({ dishId, userId: user._id })
        }
        await fetchFavs()
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchFavs()
  }, [fetchFavs])

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
              <DishCard
                className={classes.card}
                _id={dish._id}
                name={dish.name}
                imageUrl={dish.imageUrl}
                restaurant={dish.restaurant}
                isFav={isFav(dish._id)}
                handleFav={handleFav}
              />
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
