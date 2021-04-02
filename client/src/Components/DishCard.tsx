import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

type DishCardProps = {
  imageUrl: string
  name: string
  className?: string
}

const DishCard = ({ name, imageUrl, className }: DishCardProps) => {
  return (
    <Card className={className}>
      <CardMedia component="img" image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DishCard
