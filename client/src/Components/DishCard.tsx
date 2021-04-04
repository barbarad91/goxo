import { Card, CardContent, CardMedia, makeStyles, Theme, Typography } from '@material-ui/core'
import { Restaurant } from 'src/types'

type DishCardProps = {
  imageUrl: string
  name: string
  restaurant: Restaurant
  className?: string
}

const DishCard = ({ name, imageUrl, className, restaurant }: DishCardProps) => {
  const classes = useStyles()
  return (
    <Card className={className}>
      <CardMedia component="img" image={imageUrl} alt={name} />
      <CardContent>
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
    </Card>
  )
}

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  restaurantName: {
    textTransform: 'uppercase',
    color: palette.primary.main,
    fontSize: spacing(2),
  },
  restaurantAddress: {
    fontSize: spacing(1.5),
  },
}))
export default DishCard
