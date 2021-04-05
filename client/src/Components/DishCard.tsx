import { Card, CardActions, CardContent, CardMedia, IconButton, makeStyles, Theme, Typography } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiHeart, mdiHeartOutline } from '@mdi/js'

import { Restaurant } from 'src/types'

type DishCardProps = {
  _id: string
  imageUrl: string
  name: string
  restaurant: Restaurant
  isFav: boolean
  handleFav: (dishId: string) => Promise<void>
  className?: string
}

const DishCard = ({ _id, name, imageUrl, className, restaurant, isFav, handleFav }: DishCardProps) => {
  const classes = useStyles()

  return (
    <Card className={className}>
      <CardMedia component="img" image={imageUrl} alt={name} className={classes.cardImage} />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6" component="h2" className={classes.restaurantName}>
          {restaurant.name}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="p" className={classes.restaurantAddress}>
          {restaurant.address}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={() => handleFav(_id)}>
          <Icon path={isFav ? mdiHeart : mdiHeartOutline} size={1} className={classes.favIcon} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  cardImage: {
    height: spacing(25),
    objectFit: 'cover',
  },
  cardContent: {
    height: spacing(20),
  },
  restaurantName: {
    textTransform: 'uppercase',
    color: palette.primary.main,
    fontSize: spacing(2),
  },
  restaurantAddress: {
    fontSize: spacing(1.5),
  },
  favIcon: {
    color: palette.primary.main,
  },
}))
export default DishCard
